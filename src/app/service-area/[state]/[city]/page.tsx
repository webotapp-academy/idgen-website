import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { getState, getCity, allCities } from "@/data/locations";
import { services } from "@/data/services";
import { localBusinessSchema } from "@/lib/schema-org";
import { SITE_URL } from "@/data/site";

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
  const title = `ID Card Printing in ${city.name}, ${state.name} | iDGen`;
  const description = `Bulk school, college, employee, and RFID ID card printing in ${city.name} — dispatched by iDGen across ${state.name}.`;
  const url = `${SITE_URL}/service-area/${state.slug}/${city.slug}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}

export default async function CityPage({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getState(stateSlug);
  const city = getCity(stateSlug, citySlug);
  if (!state || !city) notFound();

  return (
    <>
      <JsonLd data={localBusinessSchema({ name: `iDGen — ${city.name}`, areaServed: [state.name] })} />
      <PageHero
        eyebrow={state.name}
        title={`ID card printing in ${city.name}`}
        lede={city.localContent}
      />
      <Container className="py-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Service Area", path: "/service-area" },
            { name: state.name, path: `/service-area/${state.slug}` },
            { name: city.name, path: `/service-area/${state.slug}/${city.slug}` },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-lg font-bold">Services available in {city.name}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-xl border border-surface-border bg-surface p-4 text-sm transition hover:border-accent"
                >
                  {s.name}
                </Link>
              ))}
            </div>

            <h2 className="mt-10 text-lg font-bold">Other cities in {state.name}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {state.cities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-area/${state.slug}/${c.slug}`}
                    className="rounded-full border border-surface-border bg-surface px-4 py-1.5 text-sm hover:border-accent hover:text-accent"
                  >
                    {c.name}
                  </Link>
                ))}
              {state.cities.length === 1 && <p className="text-sm text-muted">{state.name} currently has one listed hub city.</p>}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wide text-muted uppercase">Get a quote for {city.name}</h2>
            <div className="mt-3">
              <QuoteForm services={services} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
