export interface EmployeeHeroSlideItem {
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

export type EmployeeHeroSlide = EmployeeHeroSlideItem;

export interface EmployeeHeroConfig {
  badge: string;
  badgeSub: string;
  title: string;
  titleHighlight: string;
  description: string;
  personalizationTitle: string;
  personalizationItems: string[];
  note: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;

  eyebrowBadge?: string;
  eyebrowScope?: string;
  titlePrefix?: string;
  personalizationBadge?: string;
  ledeNote?: string;
}

export interface ModernWorkplaceUseItem {
  title: string;
  iconName: string;
  desc: string;
}

export interface ModernWorkplacesSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  items: ModernWorkplaceUseItem[];
  uses?: ModernWorkplaceUseItem[];
  footerNote: string;
}

export interface EmployeeSolutionItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  typicalItems?: string[];
  involvesList?: string[];
  iconName: string;
  image: string;
  accent?: string;
}

export interface EmployeeSolutionsSectionHeader {
  badge: string;
  title: string;
  description: string;
}

export interface EmployeeSolutionsSection {
  eyebrow: string;
  title: string;
  description: string;
  solutions: EmployeeSolutionItem[];
}

export interface EmployeeCardFieldItem {
  id: string;
  name: string;
  category: "front" | "back";
  iconName: string;
  hint: string;
}

export type CardAnatomyField = EmployeeCardFieldItem;

export interface EmployeeCardAnatomySection {
  eyebrow?: string;
  badge?: string;
  title: string;
  description: string;
  footerNote: string;
  frontCardImage?: string;
  backCardImage?: string;
  frontFields: EmployeeCardFieldItem[];
  backFields: EmployeeCardFieldItem[];
}

export interface SamplePersonalizationFieldItem {
  field: string;
  example: string;
  iconName: string;
}

export type SamplePersonalizationField = SamplePersonalizationFieldItem;

export interface EmployeePersonalizationSection {
  eyebrow?: string;
  badge?: string;
  title: string;
  description: string;
  fields: SamplePersonalizationFieldItem[];
  footerNote: string;
}

export interface EmployeeOnboardingSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  workflowTitle?: string;
  steps: string[];
  paragraphs: string[];
  paragraph1?: string;
  paragraph2?: string;
  ctaText: string;
  ctaLink: string;
}

export interface EmployeeReplacementSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  reasons: string[];
  footerNote: string;
}

export interface EmployeeDepartmentsSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  chainTitle?: string;
  departments: string[];
  items: string[];
  paragraphs: string[];
  paragraph1?: string;
  paragraph2?: string;
}

export interface DigitalIdTechItem {
  name: string;
  desc: string;
  iconName?: string;
}

export interface EmployeeDigitalIdSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  technologies: DigitalIdTechItem[];
  qrTitle?: string;
  qrSub?: string;
  barcodeTitle?: string;
  barcodeSub?: string;
  rfidTitle?: string;
  rfidSub?: string;
  footerNote: string;
  ctaText: string;
  ctaLink: string;
}

export interface EmployeeSetupLinkItem {
  label: string;
  url: string;
}

export interface EmployeeCompleteSetupSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  comboPill: string;
  setupHeading?: string;
  setupPillText?: string;
  footerNote: string;
  links: EmployeeSetupLinkItem[];
  link1Text?: string;
  link1Href?: string;
  link2Text?: string;
  link2Href?: string;
  link3Text?: string;
  link3Href?: string;
}

export interface EmployeeBulkSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  requirements: string[];
  bulkRequirements?: string[];
  factorsTitle: string;
  factorsPill: string;
  factorsText?: string;
  footerNote: string;
  ctaText: string;
  ctaLink: string;
}

export interface EmployeeDataRequirementsSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  structureTitle?: string;
  pillars: string[];
  dataPillars?: string[];
  paragraphs: string[];
  paragraph1?: string;
  paragraph2?: string;
  ctaText: string;
  ctaLink: string;
}

export interface EmployeePreviewApprovalSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  checkpointsTitle?: string;
  issues: string[];
  previewIssues?: string[];
  objectiveNote?: string;
  objectiveText?: string;
  ctaText?: string;
  ctaLink?: string;
  linkText?: string;
  linkHref?: string;
}

export interface EmployeePricingSection {
  eyebrow?: string;
  badge: string;
  title: string;
  paragraphs: string[];
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  ctaText: string;
  ctaLink: string;
}

export interface EmployeeWhoCanOrderSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  clients: string[];
  footerNote: string;
}

export interface EmployeeCoverageLinkItem {
  label: string;
  url: string;
}

export interface EmployeeCoverageSection {
  eyebrow?: string;
  badge: string;
  title: string;
  description: string;
  locations: string[];
  footerNote: string;
  links: EmployeeCoverageLinkItem[];
  cta1Text?: string;
  cta1Link?: string;
  cta2Text?: string;
  cta2Link?: string;
}

export interface EmployeeWhyChoosePillarItem {
  title: string;
  desc: string;
  iconName: string;
}

export type WhyChoosePillarItem = EmployeeWhyChoosePillarItem;

export interface EmployeeWhyChooseSection {
  eyebrow?: string;
  badge: string;
  title: string;
  pillars: EmployeeWhyChoosePillarItem[];
  ctaText?: string;
  ctaLink?: string;
  linkText?: string;
  linkHref?: string;
}

export interface EmployeeOrderStepItem {
  num: string;
  title: string;
  desc: string;
}

export type HowToOrderStepItem = EmployeeOrderStepItem;

export interface EmployeeHowToOrderSection {
  eyebrow?: string;
  badge?: string;
  title: string;
  steps: EmployeeOrderStepItem[];
  ctaText: string;
  ctaLink: string;
}

export interface EmployeeFaqItem {
  q: string;
  a: string;
}

export interface EmployeeFaqSection {
  eyebrow?: string;
  badge?: string;
  title: string;
  lede?: string;
  faqs: EmployeeFaqItem[];
}

export interface EmployeeQuickAnswerSection {
  badge?: string;
  title?: string;
  text: string;
}

export interface EmployeeClosingCtaSection {
  title: string;
  body?: string;
  description?: string;
  flowStepsText?: string;
  workflowPill?: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  tertiaryCtaText?: string;
  tertiaryCtaLink?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  studioBtnText?: string;
  studioBtnLink?: string;
}

export interface EmployeeSeoMetadata {
  title: string;
  description: string;
  path: string;
}

export interface DynamicEmployeeIdCardPrintingData {
  hero: EmployeeHeroConfig;
  heroSlides: EmployeeHeroSlideItem[];
  modernWorkplaces: ModernWorkplacesSection;
  solutionsSection: EmployeeSolutionsSectionHeader;
  solutions: EmployeeSolutionItem[];
  cardAnatomy: EmployeeCardAnatomySection;
  personalization: EmployeePersonalizationSection;
  onboarding: EmployeeOnboardingSection;
  replacement: EmployeeReplacementSection;
  departments: EmployeeDepartmentsSection;
  digitalId: EmployeeDigitalIdSection;
  completeSetup: EmployeeCompleteSetupSection;
  bulk: EmployeeBulkSection;
  dataRequirements: EmployeeDataRequirementsSection;
  previewApproval: EmployeePreviewApprovalSection;
  pricing: EmployeePricingSection;
  whoCanOrder: EmployeeWhoCanOrderSection;
  coverage: EmployeeCoverageSection;
  whyChoose: EmployeeWhyChooseSection;
  howToOrder: EmployeeHowToOrderSection;
  faq: EmployeeFaqSection;
  quickAnswer: EmployeeQuickAnswerSection;
  closingCta: EmployeeClosingCtaSection;
  metadata: EmployeeSeoMetadata;
}
