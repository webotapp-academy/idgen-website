import { SITE, SITE_URL } from "@/data/site";
import type { ServiceContent, ProductContent, Faq } from "@/data/types";

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

export function serviceSchema(service: ServiceContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function productSchema(product: ProductContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description.join(" "),
    brand: { "@type": "Brand", name: SITE.name },
    url: `${SITE_URL}/products/${product.slug}`,
  };
}

export function localBusinessSchema(opts?: { name?: string; areaServed?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: opts?.name || SITE.name,
    url: SITE_URL,
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    ...(SITE.email ? { email: SITE.email } : {}),
    ...(SITE.address ? { address: SITE.address } : {}),
    areaServed: opts?.areaServed?.map((name) => ({ "@type": "State", name })) ?? [
      { "@type": "Country", name: "India" },
    ],
  };
}
