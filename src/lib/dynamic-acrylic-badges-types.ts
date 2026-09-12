export interface BadgeSlide {
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

export interface DynamicAcrylicBadgesHero {
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
  slides: BadgeSlide[];
}

export interface BadgeCatalogItem {
  id: string;
  code: string;
  title: string;
  category: "executive" | "contour" | "medical" | "prefect" | "metallic";
  material: string;
  attachment: string;
  finish: string;
  img: string;
  badge: string;
  description: string;
  idealFor: string[];
}

export interface DynamicAcrylicBadgesQuickSelection {
  badge: string;
  title: string;
  lede: string;
  catalog: BadgeCatalogItem[];
}

export interface BadgeStackLayer {
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

export interface DynamicAcrylicBadgesAnatomy {
  badge: string;
  title: string;
  lede: string;
  layers: BadgeStackLayer[];
}

export interface MasterBadgeSection {
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

export interface DynamicAcrylicBadgesRangeMaster {
  badge: string;
  title: string;
  lede: string;
  sections: MasterBadgeSection[];
}

export interface BadgeFactor {
  num: string;
  title: string;
  desc: string;
  detail: string;
  iconName: string;
}

export interface BadgeFastenerOption {
  title: string;
  badge: string;
  desc: string;
  pros: string[];
  iconName: string;
  highlight?: boolean;
}

export interface DynamicAcrylicBadgesEngineeringGuide {
  badge: string;
  title: string;
  lede: string;
  factors: BadgeFactor[];
  fastenersTitle: string;
  fastenersLede: string;
  fasteners: BadgeFastenerOption[];
}

export interface BadgeApplicationItem {
  title: string;
  desc: string;
  link?: { label: string; href: string };
  iconName: string;
  gradient: string;
  accentColor: string;
  tag: string;
}

export interface DynamicAcrylicBadgesApplications {
  badge: string;
  title: string;
  lede: string;
  subtitle: string;
  applications: BadgeApplicationItem[];
}

export interface BadgeOrderingStep {
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

export interface DynamicAcrylicBadgesWorkflowAndDispatch {
  workflowBadge: string;
  workflowTitle: string;
  workflowLede: string;
  orderingSteps: BadgeOrderingStep[];
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

export interface DynamicAcrylicBadgesFaqItem {
  q: string;
  a: string;
}

export interface DynamicAcrylicBadgesFaqs {
  eyebrow: string;
  title: string;
  lede: string;
  faqs: DynamicAcrylicBadgesFaqItem[];
}

export interface DynamicAcrylicBadgesSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface DynamicAcrylicBadgesData {
  hero: DynamicAcrylicBadgesHero;
  quickSelection: DynamicAcrylicBadgesQuickSelection;
  anatomy: DynamicAcrylicBadgesAnatomy;
  rangeMaster: DynamicAcrylicBadgesRangeMaster;
  engineeringGuide: DynamicAcrylicBadgesEngineeringGuide;
  applications: DynamicAcrylicBadgesApplications;
  workflowAndDispatch: DynamicAcrylicBadgesWorkflowAndDispatch;
  faqs: DynamicAcrylicBadgesFaqs;
  seo: DynamicAcrylicBadgesSeo;
}
