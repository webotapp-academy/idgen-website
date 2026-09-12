export interface StudentHeroSlideItem {
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

export interface StudentHeroConfig {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  lede: string;
  description: string;
  stats: { label: string; value: string }[];
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  studentCardFields: string[];
  studentCardFieldsNote: string;
}

export interface StudentOrgSlideItem {
  id: string;
  badge: string;
  title: string;
  categoryDesc: string;
  forLabel: string;
  items: string[];
  iconName: string;
  accentGradient: string;
  bgGlow: string;
  pillColor: string;
  imageSrc?: string;
}

export interface StudentOrgScopeSection {
  eyebrow: string;
  title: string;
  description: string;
  footerNote: string;
  items: StudentOrgSlideItem[];
}

export interface CardAnatomyField {
  id: string;
  name: string;
  category: "front" | "back";
  iconName: string;
  hint: string;
}

export interface StudentCardAnatomySection {
  eyebrow: string;
  title: string;
  description: string;
  subheading: string;
  footerNote: string;
  frontCardImage?: string;
  backCardImage?: string;
  frontFields: CardAnatomyField[];
  backFields: CardAnatomyField[];
}

export interface StudentDesignElement {
  name: string;
  iconName: string;
}

export interface StudentDesignSection {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badgeTopLeft: string;
  badgeTopRight: string;
  footerTagline: string;
  footerTitle: string;
  footerStatus: string;
  boxTitle: string;
  elements: StudentDesignElement[];
  note: string;
}

export interface StudentPvcCardItem {
  number: string;
  tag: string;
  title: string;
  description: string;
  bottomLeft: string;
  bottomRight: string;
  iconName: string;
  colorScheme: "cyan" | "indigo" | "teal";
}

export interface StudentPvcSection {
  eyebrow: string;
  title: string;
  specPill: string;
  cards: StudentPvcCardItem[];
  footerNote: string;
  footerCtaText: string;
  footerCtaLink: string;
}

export interface StudentWorkflowConfigStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  categoryTag: string;
  glowColor: string;
  imageSrc?: string;
}

export interface StudentProcessSection {
  eyebrow: string;
  title: string;
  description: string;
  steps: StudentWorkflowConfigStep[];
}

export interface StudentAssemblyTierItem {
  tier: string;
  title: string;
  card: string;
  desc: string;
  iconName: string;
  isHighlight?: boolean;
  imageSrc?: string;
}

export interface StudentAssemblySection {
  eyebrow: string;
  title: string;
  description: string;
  tiers: StudentAssemblyTierItem[];
  footerNote: string;
  footerCtaText: string;
  footerCtaLink: string;
}

export interface StudentLanyardsSection {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  setupBannerTitle: string;
  setupSteps: string[];
  footerNote: string;
  footerCtaText: string;
  footerCtaLink: string;
}

export interface StudentStudioSection {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  cloudLabel: string;
  flowTitle: string;
  flowSteps: string[];
  subheading: string;
  fields: string[];
  closingNote: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  imageBadge: string;
  imageTitle: string;
  imageTag: string;
}

export interface StudentBulkSection {
  eyebrow: string;
  title: string;
  description: string;
  leftBoxTitle: string;
  bulkRequirements: string[];
  rightBoxTitle: string;
  productionScheduleFactors: string[];
  footerNote: string;
  footerCtaText: string;
  footerCtaLink: string;
}

export interface StudentSessionsSection {
  box1Eyebrow: string;
  box1Title: string;
  box1Subtitle: string;
  annualFlowTitle: string;
  annualFlowSteps: string[];
  box1Paragraph1: string;
  box1Paragraph2: string;

  box2Eyebrow: string;
  box2Title: string;
  box2Subtitle: string;
  replacementReasons: string[];
  box2Paragraph1: string;
  box2Paragraph2: string;
}

export interface StudentSecuritySection {
  qrEyebrow: string;
  qrTitle: string;
  qrSubtitle: string;
  qrListTitle: string;
  qrApplications: string[];
  qrNote: string;
  rfidNote: string;
  rfidCtaText: string;
  rfidCtaLink: string;

  qcEyebrow: string;
  qcTitle: string;
  qcSubtitle: string;
  qcParagraph1: string;
  qcWorkflowTitle: string;
  qcWorkflowSteps: string[];
  qcParagraph2: string;
}

export interface StudentApplicationsSection {
  eyebrow: string;
  title: string;
  description: string;
  applications: string[];
  footerNote: string;
}

export interface StudentCoverageSection {
  eyebrow: string;
  title: string;
  description: string;
  subheading: string;
  cities: string[];
  footerNote: string;
  cta1Text: string;
  cta1Link: string;
  cta2Text: string;
  cta2Link: string;
}

export interface StudentWhyChooseReasonItem {
  title: string;
  body: string;
  iconName: string;
}

export interface StudentWhyChooseSection {
  eyebrow: string;
  title: string;
  description: string;
  reasons: StudentWhyChooseReasonItem[];
  footerNote: string;
  footerLinkText: string;
  footerLinkUrl: string;
}

export interface StudentPricingSection {
  eyebrow: string;
  title: string;
  description: string;
  boxTitle: string;
  badge: string;
  factors: string[];
  boxNote: string;
  bottomText: string;
  ctaText: string;
  ctaLink: string;
}

export interface StudentEligibleOrgsSection {
  eyebrow: string;
  title: string;
  description: string;
  organizations: string[];
}

export interface StudentFaqItem {
  q: string;
  a: string;
}

export interface StudentFaqSection {
  eyebrow: string;
  title: string;
  faqs: StudentFaqItem[];
}

export interface StudentQuickAnswerAndCta {
  quickAnswerBadge: string;
  quickAnswerBody: string;
  ctaTitle: string;
  ctaBody: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryLinks: { label: string; href: string }[];
}

export interface StudentSeoMetadata {
  title: string;
  description: string;
  path: string;
}

export interface DynamicStudentIdCardPrintingData {
  hero: StudentHeroConfig;
  heroSlides: StudentHeroSlideItem[];
  scope: StudentOrgScopeSection;
  cardAnatomy: StudentCardAnatomySection;
  design: StudentDesignSection;
  pvc: StudentPvcSection;
  process: StudentProcessSection;
  assembly: StudentAssemblySection;
  lanyards: StudentLanyardsSection;
  studio: StudentStudioSection;
  bulk: StudentBulkSection;
  sessions: StudentSessionsSection;
  security: StudentSecuritySection;
  applications: StudentApplicationsSection;
  coverage: StudentCoverageSection;
  whyChoose: StudentWhyChooseSection;
  pricing: StudentPricingSection;
  eligibleOrgs: StudentEligibleOrgsSection;
  faq: StudentFaqSection;
  quickAnswerAndCta: StudentQuickAnswerAndCta;
  metadata: StudentSeoMetadata;
}
