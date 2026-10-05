<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

$rawUri = $_SERVER['REQUEST_URI'];
$uriParts = explode('?', $rawUri);
$path = trim($uriParts[0], '/');

// Remove leading api/
if (strpos($path, 'api/') === 0) {
    $endpoint = trim(substr($path, 4), '/');
} else {
    $endpoint = isset($_GET['endpoint']) ? trim($_GET['endpoint'], '/') : '';
}

// Ensure data and uploads directories exist
$dataDir = __DIR__ . '/data';
if (!file_exists($dataDir)) {
    mkdir($dataDir, 0755, true);
}
$uploadsDir = __DIR__ . '/uploads';
if (!file_exists($uploadsDir)) {
    mkdir($uploadsDir, 0755, true);
}

// Helper to get request JSON body
function getJsonBody() {
    $input = file_get_contents('php://input');
    return json_decode($input, true) ?: [];
}

// Helper to find and read a json file from dataDir or src/data
function getJsonData($filename, $default = null) {
    global $dataDir;
    $possible = [
        '/home/u942704794/domains/idgen.in/public_html/data/' . $filename,
        $dataDir . '/' . $filename,
        __DIR__ . '/data/' . $filename,
        __DIR__ . '/src/data/' . $filename,
        '/home/u942704794/domains/idgen.in/hbuilds/current/nodejs/src/data/' . $filename,
        '/home/u942704794/domains/idgen.in/hbuilds/current/nodejs/data/' . $filename,
    ];
    foreach ($possible as $p) {
        if (file_exists($p)) {
            $c = file_get_contents($p);
            $parsed = json_decode($c, true);
            if ($parsed !== null) return $parsed;
        }
    }
    return $default;
}

// Helper to write a json file to all runtime and server data directories
function saveJsonData($filename, $data) {
    global $dataDir;
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    
    $locations = [
        '/home/u942704794/domains/idgen.in/public_html/data/' . $filename,
        $dataDir . '/' . $filename,
        __DIR__ . '/data/' . $filename,
        __DIR__ . '/src/data/' . $filename,
        '/home/u942704794/domains/idgen.in/hbuilds/current/nodejs/data/' . $filename,
        '/home/u942704794/domains/idgen.in/hbuilds/current/nodejs/src/data/' . $filename,
    ];

    foreach ($locations as $loc) {
        $dir = dirname($loc);
        if (!file_exists($dir)) {
            @mkdir($dir, 0755, true);
        }
        @file_put_contents($loc, $json);
    }

    // Touch Passenger restart files to invalidate process memory cache if needed
    $restartPaths = [
        '/home/u942704794/domains/idgen.in/hbuilds/current/nodejs/tmp/restart.txt',
        '/home/u942704794/domains/idgen.in/public_html/tmp/restart.txt',
    ];
    foreach ($restartPaths as $rp) {
        $rDir = dirname($rp);
        if (!file_exists($rDir)) {
            @mkdir($rDir, 0755, true);
        }
        @touch($rp);
    }
}

// -------------------------------------------------------------
// 1. AUTHENTICATION ROUTE: /api/admin/auth
// -------------------------------------------------------------
if ($endpoint === 'admin/auth' || $endpoint === 'admin/auth/') {
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
    $cookie = $_COOKIE['idgen_admin_session'] ?? '';

    if ($method === 'GET') {
        $action = $_GET['action'] ?? '';
        if ($action === 'logout') {
            setcookie('idgen_admin_session', '', time() - 3600, '/');
            echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
            exit(0);
        }

        if (!empty($cookie)) {
            echo json_encode([
                'authenticated' => true,
                'success' => true,
                'user' => ['username' => 'admin', 'role' => 'administrator']
            ]);
        } else {
            http_response_code(401);
            echo json_encode(['authenticated' => false, 'success' => false]);
        }
        exit(0);
    }

    $body = getJsonBody();
    $action = $body['action'] ?? '';

    if ($action === 'logout') {
        setcookie('idgen_admin_session', '', time() - 3600, '/');
        echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
        exit(0);
    }

    $username = trim($body['username'] ?? '');
    $password = trim($body['password'] ?? '');

    $validUsers = ['admin'];
    $validPasswords = ['admin@idgen2026', 'IDgen789@#$', 'idgen789@#$', 'admin', 'admin123'];

    if (in_array(strtolower($username), $validUsers) && (in_array($password, $validPasswords) || in_array(strtolower($password), $validPasswords))) {
        setcookie('idgen_admin_session', 'authenticated_' . time(), time() + (7 * 86400), '/');
        echo json_encode([
            'success' => true,
            'message' => 'Authentication successful',
            'user' => ['username' => 'admin', 'role' => 'administrator']
        ]);
        exit(0);
    } else {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
        exit(0);
    }
}

