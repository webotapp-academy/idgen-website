import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { states } from "@/data/locations";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Service Area",
  description: "iDGen ships bulk ID card and lanyard orders across Assam, Meghalaya, Nagaland, Manipur, Mizoram, Tripura, and Arunachal Pradesh.",
  path: "/service-area",
});

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Service area"
        lede="Seven states across Northeast India, dispatched from our production facility."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Area", path: "/service-area" }]} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((st) => (
            <div key={st.slug} className="rounded-2xl border border-surface-border bg-surface p-6">
              <h2 className="font-semibold">
                <Link href={`/service-area/${st.slug}`} className="hover:text-accent">
                  {st.name}
                </Link>
              </h2>
              <ul className="mt-3 space-y-1.5">
                {st.cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/service-area/${st.slug}/${c.slug}`}
                      className="text-sm text-muted hover:text-accent"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
