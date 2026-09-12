import type { RfidSlide } from "@/components/rfid-card-printing/RfidHeroCarousel";

export interface DynamicRfidCardPrintingMeta {
  title: string;
  description: string;
  path: string;
}

export interface DynamicRfidHero {
  badge: string;
  h1: string;
  h1Gradient: string;
  description: string;
  advisoryBadge: string;
  advisoryTitle: string;
  advisorySteps: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  slides: RfidSlide[];
}

export interface DynamicRfidOrgSuitability {
  eyebrow: string;
  title: string;
  subhead: string;
  items: string[];
}

export interface DynamicRfidWhatIs {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    badge: string;
    caption: string;
    statusBadge: string;
  };
  purposes: Array<{
    purposeNumber: string;
    title: string;
    desc: string;
  }>;
  typicalCardTitle: string;
  typicalCardItems: string[];
  footnote: string;
}

export interface DynamicRfidSectorApplications {
  eyebrow: string;
  title: string;
  lede: string;
  items: Array<{
    iconName: string;
    title: string;
    body: string;
  }>;
  warningBox: {
    title: string;
    text: string;
  };
}

export interface DynamicRfidSystemCompatibility {
  eyebrow: string;
  title: string;
  description: string;
  subhead: string;
  factors: string[];
  noticeBox: {
    text: string;
    highlightText: string;
  };
}

export interface DynamicRfidCustomization {
  eyebrow: string;
  title: string;
  lede: string;
  subhead: string;
  fields: string[];
  footnote: string;
}

export interface DynamicRfidStudentAndEmployee {
  studentCard: {
    iconName: string;
    title: string;
    description: string;
    steps: string[];
    applicationsTitle: string;
    applications: string[];
    note: string;
    linkText: string;
    linkHref: string;
  };
  employeeCard: {
    iconName: string;
    title: string;
    description: string;
    steps: string[];
    subtext: string;
    linkText: string;
    linkHref: string;
  };
}

export interface DynamicRfidWorkflowProcess {
  eyebrow: string;
  title: string;
  lede: string;
  steps: Array<{
    title: string;
    body: string;
  }>;
}

export interface DynamicRfidBulkOrders {
  eyebrow: string;
  title: string;
  lede: string;
  subhead: string;
  sectors: string[];
  infoText: string;
  linkText: string;
  linkHref: string;
}

export interface DynamicRfidConfigurations {
  eyebrow: string;
  title: string;
  lede: string;
  items: Array<{
    title: string;
    badge: string;
    formula: string[];
    desc: string;
  }>;
  bottomLinks: Array<{
    label: string;
    href: string;
  }>;
}

export interface DynamicRfidExistingSystemsChecklist {
  eyebrow: string;
  title: string;
  description: string;
  checklist: string[];
  footnote: string;
}

export interface DynamicRfidComparisonTable {
  eyebrow: string;
  title: string;
  columns: string[];
  rows: string[][];
  conclusionText: string;
}

export interface DynamicRfidQualityVerification {
  eyebrow: string;
  title: string;
  lede: string;
  aspects: Array<{
    title: string;
    desc: string;
  }>;
}

export interface DynamicRfidDigitalWorkflow {
  eyebrow: string;
  title: string;
  description: string;
  steps: string[];
  infoText: string;
  ctaText: string;
  ctaHref: string;
}

export interface DynamicRfidWhyChooseIdgen {
  eyebrow: string;
  title: string;
  features: Array<{
    iconName: string;
    title: string;
    body: string;
  }>;
}

export interface DynamicRfidEligibleSectors {
  eyebrow: string;
  title: string;
  description: string;
  sectors: string[];
  footnote: string;
}

export interface DynamicRfidFaqs {
  eyebrow: string;
  title: string;
  items: Array<{
    q: string;
    a: string;
  }>;
}

export interface DynamicRfidClosingCta {
  badge: string;
  title: string;
  description: string;
  infoBox: string;
  buttonPrimary: { text: string; href: string };
  buttonSecondary: { text: string; href: string };
  buttonTertiary: { text: string; href: string };
}

export interface DynamicRfidRegionalDirectory {
  hubTag: string;
  title: string;
  description: string;
  subhead: string;
  links: Array<{
    topic: string;
    href: string;
  }>;
}

export interface DynamicRfidCardPrintingData {
  meta: DynamicRfidCardPrintingMeta;
  hero: DynamicRfidHero;
  orgSuitability: DynamicRfidOrgSuitability;
  whatIsRfid: DynamicRfidWhatIs;
  sectorApplications: DynamicRfidSectorApplications;
  systemCompatibility: DynamicRfidSystemCompatibility;
  customization: DynamicRfidCustomization;
  studentAndEmployee: DynamicRfidStudentAndEmployee;
  workflowProcess: DynamicRfidWorkflowProcess;
  bulkOrders: DynamicRfidBulkOrders;
  configurations: DynamicRfidConfigurations;
  existingSystemsChecklist: DynamicRfidExistingSystemsChecklist;
  comparisonTable: DynamicRfidComparisonTable;
  qualityVerification: DynamicRfidQualityVerification;
  digitalWorkflow: DynamicRfidDigitalWorkflow;
  whyChooseIdgen: DynamicRfidWhyChooseIdgen;
  eligibleSectors: DynamicRfidEligibleSectors;
  faqs: DynamicRfidFaqs;
  closingCta: DynamicRfidClosingCta;
  regionalDirectory: DynamicRfidRegionalDirectory;
}