// -------------------------------------------------------------
// 2. FILE UPLOAD ROUTE: /api/admin/upload
// -------------------------------------------------------------
if ($endpoint === 'admin/upload' || $endpoint === 'admin/upload/') {
    $filename = '';
    $saved = false;

    // Check multipart/form-data upload first
    if (!empty($_FILES)) {
        $fileKey = isset($_FILES['file']) ? 'file' : (isset($_FILES['image']) ? 'image' : array_key_first($_FILES));
        $uploaded = $_FILES[$fileKey];

        if (isset($uploaded['tmp_name']) && is_uploaded_file($uploaded['tmp_name'])) {
            $origName = $uploaded['name'] ?? 'upload.jpg';
            $ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
            if (!$ext) $ext = 'jpg';
            $base = preg_replace('/[^a-zA-Z0-9_-]/', '_', pathinfo($origName, PATHINFO_FILENAME));
            $filename = $base . '-' . time() . '.' . $ext;

            $primaryPath = $uploadsDir . '/' . $filename;
            if (move_uploaded_file($uploaded['tmp_name'], $primaryPath)) {
                $saved = true;
                @chmod($primaryPath, 0644);

                $extraUploadDirs = [
                    '/home/u942704794/domains/idgen.in/public_html/uploads',
                    '/home/u942704794/domains/idgen.in/hbuilds/current/nodejs/public/uploads',
                ];
                foreach ($extraUploadDirs as $eud) {
                    if (is_dir($eud) && realpath($eud) !== realpath($uploadsDir)) {
                        @copy($primaryPath, $eud . '/' . $filename);
                        @chmod($eud . '/' . $filename, 0644);
                    }
                }
            }
        }
    }

    // If not multipart, check JSON or base64 payload
    if (!$saved) {
        $body = getJsonBody();
        $rawImage = $body['image'] ?? $body['file'] ?? $body['base64'] ?? '';
        $origName = $body['filename'] ?? $body['name'] ?? 'upload.jpg';

        if (!empty($rawImage)) {
            $base64Data = preg_replace('#^data:image/\w+;base64,#i', '', $rawImage);
            $binaryData = base64_decode($base64Data);

            if ($binaryData !== false) {
                $ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
                if (!$ext) $ext = 'jpg';
                $base = preg_replace('/[^a-zA-Z0-9_-]/', '_', pathinfo($origName, PATHINFO_FILENAME));
                $filename = $base . '-' . time() . '.' . $ext;

                $primaryPath = $uploadsDir . '/' . $filename;
                if (file_put_contents($primaryPath, $binaryData) !== false) {
                    $saved = true;
                    @chmod($primaryPath, 0644);

                    $extraUploadDirs = [
                        '/home/u942704794/domains/idgen.in/public_html/uploads',
                        '/home/u942704794/domains/idgen.in/hbuilds/current/nodejs/public/uploads',
                    ];
                    foreach ($extraUploadDirs as $eud) {
                        if (!is_dir($eud)) {
                            @mkdir($eud, 0755, true);
                        }
                        if (realpath($eud) !== realpath($uploadsDir)) {
                            @copy($primaryPath, $eud . '/' . $filename);
                            @chmod($eud . '/' . $filename, 0644);
                        }
                    }
                }
            }
        }
    }

    if ($saved && $filename) {
        echo json_encode([
            'success' => true,
            'url' => '/uploads/' . $filename,
            'filename' => $filename,
        ]);
        exit(0);
    } else {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'No valid file or image data provided in upload request.',
        ]);
        exit(0);
    }
}

// -------------------------------------------------------------
// 3. LEAD / QUOTE / CONTACT CAPTURE
// -------------------------------------------------------------
if ($endpoint === 'quote-requests' || $endpoint === 'contact-us' || $endpoint === 'admin/leads' || $endpoint === 'partner-inquiries') {
    $leadsFile = $dataDir . '/admin-leads.json';
    $leads = getJsonData('admin-leads.json', []);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $body = getJsonBody();
        $body['id'] = uniqid('lead_');
        $body['createdAt'] = date('c');
        $body['type'] = $endpoint;
        array_unshift($leads, $body);
        saveJsonData('admin-leads.json', $leads);
        echo json_encode(['success' => true, 'message' => 'Inquiry received successfully', 'data' => $body]);
        exit(0);
    } else {
        echo json_encode(['success' => true, 'data' => $leads]);
        exit(0);
    }
}

// -------------------------------------------------------------
// 4. STATES & SERVICE AREAS: /api/admin/states & /api/locations
// -------------------------------------------------------------
if ($endpoint === 'admin/states' || $endpoint === 'locations') {
    $statesData = getJsonData('dynamic-locations.json', []);

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        echo json_encode(['success' => true, 'states' => $statesData]);
        exit(0);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PUT') {
        $body = getJsonBody();
        $slug = trim(strtolower($body['slug'] ?? ''));
        if (!$slug) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'State slug is required']);
            exit(0);
        }

        $found = false;
        foreach ($statesData as $k => $st) {
            if (isset($st['slug']) && strtolower($st['slug']) === $slug) {
                $statesData[$k] = array_merge($st, $body);
                $found = true;
                break;
            }
        }
        if (!$found) {
            if (!isset($body['cities'])) $body['cities'] = [];
            $statesData[] = $body;
        }

        saveJsonData('dynamic-locations.json', $statesData);
        echo json_encode(['success' => true, 'state' => $body, 'states' => $statesData]);
        exit(0);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $body = getJsonBody();
        $slug = trim(strtolower($_GET['slug'] ?? $body['slug'] ?? ''));
        $statesData = array_values(array_filter($statesData, function($st) use ($slug) {
            return !isset($st['slug']) || strtolower($st['slug']) !== $slug;
        }));
        saveJsonData('dynamic-locations.json', $statesData);
        echo json_encode(['success' => true, 'states' => $statesData]);
        exit(0);
    }
}

