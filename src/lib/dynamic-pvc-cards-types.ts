export interface PvcSlide {
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

export interface DynamicPvcCardsHero {
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
  slides: PvcSlide[];
}

export interface PvcCatalogItem {
  id: string;
  code: string;
  title: string;
  category: "plain" | "rfid" | "prox" | "mag";
  material: string;
  dimensions: string;
  print: string;
  durability: string;
  img: string;
  badge: string;
  description: string;
  idealFor: string[];
}

export interface DynamicPvcCardsQuickSelection {
  badge: string;
  title: string;
  lede: string;
  catalog: PvcCatalogItem[];
}

export interface PvcStackLayer {
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

export interface DynamicPvcCardsAnatomy {
  badge: string;
  title: string;
  lede: string;
  layers: PvcStackLayer[];
}

export interface MasterPvcSection {
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

export interface DynamicPvcCardsRangeMaster {
  badge: string;
  title: string;
  lede: string;
  sections: MasterPvcSection[];
}

export interface PvcFactor {
  num: string;
  title: string;
  desc: string;
  detail: string;
  iconName: string;
}

export interface PvcFormulationOption {
  title: string;
  badge: string;
  desc: string;
  pros: string[];
  iconName: string;
  highlight?: boolean;
}

export interface DynamicPvcCardsEngineeringGuide {
  badge: string;
  title: string;
  lede: string;
  factors: PvcFactor[];
  fastenersTitle: string;
  fastenersLede: string;
  fasteners: PvcFormulationOption[];
}

export interface PvcApplicationItem {
  title: string;
  desc: string;
  link?: { label: string; href: string };
  iconName: string;
  gradient: string;
  accentColor: string;
  tag: string;
}

export interface DynamicPvcCardsApplications {
  badge: string;
  title: string;
  lede: string;
  subtitle: string;
  applications: PvcApplicationItem[];
}

export interface PvcOrderingStep {
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

export interface DynamicPvcCardsWorkflowAndDispatch {
  workflowBadge: string;
  workflowTitle: string;
  workflowLede: string;
  orderingSteps: PvcOrderingStep[];
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

export interface DynamicPvcCardsFaqItem {
  q: string;
  a: string;
}

export interface DynamicPvcCardsFaqs {
  eyebrow: string;
  title: string;
  lede: string;
  faqs: DynamicPvcCardsFaqItem[];
}

export interface DynamicPvcCardsSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface DynamicPvcCardsData {
  hero: DynamicPvcCardsHero;
  quickSelection: DynamicPvcCardsQuickSelection;
  anatomy: DynamicPvcCardsAnatomy;
  rangeMaster: DynamicPvcCardsRangeMaster;
  engineeringGuide: DynamicPvcCardsEngineeringGuide;
  applications: DynamicPvcCardsApplications;
  workflowAndDispatch: DynamicPvcCardsWorkflowAndDispatch;
  faqs: DynamicPvcCardsFaqs;
  seo: DynamicPvcCardsSeo;
}
