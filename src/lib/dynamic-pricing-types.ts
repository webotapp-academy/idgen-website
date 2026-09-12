export interface PricingSlideData {
  id: string;
  imageSrc: string;
  alt: string;
  title: string;
  category: string;
  priceTag: string;
  topBadge: string;
  specPill: string;
  bottomSpec: string;
  hubTag: string;
  isActive?: boolean;
}

export interface SetupTierData {
  title: string;
  badge: string;
  formula: string[];
  desc: string;
}

export interface PriceAffectingFactorData {
  title: string;
  desc: string;
}

export interface PricingDirectoryRowData {
  requirement: string;
  page: string;
  href: string;
}

export interface PricingFaqItemData {
  q: string;
  a: string;
}

export interface DynamicPricingPageData {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlightText: string;
    description: string;
    ratesBanner: {
      eyebrow: string;
      text: string;
    };
    ctaPrimary: {
      text: string;
      href: string;
    };
    ctaSecondary: {
      text: string;
      href: string;
    };
  };
  heroSlides: PricingSlideData[];
  setupTiers: SetupTierData[];
  costDeterminants: {
    eyebrow: string;
    title: string;
    lede: string;
    factors: PriceAffectingFactorData[];
  };
  useCases: {
    student: {
      title: string;
      desc: string;
      steps: string[];
      appliesTo: string[];
      linkText: string;
      linkHref: string;
    };
    employee: {
      title: string;
      desc: string;
      steps: string[];
      suitableFor: string[];
      linkText: string;
      linkHref: string;
    };
    bulk: {
      title: string;
      desc: string;
      bulkFactors: string[];
      typicalProjects: string[];
      linkText: string;
      linkHref: string;
    };
  };
  orderReadiness: {
    eyebrow: string;
    title: string;
    desc: string;
    printReady: {
      title: string;
      desc: string;
    };
    customized: {
      title: string;
      desc: string;
      steps: string[];
    };
    linkText: string;
    linkHref: string;
  };
  pricingDirectory: {
    eyebrow: string;
    title: string;
    lede: string;
    items: PricingDirectoryRowData[];
  };
  priceChangesAndQuote: {
    priceChanges: {
      title: string;
      desc: string;
      reasons: string[];
      disclaimer: string;
    };
    customQuote: {
      title: string;
      desc: string;
      formula: string[];
      exampleText: string;
      buttonText: string;
      buttonHref: string;
    };
  };
  faqsSection: {
    eyebrow: string;
    title: string;
    faqs: PricingFaqItemData[];
  };
  pricingSummary: {
    title: string;
    description: string;
  };
  closingCta: {
    badge: string;
    title: string;
    description: string;
    highlightText: string;
    buttons: Array<{
      text: string;
      href: string;
      variant?: "primary" | "secondary";
    }>;
  };
  geographicHub: {
    hubTag: string;
    title: string;
    description: string;
    relatedLinksTitle: string;
    relatedLinks: Array<{
      topic: string;
      href: string;
    }>;
  };
}
