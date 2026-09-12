export interface MedalSlide {
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

export interface DynamicZincMedalsHero {
  badge: string;
  badgeSub: string;
  title: string;
  highlight: string;
  description: string;
  specStrip: Array<{
    title: string;
    desc: string;
    iconName: string;
  }>;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  tertiaryCta: {
    label: string;
    href: string;
  };
  trustPoints: string[];
  slides: MedalSlide[];
}

export interface MedalCatalogItem {
  id: string;
  code: string;
  title: string;
  category: "championship" | "institutional" | "cutout" | "corporate" | "marathon" | "ribbon";
  material: string;
  finish: string;
  ribbon: string;
  diameter: string;
  img: string;
  badge: string;
  description: string;
  idealFor: string[];
}

export interface DynamicZincMedalsQuickSelection {
  badge: string;
  title: string;
  lede: string;
  catalog: MedalCatalogItem[];
}

export interface MedalStackLayer {
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  material: string;
  benefit: string;
  iconName: string;
  img: string;
  details: string[];
}

export interface DynamicZincMedalsAnatomy {
  badge: string;
  title: string;
  lede: string;
  layers: MedalStackLayer[];
}

export interface MasterMedalSection {
  code: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  setup: string;
  suitable: string[];
  specs: { k: string; v: string }[];
  conclusion: string;
}

export interface DynamicZincMedalsRangeMaster {
  badge: string;
  title: string;
  lede: string;
  sections: MasterMedalSection[];
}

export interface MedalFactor {
  num: string;
  title: string;
  desc: string;
  detail: string;
  iconName: string;
}

export interface MedalPlatingOption {
  title: string;
  badge: string;
  desc: string;
  pros: string[];
  iconName: string;
  highlight?: boolean;
}

export interface DynamicZincMedalsEngineeringGuide {
  badge: string;
  title: string;
  lede: string;
  factors: MedalFactor[];
  fastenersTitle: string;
  fastenersLede: string;
  fasteners: MedalPlatingOption[];
}

export interface MedalApplicationItem {
  title: string;
  desc: string;
  link?: { label: string; href: string };
  iconName: string;
  gradient: string;
  accentColor: string;
  tag: string;
}

export interface DynamicZincMedalsApplications {
  badge: string;
  title: string;
  lede: string;
  subtitle: string;
  applications: MedalApplicationItem[];
}

export interface MedalOrderingStep {
  num: string;
  title: string;
  body: string;
  badge: string;
}

export interface CtaButton {
  label: string;
  href: string;
  primary?: boolean;
}

export interface DynamicZincMedalsWorkflowAndDispatch {
  workflowBadge: string;
  workflowTitle: string;
  workflowLede: string;
  orderingSteps: MedalOrderingStep[];
  dispatchBadge: string;
  dispatchTitle: string;
  dispatchHubTag: string;
  dispatchLede: string;
  dispatchFlowSteps: string[];
  dispatchDisclaimers: string[];
  closingCtaBadge: string;
  closingCtaTitle: string;
  closingCtaLede: string;
  closingCtaButtons: CtaButton[];
  closingCtaBrandingTitle: string;
  closingCtaBrandingLocation: string;
}

export interface DynamicZincMedalsFaqItem {
  q: string;
  a: string;
}

export interface DynamicZincMedalsFaqs {
  eyebrow: string;
  title: string;
  lede: string;
  faqs: DynamicZincMedalsFaqItem[];
}

export interface DynamicZincMedalsSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface DynamicZincMedalsData {
  hero: DynamicZincMedalsHero;
  quickSelection: DynamicZincMedalsQuickSelection;
  anatomy: DynamicZincMedalsAnatomy;
  rangeMaster: DynamicZincMedalsRangeMaster;
  engineeringGuide: DynamicZincMedalsEngineeringGuide;
  applications: DynamicZincMedalsApplications;
  workflowAndDispatch: DynamicZincMedalsWorkflowAndDispatch;
  faqs: DynamicZincMedalsFaqs;
  seo: DynamicZincMedalsSeo;
}
