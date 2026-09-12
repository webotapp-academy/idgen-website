export interface TemplateSlide {
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

export interface DynamicTemplatesMeta {
  title: string;
  description: string;
  path: string;
}

export interface DynamicTemplatesHeroQuickLink {
  label: string;
  href: string;
  isDownload?: boolean;
}

export interface DynamicTemplatesHero {
  badge: string;
  subBadge: string;
  h1Prefix: string;
  h1Gradient: string;
  p1: string;
  p2: string;
  p3: string;
  quickLinks: DynamicTemplatesHeroQuickLink[];
  trustBadges: string[];
  slides: TemplateSlide[];
}

export interface DynamicTemplatesFieldRow {
  field: string;
  purpose: string;
}

export interface DynamicTemplatesFieldTypeRow {
  info: string;
  type: string;
  example: string;
}

export interface DynamicTemplatesStudent {
  badge: string;
  title: string;
  description: string;
  fields: DynamicTemplatesFieldRow[];
  fieldTypesHeading: string;
  fieldTypesDescription: string;
  fieldTypes: DynamicTemplatesFieldTypeRow[];
}

export interface DynamicTemplatesEmployee {
  badge: string;
  title: string;
  description: string;
  fields: DynamicTemplatesFieldRow[];
  fieldTypesHeading: string;
  fieldTypesDescription: string;
  fieldTypes: DynamicTemplatesFieldTypeRow[];
}

export interface StudioMasterFieldType {
  type: string;
  suitable: string;
  example: string;
}

export interface StudioPlanningStep {
  stepNumber: string;
  title: string;
  question: string;
  example?: string;
  points?: string[];
}

export interface StudioWorksheetRow {
  name: string;
  type: string;
  format: string;
  req: string;
  printed: string;
  qr: string;
  notes: string;
}

export interface DynamicTemplatesStudioPlanning {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  fieldTypesHeading: string;
  fieldTypes: StudioMasterFieldType[];
  importantNotice: string;
  stepsHeading: string;
  stepsDescription: string;
  steps: StudioPlanningStep[];
  worksheetHeading: string;
  worksheetDescription: string;
  worksheetRows: StudioWorksheetRow[];
  worksheetFootnote: string;
}

export interface DynamicTemplatesBulkChecklist {
  badge: string;
  title: string;
  description: string;
  items: string[];
}

export interface DynamicTemplatesSpecifications {
  cardSpec: {
    badge: string;
    title: string;
    rawText: string;
  };
  eventBadgeSpec: {
    badge: string;
    title: string;
    eventInfo: string;
    badgeCategories: string;
    badgeRequirements: string;
    linkText: string;
    linkHref: string;
    rawText: string;
  };
  rfidSpec: {
    badge: string;
    title: string;
    points: string[];
    note: string;
    linkText: string;
    linkHref: string;
    rawText: string;
  };
}

export interface DynamicTemplatesStudioWorkflow {
  badge: string;
  title: string;
  description: string;
  flowPipelineHeading: string;
  flowSteps: string[];
  flowFootnote: string;
  comparisonTraditional: {
    badge: string;
    title: string;
    description: string;
  };
  comparisonStudio: {
    badge: string;
    title: string;
    description: string;
  };
  studentExample: {
    title: string;
    intro: string;
    fields: string[];
    workflowText: string;
  };
  employeeExample: {
    title: string;
    intro: string;
    fields: string[];
    workflowText: string;
  };
  testingChecklist: {
    title: string;
    description: string;
    items: string[];
  };
}

export interface DynamicTemplatesQuotePrepField {
  label: string;
  placeholder: string;
}

export interface DynamicTemplatesQuotePrep {
  badge: string;
  title: string;
  description: string;
  fields: DynamicTemplatesQuotePrepField[];
  copyText: string;
  ctaText: string;
  ctaHref: string;
}

export interface DynamicTemplatesDownloadItem {
  name: string;
  format: string;
  filename: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface DynamicTemplatesDownloads {
  badge: string;
  title: string;
  description: string;
  items: DynamicTemplatesDownloadItem[];
}

export interface DynamicTemplatesWhyPrepare {
  badge: string;
  title: string;
  description: string;
  reasons: string[];
  footerNote: string;
}

export interface DynamicTemplatesClosingCta {
  badge: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCtas: {
    label: string;
    href: string;
  }[];
  tagline: {
    title: string;
    subtitle: string;
    pipeline: string;
    company: string;
  };
}

export interface DynamicTemplatesData {
  meta: DynamicTemplatesMeta;
  hero: DynamicTemplatesHero;
  student: DynamicTemplatesStudent;
  employee: DynamicTemplatesEmployee;
  studioPlanning: DynamicTemplatesStudioPlanning;
  bulkChecklist: DynamicTemplatesBulkChecklist;
  specifications: DynamicTemplatesSpecifications;
  studioWorkflow: DynamicTemplatesStudioWorkflow;
  quotePrep: DynamicTemplatesQuotePrep;
  downloads: DynamicTemplatesDownloads;
  whyPrepare: DynamicTemplatesWhyPrepare;
  closingCta: DynamicTemplatesClosingCta;
}
