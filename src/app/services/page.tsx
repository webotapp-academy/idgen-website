import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description: "ID card, RFID card, and lanyard printing services from iDGen — school, college, university, employee, visitor, and event cards.",
  path: "/services",
});

export default function ServicesPage() {
  const idCards = services.filter((s) => s.category === "id-card");
  const lanyards = services.filter((s) => s.category === "lanyard");

  return (
    <>
      <PageHero
        eyebrow="What we print"
        title="Services"
        lede="Nine card and credential types, all printed in-house and dispatched across Northeast India."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

        <h2 className="mt-10 text-lg font-bold">ID cards</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {idCards.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-2xl border border-surface-border bg-surface p-5 transition hover:border-accent hover:shadow-sm"
            >
              <h3 className="font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.shortDescription}</p>
            </Link>
          ))}
        </div>

        <h2 className="mt-10 text-lg font-bold">Lanyards</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lanyards.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-2xl border border-surface-border bg-surface p-5 transition hover:border-accent hover:shadow-sm"
            >
              <h3 className="font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.shortDescription}</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
