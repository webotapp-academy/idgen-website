import fs from "fs";
import path from "path";

export interface PricingItemData {
  id: string;
  name: string;
  modelCode?: string;
  category: "cards" | "holders" | "lanyards" | "badges";
  categoryLabel: string;
  price: string;
  unit: string;
  orientation?: "Vertical (Portrait)" | "Horizontal (Landscape)" | "Universal";
  highlight?: string;
  badge?: string;
  description: string;
  specs: string[];
  path: string;
  sortOrder: number;
  isActive: boolean;
  updatedAt?: string;
}

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-pricing.json");

export const defaultPricingCatalog: PricingItemData[] = [
  {
    id: "pvc-single",
    name: "PVC ID Card — Single Side Printing",
    modelCode: "CR80-S",
    category: "cards",
    categoryLabel: "PVC & Smart Cards",
    price: "₹15",
    unit: "/ card",
    orientation: "Universal",
    badge: "Most Popular",
    highlight: "Single Side Print",
    description: "Standard CR80 (86 × 54 mm) 30-Mil high-gloss solid PVC card printed single side with thermal dye-sublimation.",
    specs: ["CR-80 (86 × 54 mm)", "30 Mil / 0.76 mm thickness", "Single Side High-Gloss Print", "100% Solid Virgin PVC"],
    path: "/id-card-printing/",
    sortOrder: 1,
    isActive: true,
  },
  {
    id: "pvc-double",
    name: "PVC ID Card — Double Side Printing",
    modelCode: "CR80-D",
    category: "cards",
    categoryLabel: "PVC & Smart Cards",
    price: "₹16",
    unit: "/ card",
    orientation: "Universal",
    badge: "Best Value",
    highlight: "Dual Side Full Color",
    description: "Standard CR80 30-Mil high-gloss virgin PVC card with full-color edge-to-edge printing on both front and back.",
    specs: ["CR-80 (86 × 54 mm)", "Front & Back Full Color", "High-Gloss / Matte UV Shield", "Zero De-lamination"],
    path: "/id-card-printing/",
    sortOrder: 2,
    isActive: true,
  },
  {
    id: "holder-v1",
    name: "Polycarbonate ID Card Holder — V-1",
    modelCode: "V-1",
    category: "holders",
    categoryLabel: "ID Card Holders",
    price: "₹6",
    unit: "/ piece",
    orientation: "Vertical (Portrait)",
    badge: "Standard Portrait",
    highlight: "Portrait Drop-In",
    description: "Benchmark portrait rigid holder for standard 86 × 54 mm cards. 100% virgin optical polymer with thumb extraction slot.",
    specs: ["Standard Vertical (Portrait)", "Drop-In Open Slot", "20 mm Universal Lanyard Slot", "Virgin Optical Polycarbonate"],
    path: "/id-card-holders/",
    sortOrder: 3,
    isActive: true,
  },
  {
    id: "holder-h1",
    name: "Polycarbonate ID Card Holder — H-1",
    modelCode: "H-1",
    category: "holders",
    categoryLabel: "ID Card Holders",
    price: "₹6",
    unit: "/ piece",
    orientation: "Horizontal (Landscape)",
    badge: "Standard Landscape",
    highlight: "Landscape Drop-In",
    description: "Standard horizontal landscape holder designed for CR80 cards with centered top slot to ensure balance without tilting.",
    specs: ["Standard Horizontal (Landscape)", "Drop-In Open Slot", "20 mm Balanced Top Slot", "Virgin Optical Polycarbonate"],
    path: "/id-card-holders/",
    sortOrder: 4,
    isActive: true,
  },
  {
    id: "holder-v2",
    name: "Polycarbonate ID Card Holder — V-2",
    modelCode: "V-2",
    category: "holders",
    categoryLabel: "ID Card Holders",
    price: "₹7",
    unit: "/ piece",
    orientation: "Vertical (Portrait)",
    badge: "4-Side Lock",
    highlight: "Maximum Retention",
    description: "Heavy-duty transparent portrait holder with integrated 4-side perimeter snap locks. Prevents card loss during active movement.",
    specs: ["Vertical (Portrait)", "4-Side Perimeter Snap-Lock", "Zero Accidental Fall-Out", "High-Impact Virgin Polymer"],
    path: "/id-card-holders/",
    sortOrder: 5,
    isActive: true,
  },
  {
    id: "holder-h2",
    name: "Polycarbonate ID Card Holder — H-2",
    modelCode: "H-2",
    category: "holders",
    categoryLabel: "ID Card Holders",
    price: "₹7",
    unit: "/ piece",
    orientation: "Horizontal (Landscape)",
    badge: "4-Side Lock Landscape",
    highlight: "Landscape 4-Side Lock",
    description: "Landscape orientation heavy-duty holder featuring integrated four-side perimeter lock clips for active workforce badges.",
    specs: ["Horizontal (Landscape)", "4-Side Perimeter Snap-Lock", "Secure Edge Grip", "High-Impact Virgin Polymer"],
    path: "/id-card-holders/",
    sortOrder: 6,
    isActive: true,
  },
  {
    id: "holder-cv1",
    name: "Optical Crystal Acrylic Holder — CV-1",
    modelCode: "CV-1",
    category: "holders",
    categoryLabel: "ID Card Holders",
    price: "₹25",
    unit: "/ piece",
    orientation: "Vertical (Portrait)",
    badge: "Executive Crystal",
    highlight: "VIP & Executive",
    description: "Distinguished executive holder with diamond-beveled prismatic acrylic borders and glass-like optical clarity for VIP summits.",
    specs: ["Diamond-Beveled Borders", "Pure PMMA Optical Acrylic", "Prismatic Light Refraction", "Executive Showcase"],
    path: "/id-card-holders/",
    sortOrder: 7,
    isActive: true,
  },
  {
    id: "lanyard-20mm",
    name: "20 mm Custom Printed Satin Lanyard",
    modelCode: "LAN-20",
    category: "lanyards",
    categoryLabel: "Lanyards & Hardware",
    price: "₹15",
    unit: "/ piece",
    orientation: "Universal",
    badge: "Top Choice",
    highlight: "Ultrasonic Welded",
    description: "Premium soft fine-woven satin polyester lanyard with continuous multi-color dye-sublimation and ultrasonic acoustic sealing.",
    specs: ["20 mm Width (90 cm loop)", "Multi-Color Dye Sublimation", "Ultrasonic Welded Joint", "Anti-Fray Satin Polyester"],
    path: "/custom-printed-lanyard-printing/",
    sortOrder: 8,
    isActive: true,
  },
  {
    id: "swivel-hook",
    name: "Swivel Fish Hook & Attachment Clip",
    modelCode: "HK-01",
    category: "lanyards",
    categoryLabel: "Lanyards & Hardware",
    price: "₹3",
    unit: "/ piece",
    orientation: "Universal",
    highlight: "360° Silent Swivel",
    description: "Heavy-duty die-cast zinc alloy swivel fish hook with 360-degree silent rotation and anti-rust chrome electroplated finish.",
    specs: ["360° Smooth Swivel", "Anti-Rust Nickel Chrome", "Tested 15 kg Tensile Force", "Fits 12/16/20mm Loops"],
    path: "/id-card-hooks/",
    sortOrder: 9,
    isActive: true,
  },
  {
    id: "event-card",
    name: "Custom Event & Conference VIP Badge",
    modelCode: "EV-01",
    category: "cards",
    categoryLabel: "PVC & Smart Cards",
    price: "₹35",
    unit: "/ card",
    orientation: "Universal",
    badge: "Jumbo Format",
    highlight: "Large Format Summit",
    description: "Oversized large-format event credentials for summits, conferences, expos and VIP zones with dual anti-twist punching.",
    specs: ["Large Format (3.5×5.5\" / 4×6\")", "Tear-Proof Polyvinyl / PVC", "Dual Hook Anti-Twist Slots", "Zoned Delegate QR Codes"],
    path: "/event-card-printing/",
    sortOrder: 10,
    isActive: true,
  },
  {
    id: "rfid-card",
    name: "Contactless RFID & NFC Smart Card",
    modelCode: "RFID-1K",
    category: "cards",
    categoryLabel: "PVC & Smart Cards",
    price: "₹45",
    unit: "/ card",
    orientation: "Universal",
    badge: "Smart Access",
    highlight: "13.56MHz / 125kHz",
    description: "13.56 MHz (Mifare/NFC) or 125 kHz access control cards with embedded copper antenna and high-speed contactless reading.",
    specs: ["13.56 MHz / 125 kHz Frequencies", "Turnstile & Door Lock Ready", "100,000+ Read-Write Cycles", "10+ Year Data Retention"],
    path: "/rfid-card-printing/",
    sortOrder: 11,
    isActive: true,
  },
  {
    id: "acrylic-badge",
    name: "Custom Acrylic Name Badge & Magnetic Pin",
    modelCode: "ACR-01",
    category: "badges",
    categoryLabel: "Badges & Medals",
    price: "₹45",
    unit: "/ badge",
    orientation: "Universal",
    badge: "Magnetic Clasp",
    highlight: "Zero Pin Damage",
    description: "Laser-cut crystal cast acrylic badges with diamond-polished edges and triple neodymium magnetic clasps for zero garment damage.",
    specs: ["Triple Neodymium Magnet", "Zero Garment Pin Holes", "Diamond-Polished Bevels", "1200 DPI Subsurface Print"],
    path: "/acrylic-badges/",
    sortOrder: 12,
    isActive: true,
  },
  {
    id: "zinc-medal",
    name: "Die-Cast Zinc Medal & Satin V-Ribbon",
    modelCode: "MED-3D",
    category: "badges",
    categoryLabel: "Badges & Medals",
    price: "₹65",
    unit: "/ medal",
    orientation: "Universal",
    badge: "3D High Relief",
    highlight: "Custom Crest Die-Cast",
    description: "Custom sculpted solid zinc alloy medals in antique gold/silver/bronze finishes with matching full-color sublimated neck ribbon.",
    specs: ["50 / 60 / 70 mm Custom 3D Cast", "Solid High-Density Zinc", "Matching Full-Color V-Ribbon", "Antique & Mirror Finishes"],
    path: "/zinc-medals/",
    sortOrder: 13,
    isActive: true,
  },
];

