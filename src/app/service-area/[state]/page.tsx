import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { states, getState } from "@/data/locations";
import { localBusinessSchema } from "@/lib/schema-org";
import { SITE_URL } from "@/data/site";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) return {};
  const title = `ID Card Printing in ${state.name} | iDGen`;
  const description = `Bulk ID card, RFID card, and lanyard printing serving ${state.name} — ${state.cities.map((c) => c.name).join(", ")}.`;
  const url = `${SITE_URL}/service-area/${state.slug}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) notFound();

  return (
    <>
      <JsonLd data={localBusinessSchema({ name: `iDGen — ${state.name}`, areaServed: [state.name] })} />
      <PageHero
        eyebrow="Service Area"
        title={`ID card printing in ${state.name}`}
        lede={`Bulk ID card, RFID card, and lanyard orders for schools, colleges, and offices across ${state.name}.`}
      />
      <Container className="py-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Service Area", path: "/service-area" },
            { name: state.name, path: `/service-area/${state.slug}` },
          ]}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {state.cities.map((c) => (
            <Link
              key={c.slug}
              href={`/service-area/${state.slug}/${c.slug}`}
              className="rounded-2xl border border-surface-border bg-surface p-6 transition hover:border-accent hover:shadow-sm"
            >
              <h2 className="font-semibold">{c.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.localContent}</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
