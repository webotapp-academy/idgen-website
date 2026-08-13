import type { LucideIcon } from "lucide-react";
import { IdCard, GraduationCap, Building2, Tag, Ticket, Radio, Waves, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata = pageMetadata({
  title: "Services | ID Cards, Lanyards, RFID & Identity Solutions | IDGen",
  description:
    "IDGen's identification services: ID card printing, student and employee cards, custom printed lanyards, event cards, RFID cards, ultrasonic sealing and membership cards.",
  path: "/services/",
});

const ICONS: Record<string, LucideIcon> = {
  "id-card-printing": IdCard,
  "student-id-card-printing": GraduationCap,
  "employee-id-card-printing": Building2,
  "custom-printed-lanyard-printing": Tag,
  "event-card-printing": Ticket,
  "rfid-card-printing": Radio,
  "ultrasonic-sealing": Waves,
  "membership-card-printing": Award,
};

export default function ServicesPage() {
  const idCards = services.filter((s) => s.category === "id-card");
  const lanyardsAndAccessories = services.filter((s) => s.category !== "id-card");

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }])} />
      <PageHero
        eyebrow="What We Provide"
        icon={IdCard}
        title="Identification Services for Every Organization"
        lede="IDGen provides specialized identification services designed for institutions and organizations — from PVC ID card printing to RFID cards, custom lanyards and finished attachment assembly."
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]} />

        <div className="mt-8">
          <SectionHead eyebrow="ID Cards" title="ID Card Printing Services" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {idCards.map((s) => (
              <FeatureCard key={s.slug} icon={ICONS[s.slug]} title={s.name} body={s.shortDescription} href={`/${s.slug}/`} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionHead eyebrow="Lanyards & Accessories" title="Finishing & Attachment Services" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lanyardsAndAccessories.map((s) => (
              <FeatureCard key={s.slug} icon={ICONS[s.slug]} title={s.name} body={s.shortDescription} href={`/${s.slug}/`} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionHead eyebrow="Products" title="Complete the Setup" lede="Cards need holders and hooks to become a finished wearable identification — see the physical accessories that connect a card to a lanyard." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FeatureCard icon={IdCard} title="ID Card Holders" body="Vertical, horizontal, four-side-lock, metal and crystal holders for every card orientation." href="/id-card-holders/" />
            <FeatureCard icon={Tag} title="ID Card & Lanyard Hooks" body="Fish hooks and attachment components connecting card holders to lanyards." href="/id-card-hooks/" />
          </div>
        </div>

        <div className="mt-16">
          <CtaBand
            title="Not sure which service you need?"
            body="Tell us your organization type, approximate quantity, and whether you need only cards or a complete wearable setup — IDGen can help determine the right configuration."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "View Pricing", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
