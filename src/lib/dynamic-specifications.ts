import fs from "fs";
import path from "path";
import {
  SpecDetail,
  TechnicalSpecItem,
  TechnicalSpecsSectionConfig,
  defaultSectionConfig,
  defaultTechnicalSpecs,
} from "./dynamic-specifications-types";

export * from "./dynamic-specifications-types";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-specifications.json");
const CONFIG_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-specifications-config.json");

let memorySpecsCache: TechnicalSpecItem[] | null = null;
let memoryConfigCache: TechnicalSpecsSectionConfig | null = null;

export function getSectionConfig(): TechnicalSpecsSectionConfig {
  if (memoryConfigCache) return memoryConfigCache;

  try {
    if (fs.existsSync(CONFIG_FILE_PATH)) {
      const raw = fs.readFileSync(CONFIG_FILE_PATH, "utf-8");
      const loaded = JSON.parse(raw);
      if (loaded && loaded.title) {
        memoryConfigCache = loaded;
        return loaded;
      }
    }
  } catch (e) {
    console.error("Error reading section config:", e);
  }

  memoryConfigCache = defaultSectionConfig;
  return defaultSectionConfig;
}

export function saveSectionConfig(config: Partial<TechnicalSpecsSectionConfig>): TechnicalSpecsSectionConfig {
  const current = getSectionConfig();
  const updated: TechnicalSpecsSectionConfig = {
    eyebrow: config.eyebrow?.trim() || current.eyebrow,
    title: config.title?.trim() || current.title,
    lede: config.lede?.trim() || current.lede,
  };

  memoryConfigCache = updated;
  try {
    const dir = path.dirname(CONFIG_FILE_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(CONFIG_FILE_PATH, JSON.stringify(updated, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving section config:", e);
  }

  return updated;
}

export function getAllTechnicalSpecs(includeInactive = false): TechnicalSpecItem[] {
  if (memorySpecsCache) {
    const items = includeInactive ? memorySpecsCache : memorySpecsCache.filter((item) => item.isActive !== false);
    return [...items].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }

  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const loaded: TechnicalSpecItem[] = JSON.parse(raw);
      if (Array.isArray(loaded) && loaded.length > 0) {
        memorySpecsCache = loaded;
        const items = includeInactive ? memorySpecsCache : memorySpecsCache.filter((item) => item.isActive !== false);
        return [...items].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
      }
    }
  } catch (e) {
    console.error("Error reading dynamic-specifications.json, falling back to defaults:", e);
  }

  memorySpecsCache = defaultTechnicalSpecs;
  saveAllTechnicalSpecs(defaultTechnicalSpecs);
  const items = includeInactive ? memorySpecsCache : memorySpecsCache.filter((item) => item.isActive !== false);
  return [...items].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

export function saveAllTechnicalSpecs(items: TechnicalSpecItem[]): void {
  memorySpecsCache = items;
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(items, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving dynamic-specifications.json:", e);
  }
}

export function saveTechnicalSpec(
  specData: Partial<TechnicalSpecItem> & { id: string; name: string }
): TechnicalSpecItem {
  const items = getAllTechnicalSpecs(true);
  const index = items.findIndex((i) => i.id.toLowerCase() === specData.id.toLowerCase());

  const updatedItem: TechnicalSpecItem = {
    id: specData.id.trim().toLowerCase().replace(/\s+/g, "-"),
    name: specData.name.trim(),
    category: specData.category?.trim() || "Identity Cards",
    description: specData.description?.trim() || "Direct factory manufactured & quality inspected at IDGen cleanrooms.",
    priceFormula: specData.priceFormula || "auto",
    matchedPricingIds: Array.isArray(specData.matchedPricingIds) ? specData.matchedPricingIds : [],
    imageSrc: specData.imageSrc?.trim() || "/images/product-pvc-cards.jpg",
    alt: specData.alt?.trim() || specData.name.trim(),
    imageTag: specData.imageTag?.trim() || specData.category?.trim() || "Identity Cards",
    pageHref: specData.pageHref?.trim() || "/pricing/",
    buttonText: specData.buttonText?.trim() || "Get Quote",
    specs: Array.isArray(specData.specs)
      ? specData.specs.filter((s) => s && s.label && s.label.trim() !== "")
      : [],
    highlights: Array.isArray(specData.highlights)
      ? specData.highlights.filter((h) => h && h.trim() !== "")
      : [],
    sortOrder: typeof specData.sortOrder === "number" ? specData.sortOrder : items.length + 1,
    isActive: specData.isActive !== false,
    updatedAt: new Date().toISOString(),
  };

  if (index >= 0) {
    items[index] = { ...items[index], ...updatedItem };
  } else {
    items.push(updatedItem);
  }

  saveAllTechnicalSpecs(items);
  return updatedItem;
}

export function deleteTechnicalSpec(id: string): boolean {
  const items = getAllTechnicalSpecs(true);
  const filtered = items.filter((i) => i.id.toLowerCase() !== id.toLowerCase());
  if (filtered.length === items.length) return false;
  saveAllTechnicalSpecs(filtered);
  return true;
}

export function resetTechnicalSpecsToDefaults(): TechnicalSpecItem[] {
  memorySpecsCache = defaultTechnicalSpecs;
  memoryConfigCache = defaultSectionConfig;
  saveAllTechnicalSpecs(defaultTechnicalSpecs);
  saveSectionConfig(defaultSectionConfig);
  return defaultTechnicalSpecs;
}