// -------------------------------------------------------------
// 5. CITIES: /api/admin/cities
// -------------------------------------------------------------
if ($endpoint === 'admin/cities') {
    $statesData = getJsonData('dynamic-locations.json', []);

    if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PUT') {
        $body = getJsonBody();
        $stateSlug = trim(strtolower($body['stateSlug'] ?? ''));
        $cityData = $body['city'] ?? $body;
        $citySlug = trim(strtolower($cityData['slug'] ?? ''));

        if (!$stateSlug || !$citySlug) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'stateSlug and city.slug are required']);
            exit(0);
        }

        foreach ($statesData as $sIdx => $st) {
            if (isset($st['slug']) && strtolower($st['slug']) === $stateSlug) {
                $cities = $st['cities'] ?? [];
                $cFound = false;
                foreach ($cities as $cIdx => $c) {
                    if (isset($c['slug']) && strtolower($c['slug']) === $citySlug) {
                        $cities[$cIdx] = array_merge($c, $cityData);
                        $cFound = true;
                        break;
                    }
                }
                if (!$cFound) {
                    $cities[] = $cityData;
                }
                $statesData[$sIdx]['cities'] = $cities;
                break;
            }
        }

        saveJsonData('dynamic-locations.json', $statesData);
        echo json_encode(['success' => true, 'city' => $cityData]);
        exit(0);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $body = getJsonBody();
        $stateSlug = trim(strtolower($_GET['stateSlug'] ?? $body['stateSlug'] ?? ''));
        $citySlug = trim(strtolower($_GET['citySlug'] ?? $body['citySlug'] ?? ''));

        foreach ($statesData as $sIdx => $st) {
            if (isset($st['slug']) && strtolower($st['slug']) === $stateSlug) {
                $statesData[$sIdx]['cities'] = array_values(array_filter($st['cities'] ?? [], function($c) use ($citySlug) {
                    return !isset($c['slug']) || strtolower($c['slug']) !== $citySlug;
                }));
                break;
            }
        }
        saveJsonData('dynamic-locations.json', $statesData);
        echo json_encode(['success' => true]);
        exit(0);
    }
}

// -------------------------------------------------------------
// 6. SERVICES DROPDOWN & CATALOG: /api/services
// -------------------------------------------------------------
if ($endpoint === 'services') {
    $servicesData = getJsonData('dynamic-services.json', ['dropdown' => [], 'services' => []]);
    echo json_encode([
        'success' => true,
        'dropdown' => $servicesData['dropdown'] ?? [],
        'services' => $servicesData['services'] ?? [],
        'data' => $servicesData
    ]);
    exit(0);
}

