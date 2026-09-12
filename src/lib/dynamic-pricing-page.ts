import fs from "fs";
import path from "path";
import type { DynamicPricingPageData } from "./dynamic-pricing-types";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-pricing-page.json");

let memoryCache: DynamicPricingPageData | null = null;

export function getDynamicPricingPage(): DynamicPricingPageData {
  if (memoryCache) {
    return memoryCache;
  }

  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileData = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const parsed = JSON.parse(fileData);
      memoryCache = parsed;
      return parsed;
    }
  } catch (error) {
    console.error("Error reading dynamic-pricing-page.json:", error);
  }

  throw new Error("dynamic-pricing-page.json not found and no fallback available.");
}

export function saveDynamicPricingPage(data: DynamicPricingPageData): void {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    memoryCache = data;
  } catch (error) {
    console.error("Error saving dynamic-pricing-page.json:", error);
    throw error;
  }
}

export function saveDynamicPricingPageSection<K extends keyof DynamicPricingPageData>(
  section: K,
  data: DynamicPricingPageData[K]
): DynamicPricingPageData {
  const current = getDynamicPricingPage();
  const updated: DynamicPricingPageData = {
    ...current,
    [section]: data,
  };
  saveDynamicPricingPage(updated);
  return updated;
}

export function resetDynamicPricingPage(): DynamicPricingPageData {
  const defaultPath = path.join(process.cwd(), "src", "data", "dynamic-pricing-page.json");
  if (fs.existsSync(defaultPath)) {
    const fileData = fs.readFileSync(defaultPath, "utf-8");
    const parsed = JSON.parse(fileData);
    saveDynamicPricingPage(parsed);
    return parsed;
  }
  return getDynamicPricingPage();
}
