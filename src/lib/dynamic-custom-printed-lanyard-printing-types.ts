export interface LanyardHeroSlideItem {
  id: string;
  imageSrc: string;
  alt: string;
  title: string;
  category: string;
  topBadge: string;
  specPill: string;
  bottomSpec: string;
  hubTag: string;
}

export type LanyardHeroSlide = LanyardHeroSlideItem;

export interface LanyardHeroSection {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  workflowHeading: string;
  workflowChain: string[];
  workflowNote: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface LanyardCustomElementsSection {
  eyebrow: string;
  title: string;
  image: string;
  imageBadge: string;
  imageWidthBadge: string;
  imageFooterSubtitle: string;
  imageFooterTitle: string;
  imageFooterTag: string;
  containerBadge: string;
  containerCount: string;
  containerIntro: string;
  elements: string[];
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface LanyardWhatIsSection {
  eyebrow: string;
  title: string;
  description: string;
  arrangementHeading: string;
  arrangementChain: string[];
  arrangementNote: string;
}

export interface LanyardSuitableForSection {
  eyebrow: string;
  title: string;
  lede: string;
  subheading: string;
  items: string[];
  footerNote: string;
}

export interface LanyardPrintingOptionItem {
  title: string;
  pattern: string;
  desc: string;
}

export interface LanyardPrintingOptionsSection {
  eyebrow: string;
  title: string;
  lede: string;
  options: LanyardPrintingOptionItem[];
}

export interface LanyardPrintableItemsSection {
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
  footerNote: string;
}

export interface LanyardApplicationCardItem {
  iconName: string;
  title: string;
  body: string;
  linkText: string;
  href: string;
}

export interface LanyardApplicationsSection {
  eyebrow: string;
  title: string;
  lede: string;
  cards: LanyardApplicationCardItem[];
}

export interface LanyardSetupSection {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageBadge: string;
  imageTag: string;
  imageFooterSubtitle: string;
  imageFooterTitle: string;
  imageFooterTag: string;
  option1Heading: string;
  option1Chain: string[];
  option2Heading: string;
  option2Chain: string[];
  note: string;
  links: { topic: string; href: string }[];
}

export interface LanyardBulkOrdersSection {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageBadge: string;
  imageTag: string;
  imageFooterSubtitle: string;
  imageFooterTitle: string;
  imageFooterTag: string;
  requirementsTitle: string;
  requirements: string[];
  note: string;
  ctaText: string;
  ctaLink: string;
}

export interface LanyardArtworkStepItem {
  title: string;
  body: string;
}

export interface LanyardArtworkProcessSection {
  eyebrow: string;
  title: string;
  lede: string;
  steps: LanyardArtworkStepItem[];
}

export interface LanyardBenefitItem {
  iconName: string;
  title: string;
  body: string;
}

export interface LanyardWhyUseSection {
  eyebrow: string;
  title: string;
  items: LanyardBenefitItem[];
}

export interface LanyardDesignGuidelinesSection {
  eyebrow: string;
  title: string;
  description: string;
  recommendedHeading: string;
  recommendedFormula: string;
  guidelinesHeading: string;
  guidelines: string[];
  footerNote: string;
}

export interface LanyardQualityConsiderationsSection {
  eyebrow: string;
  title: string;
  lede: string;
  considerationsHeading: string;
  factors: string[];
  footerNote: string;
}

export interface LanyardUltrasonicSealingSection {
  eyebrow: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  image: string;
  imageBadge: string;
  imageTag: string;
  imageFooterSubtitle: string;
  imageFooterTitle: string;
  imageFooterTag: string;
  ctaText: string;
  ctaLink: string;
}

export interface LanyardConfigTierItem {
  title: string;
  badge: string;
  formula: string[];
  desc: string;
}

export interface LanyardCompleteConfigurationsSection {
  eyebrow: string;
  title: string;
  lede: string;
  tiers: LanyardConfigTierItem[];
  ctaText: string;
  ctaLink: string;
}

export interface LanyardOrderStepItem {
  title: string;
  body: string;
}

export interface LanyardHowToOrderSection {
  eyebrow: string;
  title: string;
  steps: LanyardOrderStepItem[];
  ctaText: string;
  ctaLink: string;
}

export interface LanyardPricingSection {
  eyebrow: string;
  title: string;
  description: string;
  standardProductBadge: string;
  standardProductName: string;
  standardProductNote: string;
  price: string;
  unit: string;
  ctaText: string;
  ctaLink: string;
}

export interface LanyardFaqItem {
  q: string;
  a: string;
}

export interface LanyardFaqSection {
  eyebrow: string;
  title: string;
  faqs: LanyardFaqItem[];
}

export interface LanyardClosingCtaSection {
  badge: string;
  title: string;
  description: string;
  flowChain: string[];
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface LanyardGeographicDirectorySection {
  eyebrow: string;
  title: string;
  description: string;
  directoryHeading: string;
  links: { topic: string; href: string }[];
}

export interface LanyardMetadataSection {
  title: string;
  description: string;
  path: string;
}

export interface DynamicCustomPrintedLanyardPrintingData {
  hero: LanyardHeroSection;
  heroSlides: LanyardHeroSlideItem[];
  customElements: LanyardCustomElementsSection;
  whatIs: LanyardWhatIsSection;
  suitableFor: LanyardSuitableForSection;
  printingOptions: LanyardPrintingOptionsSection;
  printableItems: LanyardPrintableItemsSection;
  applicationCards: LanyardApplicationsSection;
  lanyardSetup: LanyardSetupSection;
  bulkOrders: LanyardBulkOrdersSection;
  artworkProcess: LanyardArtworkProcessSection;
  whyUseLanyards: LanyardWhyUseSection;
  designGuidelines: LanyardDesignGuidelinesSection;
  qualityConsiderations: LanyardQualityConsiderationsSection;
  ultrasonicSealing: LanyardUltrasonicSealingSection;
  completeConfigurations: LanyardCompleteConfigurationsSection;
  howToOrder: LanyardHowToOrderSection;
  pricing: LanyardPricingSection;
  faq: LanyardFaqSection;
  closingCta: LanyardClosingCtaSection;
  geographicDirectory: LanyardGeographicDirectorySection;
  metadata: LanyardMetadataSection;
}