// -------------------------------------------------------------
// 7. PRICING: /api/pricing & /api/admin/pricing
// -------------------------------------------------------------
if ($endpoint === 'pricing' || $endpoint === 'admin/pricing') {
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

    if ($method === 'GET') {
        $type = $_GET['type'] ?? '';
        if ($type === 'page') {
            $pageData = getJsonData('dynamic-pricing-page.json', []);
            echo json_encode(['success' => true, 'page' => $pageData, 'data' => $pageData]);
            exit(0);
        }

        $id = $_GET['id'] ?? '';
        $items = getJsonData('dynamic-pricing.json', []);
        if (!is_array($items)) {
            $items = isset($items['items']) && is_array($items['items']) ? $items['items'] : [];
        }

        if ($id) {
            $idLower = strtolower($id);
            foreach ($items as $item) {
                if (isset($item['id']) && strtolower($item['id']) === $idLower) {
                    echo json_encode(['success' => true, 'item' => $item, 'data' => $item]);
                    exit(0);
                }
            }
            http_response_code(404);
            echo json_encode(['success' => false, 'error' => 'Pricing item not found']);
            exit(0);
        }

        $category = $_GET['category'] ?? '';
        if ($category && $category !== 'all') {
            $items = array_values(array_filter($items, function($i) use ($category) {
                return isset($i['category']) && strtolower($i['category']) === strtolower($category);
            }));
        }

        $all = $_GET['all'] ?? '';
        if ($all !== 'true' && strpos($endpoint, 'admin/') !== 0) {
            $items = array_values(array_filter($items, function($i) {
                return !isset($i['isActive']) || $i['isActive'] !== false;
            }));
        }

        echo json_encode(['success' => true, 'items' => $items, 'data' => $items]);
        exit(0);
    }

    if ($method === 'POST') {
        $body = getJsonBody();
        $action = $body['action'] ?? $_GET['action'] ?? '';
        $type = $body['type'] ?? $_GET['type'] ?? '';

        // Page-level dynamic updates
        if ($type === 'page' || in_array($action, ['save_page', 'save_page_section', 'save_hero_bundle', 'reset_page'])) {
            $pageData = getJsonData('dynamic-pricing-page.json', []);
            if (!is_array($pageData)) $pageData = [];

            if ($action === 'reset_page') {
                saveJsonData('dynamic-pricing-page.json', $pageData);
                echo json_encode(['success' => true, 'message' => 'Pricing page reset to default content', 'page' => $pageData, 'data' => $pageData]);
                exit(0);
            }

            if ($action === 'save_hero_bundle') {
                $bundle = $body['heroBundle'] ?? [
                    'hero' => $body['hero'] ?? null,
                    'heroSlides' => $body['heroSlides'] ?? null
                ];
                if (!empty($bundle['hero']) && is_array($bundle['hero'])) {
                    $pageData['hero'] = array_merge($pageData['hero'] ?? [], $bundle['hero']);
                }
                if (isset($bundle['heroSlides']) && is_array($bundle['heroSlides'])) {
                    $pageData['heroSlides'] = $bundle['heroSlides'];
                }
                saveJsonData('dynamic-pricing-page.json', $pageData);
                echo json_encode(['success' => true, 'message' => 'Pricing hero and carousel slides saved successfully', 'page' => $pageData, 'data' => $pageData]);
                exit(0);
            }

            if ($action === 'save_page_section' && !empty($body['section'])) {
                $section = $body['section'];
                $sectionData = $body['sectionData'] ?? null;
                $pageData[$section] = $sectionData;
                saveJsonData('dynamic-pricing-page.json', $pageData);
                echo json_encode(['success' => true, 'message' => "Section {$section} updated successfully", 'page' => $pageData, 'data' => $pageData]);
                exit(0);
            }

            if ($action === 'save_page' && !empty($body['pageData'])) {
                saveJsonData('dynamic-pricing-page.json', $body['pageData']);
                echo json_encode(['success' => true, 'message' => 'Full pricing page updated successfully', 'page' => $body['pageData'], 'data' => $body['pageData']]);
                exit(0);
            }
        }

        // Reset pricing catalog
        if ($action === 'reset') {
            $items = getJsonData('dynamic-pricing.json', []);
            saveJsonData('dynamic-pricing.json', $items);
            echo json_encode(['success' => true, 'message' => 'Pricing reset to default catalog', 'items' => $items, 'data' => $items]);
            exit(0);
        }

        // Save single pricing item
        if (isset($body['item'])) {
            $item = $body['item'];
            $items = getJsonData('dynamic-pricing.json', []);
            if (!is_array($items)) $items = [];

            $itemId = !empty($item['id']) ? $item['id'] : preg_replace('/[^a-z0-9]+/', '-', strtolower($item['name'] ?? 'item'));
            $item['id'] = $itemId;
            $item['updatedAt'] = date('c');

            $found = false;
            foreach ($items as $idx => $existing) {
                if (isset($existing['id']) && strtolower($existing['id']) === strtolower($itemId)) {
                    $items[$idx] = array_merge($existing, $item);
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                array_unshift($items, $item);
            }

            saveJsonData('dynamic-pricing.json', $items);
            echo json_encode(['success' => true, 'item' => $item, 'items' => $items, 'data' => $items]);
            exit(0);
        }

        // Save all pricing items
        if (isset($body['items']) && is_array($body['items'])) {
            saveJsonData('dynamic-pricing.json', $body['items']);
            echo json_encode(['success' => true, 'items' => $body['items'], 'data' => $body['items']]);
            exit(0);
        }
    }

    if ($method === 'PUT') {
        $body = getJsonBody();
        $items = $body['items'] ?? $body;
        if (is_array($items)) {
            saveJsonData('dynamic-pricing.json', $items);
            echo json_encode(['success' => true, 'items' => $items, 'data' => $items]);
            exit(0);
        }
    }

    if ($method === 'DELETE') {
        $body = getJsonBody();
        $id = trim($_GET['id'] ?? $body['id'] ?? '');
        $items = getJsonData('dynamic-pricing.json', []);
        if (!is_array($items)) $items = [];

        $idLower = strtolower($id);
        $items = array_values(array_filter($items, function($i) use ($idLower) {
            return !isset($i['id']) || strtolower($i['id']) !== $idLower;
        }));

        saveJsonData('dynamic-pricing.json', $items);
        echo json_encode(['success' => true, 'items' => $items, 'data' => $items]);
        exit(0);
    }
}

// -------------------------------------------------------------
// 7b. SPECIFICATIONS: /api/specifications & /api/admin/specifications
// -------------------------------------------------------------
if ($endpoint === 'specifications' || $endpoint === 'admin/specifications') {
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

    if ($method === 'GET') {
        $specs = getJsonData('dynamic-specifications.json', []);
        if (!is_array($specs)) $specs = [];

        $config = getJsonData('dynamic-specifications-config.json', [
            'eyebrow' => 'Technical Specs & Quality Standards',
            'title' => 'Product Specifications & Engineering Details',
            'lede' => 'Detailed physical dimensions, raw materials, print resolution, and operational standards for every identification product manufactured by IDGen.'
        ]);

        $category = $_GET['category'] ?? '';
        if ($category && $category !== 'all') {
            $specs = array_values(array_filter($specs, function($s) use ($category) {
                return isset($s['category']) && strtolower($s['category']) === strtolower($category);
            }));
        }

        $all = $_GET['all'] ?? '';
        if ($all !== 'true' && strpos($endpoint, 'admin/') !== 0) {
            $specs = array_values(array_filter($specs, function($s) {
                return !isset($s['isActive']) || $s['isActive'] !== false;
            }));
        }

        echo json_encode(['success' => true, 'specs' => $specs, 'sectionConfig' => $config, 'data' => $specs]);
        exit(0);
    }

    if ($method === 'POST') {
        $body = getJsonBody();
        $action = $body['action'] ?? '';

        if ($action === 'reset') {
            $specs = getJsonData('dynamic-specifications.json', []);
            $config = getJsonData('dynamic-specifications-config.json', [
                'eyebrow' => 'Technical Specs & Quality Standards',
                'title' => 'Product Specifications & Engineering Details',
                'lede' => 'Detailed physical dimensions, raw materials, print resolution, and operational standards for every identification product manufactured by IDGen.'
            ]);
            saveJsonData('dynamic-specifications.json', $specs);
            saveJsonData('dynamic-specifications-config.json', $config);
            echo json_encode(['success' => true, 'message' => 'Technical specifications reset to defaults', 'specs' => $specs, 'sectionConfig' => $config]);
            exit(0);
        }

        if (isset($body['sectionConfig'])) {
            saveJsonData('dynamic-specifications-config.json', $body['sectionConfig']);
            echo json_encode(['success' => true, 'message' => 'Section header configuration updated', 'sectionConfig' => $body['sectionConfig']]);
            exit(0);
        }

        if (isset($body['item'])) {
            $item = $body['item'];
            $specs = getJsonData('dynamic-specifications.json', []);
            if (!is_array($specs)) $specs = [];

            $specId = !empty($item['id']) ? $item['id'] : preg_replace('/[^a-z0-9]+/', '-', strtolower($item['name'] ?? 'spec'));
            $item['id'] = $specId;
            $item['updatedAt'] = date('c');

            $found = false;
            foreach ($specs as $idx => $existing) {
                if (isset($existing['id']) && strtolower($existing['id']) === strtolower($specId)) {
                    $specs[$idx] = array_merge($existing, $item);
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                $specs[] = $item;
            }

            saveJsonData('dynamic-specifications.json', $specs);
            $config = getJsonData('dynamic-specifications-config.json', []);
            echo json_encode(['success' => true, 'savedItem' => $item, 'specs' => $specs, 'sectionConfig' => $config]);
            exit(0);
        }

        if (isset($body['specs']) && is_array($body['specs'])) {
            saveJsonData('dynamic-specifications.json', $body['specs']);
            $config = getJsonData('dynamic-specifications-config.json', []);
            echo json_encode(['success' => true, 'specs' => $body['specs'], 'sectionConfig' => $config]);
            exit(0);
        }
    }

    if ($method === 'DELETE') {
        $body = getJsonBody();
        $id = trim($_GET['id'] ?? $body['id'] ?? '');
        $specs = getJsonData('dynamic-specifications.json', []);
        if (!is_array($specs)) $specs = [];

        $idLower = strtolower($id);
        $specs = array_values(array_filter($specs, function($s) use ($idLower) {
            return !isset($s['id']) || strtolower($s['id']) !== $idLower;
        }));

        saveJsonData('dynamic-specifications.json', $specs);
        $config = getJsonData('dynamic-specifications-config.json', []);
        echo json_encode(['success' => true, 'specs' => $specs, 'sectionConfig' => $config]);
        exit(0);
    }
}

// -------------------------------------------------------------
// -------------------------------------------------------------
// 8. PROJECTS / CASE STUDIES: /api/projects, /api/admin/projects, /api/case-studies, /api/admin/case-studies
// -------------------------------------------------------------
if ($endpoint === 'projects' || $endpoint === 'admin/projects' || $endpoint === 'case-studies' || $endpoint === 'admin/case-studies') {
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

    // Check for page-level dynamic requests (Hero & CTA sections)
    $type = $_GET['type'] ?? '';
    if ($method === 'GET' && $type === 'page') {
        $defaultPage = [
            'hero' => [
                'badge' => 'Real Delivered Projects',
                'badgeSub' => 'Verified Customer Proof',
                'title' => 'IDGen Case Studies & ',
                'titleHighlight' => 'Identification Projects',
                'subtitle' => 'A real identification project involves more than the finished card. It can include data preparation, photographs, design, personalization, approval, production, accessories, quality checking, packaging and dispatch. IDGen case studies will document real projects and show how organizations use identification products and workflows in practice.',
                'featurePills' => [
                    ['title' => 'Real Photos', 'desc' => 'Delivered specimens', 'icon' => 'camera'],
                    ['title' => '8 NE States', 'desc' => 'Regional fulfillment', 'icon' => 'map'],
                    ['title' => '8-Step Flow', 'desc' => 'Structured pipeline', 'icon' => 'flow'],
                    ['title' => 'Trust Rule', 'desc' => 'Zero fake claims', 'icon' => 'shield'],
                ],
                'primaryBtnText' => 'Explore Delivered Projects',
                'primaryBtnLink' => '#project-gallery',
                'secondaryBtnText' => 'Start Your Project',
                'secondaryBtnLink' => '/request-a-quote/',
                'tertiaryBtnText' => 'IDGen Studio',
                'tertiaryBtnLink' => '/idgen-studio/',
                'trustBadges' => [
                    'Real Delivered Client Batches',
                    'Guwahati Production Hub',
                    '72-Hour Express Dispatch'
                ],
                'pillars' => [
                    [
                        'id' => 'school',
                        'label' => 'School Project',
                        'sub' => 'Don Bosco',
                        'title' => 'School ID Card Project',
                        'loc' => 'Gojapara, Assam',
                        'org' => 'Don Bosco Hr Sec School',
                        'image' => '/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png',
                        'req' => 'Student Data + Photographs + PVC ID Cards + Lanyards + Holders',
                        'badge' => 'Real Delivered Batch'
                    ],
                    [
                        'id' => 'college',
                        'label' => 'College Project',
                        'sub' => 'CKB College',
                        'title' => 'College Campus Pass Project',
                        'loc' => 'Jorhat, Assam',
                        'org' => 'CKB College',
                        'image' => '/images/Order Deliver/CKB COLLAGE,JORHAT 1.png',
                        'req' => 'Institutional student passes with department codes & QR verification',
                        'badge' => 'Campus Batch'
                    ],
                    [
                        'id' => 'government',
                        'label' => 'Institutional',
                        'sub' => 'Govt of Assam',
                        'title' => 'Institutional Project',
                        'loc' => 'Nagaon, Assam',
                        'org' => 'Government of Assam',
                        'image' => '/images/Order Deliver/Government of assam,nagoan 1.jpeg',
                        'req' => 'Official staff identification credentials & custom printed lanyards',
                        'badge' => 'Institutional'
                    ],
                    [
                        'id' => 'wearable',
                        'label' => 'Wearable Setup',
                        'sub' => 'Rayburn College',
                        'title' => 'Complete Wearable Setup',
                        'loc' => 'Manipur',
                        'org' => 'Rayburn College',
                        'image' => '/images/Order Deliver/RAYBURN COLLAGE,MANIPUR 1.png',
                        'req' => 'CR80 PVC Cards + Protective Holders + Hooks + Sublimation Lanyards',
                        'badge' => 'Wearable Set'
                    ]
                ],
                'bottomMetrics' => [
                    ['label' => 'Evidence', 'value' => '100% Real Projects'],
                    ['label' => 'Coverage', 'value' => 'Assam & Northeast'],
                    ['label' => 'Trust Rule', 'value' => 'Zero Fake Claims']
                ]
            ],
            'cta' => [
                'badge' => 'Real Delivery Experience',
                'title' => 'Have a Similar Identification Requirement?',
                'description' => 'Tell IDGen about your organization, location, quantity and required products to receive a factory direct proposal and digital proof.',
                'primaryBtnText' => 'Start Your Project →',
                'primaryBtnLink' => '/request-a-quote/',
                'secondaryBtnText' => 'Explore IDGen Studio',
                'secondaryBtnLink' => '/idgen-studio/',
                'tertiaryBtnText' => 'View Pricing Tiers',
                'tertiaryBtnLink' => '/pricing/',
                'footerBrand' => 'IDGen — Real Identification Case Studies',
                'footerText' => 'Guwahati, Assam • Direct Factory Deliveries Across Northeast India'
            ]
        ];
        $pageData = getJsonData('dynamic-case-studies-page.json', $defaultPage);
        echo json_encode(['success' => true, 'page' => $pageData, 'data' => $pageData]);
        exit(0);
    }

    // Helper to get normalized projects array
    $rawProjects = getJsonData('dynamic-projects.json', []);
    $projects = [];
    if (is_array($rawProjects)) {
        if (isset($rawProjects['projects']) && is_array($rawProjects['projects'])) {
            $projects = $rawProjects['projects'];
        } elseif (isset($rawProjects['project']) && is_array($rawProjects['project'])) {
            $projects = [$rawProjects['project']];
        } else {
            $projects = $rawProjects;
        }
    }

    if ($method === 'GET') {
        $id = $_GET['id'] ?? '';
        if ($id) {
            $idLower = strtolower($id);
            foreach ($projects as $p) {
                if (isset($p['id']) && strtolower($p['id']) === $idLower) {
                    echo json_encode(['success' => true, 'project' => $p, 'data' => $p]);
                    exit(0);
                }
            }
            http_response_code(404);
            echo json_encode(['success' => false, 'error' => 'Project not found']);
            exit(0);
        }

        echo json_encode(['success' => true, 'projects' => $projects, 'data' => $projects]);
        exit(0);
    }

    if ($method === 'POST') {
        $body = getJsonBody();
        $action = $body['action'] ?? $_GET['action'] ?? '';
        $postType = $body['type'] ?? $_GET['type'] ?? '';

        // Handle page-level updates (Hero / CTA)
        if ($postType === 'page' || in_array($action, ['save_page', 'save_page_section', 'reset_page'])) {
            $pageData = getJsonData('dynamic-case-studies-page.json', []);

            if ($action === 'reset_page') {
                saveJsonData('dynamic-case-studies-page.json', $pageData);
                echo json_encode(['success' => true, 'message' => 'Case studies page reset to default content', 'page' => $pageData, 'data' => $pageData]);
                exit(0);
            }

            if ($action === 'save_page_section' && !empty($body['section'])) {
                $section = $body['section'];
                $sectionData = $body['sectionData'] ?? null;
                $pageData[$section] = $sectionData;
                saveJsonData('dynamic-case-studies-page.json', $pageData);
                echo json_encode(['success' => true, 'message' => "Section {$section} updated successfully", 'page' => $pageData, 'data' => $pageData]);
                exit(0);
            }

            if ($action === 'save_page' && !empty($body['pageData'])) {
                saveJsonData('dynamic-case-studies-page.json', $body['pageData']);
                echo json_encode(['success' => true, 'message' => 'Full case studies page updated successfully', 'page' => $body['pageData'], 'data' => $body['pageData']]);
                exit(0);
            }

            if (!empty($body['page'])) {
                saveJsonData('dynamic-case-studies-page.json', $body['page']);
                echo json_encode(['success' => true, 'message' => 'Case studies page updated successfully', 'page' => $body['page'], 'data' => $body['page']]);
                exit(0);
            }
        }

        if ($action === 'reset') {
            $srcProjects = getJsonData('dynamic-projects.json', []);
            if (!is_array($srcProjects) || empty($srcProjects)) {
                $srcProjects = $projects;
            }
            saveJsonData('dynamic-projects.json', $srcProjects);
            echo json_encode(['success' => true, 'message' => 'Projects reset to verified default catalog', 'projects' => $srcProjects, 'data' => $srcProjects]);
            exit(0);
        }

        if (isset($body['project'])) {
            $p = $body['project'];
            $projId = !empty($p['id']) ? $p['id'] : preg_replace('/[^a-z0-9]+/', '-', strtolower($p['org'] ?? 'project'));
            $p['id'] = $projId;

            $found = false;
            foreach ($projects as $idx => $existing) {
                if (isset($existing['id']) && strtolower($existing['id']) === strtolower($projId)) {
                    $projects[$idx] = array_merge($existing, $p);
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                array_unshift($projects, $p);
            }

            saveJsonData('dynamic-projects.json', $projects);
            echo json_encode(['success' => true, 'project' => $p, 'projects' => $projects, 'data' => $projects]);
            exit(0);
        }

        if (isset($body['projects']) && is_array($body['projects'])) {
            saveJsonData('dynamic-projects.json', $body['projects']);
            echo json_encode(['success' => true, 'projects' => $body['projects'], 'data' => $body['projects']]);
            exit(0);
        }
    }

    if ($method === 'PUT') {
        $body = getJsonBody();
        $items = $body['projects'] ?? $body;
        if (is_array($items)) {
            saveJsonData('dynamic-projects.json', $items);
            echo json_encode(['success' => true, 'projects' => $items, 'data' => $items]);
            exit(0);
        }
    }

    if ($method === 'DELETE') {
        $body = getJsonBody();
        $id = trim($_GET['id'] ?? $body['id'] ?? '');
        $idLower = strtolower($id);
        $projects = array_values(array_filter($projects, function($p) use ($idLower) {
            return !isset($p['id']) || strtolower($p['id']) !== $idLower;
        }));

        saveJsonData('dynamic-projects.json', $projects);
        echo json_encode(['success' => true, 'projects' => $projects, 'data' => $projects]);
        exit(0);
    }
}

// -------------------------------------------------------------
// 8b. BLOGS & TECHNICAL INSIGHTS: /api/blogs & /api/admin/blogs
// -------------------------------------------------------------
if ($endpoint === 'blogs' || $endpoint === 'admin/blogs') {
    $blogs = getJsonData('dynamic-blogs.json', []);
    if (!is_array($blogs)) {
        $blogs = [];
    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $slug = $_GET['slug'] ?? '';
        if ($slug) {
            foreach ($blogs as $p) {
                if (isset($p['slug']) && strtolower($p['slug']) === strtolower($slug)) {
                    echo json_encode(['success' => true, 'post' => $p, 'data' => $p]);
                    exit(0);
                }
            }
            http_response_code(404);
            echo json_encode(['success' => false, 'error' => 'Blog post not found']);
            exit(0);
        }

        echo json_encode([
            'success' => true,
            'posts' => $blogs,
            'data' => $blogs
        ]);
        exit(0);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PUT') {
        $body = getJsonBody();
        $action = $body['action'] ?? $_GET['action'] ?? '';

        if ($action === 'reset') {
            $fallback = getJsonData('dynamic-blogs.json', []);
            saveJsonData('dynamic-blogs.json', $fallback);
            echo json_encode(['success' => true, 'message' => 'Blogs reset', 'posts' => $fallback, 'data' => $fallback]);
            exit(0);
        }

        if (isset($body['posts']) && is_array($body['posts'])) {
            $blogs = $body['posts'];
            saveJsonData('dynamic-blogs.json', $blogs);
            echo json_encode(['success' => true, 'posts' => $blogs, 'data' => $blogs]);
            exit(0);
        }

        $post = $body['post'] ?? $body['data'] ?? $body;
        if (isset($post['slug']) && !empty($post['slug'])) {
            $slug = strtolower(trim($post['slug']));
            $post['slug'] = $slug;

            if (!empty($post['isFeatured'])) {
                foreach ($blogs as &$b) {
                    if (isset($b['slug']) && strtolower($b['slug']) !== $slug) {
                        $b['isFeatured'] = false;
                    }
                }
            }

            $found = false;
            foreach ($blogs as $idx => $b) {
                if (isset($b['slug']) && strtolower($b['slug']) === $slug) {
                    $blogs[$idx] = array_merge($b, $post);
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                array_unshift($blogs, $post);
            }

            saveJsonData('dynamic-blogs.json', $blogs);
            echo json_encode(['success' => true, 'post' => $post, 'posts' => $blogs, 'data' => $blogs]);
            exit(0);
        }

        saveJsonData('dynamic-blogs.json', $blogs);
        echo json_encode(['success' => true, 'posts' => $blogs, 'data' => $blogs]);
        exit(0);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $body = getJsonBody();
        $slug = $_GET['slug'] ?? $body['slug'] ?? '';
        $action = $_GET['action'] ?? $body['action'] ?? '';

        if ($action === 'reset') {
            $fallback = getJsonData('dynamic-blogs.json', []);
            saveJsonData('dynamic-blogs.json', $fallback);
            echo json_encode(['success' => true, 'message' => 'Blogs reset', 'posts' => $fallback, 'data' => $fallback]);
            exit(0);
        }

        if ($slug) {
            $slug = strtolower(trim($slug));
            $blogs = array_values(array_filter($blogs, function($p) use ($slug) {
                return !isset($p['slug']) || strtolower($p['slug']) !== $slug;
            }));
            saveJsonData('dynamic-blogs.json', $blogs);
            echo json_encode(['success' => true, 'posts' => $blogs, 'data' => $blogs]);
            exit(0);
        }
    }
}

// -------------------------------------------------------------
// 9. GENERIC ADMIN DYNAMIC CMS DATA: /api/admin/{section}
// -------------------------------------------------------------
if (strpos($endpoint, 'admin/') === 0) {
    $section = substr($endpoint, 6); // e.g. student-id-card-printing, rfid-card-printing
    $jsonFileName = 'dynamic-' . $section . '.json';
    
    $currentData = getJsonData($jsonFileName);

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if ($currentData !== null) {
            echo json_encode(['success' => true, 'data' => $currentData]);
        } else {
            // Fallback: check if we can read from root/data or return empty object
            echo json_encode(['success' => true, 'data' => new stdClass()]);
        }
        exit(0);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $body = getJsonBody();
        $action = $body['action'] ?? '';
        $subSection = $body['section'] ?? '';
        $sectionData = $body['sectionData'] ?? null;
        $data = $body['data'] ?? null;

        if ($currentData === null) $currentData = [];

        if ($subSection && $sectionData !== null) {
            $currentData[$subSection] = $sectionData;
        } elseif ($data !== null) {
            $currentData = $data;
        } elseif (!empty($body)) {
            $currentData = array_merge((array)$currentData, $body);
        }

        saveJsonData($jsonFileName, $currentData);
        echo json_encode(['success' => true, 'message' => 'Saved successfully', 'data' => $currentData]);
        exit(0);
    }
}

// -------------------------------------------------------------
// 10. PUBLIC API FALLBACK FOR OTHER DYNAMIC SECTIONS
// -------------------------------------------------------------
$publicSection = $endpoint;
$jsonFileName = 'dynamic-' . $publicSection . '.json';
$publicData = getJsonData($jsonFileName);

if ($publicData !== null) {
    echo json_encode(['success' => true, 'data' => $publicData]);
    exit(0);
}

// Default 404 for unknown endpoints
http_response_code(404);
echo json_encode(['success' => false, 'error' => 'API endpoint not found: ' . $endpoint]);
