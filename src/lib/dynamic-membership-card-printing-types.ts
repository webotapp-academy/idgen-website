import type { MembershipSlide } from "@/components/membership-card-printing/MembershipHeroCarousel";

export interface DynamicMembershipMeta {
  title: string;
  description: string;
  path: string;
}

export interface DynamicMembershipHero {
  badge: string;
  h1: string;
  h1Gradient: string;
  description: string;
  workflowBadge: string;
  workflowTitle: string;
  workflowSteps: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  slides: MembershipSlide[];
}

export interface DynamicMembershipPersonalizedData {
  eyebrow: string;
  title: string;
  items: string[];
  footnote: string;
}

export interface DynamicMembershipWhatIs {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    badgeTop: string;
    brandTop: string;
    badgeBottomSub: string;
    badgeBottomTitle: string;
    badgeBottomTag: string;
  };
  functionsTitle: string;
  functions: string[];
  footnote: string;
}

export interface DynamicMembershipCustomDesign {
  eyebrow: string;
  title: string;
  lede: string;
  elementsTitle: string;
  elements: string[];
  footnote: string;
}

export interface DynamicMembershipPvcPrinting {
  eyebrow: string;
  title: string;
  description: string;
  flowSteps: string[];
  footnote: string;
  cta: { label: string; href: string };
}

export interface DynamicMembershipSector {
  title: string;
  desc: string;
  items: string[];
}

export interface DynamicMembershipSectorsSection {
  eyebrow: string;
  title: string;
  lede: string;
  sectors: DynamicMembershipSector[];
}

export interface DynamicMembershipGameszoneFeature {
  iconName: string;
  title: string;
  desc: string;
}

export interface DynamicMembershipGameszoneSpotlight {
  badge: string;
  title: string;
  titleGradient: string;
  description: string;
  cta: { label: string; href: string };
  features: DynamicMembershipGameszoneFeature[];
}

export interface DynamicMembershipScannableCredentials {
  image: {
    src: string;
    alt: string;
    badgeTop: string;
    brandTop: string;
    badgeBottomSub: string;
    badgeBottomTitle: string;
    badgeBottomTag: string;
  };
  qrSection: {
    title: string;
    description: string;
    functions: string[];
    alertTitle: string;
    alertText: string;
  };
  barcodeSection: {
    title: string;
    description: string;
    applications: string[];
    footnote: string;
  };
}

export interface DynamicMembershipWearableItem {
  iconName: string;
  title: string;
  description: string;
  steps: string[];
  linkText: string;
  linkHref: string;
}

export interface DynamicMembershipWearableAccessories {
  eyebrow: string;
  title: string;
  items: DynamicMembershipWearableItem[];
}

export interface DynamicMembershipBulkPrinting {
  eyebrow: string;
  title: string;
  lede: string;
  requirementsTitle: string;
  scenarios: string[];
  workflowLabel: string;
  workflowSteps: string[];
  footnote: string;
}

export interface DynamicMembershipStudioWorkflow {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    badgeTop: string;
    brandTop: string;
    badgeBottomSub: string;
    badgeBottomTitle: string;
    badgeBottomTag: string;
  };
  submissionWorkflowLabel: string;
  submissionSteps: string[];
  batchWiseLabel: string;
  batches: string[];
  cta: { label: string; href: string };
}

export interface DynamicMembershipDataPrivacy {
  badge: string;
  title: string;
  description: string;
  policyText: string;
  cta: { label: string; href: string };
}

export interface DynamicMembershipSpecimenReplacement {
  specimen: {
    title: string;
    description: string;
    frontLabel: string;
    frontSteps: string[];
    reverseLabel: string;
    reverseElements: string[];
  };
  replacement: {
    title: string;
    description: string;
    triggers: string[];
    footnote: string;
  };
}

export interface DynamicMembershipPricingFactors {
  eyebrow: string;
  title: string;
  description: string;
  factors: string[];
  note: string;
  ctas: Array<{ label: string; href: string }>;
}

export interface DynamicMembershipProductionStep {
  title: string;
  body: string;
}

export interface DynamicMembershipProductionProcess {
  eyebrow: string;
  title: string;
  steps: DynamicMembershipProductionStep[];
}

export interface DynamicMembershipSetupPackage {
  title: string;
  badge: string;
  formula: string[];
  desc: string;
}

export interface DynamicMembershipPackagesSection {
  eyebrow: string;
  title: string;
  lede: string;
  packages: DynamicMembershipSetupPackage[];
  footnote: string;
}

export interface DynamicMembershipWhyChooseItem {
  iconName: string;
  title: string;
  body: string;
}

export interface DynamicMembershipWhyChoose {
  eyebrow: string;
  title: string;
  items: DynamicMembershipWhyChooseItem[];
  cta: { label: string; href: string };
}

export interface DynamicMembershipEligibleSectors {
  eyebrow: string;
  title: string;
  description: string;
  sectors: string[];
}

export interface DynamicMembershipFaqItem {
  q: string;
  a: string;
}

export interface DynamicMembershipFaqSection {
  eyebrow: string;
  title: string;
  faqs: DynamicMembershipFaqItem[];
}

export interface DynamicMembershipClosingCta {
  badge: string;
  title: string;
  description: string;
  ctas: Array<{ label: string; href: string; isPrimary?: boolean }>;
}

export interface DynamicMembershipHubDirectory {
  hubBadge: string;
  hubTitle: string;
  hubDescription: string;
  linksLabel: string;
  internalLinks: Array<{ topic: string; href: string }>;
}

export interface DynamicMembershipCardPrintingPageData {
  meta: DynamicMembershipMeta;
  hero: DynamicMembershipHero;
  personalizedData: DynamicMembershipPersonalizedData;
  whatIs: DynamicMembershipWhatIs;
  customDesign: DynamicMembershipCustomDesign;
  pvcPrinting: DynamicMembershipPvcPrinting;
  sectorsSection: DynamicMembershipSectorsSection;
  gameszoneSpotlight: DynamicMembershipGameszoneSpotlight;
  scannableCredentials: DynamicMembershipScannableCredentials;
  wearableAccessories: DynamicMembershipWearableAccessories;
  bulkPrinting: DynamicMembershipBulkPrinting;
  studioWorkflow: DynamicMembershipStudioWorkflow;
  dataPrivacy: DynamicMembershipDataPrivacy;
  specimenReplacement: DynamicMembershipSpecimenReplacement;
  pricingFactors: DynamicMembershipPricingFactors;
  productionProcess: DynamicMembershipProductionProcess;
  setupPackages: DynamicMembershipPackagesSection;
  whyChoose: DynamicMembershipWhyChoose;
  eligibleSectors: DynamicMembershipEligibleSectors;
  faqsSection: DynamicMembershipFaqSection;
  closingCta: DynamicMembershipClosingCta;
  hubDirectory: DynamicMembershipHubDirectory;
}
