import fs from "fs";
import path from "path";
import {
  type DynamicContactUsData,
  DEFAULT_CONTACT_US_DATA,
} from "./dynamic-contact-us-types";

export type { DynamicContactUsData };
export { DEFAULT_CONTACT_US_DATA };

const DATA_FILE_PATH = path.join(
  process.cwd(),
  "src",
  "data",
  "dynamic-contact-us.json"
);

let memoryCache: DynamicContactUsData | null = null;

export function getDynamicContactUs(): DynamicContactUsData {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const loaded = JSON.parse(raw);
      const mergedData: DynamicContactUsData = {
        ...DEFAULT_CONTACT_US_DATA,
        ...loaded,
        meta: { ...DEFAULT_CONTACT_US_DATA.meta, ...(loaded.meta || {}) },
        hero: {
          ...DEFAULT_CONTACT_US_DATA.hero,
          ...(loaded.hero || {}),
          stats: loaded.hero?.stats || DEFAULT_CONTACT_US_DATA.hero.stats,
          visual: {
            ...DEFAULT_CONTACT_US_DATA.hero.visual,
            ...(loaded.hero?.visual || {}),
            primaryImage: {
              ...DEFAULT_CONTACT_US_DATA.hero.visual.primaryImage,
              ...(loaded.hero?.visual?.primaryImage || {}),
            },
            secondaryImage: {
              ...DEFAULT_CONTACT_US_DATA.hero.visual.secondaryImage,
              ...(loaded.hero?.visual?.secondaryImage || {}),
            },
            tertiaryImage: {
              ...DEFAULT_CONTACT_US_DATA.hero.visual.tertiaryImage,
              ...(loaded.hero?.visual?.tertiaryImage || {}),
            },
          },
        },
        channels: {
          ...DEFAULT_CONTACT_US_DATA.channels,
          ...(loaded.channels || {}),
          hotline: {
            ...DEFAULT_CONTACT_US_DATA.channels.hotline,
            ...(loaded.channels?.hotline || {}),
          },
          whatsapp: {
            ...DEFAULT_CONTACT_US_DATA.channels.whatsapp,
            ...(loaded.channels?.whatsapp || {}),
          },
          email: {
            ...DEFAULT_CONTACT_US_DATA.channels.email,
            ...(loaded.channels?.email || {}),
          },
          socialAndReviews: {
            ...DEFAULT_CONTACT_US_DATA.channels.socialAndReviews,
            ...(loaded.channels?.socialAndReviews || {}),
            links:
              loaded.channels?.socialAndReviews?.links ||
              DEFAULT_CONTACT_US_DATA.channels.socialAndReviews.links,
          },
        },
        facility: {
          ...DEFAULT_CONTACT_US_DATA.facility,
          ...(loaded.facility || {}),
          primaryCta: {
            ...DEFAULT_CONTACT_US_DATA.facility.primaryCta,
            ...(loaded.facility?.primaryCta || {}),
          },
          secondaryCta: {
            ...DEFAULT_CONTACT_US_DATA.facility.secondaryCta,
            ...(loaded.facility?.secondaryCta || {}),
          },
        },
        formSection: {
          ...DEFAULT_CONTACT_US_DATA.formSection,
          ...(loaded.formSection || {}),
        },
        closingCta: {
          ...DEFAULT_CONTACT_US_DATA.closingCta,
          ...(loaded.closingCta || {}),
          links:
            loaded.closingCta?.links ||
            DEFAULT_CONTACT_US_DATA.closingCta.links,
        },
      };
      memoryCache = mergedData;
      return mergedData;
    }
  } catch (error) {
    console.error("Error reading dynamic-contact-us.json:", error);
  }

  if (!memoryCache) {
    memoryCache = DEFAULT_CONTACT_US_DATA;
  }
  return memoryCache;
}

export function saveDynamicContactUs(
  newData: Partial<DynamicContactUsData>
): DynamicContactUsData {
  const current = getDynamicContactUs();
  const merged: DynamicContactUsData = {
    ...current,
    ...newData,
    meta: { ...current.meta, ...(newData.meta || {}) },
    hero: {
      ...current.hero,
      ...(newData.hero || {}),
      stats: newData.hero?.stats || current.hero.stats,
      visual: {
        ...current.hero.visual,
        ...(newData.hero?.visual || {}),
        primaryImage: {
          ...current.hero.visual.primaryImage,
          ...(newData.hero?.visual?.primaryImage || {}),
        },
        secondaryImage: {
          ...current.hero.visual.secondaryImage,
          ...(newData.hero?.visual?.secondaryImage || {}),
        },
        tertiaryImage: {
          ...current.hero.visual.tertiaryImage,
          ...(newData.hero?.visual?.tertiaryImage || {}),
        },
      },
    },
    channels: {
      ...current.channels,
      ...(newData.channels || {}),
      hotline: {
        ...current.channels.hotline,
        ...(newData.channels?.hotline || {}),
      },
      whatsapp: {
        ...current.channels.whatsapp,
        ...(newData.channels?.whatsapp || {}),
      },
      email: {
        ...current.channels.email,
        ...(newData.channels?.email || {}),
      },
      socialAndReviews: {
        ...current.channels.socialAndReviews,
        ...(newData.channels?.socialAndReviews || {}),
        links:
          newData.channels?.socialAndReviews?.links ||
          current.channels.socialAndReviews.links,
      },
    },
    facility: {
      ...current.facility,
      ...(newData.facility || {}),
      primaryCta: {
        ...current.facility.primaryCta,
        ...(newData.facility?.primaryCta || {}),
      },
      secondaryCta: {
        ...current.facility.secondaryCta,
        ...(newData.facility?.secondaryCta || {}),
      },
    },
    formSection: {
      ...current.formSection,
      ...(newData.formSection || {}),
    },
    closingCta: {
      ...current.closingCta,
      ...(newData.closingCta || {}),
      links: newData.closingCta?.links || current.closingCta.links,
    },
  };

  try {
    fs.mkdirSync(path.dirname(DATA_FILE_PATH), { recursive: true });
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(merged, null, 2), "utf-8");
    memoryCache = merged;
  } catch (error) {
    console.error("Error writing dynamic-contact-us.json:", error);
    throw error;
  }

  return merged;
}

export function resetDynamicContactUs(): DynamicContactUsData {
  try {
    fs.writeFileSync(
      DATA_FILE_PATH,
      JSON.stringify(DEFAULT_CONTACT_US_DATA, null, 2),
      "utf-8"
    );
    memoryCache = DEFAULT_CONTACT_US_DATA;
    return DEFAULT_CONTACT_US_DATA;
  } catch (error) {
    console.error("Error resetting dynamic-contact-us.json:", error);
    throw error;
  }
}
