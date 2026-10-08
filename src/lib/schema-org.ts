import { SITE, SITE_URL } from "@/data/site";
import type { Faq } from "@/data/types";

// Central JSON-LD builders with valid schema.org structures
// Complies with Google Rich Results & Knowledge Graph guidelines

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/iDGen%20Primary%20logo.svg`,
    image: `${SITE_URL}/images/idgen-hero-cards-showcase.jpg`,
    description: SITE.description,
    slogan: SITE.tagline,
    priceRange: "₹₹",
    ...(SITE.email ? { email: SITE.email } : {}),
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room No 118, Mangal Ram Tower, Assam Trunk Rd, Opposite Police Reserve, Tokobari Satra",
      addressLocality: SITE.hqCity,
      addressRegion: SITE.hqState,
      postalCode: "781001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.1825,
      longitude: 91.7415,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: SITE.hqCity },
      ...SITE.regionalFocus.map((name) => ({ "@type": "State", name })),
      { "@type": "AdministrativeArea", name: "Northeast India" },
    ],
    sameAs: Object.values(SITE.social).filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  if (!faqs || !faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
  offers?: { priceCurrency?: string; price?: string; description?: string }[];
}) {
  const serviceImage = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${encodeURI(opts.image)}`
    : `${SITE_URL}/images/idgen-hero-cards-showcase.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    image: serviceImage,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: SITE.regionalFocus.map((name) => ({ "@type": "State", name })),
    url: `${SITE_URL}${opts.path}`,
    ...(opts.offers && opts.offers.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${opts.name} Catalog`,
            itemListElement: opts.offers.map((offer, idx) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: offer.description || opts.name,
              },
              priceCurrency: offer.priceCurrency || "INR",
              price: offer.price,
              position: idx + 1,
            })),
          },
        }
      : {}),
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  const productImage = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${encodeURI(opts.image)}`
    : `${SITE_URL}/images/idgen-complete-id-card-identification-set.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    image: productImage,
    brand: { "@type": "Brand", name: SITE.name },
    url: `${SITE_URL}${opts.path}`,
  };
}

export function localBusinessSchema(opts?: {
  areaServed?: (string | { name: string; type?: "City" | "State" | "Country" })[];
}) {
  // Correctly type city vs state entries
  const statesSet = new Set(SITE.regionalFocus.map((s) => s.toLowerCase()));

  const resolvedAreaServed = opts?.areaServed
    ? opts.areaServed.map((item) => {
        if (typeof item === "object") {
          return { "@type": item.type || "City", name: item.name };
        }
        const isState = statesSet.has(item.toLowerCase());
        // "Northeast India" is a region, not a city
        const isRegion = /^north ?east india$/i.test(item);
        return {
          "@type": isState ? "State" : isRegion ? "AdministrativeArea" : "City",
          name: item,
        };
      })
    : [
        { "@type": "City", name: "Guwahati" },
        ...SITE.regionalFocus.map((name) => ({ "@type": "State", name })),
      ];

  // The single Organization + LocalBusiness node lives in the root layout
  // (organizationSchema). Page-level callers only say which places this page
  // is about, by reference, instead of re-declaring a second node that
  // shares the same @id.
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    about: { "@id": `${SITE_URL}/#organization` },
    spatialCoverage: resolvedAreaServed.map((a) => ({ "@type": "Place", name: a.name })),
  };
}

// Page-type signal for hub pages (AboutPage / CollectionPage) so Google knows
// what kind of page it is beyond the sitewide Organization/WebSite blocks.
export function pageTypeSchema(opts: {
  type: "AboutPage" | "CollectionPage";
  name: string;
  path: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type,
    name: opts.name,
    url: `${SITE_URL}${opts.path}`,
    ...(opts.description ? { description: opts.description } : {}),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}
