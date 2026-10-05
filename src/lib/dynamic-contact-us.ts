import { loadDynamicJson, saveDynamicJson } from "./dynamic-storage";
import {
  type DynamicContactUsData,
  DEFAULT_CONTACT_US_DATA,
} from "./dynamic-contact-us-types";

export type { DynamicContactUsData };
export { DEFAULT_CONTACT_US_DATA };

const FILENAME = "dynamic-contact-us.json";

export function getDynamicContactUs(): DynamicContactUsData {
  try {
    const loaded = loadDynamicJson<Partial<DynamicContactUsData>>(FILENAME, DEFAULT_CONTACT_US_DATA);
    return {
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
  } catch (error) {
    console.error("Error reading dynamic-contact-us.json:", error);
    return DEFAULT_CONTACT_US_DATA;
  }
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

  saveDynamicJson(FILENAME, merged);
  return merged;
}

export function resetDynamicContactUs(): DynamicContactUsData {
  saveDynamicJson(FILENAME, DEFAULT_CONTACT_US_DATA);
  return DEFAULT_CONTACT_US_DATA;
}
