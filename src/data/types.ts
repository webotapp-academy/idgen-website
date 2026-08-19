export type Faq = { q: string; a: string };

export type CityContent = {
  slug: string;
  name: string;
  isPrimary: boolean; // Guwahati — IDGen's actual base
  heroIntro: string;
  localColor?: string;
  nearbyAreas: string[];
  metaTitle: string;
  metaDescription: string;
  // false = page stays live (direct link still works) but is excluded from
  // the sitemap and marked noindex — used for states/cities the client's
  // content doc has no real body content for yet. Defaults to true.
  indexed?: boolean;
};

export type StateContent = {
  slug: string;
  name: string;
  heroIntro: string;
  cities: CityContent[];
  metaTitle: string;
  metaDescription: string;
  indexed?: boolean;
};

export type ServiceIndexItem = {
  slug: string;
  name: string;
  category: "id-card" | "lanyard" | "accessory";
  shortDescription: string;
};

export type ProductIndexItem = {
  slug: string;
  name: string;
  shortDescription: string;
};
