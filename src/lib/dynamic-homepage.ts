import fs from "fs";
import path from "path";
import {
  type DynamicHomePageData,
  DEFAULT_HOMEPAGE_DATA,
} from "./dynamic-homepage-types";

export type { DynamicHomePageData };
export { DEFAULT_HOMEPAGE_DATA };

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-homepage.json");

let memoryCache: DynamicHomePageData | null = null;

export function getDynamicHomePage(): DynamicHomePageData {
  if (memoryCache) {
    return memoryCache;
  }

  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const loaded = JSON.parse(raw);
        const mergedData: DynamicHomePageData = {
          ...DEFAULT_HOMEPAGE_DATA,
          ...loaded,
          metadata: { ...DEFAULT_HOMEPAGE_DATA.metadata, ...(loaded.metadata || {}) },
          hero: { ...DEFAULT_HOMEPAGE_DATA.hero, ...(loaded.hero || {}) },
          productCatalog: {
            ...DEFAULT_HOMEPAGE_DATA.productCatalog,
            ...(loaded.productCatalog || {}),
          },
          trust: { ...DEFAULT_HOMEPAGE_DATA.trust, ...(loaded.trust || {}) },
          identityServices: {
            ...DEFAULT_HOMEPAGE_DATA.identityServices,
            ...(loaded.identityServices || {}),
          },
          completeSolutions: {
            ...DEFAULT_HOMEPAGE_DATA.completeSolutions,
            ...(loaded.completeSolutions || {}),
          },
          studio: { ...DEFAULT_HOMEPAGE_DATA.studio, ...(loaded.studio || {}) },
          whyIdgen: { ...DEFAULT_HOMEPAGE_DATA.whyIdgen, ...(loaded.whyIdgen || {}) },
          atAGlance: { ...DEFAULT_HOMEPAGE_DATA.atAGlance, ...(loaded.atAGlance || {}) },
          regionalHub: { ...DEFAULT_HOMEPAGE_DATA.regionalHub, ...(loaded.regionalHub || {}) },
          faq: { ...DEFAULT_HOMEPAGE_DATA.faq, ...(loaded.faq || {}) },
          closingCta: { ...DEFAULT_HOMEPAGE_DATA.closingCta, ...(loaded.closingCta || {}) },
        };
        memoryCache = mergedData;
        return mergedData;
      }
  } catch (e) {
    console.error("Error reading dynamic-homepage.json, falling back to initial data:", e);
  }

  // Fallback to initial data and persist
  memoryCache = DEFAULT_HOMEPAGE_DATA;
  saveDynamicHomePage(DEFAULT_HOMEPAGE_DATA);
  return DEFAULT_HOMEPAGE_DATA;
}

export function saveDynamicHomePage(data: DynamicHomePageData): DynamicHomePageData {
  const updatedData: DynamicHomePageData = {
    ...data,
    lastUpdated: new Date().toISOString(),
  };

  memoryCache = updatedData;
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(updatedData, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving dynamic-homepage.json:", e);
  }

  return updatedData;
}

export function resetDynamicHomePage(): DynamicHomePageData {
  return saveDynamicHomePage(DEFAULT_HOMEPAGE_DATA);
}
