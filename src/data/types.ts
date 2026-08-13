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
};

export type StateContent = {
  slug: string;
  name: string;
  heroIntro: string;
  cities: CityContent[];
  metaTitle: string;
  metaDescription: string;
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
