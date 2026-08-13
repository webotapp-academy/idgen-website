export type Faq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  name: string;
  category: "id-card" | "lanyard";
  shortDescription: string;
  content: string[]; // paragraphs
  highlights: string[];
  faqs: Faq[];
  metaTitle: string;
  metaDescription: string;
};

export type ProductContent = {
  slug: string;
  name: string;
  description: string[];
  specs: Record<string, string>;
  metaTitle: string;
  metaDescription: string;
};

export type CityContent = {
  slug: string;
  name: string;
  isPrimary: boolean;
  localContent: string;
};

export type StateContent = {
  slug: string;
  name: string;
  cities: CityContent[];
};
