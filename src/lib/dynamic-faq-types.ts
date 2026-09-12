export interface DynamicFaqMeta {
  title: string;
  description: string;
  path: string;
}

export interface DynamicFaqHeroFeatureCard {
  title: string;
  subtitle: string;
  iconName: string;
}

export interface DynamicFaqCta {
  label: string;
  href: string;
}

export interface DynamicFaqHero {
  badgePrefix: string;
  badgeHighlight: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  featureCards: DynamicFaqHeroFeatureCard[];
  primaryCta: DynamicFaqCta;
  secondaryCta: DynamicFaqCta;
  tertiaryCta: DynamicFaqCta;
  trustBadges: string[];
}

export interface DynamicFaqPricingItem {
  label: string;
  value: string;
  unit: string;
  color?: string;
}

export interface DynamicFaqShowcasePillar {
  id: string;
  tabLabel: string;
  tabSub: string;
  guidePill: string;
  headerSubtitle: string;
  cardTitle: string;
  cardSubtitle: string;
  cardBadge: string;
  cardIcon: string;
  themeStyle: "pricing" | "studio" | "coverage" | "security" | "default";
  pricingItems?: DynamicFaqPricingItem[];
  items?: string[];
  footerLinkText: string;
  footerLinkHref: string;
}

export interface DynamicFaqShowcaseQuickSpec {
  label: string;
  value: string;
  accentClass?: string;
}

export interface DynamicFaqHeroShowcase {
  badge: string;
  pillars: DynamicFaqShowcasePillar[];
  quickSpecs: DynamicFaqShowcaseQuickSpec[];
}

export interface DynamicFaqTopicCard {
  category: string;
  title: string;
  desc: string;
  iconName: string;
  gradient: string;
  accentColor: string;
  linkText: string;
  targetCategory: string;
}

export interface DynamicFaqTopicMatrix {
  eyebrow: string;
  title: string;
  lede: string;
  badgeText: string;
  topics: DynamicFaqTopicCard[];
}

export interface DynamicFaqItem {
  q: string;
  a: string;
}

export interface DynamicFaqCategorySection {
  name: string;
  badge: string;
  iconName?: string;
  relatedHref?: string;
  relatedLabel?: string;
  faqs: DynamicFaqItem[];
}

export interface DynamicFaqExplorerMatrix {
  eyebrow: string;
  title: string;
  lede: string;
  categories: DynamicFaqCategorySection[];
}

export interface DynamicFaqClosingCta {
  badge: string;
  title: string;
  description: string;
  primaryCta: DynamicFaqCta;
  secondaryCta: DynamicFaqCta;
  tertiaryCta: DynamicFaqCta;
  footerTitle: string;
  footerSubtitle: string;
}

export interface DynamicFaqData {
  meta: DynamicFaqMeta;
  hero: DynamicFaqHero;
  heroShowcase: DynamicFaqHeroShowcase;
  topicMatrix: DynamicFaqTopicMatrix;
  explorerMatrix: DynamicFaqExplorerMatrix;
  closingCta: DynamicFaqClosingCta;
}
