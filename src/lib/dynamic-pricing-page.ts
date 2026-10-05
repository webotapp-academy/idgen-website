import { loadDynamicJson, saveDynamicJson } from "./dynamic-storage";
import fs from "fs";
import path from "path";
import type { DynamicPricingPageData } from "./dynamic-pricing-types";

function getDefaultData(): DynamicPricingPageData {
  const possibleDefaults = [
    path.join(process.cwd(), "src", "data", "dynamic-pricing-page.json"),
    path.join(process.cwd(), "data", "dynamic-pricing-page.json"),
    path.resolve(process.cwd(), "..", "..", "..", "public_html", "data", "dynamic-pricing-page.json"),
  ];

  for (const p of possibleDefaults) {
    try {
      if (fs.existsSync(p)) {
        const fileData = fs.readFileSync(p, "utf-8");
        const parsed = JSON.parse(fileData);
        if (parsed && typeof parsed === "object" && parsed.hero) {
          return parsed as DynamicPricingPageData;
        }
      }
    } catch {
      // Continue
    }
  }

  throw new Error("dynamic-pricing-page.json not found and no fallback available.");
}

export function getDynamicPricingPage(): DynamicPricingPageData {
  try {
    const fallback = getDefaultData();
    const loaded = loadDynamicJson<DynamicPricingPageData>("dynamic-pricing-page.json", fallback);
    return {
      ...fallback,
      ...(loaded || {}),
    };
  } catch (error) {
    console.error("Error reading dynamic-pricing-page.json:", error);
    return getDefaultData();
  }
}

export function saveDynamicPricingPage(data: DynamicPricingPageData): void {
  try {
    saveDynamicJson("dynamic-pricing-page.json", data);
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
  const defaultData = getDefaultData();
  saveDynamicPricingPage(defaultData);
  return defaultData;
}

