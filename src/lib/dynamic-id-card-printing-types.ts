export interface IdCardSlideItem {
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

export interface IdCardHeroSection {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  workflowChain: string[];
  workflowCardHeading: string;
  workflowCardNote: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  slides: IdCardSlideItem[];
}

export interface CustomPvcSection {
  eyebrow: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageTopBadge: string;
  imageTopBrand: string;
  imageBottomEyebrow: string;
  imageBottomTitle: string;
  imageBottomLocation: string;
  containerBadge: string;
  containerCountLabel: string;
  containerTitle: string;
  cardInfoItems: string[];
  noteLede: string;
  noteStrong: string;
}

export interface OrgApplicationConfigItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  badge: string;
  imageSrc: string;
  spec: string;
  iconName: string;
}

export interface ApplicationsSection {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  items: OrgApplicationConfigItem[];
}

export interface BulkPrintingSection {
  eyebrow: string;
  title: string;
  description: string;
  leftBadge: string;
  leftCountLabel: string;
  leftTitle: string;
  bulkProjectTypes: string[];
  rightBadge: string;
  rightTitle: string;
  rightSubtitle: string;
  consistencyFactors: string[];
  factorEquation: string;
  footerNote: string;
  ctaText: string;
  ctaLink: string;
}

export interface WorkflowConfigStep {
  num: string;
  title: string;
  body: string;
  badge: string;
  img: string;
  iconName: string;
}

export interface ProductionWorkflowSection {
  eyebrow: string;
  title: string;
  lede: string;
  steps: WorkflowConfigStep[];
}

export interface InfoCategoryGroup {
  id: string;
  title: string;
  badge: string;
  iconName: string;
  items: string[];
}

export interface CardInformationSection {
  eyebrow: string;
  title: string;
  description: string;
  categories: InfoCategoryGroup[];
  noticeText: string;
  noticeCtaText: string;
  noticeCtaLink: string;
}

export interface DesignBrandingSection {
  eyebrow: string;
  title: string;
  lede: string;
  imageSrc: string;
  imageAlt: string;
  topBadge: string;
  topBrand: string;
  bottomEyebrow: string;
  bottomTitle: string;
  bottomLocation: string;
  badge: string;
  countLabel: string;
  bodyHeading: string;
  designElements: string[];
  noteExisting: string;
  noteNew: string;
}

export interface BulkDataSection {
  eyebrow: string;
  title: string;
  description: string;
  leftBadge: string;
  leftCountLabel: string;
  leftDescription: string;
  fields: string[];
  formula: string;
  errorNotice: string;
  rightBadge: string;
  rightDescription: string;
  pipelineSteps: string[];
  rightFooterText: string;
}

export interface StudioSection {
  eyebrow: string;
  title: string;
  lede: string;
  badge: string;
  bodyText1: string;
  bodyText2: string;
  useCasesHeading: string;
  useCases: string[];
  ctaButtonText: string;
  ctaButtonLink: string;
}

export interface AccessoriesConfigRow {
  application: string;
  configuration: string;
}

export interface AccessoriesSection {
  eyebrow: string;
  title: string;
  lede: string;
  configRows: AccessoriesConfigRow[];
  note: string;
  viewAllText: string;
  viewAllLink: string;
}

export interface InstitutionItem {
  title: string;
  body: string;
  iconName: string;
}

export interface OrganizationsSection {
  eyebrow: string;
  title: string;
  lede: string;
  institutions: InstitutionItem[];
}

export interface QualityCheckpointItem {
  title: string;
  body: string;
}

export interface QualityCheckpointsSection {
  eyebrow: string;
  title: string;
  lede: string;
  checkpoints: QualityCheckpointItem[];
}

export interface RenewalsSection {
  eyebrow: string;
  title: string;
  lede: string;
  newCardsTitle: string;
  newCardTypes: string[];
  renewalsTitle: string;
  renewalTypes: string[];
}

export interface WhyIdgenReasonItem {
  title: string;
  body: string;
  iconName: string;
}

export interface WhyIdgenSection {
  eyebrow: string;
  title: string;
  lede: string;
  reasons: WhyIdgenReasonItem[];
}

export interface OrderWorkflowStep {
  title: string;
  body: string;
}

export interface HowToOrderSection {
  eyebrow: string;
  title: string;
  lede: string;
  steps: OrderWorkflowStep[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqsSection {
  eyebrow: string;
  title: string;
  lede: string;
  faqs: FaqItem[];
}

export interface IdCardCtaBand {
  title: string;
  body: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface IdCardMetadata {
  title: string;
  description: string;
  path: string;
}

export interface DynamicIdCardPrintingData {
  hero: IdCardHeroSection;
  customPvcSection: CustomPvcSection;
  applicationsSection: ApplicationsSection;
  bulkSection: BulkPrintingSection;
  workflowSection: ProductionWorkflowSection;
  cardInformationSection: CardInformationSection;
  designBrandingSection: DesignBrandingSection;
  bulkDataSection: BulkDataSection;
  studioSection: StudioSection;
  accessoriesSection: AccessoriesSection;
  organizationsSection: OrganizationsSection;
  qualityCheckpointsSection: QualityCheckpointsSection;
  renewalsSection: RenewalsSection;
  whyIdgenSection: WhyIdgenSection;
  orderWorkflowSection: HowToOrderSection;
  faqsSection: FaqsSection;
  ctaBand: IdCardCtaBand;
  metadata: IdCardMetadata;
}
