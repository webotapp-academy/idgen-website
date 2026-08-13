import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { services, getServiceBySlug } from "@/data/services";
import { serviceSchema } from "@/lib/schema-org";
import { SITE_URL } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `${SITE_URL}/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: service.metaTitle, description: service.metaDescription, url },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <PageHero eyebrow="Service" title={service.name} lede={service.shortDescription} />
      <Container className="py-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="max-w-2xl space-y-4 text-base leading-relaxed text-foreground/90">
              {service.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {service.highlights.map((h) => (
                <li key={h} className="flex gap-2 rounded-xl border border-surface-border bg-surface p-3.5 text-sm">
                  <span className="text-accent">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {service.faqs.length > 0 && (
              <div className="mt-10">
                <h2 className="text-lg font-bold">Questions about {service.name.toLowerCase()}</h2>
                <div className="mt-4">
                  <FaqList faqs={service.faqs} />
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="sticky top-24">
              <h2 className="text-sm font-bold tracking-wide text-muted uppercase">Request a quote</h2>
              <div className="mt-3">
                <QuoteForm services={services} defaultServiceSlug={service.slug} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
