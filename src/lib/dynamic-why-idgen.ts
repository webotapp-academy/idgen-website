import fs from "fs";
import path from "path";
import {
  type DynamicWhyIdgenData,
  DEFAULT_WHY_IDGEN_DATA,
} from "./dynamic-why-idgen-types";

export type { DynamicWhyIdgenData };
export { DEFAULT_WHY_IDGEN_DATA };

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-why-idgen.json");

let memoryCache: DynamicWhyIdgenData | null = null;

export function getDynamicWhyIdgen(): DynamicWhyIdgenData {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const loaded = JSON.parse(raw);
      const mergedData: DynamicWhyIdgenData = {
        ...DEFAULT_WHY_IDGEN_DATA,
        ...loaded,
        metadata: { ...DEFAULT_WHY_IDGEN_DATA.metadata, ...(loaded.metadata || {}) },
        hero: { ...DEFAULT_WHY_IDGEN_DATA.hero, ...(loaded.hero || {}) },
        experience2014: { ...DEFAULT_WHY_IDGEN_DATA.experience2014, ...(loaded.experience2014 || {}) },
        regional: {
          ...DEFAULT_WHY_IDGEN_DATA.regional,
          ...(loaded.regional || {}),
          states: loaded.regional?.states || DEFAULT_WHY_IDGEN_DATA.regional.states,
        },
        journey: {
          ...DEFAULT_WHY_IDGEN_DATA.journey,
          ...(loaded.journey || {}),
          milestones: loaded.journey?.milestones || DEFAULT_WHY_IDGEN_DATA.journey.milestones,
        },
        sectorsAndTrust: {
          ...DEFAULT_WHY_IDGEN_DATA.sectorsAndTrust,
          ...(loaded.sectorsAndTrust || {}),
          sectors: loaded.sectorsAndTrust?.sectors || DEFAULT_WHY_IDGEN_DATA.sectorsAndTrust.sectors,
          trustEvidenceTags:
            loaded.sectorsAndTrust?.trustEvidenceTags || DEFAULT_WHY_IDGEN_DATA.sectorsAndTrust.trustEvidenceTags,
        },
        pillars: {
          ...DEFAULT_WHY_IDGEN_DATA.pillars,
          ...(loaded.pillars || {}),
          carouselItems: loaded.pillars?.carouselItems || DEFAULT_WHY_IDGEN_DATA.pillars.carouselItems,
        },
        dataSecurity: { ...DEFAULT_WHY_IDGEN_DATA.dataSecurity, ...(loaded.dataSecurity || {}) },
        ecosystem: {
          ...DEFAULT_WHY_IDGEN_DATA.ecosystem,
          ...(loaded.ecosystem || {}),
          products: loaded.ecosystem?.products || DEFAULT_WHY_IDGEN_DATA.ecosystem.products,
          projectConfigurations:
            loaded.ecosystem?.projectConfigurations || DEFAULT_WHY_IDGEN_DATA.ecosystem.projectConfigurations,
        },
        productionApproach: {
          ...DEFAULT_WHY_IDGEN_DATA.productionApproach,
          ...(loaded.productionApproach || {}),
          steps: loaded.productionApproach?.steps || DEFAULT_WHY_IDGEN_DATA.productionApproach.steps,
          checkpoints:
            loaded.productionApproach?.checkpoints || DEFAULT_WHY_IDGEN_DATA.productionApproach.checkpoints,
          qualityErrors:
            loaded.productionApproach?.qualityErrors || DEFAULT_WHY_IDGEN_DATA.productionApproach.qualityErrors,
        },
        institutionalScale: {
          ...DEFAULT_WHY_IDGEN_DATA.institutionalScale,
          ...(loaded.institutionalScale || {}),
          bulkDisciplines:
            loaded.institutionalScale?.bulkDisciplines || DEFAULT_WHY_IDGEN_DATA.institutionalScale.bulkDisciplines,
          diffItems: loaded.institutionalScale?.diffItems || DEFAULT_WHY_IDGEN_DATA.institutionalScale.diffItems,
          commitments:
            loaded.institutionalScale?.commitments || DEFAULT_WHY_IDGEN_DATA.institutionalScale.commitments,
          whoWeServeList:
            loaded.institutionalScale?.whoWeServeList || DEFAULT_WHY_IDGEN_DATA.institutionalScale.whoWeServeList,
          futureExpectations:
            loaded.institutionalScale?.futureExpectations || DEFAULT_WHY_IDGEN_DATA.institutionalScale.futureExpectations,
        },
        faqs: {
          ...DEFAULT_WHY_IDGEN_DATA.faqs,
          ...(loaded.faqs || {}),
          items: loaded.faqs?.items || DEFAULT_WHY_IDGEN_DATA.faqs.items,
        },
        closingCta: { ...DEFAULT_WHY_IDGEN_DATA.closingCta, ...(loaded.closingCta || {}) },
      };
      memoryCache = mergedData;
      return mergedData;
    }
  } catch (e) {
    console.error("Error reading dynamic-why-idgen.json, falling back to initial data:", e);
  }

  // Fallback to initial data and persist
  memoryCache = DEFAULT_WHY_IDGEN_DATA;
  saveDynamicWhyIdgen(DEFAULT_WHY_IDGEN_DATA);
  return DEFAULT_WHY_IDGEN_DATA;
}

export function saveDynamicWhyIdgen(data: DynamicWhyIdgenData): DynamicWhyIdgenData {
  const updatedData: DynamicWhyIdgenData = {
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
    console.error("Error saving dynamic-why-idgen.json:", e);
  }

  return updatedData;
}

export function resetDynamicWhyIdgen(): DynamicWhyIdgenData {
  return saveDynamicWhyIdgen(DEFAULT_WHY_IDGEN_DATA);
}