let memoryCache: PricingItemData[] | null = null;

export function getAllPricingItems(includeInactive = false): PricingItemData[] {
  if (memoryCache) {
    const items = includeInactive ? memoryCache : memoryCache.filter((item) => item.isActive !== false);
    return [...items].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }

  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const loaded: PricingItemData[] = JSON.parse(raw);
      if (Array.isArray(loaded) && loaded.length > 0) {
        memoryCache = loaded;
        const items = includeInactive ? memoryCache : memoryCache.filter((item) => item.isActive !== false);
        return [...items].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
      }
    }
  } catch (e) {
    console.error("Error reading dynamic-pricing.json, falling back to defaults:", e);
  }

  memoryCache = defaultPricingCatalog;
  saveAllPricingItems(defaultPricingCatalog);
  const items = includeInactive ? memoryCache : memoryCache.filter((item) => item.isActive !== false);
  return [...items].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

export function saveAllPricingItems(items: PricingItemData[]): void {
  memoryCache = items;
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(items, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving dynamic-pricing.json:", e);
  }
}

export function getPricingItem(id: string): PricingItemData | undefined {
  const items = getAllPricingItems(true);
  return items.find((item) => item.id.toLowerCase() === id.toLowerCase());
}

export function savePricingItem(
  itemData: Partial<PricingItemData> & { id: string; name: string; price: string; unit: string }
): PricingItemData {
  const items = getAllPricingItems(true);
  const index = items.findIndex((i) => i.id.toLowerCase() === itemData.id.toLowerCase());

  let categoryLabel = itemData.categoryLabel;
  if (!categoryLabel && itemData.category) {
    if (itemData.category === "holders") categoryLabel = "ID Card Holders";
    else if (itemData.category === "cards") categoryLabel = "PVC & Smart Cards";
    else if (itemData.category === "lanyards") categoryLabel = "Lanyards & Hardware";
    else if (itemData.category === "badges") categoryLabel = "Badges & Medals";
  }

  const updatedItem: PricingItemData = {
    id: itemData.id.trim().toLowerCase().replace(/\s+/g, "-"),
    name: itemData.name.trim(),
    modelCode: itemData.modelCode?.trim() || undefined,
    category: itemData.category || "holders",
    categoryLabel: categoryLabel || "ID Card Holders",
    price: itemData.price.trim().startsWith("₹") ? itemData.price.trim() : `₹${itemData.price.trim()}`,
    unit: itemData.unit.trim().startsWith("/") ? itemData.unit.trim() : `/ ${itemData.unit.trim()}`,
    orientation: itemData.orientation || "Universal",
    highlight: itemData.highlight?.trim() || undefined,
    badge: itemData.badge?.trim() || undefined,
    description: itemData.description?.trim() || "",
    specs: Array.isArray(itemData.specs) ? itemData.specs.filter(Boolean) : [],
    path: itemData.path?.trim() || "/pricing/",
    sortOrder: typeof itemData.sortOrder === "number" ? itemData.sortOrder : items.length + 1,
    isActive: itemData.isActive !== false,
    updatedAt: new Date().toISOString(),
  };

  if (index >= 0) {
    items[index] = { ...items[index], ...updatedItem };
  } else {
    items.push(updatedItem);
  }

  saveAllPricingItems(items);
  return updatedItem;
}

export function deletePricingItem(id: string): boolean {
  const items = getAllPricingItems(true);
  const filtered = items.filter((i) => i.id.toLowerCase() !== id.toLowerCase());
  if (filtered.length === items.length) return false;
  saveAllPricingItems(filtered);
  return true;
}

export function resetPricingToDefaults(): PricingItemData[] {
  memoryCache = defaultPricingCatalog;
  saveAllPricingItems(defaultPricingCatalog);
  return defaultPricingCatalog;
}
