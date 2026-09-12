import type { UltrasonicSlide } from "@/components/ultrasonic-sealing/UltrasonicHeroCarousel";

export interface DynamicUltrasonicMeta {
  title: string;
  description: string;
  path: string;
}

export interface DynamicUltrasonicHero {
  badge: string;
  h1: string;
  h1Gradient: string;
  description: string;
  advisoryBadge: string;
  advisoryTitle: string;
  advisorySteps: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  slides: UltrasonicSlide[];
}

export interface DynamicUltrasonicSuitableOrganizations {
  eyebrow: string;
  title: string;
  items: string[];
}

export interface DynamicUltrasonicWhatIs {
  eyebrow: string;
  title: string;
  description: string;
  factorsTitle: string;
  factors: string[];
  footnote: string;
}

export interface DynamicUltrasonicWhyUse {
  eyebrow: string;
  title: string;
  lede: string;
  hardwareIssuesTitle: string;
  hardwareIssues: string[];
  advantages: Array<{
    iconName: string;
    title: string;
    body: string;
  }>;
  warningBox: {
    title: string;
    text: string;
  };
}

export interface DynamicUltrasonicCompareTable {
  eyebrow: string;
  title: string;
  columns: string[];
  rows: string[][];
  conclusionText: string;
}

export interface DynamicUltrasonicWearableIntegration {
  eyebrow: string;
  title: string;
  description: string;
  typicalFlow: { label: string; steps: string[] };
  sealedFlow: { label: string; steps: string[] };
  footnote: string;
}

export interface DynamicUltrasonicSealingPoints {
  eyebrow: string;
  title: string;
  lede: string;
  oneHook: {
    badge: string;
    title: string;
    desc: string;
    steps: string[];
  };
  twoHook: {
    badge: string;
    title: string;
    desc: string;
    flow1: string[];
    flow2: string[];
  };
  footnote: string;
}

export interface DynamicUltrasonicEventCards {
  eyebrow: string;
  title: string;
  description: string;
  oneHookCard: { title: string; formula: string };
  twoHookCard: { title: string; formula: string };
  infoText: string;
  linkText: string;
  linkHref: string;
}

export interface DynamicUltrasonicCompleteSets {
  eyebrow: string;
  title: string;
  lede: string;
  setup1: { badge: string; title: string; steps: string[] };
  setup2: { badge: string; title: string; steps: string[] };
  setup3: { badge: string; title: string; steps: string[] };
  linkText: string;
  linkHref: string;
}

export interface DynamicUltrasonicSchoolsAndCompanies {
  schools: {
    iconName: string;
    title: string;
    description: string;
    useCases: string[];
    steps: string[];
    note: string;
    linkText: string;
    linkHref: string;
  };
  companies: {
    iconName: string;
    title: string;
    description: string;
    useCases: string[];
    steps: string[];
    linkText: string;
    linkHref: string;
  };
}

export interface DynamicUltrasonicProcessWorkflow {
  eyebrow: string;
  title: string;
  steps: Array<{
    title: string;
    body: string;
  }>;
}

export interface DynamicUltrasonicQualityAspects {
  eyebrow: string;
  title: string;
  description: string;
  aspects: string[];
  footnote: string;
}

export interface DynamicUltrasonicPricingLogic {
  eyebrow: string;
  title: string;
  description: string;
  principle1: { label: string; text: string };
  principle2: { label: string; text: string };
  infoText: string;
  linkText: string;
  linkHref: string;
}

export interface DynamicUltrasonicAttachmentOptions {
  eyebrow: string;
  title: string;
  lede: string;
  items: Array<{
    title: string;
    badge: string;
    formula: string[];
    desc: string;
  }>;
  footnote: string;
}

export interface DynamicUltrasonicWhyIdgenUses {
  eyebrow: string;
  title: string;
  lede: string;
  features: Array<{
    iconName: string;
    title: string;
    body: string;
  }>;
  footnote: string;
}

export interface DynamicUltrasonicEligibleOrganizations {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  footnote: string;
}

export interface DynamicUltrasonicFaqs {
  eyebrow: string;
  title: string;
  items: Array<{
    q: string;
    a: string;
  }>;
}

export interface DynamicUltrasonicClosingCta {
  badge: string;
  title: string;
  description: string;
  buttonPrimary: { text: string; href: string };
  buttonSecondary: { text: string; href: string };
  buttonTertiary: { text: string; href: string };
  buttonQuaternary: { text: string; href: string };
}

export interface DynamicUltrasonicRegionalDirectory {
  hubTag: string;
  title: string;
  description: string;
  subhead: string;
  links: Array<{
    topic: string;
    href: string;
  }>;
}

export interface DynamicUltrasonicSealingData {
  meta: DynamicUltrasonicMeta;
  hero: DynamicUltrasonicHero;
  suitableOrganizations: DynamicUltrasonicSuitableOrganizations;
  whatIsSealing: DynamicUltrasonicWhatIs;
  whyUseSealing: DynamicUltrasonicWhyUse;
  compareTable: DynamicUltrasonicCompareTable;
  wearableIntegration: DynamicUltrasonicWearableIntegration;
  sealingPoints: DynamicUltrasonicSealingPoints;
  eventCards: DynamicUltrasonicEventCards;
  completeSets: DynamicUltrasonicCompleteSets;
  schoolsAndCompanies: DynamicUltrasonicSchoolsAndCompanies;
  processWorkflow: DynamicUltrasonicProcessWorkflow;
  qualityAspects: DynamicUltrasonicQualityAspects;
  pricingLogic: DynamicUltrasonicPricingLogic;
  attachmentOptions: DynamicUltrasonicAttachmentOptions;
  whyIdgenUses: DynamicUltrasonicWhyIdgenUses;
  eligibleOrganizations: DynamicUltrasonicEligibleOrganizations;
  faqs: DynamicUltrasonicFaqs;
  closingCta: DynamicUltrasonicClosingCta;
  regionalDirectory: DynamicUltrasonicRegionalDirectory;
}
