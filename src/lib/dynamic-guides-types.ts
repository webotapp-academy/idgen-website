export interface DynamicGuidesMeta {
  title: string;
  description: string;
  path: string;
}

export interface DynamicGuidesHeroFeatureCard {
  title: string;
  subtitle: string;
  iconName: string;
}

export interface DynamicGuidesCta {
  label: string;
  href: string;
}

export interface DynamicGuidesHero {
  badgePrefix: string;
  badgeHighlight: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  featureCards: DynamicGuidesHeroFeatureCard[];
  primaryCta: DynamicGuidesCta;
  secondaryCta: DynamicGuidesCta;
  tertiaryCta: DynamicGuidesCta;
  trustBadges: string[];
}

export interface DynamicHeroShowcasePillar {
  id: string;
  tabLabel: string;
  tabSub: string;
  guidePill: string;
  headerSubtitle: string;
  cardTitle: string;
  cardSubtitle: string;
  cardBadge: string;
  cardIcon: string;
  themeStyle: "light" | "dark" | "cyan" | "emerald";
  items: string[];
  footerLinkText: string;
  footerLinkHref: string;
}

export interface DynamicHeroShowcaseQuickSpec {
  label: string;
  value: string;
  accentClass?: string;
}

export interface DynamicHeroShowcase {
  badge: string;
  pillars: DynamicHeroShowcasePillar[];
  quickSpecs: DynamicHeroShowcaseQuickSpec[];
}

export interface DynamicGuideItem {
  number: string;
  title: string;
  category: "bulk" | "student" | "employee" | "accessories" | "events" | "tech" | "quote" | string;
  body: string;
  listLabel?: string;
  list?: string[];
  workflow?: string[];
  note?: string;
  relatedHref?: string;
  iconName: string;
  tag: string;
  readTime: string;
  accentGradient?: string;
  iconColor?: string;
  badgeBg?: string;
}

export interface DynamicExplorerCategory {
  id: string;
  label: string;
}

export interface DynamicExplorerMatrix {
  eyebrow: string;
  title: string;
  lede: string;
  categories: DynamicExplorerCategory[];
  guides: DynamicGuideItem[];
}

export interface DynamicReadinessItem {
  id: string;
  label: string;
  sub: string;
  weight: number;
}

export interface DynamicReadinessEstimator {
  eyebrow: string;
  title: string;
  lede: string;
  checklist: DynamicReadinessItem[];
  defaultChecked: string[];
  highScoreRecommendation: string;
  lowScoreRecommendation: string;
  primaryButton: DynamicGuidesCta;
  secondaryButton: DynamicGuidesCta;
}

export interface DynamicCategoryCard {
  title: string;
  desc: string;
  iconName: string;
  gradient: string;
  accentColor: string;
  link: string;
  tag: string;
}

export interface DynamicCategoriesGrid {
  eyebrow: string;
  title: string;
  lede: string;
  badgeText: string;
  categories: DynamicCategoryCard[];
}

export interface DynamicGuidesClosingCta {
  badge: string;
  title: string;
  description: string;
  primaryCta: DynamicGuidesCta;
  secondaryCta: DynamicGuidesCta;
  tertiaryCta: DynamicGuidesCta;
  footerTitle: string;
  footerSubtitle: string;
}

export interface DynamicGuidesData {
  meta: DynamicGuidesMeta;
  hero: DynamicGuidesHero;
  heroShowcase: DynamicHeroShowcase;
  explorerMatrix: DynamicExplorerMatrix;
  readinessEstimator: DynamicReadinessEstimator;
  categoriesGrid: DynamicCategoriesGrid;
  closingCta: DynamicGuidesClosingCta;
}
