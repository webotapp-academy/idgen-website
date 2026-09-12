export interface DynamicPartnersMeta {
  title: string;
  description: string;
  path: string;
}

export interface DynamicPartnersHeroShowcase {
  imageSrc: string;
  alt: string;
  topBadge: string;
  brandBadge: string;
  subTitle: string;
  mainTitle: string;
  regionBadge: string;
}

export interface DynamicPartnersHero {
  badge: string;
  h1: string;
  subtitle: string;
  description: string;
  responsibilityBadge: string;
  responsibilityHighlight: string;
  modelTitle: string;
  modelSteps: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  showcaseCard: DynamicPartnersHeroShowcase;
}

export interface DynamicPartnersWhyPartner {
  eyebrow: string;
  title: string;
  description: string;
  equipmentList: string[];
  valueCallout: string;
}

export interface DynamicPartnersStrengthItem {
  title: string;
  desc: string;
}

export interface DynamicPartnersStrengths {
  eyebrow: string;
  title: string;
  lede: string;
  strengths: DynamicPartnersStrengthItem[];
  synergyCard: {
    eyebrow: string;
    text: string;
  };
}

export interface DynamicPartnersModelItem {
  badge: string;
  title: string;
  tag: string;
  desc: string;
  flowSteps: string[];
  note: string;
  suitableFor?: string[];
  ctaText: string;
  ctaHref: string;
}

export interface DynamicPartnersModels {
  eyebrow: string;
  title: string;
  lede: string;
  reseller: DynamicPartnersModelItem;
  referral: DynamicPartnersModelItem;
  erp: DynamicPartnersModelItem;
  tech: DynamicPartnersModelItem;
}

export interface DynamicPartnersOfferings {
  eyebrow: string;
  title: string;
  lede: string;
  identificationCards: string[];
  accessories: string[];
  ctaText: string;
  ctaHref: string;
}

export interface DynamicPartnersWhyModelWorksCard {
  title: string;
  desc: string;
}

export interface DynamicPartnersWhyModelWorks {
  eyebrow: string;
  title: string;
  cards: DynamicPartnersWhyModelWorksCard[];
  targetCustomersTitle: string;
  targetCustomersDesc: string;
  targetOrganizations: string[];
  regionalTitle: string;
  regionalDesc: string;
  regionalFlow: string[];
  regionalStates: string[];
}

export interface DynamicPartnersGoodProfile {
  eyebrow: string;
  title: string;
  lede: string;
  traits: string[];
  profileCards: {
    title: string;
    desc: string;
    rolePartner?: string;
    roleIdgen?: string;
    flow?: string[];
  }[];
}

export interface DynamicPartnersExperienceAndStudio {
  experience: {
    title: string;
    desc: string;
    flow: string[];
    note: string;
  };
  studio: {
    title: string;
    desc: string;
    flow: string[];
    ctaText: string;
    ctaHref: string;
  };
}

export interface DynamicPartnersWorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface DynamicPartnersWorkflows {
  eyebrow: string;
  title: string;
  resellerTitle: string;
  resellerSteps: DynamicPartnersWorkflowStep[];
  erpTitle: string;
  erpSteps: string[];
}

export interface DynamicPartnersDivision {
  idgenProvidesTitle: string;
  idgenProvides: string[];
  partnerExpectsTitle: string;
  partnerExpects: string[];
}

export interface DynamicPartnersTermsAndTerritory {
  territoryTitle: string;
  territoryDesc: string;
  territoryExamples: string[];
  territoryNote: string;
  franchiseAlertTitle: string;
  franchiseAlertDesc: string;
  commercialTitle: string;
  commercialDesc: string;
}

export interface DynamicPartnersApplication {
  badge: string;
  title: string;
  description: string;
  requirementsTitle: string;
  resellerRequirementsTitle: string;
  resellerRequirements: string[];
  erpRequirementsTitle: string;
  erpRequirements: string[];
  specimenImageSrc: string;
  specimenBadge: string;
}

export interface DynamicPartnersFaqItem {
  q: string;
  a: string;
}

export interface DynamicPartnersFaqs {
  eyebrow: string;
  title: string;
  items: DynamicPartnersFaqItem[];
}

export interface DynamicPartnersClosingCta {
  badge: string;
  title: string;
  description: string;
  equationText: string;
  ctas: {
    label: string;
    href: string;
  }[];
}

export interface DynamicPartnersRegionalDirectory {
  title: string;
  subtitle: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface DynamicPartnersData {
  meta: DynamicPartnersMeta;
  hero: DynamicPartnersHero;
  whyPartner: DynamicPartnersWhyPartner;
  partnerStrengths: DynamicPartnersStrengths;
  models: DynamicPartnersModels;
  offerings: DynamicPartnersOfferings;
  whyModelWorks: DynamicPartnersWhyModelWorks;
  goodPartnerProfile: DynamicPartnersGoodProfile;
  experienceAndStudio: DynamicPartnersExperienceAndStudio;
  detailedWorkflows: DynamicPartnersWorkflows;
  divisionOfRoles: DynamicPartnersDivision;
  termsAndTerritory: DynamicPartnersTermsAndTerritory;
  applicationSection: DynamicPartnersApplication;
  faqs: DynamicPartnersFaqs;
  closingCta: DynamicPartnersClosingCta;
  regionalDirectory: DynamicPartnersRegionalDirectory;
}
