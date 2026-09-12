import type { HolderSlide } from "@/components/id-card-holders/HolderHeroCarousel";

export interface DynamicIdCardHoldersMeta {
  title: string;
  description: string;
  path: string;
}

export interface DynamicHeroFeatureCard {
  title: string;
  subtitle: string;
  iconName: string;
}

export interface DynamicHeroCta {
  label: string;
  href: string;
}

export interface DynamicIdCardHoldersHero {
  badgePrefix: string;
  badgeHighlight: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  featureCards: DynamicHeroFeatureCard[];
  primaryCta: DynamicHeroCta;
  secondaryCta: DynamicHeroCta;
  tertiaryCta: DynamicHeroCta;
  trustBadges: string[];
  slides: HolderSlide[];
}

export interface DynamicQuickSelectionItem {
  req: string;
  option: string;
  badge: string;
}

export interface DynamicIdCardHoldersQuickSelection {
  eyebrow: string;
  title: string;
  lede: string;
  items: DynamicQuickSelectionItem[];
}

export interface DynamicAssemblyLayer {
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

export interface DynamicIdCardHoldersAssembly {
  eyebrow: string;
  title: string;
  lede: string;
  layers: DynamicAssemblyLayer[];
}

export interface DynamicHolderModelSpec {
  k: string;
  v: string;
}

export interface DynamicHolderModel {
  code: string;
  badge: string;
  category: "vertical" | "horizontal" | "executive" | "attachment";
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  popular?: boolean;
  premium?: boolean;
  highlightTag: string;
  specs: DynamicHolderModelSpec[];
  suitable: string[];
  conclusion: string;
  cta?: {
    label: string;
    href: string;
  };
}

export interface DynamicIdCardHoldersRangeMaster {
  eyebrow: string;
  title: string;
  lede: string;
  models: DynamicHolderModel[];
}

export interface DynamicEngineeringGuideDecisionStep {
  q: string;
  a: string;
  detail: string;
  recommended: string[];
}

export interface DynamicIdCardHoldersEngineeringGuide {
  eyebrow: string;
  title: string;
  lede: string;
  orientationCard: {
    tag: string;
    title: string;
    description: string;
    verticalTitle: string;
    verticalDim: string;
    verticalDesc: string;
    horizontalTitle: string;
    horizontalDim: string;
    horizontalDesc: string;
  };
  lockingCard: {
    tag: string;
    title: string;
    description: string;
    dropInTitle: string;
    dropInDesc: string;
    fourSideTitle: string;
    fourSideDesc: string;
  };
  decisionStepsTitle: string;
  decisionStepsLede: string;
  decisionSteps: DynamicEngineeringGuideDecisionStep[];
}

export interface DynamicApplicationItem {
  title: string;
  desc: string;
  tag: string;
  recommended: string;
  iconName: string;
  gradient: string;
  accentColor: string;
  link?: {
    label: string;
    href: string;
  };
}

export interface DynamicIdCardHoldersApplications {
  eyebrow: string;
  title: string;
  lede: string;
  items: DynamicApplicationItem[];
}

export interface DynamicOrderingStep {
  num: string;
  title: string;
  body: string;
  badge: string;
}

export interface DynamicExpressDispatchStep {
  step: string;
  label: string;
  desc: string;
}

export interface DynamicIdCardHoldersWorkflowAndDispatch {
  bundles: {
    badge: string;
    title: string;
    subtitle: string;
    tier1: {
      tag: string;
      title: string;
      desc: string;
      subtext: string;
      linkText: string;
      linkHref: string;
    };
    tier2: {
      tag: string;
      popularBadge: string;
      title: string;
      desc: string;
      primaryButtonText: string;
      primaryButtonHref: string;
      secondaryButtonText: string;
      secondaryButtonHref: string;
    };
  };
  quality: {
    title: string;
    subtitle: string;
    points: string[];
    note: string;
  };
  orderingWorkflow: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: DynamicOrderingStep[];
  };
  expressDispatch: {
    badge: string;
    title: string;
    pill: string;
    steps: DynamicExpressDispatchStep[];
    footerNote: string;
    whatsappText: string;
    whatsappHref: string;
  };
  closingCta: {
    badge: string;
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    whatsappButton: { text: string; href: string };
    trustPoints: string[];
  };
}

export interface DynamicIdCardHoldersFaqItem {
  q: string;
  a: string;
}

export interface DynamicIdCardHoldersFaqs {
  eyebrow: string;
  title: string;
  lede: string;
  items: DynamicIdCardHoldersFaqItem[];
}

export interface DynamicIdCardHoldersData {
  meta: DynamicIdCardHoldersMeta;
  hero: DynamicIdCardHoldersHero;
  quickSelection: DynamicIdCardHoldersQuickSelection;
  assemblyEcosystem: DynamicIdCardHoldersAssembly;
  rangeMaster: DynamicIdCardHoldersRangeMaster;
  engineeringGuide: DynamicIdCardHoldersEngineeringGuide;
  applications: DynamicIdCardHoldersApplications;
  workflowAndDispatch: DynamicIdCardHoldersWorkflowAndDispatch;
  faqs: DynamicIdCardHoldersFaqs;
}
