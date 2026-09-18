<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

$rawUri = $_SERVER['REQUEST_URI'];
$uriParts = explode('?', $rawUri);
$path = trim($uriParts[0], '/');

// Remove leading api/
if (strpos($path, 'api/') === 0) {
    $endpoint = substr($path, 4);
} else {
    $endpoint = isset($_GET['endpoint']) ? trim($_GET['endpoint'], '/') : '';
}

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

// -------------------------------------------------------------
// 1. AUTHENTICATION ROUTE: /api/admin/auth
// -------------------------------------------------------------
if ($endpoint === 'admin/auth') {
    $body = getJsonBody();
    $action = $body['action'] ?? '';

    if ($action === 'logout') {
        setcookie('idgen_admin_session', '', time() - 3600, '/', '', true, true);
        echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
        exit(0);
    }

    if ($action === 'check') {
        $cookie = $_COOKIE['idgen_admin_session'] ?? '';
        echo json_encode(['success' => true, 'authenticated' => !empty($cookie)]);
        exit(0);
    }

    $username = trim($body['username'] ?? '');
    $password = $body['password'] ?? '';

    // Check credentials
    if ($username === 'admin' && ($password === 'admin@idgen2026' || $password === 'IDgen789@#$')) {
        // Set secure 7-day cookie
        setcookie('idgen_admin_session', 'authenticated_' . time(), time() + (7 * 86400), '/', '', true, false);
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
if ($endpoint === 'admin/upload') {
    if (!isset($_FILES['file'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'No file uploaded']);
        exit(0);
    }

    $file = $_FILES['file'];
    $filename = time() . '_' . preg_replace('/[^a-zA-Z0-9._-]/', '_', $file['name']);
    $targetPath = $uploadsDir . '/' . $filename;

    if (move_uploaded_file($file['tmp_name'], $targetPath)) {
        echo json_encode([
            'success' => true,
            'url' => '/uploads/' . $filename,
            'filename' => $filename
        ]);
        exit(0);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to save uploaded file']);
        exit(0);
    }
}

// -------------------------------------------------------------
// 3. LEAD / QUOTE / CONTACT CAPTURE
// -------------------------------------------------------------
if ($endpoint === 'quote-requests' || $endpoint === 'contact-us' || $endpoint === 'admin/leads') {
    $leadsFile = $dataDir . '/admin-leads.json';
    $leads = file_exists($leadsFile) ? json_decode(file_get_contents($leadsFile), true) ?: [] : [];

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $body = getJsonBody();
        $body['id'] = uniqid('lead_');
        $body['createdAt'] = date('c');
        $body['type'] = $endpoint;
        array_unshift($leads, $body);
        file_put_contents($leadsFile, json_encode($leads, JSON_PRETTY_PRINT));
        echo json_encode(['success' => true, 'message' => 'Inquiry received successfully', 'data' => $body]);
        exit(0);
    } else {
        echo json_encode(['success' => true, 'data' => $leads]);
        exit(0);
    }
}

// -------------------------------------------------------------
// 4. GENERIC ADMIN DYNAMIC CMS DATA: /api/admin/{section}
// -------------------------------------------------------------
if (strpos($endpoint, 'admin/') === 0) {
    $section = substr($endpoint, 6); // e.g. why-idgen, services, homepage
    $jsonFileName = 'dynamic-' . $section . '.json';
    
    // Check possible locations
    $possiblePaths = [
        $dataDir . '/' . $jsonFileName,
        __DIR__ . '/src/data/' . $jsonFileName,
    ];

    $filePath = $dataDir . '/' . $jsonFileName;
    foreach ($possiblePaths as $p) {
        if (file_exists($p)) {
            $filePath = $p;
            break;
        }
    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if (file_exists($filePath)) {
            $content = file_get_contents($filePath);
            echo json_encode(['success' => true, 'data' => json_decode($content, true)]);
        } else {
            echo json_encode(['success' => true, 'data' => []]);
        }
        exit(0);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $body = getJsonBody();
        $action = $body['action'] ?? '';
        $subSection = $body['section'] ?? '';
        $sectionData = $body['sectionData'] ?? null;
        $data = $body['data'] ?? null;

        $currentData = file_exists($filePath) ? json_decode(file_get_contents($filePath), true) ?: [] : [];

        if ($subSection && $sectionData !== null) {
            $currentData[$subSection] = $sectionData;
        } elseif ($data !== null) {
            $currentData = $data;
        } elseif (!empty($body)) {
            $currentData = array_merge($currentData, $body);
        }

        // Save to dataDir
        file_put_contents($dataDir . '/' . $jsonFileName, json_encode($currentData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        
        // Also save to src/data if it exists
        if (file_exists(__DIR__ . '/src/data')) {
            file_put_contents(__DIR__ . '/src/data/' . $jsonFileName, json_encode($currentData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        }

        echo json_encode(['success' => true, 'message' => 'Saved successfully', 'data' => $currentData]);
        exit(0);
    }
}

// -------------------------------------------------------------
// 5. PUBLIC API FALLBACK FOR PAGES
// -------------------------------------------------------------
$publicSection = $endpoint;
$jsonFileName = 'dynamic-' . $publicSection . '.json';
$filePath = $dataDir . '/' . $jsonFileName;

if (file_exists($filePath)) {
    echo json_encode(['success' => true, 'data' => json_decode(file_get_contents($filePath), true)]);
    exit(0);
}

// Default 404 for unknown endpoints
http_response_code(404);
echo json_encode(['success' => false, 'error' => 'API endpoint not found: ' . $endpoint]);
