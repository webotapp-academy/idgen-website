import { loadDynamicJson, saveDynamicJson } from "./dynamic-storage";
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

const DATA_FILENAME = "dynamic-specifications.json";
const CONFIG_FILENAME = "dynamic-specifications-config.json";

export function getSectionConfig(): TechnicalSpecsSectionConfig {
  try {
    const loaded = loadDynamicJson<TechnicalSpecsSectionConfig>(CONFIG_FILENAME, defaultSectionConfig);
    if (loaded && loaded.title) {
      return loaded;
    }
  } catch (e) {
    console.error("Error reading section config:", e);
  }
  return defaultSectionConfig;
}

export function saveSectionConfig(config: Partial<TechnicalSpecsSectionConfig>): TechnicalSpecsSectionConfig {
  const current = getSectionConfig();
  const updated: TechnicalSpecsSectionConfig = {
    eyebrow: config.eyebrow?.trim() || current.eyebrow,
    title: config.title?.trim() || current.title,
    lede: config.lede?.trim() || current.lede,
  };

  saveDynamicJson(CONFIG_FILENAME, updated);
  return updated;
}

export function getAllTechnicalSpecs(includeInactive = false): TechnicalSpecItem[] {
  let loaded = defaultTechnicalSpecs;
  try {
    const fromStorage = loadDynamicJson<TechnicalSpecItem[]>(DATA_FILENAME, defaultTechnicalSpecs);
    if (Array.isArray(fromStorage) && fromStorage.length > 0) {
      loaded = fromStorage;
    }
  } catch (e) {
    console.error("Error reading dynamic-specifications.json, falling back to defaults:", e);
  }

  const items = includeInactive ? loaded : loaded.filter((item) => item.isActive !== false);
  return [...items].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

export function saveAllTechnicalSpecs(items: TechnicalSpecItem[]): void {
  saveDynamicJson(DATA_FILENAME, items);
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
  saveAllTechnicalSpecs(defaultTechnicalSpecs);
  saveSectionConfig(defaultSectionConfig);
  return defaultTechnicalSpecs;
}
