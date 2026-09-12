export interface HookSlide {
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

export interface DynamicIdCardHooksHero {
  badge: string;
  badgeSub: string;
  title: string;
  highlight: string;
  description: string;
  typicalConfigLabel: string;
  typicalConfigValue: string;
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
  slides: HookSlide[];
}

export interface HookSelectionItem {
  id: string;
  code: string;
  name: string;
  req: string;
  badge: string;
  setup: string;
  category: "fish" | "onehook" | "twohook" | "set";
  image: string;
  alt: string;
  tagline: string;
  description: string;
  popular?: boolean;
  suitable: string[];
  specs: { k: string; v: string }[];
}

export interface DynamicIdCardHooksQuickSelection {
  badge: string;
  title: string;
  lede: string;
  catalog: HookSelectionItem[];
}

export interface HookStackLayer {
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

export interface DynamicIdCardHooksAssembly {
  badge: string;
  title: string;
  lede: string;
  note: string;
  layers: HookStackLayer[];
}

export interface MasterHookSection {
  code: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  setup: string;
  suitable: string[];
  conclusion: string;
  cta?: { label: string; href: string };
}

export interface DynamicIdCardHooksRangeMaster {
  badge: string;
  title: string;
  lede: string;
  sections: MasterHookSection[];
}

export interface HookFactor {
  num: string;
  title: string;
  desc: string;
  detail: string;
  iconName: string;
}

export interface DynamicIdCardHooksEngineeringGuide {
  badge: string;
  title: string;
  lede: string;
  factors: HookFactor[];
  qualityBadge: string;
  qualityTitle: string;
  qualityLede: string;
  qualityPoints: string[];
  compatibilityRule: string;
  compatibilityNote: string;
}

export interface HookUseItem {
  title: string;
  desc: string;
  link?: { label: string; href: string };
  iconName: string;
  gradient: string;
  accentColor: string;
  tag: string;
}

export interface DynamicIdCardHooksApplications {
  badge: string;
  title: string;
  lede: string;
  subtitle: string;
  uses: HookUseItem[];
  commonUsesTitle: string;
  commonUsesLede: string;
  commonUses: string[];
  commonUsesNote: string;
}

export interface CompleteSetTier {
  tier: string;
  name: string;
  desc: string;
  setupFormula: string;
  isBranded?: boolean;
  badge?: string;
}

export interface HookOrderingStep {
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

export interface DynamicIdCardHooksWorkflowAndDispatch {
  completeSetsBadge: string;
  completeSetsTitle: string;
  completeSetsLede: string;
  completeSetsNote: string;
  tiers: CompleteSetTier[];
  bulkBadge: string;
  bulkTitle: string;
  bulkLede: string;
  bulkRequirements: string[];
  bulkFormulaTitle: string;
  bulkFormula: string;
  bulkFormulaNote: string;
  orderProcessBadge: string;
  orderProcessTitle: string;
  orderProcessLede: string;
  orderingSteps: HookOrderingStep[];
  dispatchBadge: string;
  dispatchTitle: string;
  dispatchEligibleTag: string;
  dispatchLede: string;
  dispatchFlowSteps: string[];
  dispatchDisclaimers: string[];
  closingCtaBadge: string;
  closingCtaTitle: string;
  closingCtaLede: string;
  closingCtaTellUsTitle: string;
  closingCtaTellUsFormula: string;
  closingCtaButtons: CtaButton[];
  closingCtaCategory: string;
  closingCtaHeadline: string;
  closingCtaFormula: string;
  closingCtaBranding: string;
}

export interface DynamicIdCardHooksFaqItem {
  q: string;
  a: string;
}

export interface DynamicIdCardHooksFaqs {
  eyebrow: string;
  title: string;
  lede: string;
  faqs: DynamicIdCardHooksFaqItem[];
}

export interface DynamicIdCardHooksSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface DynamicIdCardHooksData {
  hero: DynamicIdCardHooksHero;
  quickSelection: DynamicIdCardHooksQuickSelection;
  assembly: DynamicIdCardHooksAssembly;
  rangeMaster: DynamicIdCardHooksRangeMaster;
  engineeringGuide: DynamicIdCardHooksEngineeringGuide;
  applications: DynamicIdCardHooksApplications;
  workflowAndDispatch: DynamicIdCardHooksWorkflowAndDispatch;
  faqs: DynamicIdCardHooksFaqs;
  seo: DynamicIdCardHooksSeo;
}
