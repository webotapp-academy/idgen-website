export interface EventHeroSlideItem {
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

export type EventHeroSlide = EventHeroSlideItem;

export interface EventHeroConfig {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  workflowHeading: string;
  workflowChain: string[];
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface EventWhatIsSection {
  eyebrow: string;
  title: string;
  description: string;
  attendeesHeading: string;
  attendees: string[];
}

export interface EventLayoutSpecimen {
  eyebrow: string;
  structureTag: string;
  eventLogoText: string;
  eventName: string;
  participantName: string;
  organization: string;
  categoryBadge: string;
  regNumber: string;
  footerNote: string;
}

export interface EventCustomFieldsSection {
  eyebrow: string;
  title: string;
  lede: string;
  fieldsHeading: string;
  fields: string[];
  specimen: EventLayoutSpecimen;
}

export interface EventFormatItem {
  title: string;
  body: string;
  iconName: string;
  href?: string;
  linkText?: string;
}

export interface EventTypesSection {
  eyebrow: string;
  title: string;
  lede: string;
  types: EventFormatItem[];
}

export interface EventAttachmentOption {
  heading: string;
  chain: string[];
  note: string;
}

export interface EventAttachmentLink {
  topic: string;
  href: string;
}

export interface EventAttachmentSection {
  image: string;
  imageBadge: string;
  imageTag: string;
  imageFooterSubtitle: string;
  imageFooterTitle: string;
  imageFooterTag: string;
  eyebrow: string;
  title: string;
  description: string;
  option1: EventAttachmentOption;
  option2: EventAttachmentOption;
  note: string;
  links: EventAttachmentLink[];
}

export interface EventUltrasonicSection {
  eyebrow: string;
  title: string;
  description: string;
  oneHookHeading: string;
  oneHookChain: string[];
  twoHookHeading: string;
  twoHookChain: string[];
  ctaText: string;
  ctaLink: string;
}

export interface EventRightAttachmentSection {
  eyebrow: string;
  title: string;
  description: string;
  chain: string[];
  note: string;
}

export interface EventCategoryItem {
  name: string;
  color: string;
}

export interface EventCategoriesSection {
  eyebrow: string;
  title: string;
  lede: string;
  categories: EventCategoryItem[];
}

export interface EventBrandingSection {
  eyebrow: string;
  title: string;
  description: string;
  elements: string[];
  structureHeading: string;
  structureSteps: string[];
  structureNote: string;
}

export interface EventPersonalizationSection {
  eyebrow: string;
  title: string;
  description: string;
  chain: string[];
  note: string;
  ctaText: string;
  ctaLink: string;
}

export interface EventBulkSection {
  eyebrow: string;
  title: string;
  lede: string;
  factorsHeading: string;
  factors: string[];
  footerNote: string;
}

export interface EventProcessStepItem {
  title: string;
  body: string;
}

export interface EventProcessSection {
  eyebrow: string;
  title: string;
  steps: EventProcessStepItem[];
}

export interface EventSolutionItem {
  type: string;
  setup: string[];
  desc: string;
}

export interface EventSolutionsSection {
  eyebrow: string;
  title: string;
  solutions: EventSolutionItem[];
}

export interface EventComparisonItem {
  type: string;
  setup: string[];
}

export interface EventComparisonLink {
  label: string;
  href: string;
}

export interface EventComparisonSection {
  eyebrow: string;
  title: string;
  description: string;
  items: EventComparisonItem[];
  footerNote: string;
  links: EventComparisonLink[];
}

export interface EventInfoRequirementGroup {
  title: string;
  items: string[];
}

export interface EventInformationNeededSection {
  eyebrow: string;
  title: string;
  lede: string;
  groups: EventInfoRequirementGroup[];
}

export interface EventQualityCheckItem {
  title: string;
  body: string;
}

export interface EventQualityChecksSection {
  eyebrow: string;
  title: string;
  lede: string;
  checks: EventQualityCheckItem[];
}

export interface EventPricingSection {
  eyebrow: string;
  title: string;
  description: string;
  factors: string[];
  note: string;
  cta1Text: string;
  cta1Link: string;
  cta2Text: string;
  cta2Link: string;
  cta3Text: string;
  cta3Link: string;
}

export interface EventWhyChooseSection {
  eyebrow: string;
  title: string;
  description: string;
  chain: string[];
  note: string;
  ctaText: string;
  ctaLink: string;
}

export interface EventFaqItem {
  q: string;
  a: string;
}

export interface EventFaqSection {
  eyebrow: string;
  title: string;
  faqs: EventFaqItem[];
}

export interface EventConfigPackageItem {
  title: string;
  badge: string;
  formula: string[];
  desc: string;
}

export interface EventClosingCtaSection {
  badge: string;
  title: string;
  description: string;
  packages: EventConfigPackageItem[];
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface EventSummaryBannerSection {
  eyebrow: string;
  title: string;
  chain: string[];
}

export interface EventInternalLinkItem {
  topic: string;
  href: string;
}

export interface EventGeographicDirectorySection {
  eyebrow: string;
  title: string;
  description: string;
  directoryHeading: string;
  links: EventInternalLinkItem[];
}

export interface EventSeoMetadata {
  title: string;
  description: string;
  path: string;
}

export interface DynamicEventCardPrintingData {
  hero: EventHeroConfig;
  heroSlides: EventHeroSlideItem[];
  whatIs: EventWhatIsSection;
  customFields: EventCustomFieldsSection;
  eventTypes: EventTypesSection;
  attachment: EventAttachmentSection;
  ultrasonic: EventUltrasonicSection;
  rightAttachment: EventRightAttachmentSection;
  categories: EventCategoriesSection;
  branding: EventBrandingSection;
  personalization: EventPersonalizationSection;
  bulk: EventBulkSection;
  process: EventProcessSection;
  solutions: EventSolutionsSection;
  comparison: EventComparisonSection;
  informationNeeded: EventInformationNeededSection;
  qualityChecks: EventQualityChecksSection;
  pricing: EventPricingSection;
  whyChoose: EventWhyChooseSection;
  faq: EventFaqSection;
  closingCta: EventClosingCtaSection;
  summaryBanner: EventSummaryBannerSection;
  geographicDirectory: EventGeographicDirectorySection;
  metadata: EventSeoMetadata;
}
