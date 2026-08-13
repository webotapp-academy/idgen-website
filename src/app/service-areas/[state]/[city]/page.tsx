import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema-org";
import { getState, getCity, allCities } from "@/data/locations";
import { services } from "@/data/services";
import { SITE, SITE_URL } from "@/data/site";
import type { Faq } from "@/data/types";

export function generateStaticParams() {
  return allCities().map(({ state, city }) => ({ state: state.slug, city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getState(stateSlug);
  const city = getCity(stateSlug, citySlug);
  if (!state || !city) return {};
  const url = `${SITE_URL}/service-areas/${state.slug}/${city.slug}/`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: city.metaTitle, description: city.metaDescription, url },
  };
}

export default async function CityPage({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getState(stateSlug);
  const city = getCity(stateSlug, citySlug);
  if (!state || !city) notFound();

  const officeAnswer = city.isPrimary
    ? `Yes. ${SITE.hqCity} is IDGen's primary business base.`
    : `IDGen's primary business base is in ${SITE.hqCity}, ${SITE.hqState}. The ${city.name} page represents service coverage and should not be interpreted as a separate branch unless a physical ${city.name} location is specifically listed.`;

  const faqs: Faq[] = [
    { q: "Where is IDGen located?", a: `${SITE.hqCity}, ${SITE.hqState}, India.` },
    { q: `Does IDGen provide ID card printing in ${city.name}?`, a: `Yes. IDGen provides customized and bulk identification products for organizations in ${city.name}.` },
    { q: `Does IDGen print student ID cards in ${city.name}?`, a: "Yes, for schools, colleges and universities." },
    { q: `Does IDGen print employee ID cards in ${city.name}?`, a: "Yes, for companies, offices, hospitals and institutions." },
    { q: `Can I order bulk ID cards in ${city.name}?`, a: "Yes, subject to product and project specifications." },
    { q: "Can ID cards be supplied with lanyards, holders and hooks?", a: "Yes, as part of a complete identification setup." },
    { q: "Does IDGen provide RFID cards?", a: "Yes, matched to the required RFID technology and reader/system compatibility." },
    { q: `Does IDGen have an office in ${city.name}?`, a: officeAnswer },
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema({ name: `IDGen — ${city.name}`, areaServed: [state.name] })} />
      <PageHero
        eyebrow={state.name}
        icon={MapPin}
        title={`ID Card Printing & Identity Solutions in ${city.name}`}
        lede={city.heroIntro}
        stats={[
          { label: "Experience", value: `Since ${SITE.foundedYear}` },
          { label: "Dispatch", value: SITE.dispatchTime },
        ]}
      />
      <Container className="py-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas/" },
            { name: state.name, path: `/service-areas/${state.slug}/` },
            { name: city.name, path: `/service-areas/${state.slug}/${city.slug}/` },
          ]}
        />

        {city.localColor && (
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-foreground/90">{city.localColor}</p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request a {city.name} Quote
          </Link>
          <Link href="/contact-us/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            Call / WhatsApp IDGen
          </Link>
        </div>

        {/* Organizations we serve — honest placeholder */}
        <div className="mt-16 rounded-2xl border border-dashed border-surface-border bg-surface p-6">
          <h2 className="text-lg font-bold text-foreground">Organizations we serve in {city.name}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            This section is built from IDGen&apos;s actual {city.name} customers and completed projects. Real
            organization names and project photographs will appear here once customer permission is
            confirmed — we don&apos;t display placeholder evidence as if it were real.
          </p>
        </div>

        {/* Nearby areas */}
        {city.nearbyAreas.length > 0 && (
          <div className="mt-16">
            <SectionHead eyebrow="Coverage" title={`Areas we serve around ${city.name}`} />
            <div className="mt-4 flex flex-wrap gap-2">
              {city.nearbyAreas.map((area) => (
                <span key={area} className="rounded-full bg-surface border border-surface-border px-3.5 py-1.5 text-sm text-foreground">
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">These are service-area references, not separate IDGen branches.</p>
          </div>
        )}

        {/* What we provide */}
        <div className="mt-16">
          <SectionHead eyebrow="Services" title={`What IDGen provides in ${city.name}`} />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="rounded-xl border border-surface-border bg-surface p-4 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Complete setup */}
        <div className="mt-16">
          <SectionHead eyebrow="Configurations" title={`Complete identification setup in ${city.name}`} />
          <div className="mt-6">
            <FlowChain steps={["ID Card", "Holder", "Hook", "Custom Printed Lanyard"]} />
          </div>
        </div>

        {/* Why choose — short */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Why choose IDGen in {city.name}?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {SITE.hqCity}-based, experience since {SITE.foundedYear}, organizational focus, complete
            identification options, and a structured workflow from requirement through dispatch. Read the
            full story on{" "}
            <Link href="/why-idgen/" className="font-semibold text-accent hover:underline">Why IDGen</Link>.
          </p>
        </div>

        {/* How to order */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title={`How to order ID cards in ${city.name}`} />
          <div className="mt-6">
            <FlowChain steps={["Requirement", "Data", "Design", "Preview", "Approval", "Production", "Quality Check", "Dispatch"]} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6 max-w-3xl">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Other cities */}
        {state.cities.length > 1 && (
          <div className="mt-16">
            <SectionHead eyebrow="Nearby" title={`Other cities in ${state.name}`} />
            <div className="mt-4 flex flex-wrap gap-2">
              {state.cities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${state.slug}/${c.slug}/`}
                    className="rounded-full border border-surface-border bg-surface px-4 py-1.5 text-sm hover:border-accent hover:text-accent"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title={`Need ID cards in ${city.name}?`}
            body="Tell IDGen your organization, product, quantity and requirement."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Contact IDGen", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
