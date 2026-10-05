import { loadDynamicJson, saveDynamicJson } from "./dynamic-storage";
import {
  type DynamicCaseStudiesPageData,
  DEFAULT_CASE_STUDIES_PAGE_DATA,
} from "./dynamic-case-studies-types";

export * from "./dynamic-case-studies-types";

const FILENAME = "dynamic-case-studies-page.json";

export function getDynamicCaseStudiesPage(): DynamicCaseStudiesPageData {
  try {
    const data = loadDynamicJson<DynamicCaseStudiesPageData>(FILENAME, DEFAULT_CASE_STUDIES_PAGE_DATA);
    if (data && typeof data === "object" && (data.hero || data.cta)) {
      return {
        hero: {
          ...DEFAULT_CASE_STUDIES_PAGE_DATA.hero,
          ...(data.hero || {}),
          featurePills:
            Array.isArray(data.hero?.featurePills) && data.hero.featurePills.length > 0
              ? data.hero.featurePills
              : DEFAULT_CASE_STUDIES_PAGE_DATA.hero.featurePills,
          trustBadges:
            Array.isArray(data.hero?.trustBadges) && data.hero.trustBadges.length > 0
              ? data.hero.trustBadges
              : DEFAULT_CASE_STUDIES_PAGE_DATA.hero.trustBadges,
          pillars:
            Array.isArray(data.hero?.pillars) && data.hero.pillars.length > 0
              ? data.hero.pillars
              : DEFAULT_CASE_STUDIES_PAGE_DATA.hero.pillars,
          bottomMetrics:
            Array.isArray(data.hero?.bottomMetrics) && data.hero.bottomMetrics.length > 0
              ? data.hero.bottomMetrics
              : DEFAULT_CASE_STUDIES_PAGE_DATA.hero.bottomMetrics,
        },
        cta: {
          ...DEFAULT_CASE_STUDIES_PAGE_DATA.cta,
          ...(data.cta || {}),
        },
      };
    }
  } catch (error) {
    console.error("Error reading dynamic-case-studies-page.json:", error);
  }
  return DEFAULT_CASE_STUDIES_PAGE_DATA;
}

export function saveDynamicCaseStudiesPage(data: DynamicCaseStudiesPageData): DynamicCaseStudiesPageData {
  saveDynamicJson(FILENAME, data);
  return getDynamicCaseStudiesPage();
}

export function resetDynamicCaseStudiesPage(): DynamicCaseStudiesPageData {
  saveDynamicJson(FILENAME, DEFAULT_CASE_STUDIES_PAGE_DATA);
  return DEFAULT_CASE_STUDIES_PAGE_DATA;
}
