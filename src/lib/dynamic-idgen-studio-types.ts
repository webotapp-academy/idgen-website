export interface StudioVideoConfig {
  sourceType: "mp4" | "youtube";
  mp4Url: string;
  youtubeUrl: string;
  poster: string;
  title?: string;
  description?: string;
  youtubeLinkText?: string;
  youtubeLinkHref?: string;
}

export interface DynamicIdgenStudioHero {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  slogan: string;
  description1: string;
  description2: string;
  flowChainTitle: string;
  flowChainSteps: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  bannerVideo: StudioVideoConfig;
}

export interface DynamicIdgenStudioActionVideo {
  eyebrow: string;
  title: string;
  lede: string;
  journeyPipeline: string[];
  video: StudioVideoConfig;
}

export interface DynamicIdgenStudioTryDemo {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  option1Title: string;
  option1Subtitle: string;
  option1QrImage: string;
  option1QrAlt: string;
  option1QrLabel: string;
  option1Note: string;
  option2Title: string;
  option2Subtitle: string;
  option2Description: string;
  option2ButtonText: string;
  option2ButtonHref: string;
  option2ExperiencesTitle: string;
  option2Experiences: string[];
  processStepsTitle: string;
  processSteps: string[];
  noticeTitle: string;
  noticeText: string;
  footerTitle: string;
  footerSubtitle: string;
}

export interface StudioStepItem {
  num: string;
  title: string;
  desc: string;
  schoolExamples?: string[];
  companyExamples?: string[];
  channels?: string[];
  previewItems?: string[];
  highlight?: string;
  checkItems?: string[];
  flowTransition?: string;
  batches?: Array<{ name: string; detail: string }>;
  principle?: string;
  note?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface DynamicIdgenStudioWorkflowSteps {
  eyebrow: string;
  title: string;
  lede: string;
  steps: StudioStepItem[];
}

export interface StudioOrganizationItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  typicalFlowTitle: string;
  typicalFlow: string;
  note: string;
  linkText: string;
  linkHref: string;
  categories?: string[];
}

export interface DynamicIdgenStudioOrganizations {
  eyebrow: string;
  title: string;
  lede: string;
  organizations: StudioOrganizationItem[];
}

export interface DynamicIdgenStudioTwoSides {
  eyebrow: string;
  title: string;
  lede: string;
  endUserTitle: string;
  endUserSteps: string[];
  organizationTitle: string;
  organizationSteps: string[];
  footerNote: string;
}

export interface DynamicIdgenStudioDashboard {
  eyebrow: string;
  title: string;
  lede: string;
  statusHeader: string;
  recordsHeader: string;
  rows: Array<{ status: string; count: string }>;
  disclaimer: string;
}

export interface DynamicIdgenStudioWhy {
  eyebrow: string;
  title: string;
  lede: string;
  cards: Array<{
    title: string;
    desc: string;
  }>;
}

export interface DynamicIdgenStudioComparison {
  eyebrow: string;
  title: string;
  lede: string;
  aspectHeader: string;
  traditionalHeader: string;
  studioHeader: string;
  rows: Array<{
    aspect: string;
    traditional: string;
    studio: string;
  }>;
}

export interface DynamicIdgenStudioJourney {
  eyebrow: string;
  title: string;
  lede: string;
  steps: Array<{
    num: string;
    title: string;
    sub: string;
  }>;
}

export interface DynamicIdgenStudioFormPlanning {
  eyebrow: string;
  title: string;
  lede: string;
  requirementHeader: string;
  fieldTypeHeader: string;
  fields: Array<{
    requirement: string;
    fieldType: string;
  }>;
  ctaCardTitle: string;
  ctaCardSubtitle: string;
  ctaButtonText: string;
  ctaButtonHref: string;
}

export interface DynamicIdgenStudioCustomers {
  title: string;
  description: string;
  products: string[];
  footerNote: string;
}

export interface DynamicIdgenStudioDisclaimer {
  badge: string;
  description: string;
  note: string;
}

export interface DynamicIdgenStudioFullDemo {
  title: string;
  subtitle: string;
  video: StudioVideoConfig;
}

export interface DynamicIdgenStudioClosingCta {
  title: string;
  slogan: string;
  description: string;
  buttons: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
  brandingTitle: string;
  brandingSteps: string;
  brandingCompany: string;
}

export interface DynamicIdgenStudioFaqItem {
  q: string;
  a: string;
}

export interface DynamicIdgenStudioFaqs {
  eyebrow: string;
  title: string;
  lede: string;
  faqs: DynamicIdgenStudioFaqItem[];
}

export interface DynamicIdgenStudioSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface DynamicIdgenStudioData {
  hero: DynamicIdgenStudioHero;
  actionVideo: DynamicIdgenStudioActionVideo;
  tryDemo: DynamicIdgenStudioTryDemo;
  workflowSteps: DynamicIdgenStudioWorkflowSteps;
  organizations: DynamicIdgenStudioOrganizations;
  twoSides: DynamicIdgenStudioTwoSides;
  dashboard: DynamicIdgenStudioDashboard;
  why: DynamicIdgenStudioWhy;
  comparison: DynamicIdgenStudioComparison;
  journey: DynamicIdgenStudioJourney;
  formPlanning: DynamicIdgenStudioFormPlanning;
  customers: DynamicIdgenStudioCustomers;
  disclaimer: DynamicIdgenStudioDisclaimer;
  fullDemo: DynamicIdgenStudioFullDemo;
  closingCta: DynamicIdgenStudioClosingCta;
  faqs: DynamicIdgenStudioFaqs;
  seo: DynamicIdgenStudioSeo;
}
