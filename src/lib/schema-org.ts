import { SITE, SITE_URL } from "@/data/site";
import type { Faq } from "@/data/types";

// Central JSON-LD builders — one function per page type, so schema stays
// consistent as the service/product/location page count grows.

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    description: SITE.description,
    slogan: SITE.tagline,
    ...(SITE.email ? { email: SITE.email } : {}),
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
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
  if (!faqs.length) return null;
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

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    // Was hardcoded to Country/India — overclaiming vs. the site's actual
    // coverage (Assam + expanding Northeast India presence).
    areaServed: SITE.regionalFocus.map((name) => ({ "@type": "State", name })),
    url: `${SITE_URL}${opts.path}`,
  };
}

export function productSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    brand: { "@type": "Brand", name: SITE.name },
    url: `${SITE_URL}${opts.path}`,
  };
}

export function localBusinessSchema(opts?: { areaServed?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    // Reuses the sitewide Organization's @id rather than a separate
    // "#localbusiness" one. Every service-area page used to mint its own
    // LocalBusiness with the SAME static @id but a DIFFERENT name
    // ("IDGen — Guwahati", "IDGen — Shillong", ...) — Google resolves
    // matching @ids as one entity, so ~30 pages were colliding into a
    // single, name-flip-flopping record. One entity, one name; areaServed
    // is the only thing that should vary per page.
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    url: SITE_URL,
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    ...(SITE.email ? { email: SITE.email } : {}),
    // Street address + PIN are not yet confirmed by the client — ship what's
    // actually known (HQ city/state/country) rather than a fabricated full
    // address. Add streetAddress/postalCode here once confirmed.
    address: {
      "@type": "PostalAddress",
      ...(SITE.address ? { streetAddress: SITE.address } : {}),
      addressLocality: SITE.hqCity,
      addressRegion: SITE.hqState,
      addressCountry: "IN",
    },
    areaServed: opts?.areaServed?.map((name) => ({ "@type": "State", name })) ?? [
      { "@type": "Country", name: "India" },
    ],
  };
}
