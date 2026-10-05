import {
  type DynamicHomePageData,
  DEFAULT_HOMEPAGE_DATA,
} from "./dynamic-homepage-types";
import { loadDynamicJson, saveDynamicJson } from "./dynamic-storage";

export type { DynamicHomePageData };
export { DEFAULT_HOMEPAGE_DATA };

const FILENAME = "dynamic-homepage.json";

export function getDynamicHomePage(): DynamicHomePageData {
  try {
    const loaded = loadDynamicJson<Partial<DynamicHomePageData>>(FILENAME, DEFAULT_HOMEPAGE_DATA);
    return {
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
  } catch (e) {
    console.error("Error reading dynamic-homepage.json, falling back to initial data:", e);
    return DEFAULT_HOMEPAGE_DATA;
  }
}

export function saveDynamicHomePage(data: DynamicHomePageData): DynamicHomePageData {
  const updatedData: DynamicHomePageData = {
    ...data,
    lastUpdated: new Date().toISOString(),
  };
  saveDynamicJson(FILENAME, updatedData);
  return updatedData;
}

export function resetDynamicHomePage(): DynamicHomePageData {
  return saveDynamicHomePage(DEFAULT_HOMEPAGE_DATA);
}

