import { IdCard, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Identity Printing & Manufacturing Services | IDGen",
  description: "Explore IDGen's specialized identity services: PVC ID card printing, RFID/NFC credentials, custom satin lanyards, ultrasonic sealing, and cloud identity management.",
  path: "/services/",
});

const idCardServices = [
  {
    title: "PVC ID Card Printing",
    slug: "id-card-printing",
    shortDescription: "High-resolution thermal retransfer and direct-to-card PVC printing for schools, universities, hospitals, and corporate organizations.",
    imageSrc: "/images/id-card-specimen.jpg",
    imageAlt: "PVC ID Card Printing Specimen",
    tag: "30-Mil CR80",
    badge: "Core Service"
  },
  {
    title: "Student ID Card Printing",
    slug: "student-id-card-printing",
    shortDescription: "High-volume student identification for schools and colleges, featuring automated roster imports, batch photo cropping, and library barcodes.",
    imageSrc: "/images/hero-cards-showcase.jpg",
    imageAlt: "Student ID Card Printing Service",
    tag: "Education",
    badge: "Bulk Intake"
  },
  {
    title: "Employee ID Card Printing",
    slug: "employee-id-card-printing",
    shortDescription: "Corporate employee badges with RFID turnstile integration, executive finishes, department color bands, and security holograms.",
    imageSrc: "/images/id-card-specimen.jpg",
    imageAlt: "Corporate Employee ID Card Printing",
    tag: "Corporate",
    badge: "Enterprise"
  },
  {
    title: "RFID & NFC Smart Card Printing",
    slug: "rfid-card-printing",
    shortDescription: "13.56 MHz (Mifare, DESFire, NTAG) and 125 kHz contactless smart cards customized with high-security encoding and durable lamination.",
    imageSrc: "/images/rfid-nfc-credentials.jpg",
    imageAlt: "Contactless RFID Smart Card Printing",
    tag: "13.56 MHz / 125 kHz",
    badge: "Contactless"
  },
  {
    title: "Event & Conference Badges",
    slug: "event-card-printing",
    shortDescription: "Oversized VIP passes, delegate badges, and accreditation credentials with dual-hook anti-twist lanyards and fast event turnaround.",
    imageSrc: "/images/hero-cards-showcase.jpg",
    imageAlt: "Event & Conference Badge Printing",
    tag: "Summits & Expos",
    badge: "VIP Credentials"
  },
  {
    title: "Membership & Loyalty Cards",
    slug: "membership-card-printing",
    shortDescription: "Premium VIP club membership cards with embossed foil stamping, magnetic stripes, smart chips, and luxury matte or gloss surfaces.",
    imageSrc: "/images/id-card-specimen.jpg",
    imageAlt: "Membership & Loyalty Card Printing",
    tag: "Retail & Clubs",
    badge: "VIP Cards"
  },
];

const lanyardServices = [
  {
    title: "Custom Printed Satin Lanyards",
    slug: "custom-printed-lanyard-printing",
    shortDescription: "Full-color dye-sublimated 20mm satin lanyards with sharp continuous logo printing, safety breakaways, and heavy-duty swivel dog hooks.",
    imageSrc: "/images/satin-lanyards.jpg",
    imageAlt: "Custom Printed Satin Lanyards",
    tag: "20mm Satin Sublimation",
    badge: "Bestseller"
  },
  {
    title: "Precision Ultrasonic Sealing",
    slug: "ultrasonic-sealing",
    shortDescription: "Acoustic high-frequency welding that seamlessly bonds lanyard ribbon loops, delivering 18kg+ pull resistance with zero staples or loose threads.",
    imageSrc: "/images/ultrasonic-welding.jpg",
    imageAlt: "Ultrasonic Sealing of Lanyards",
    tag: "Hermetic Weld",
    badge: "Heavy Duty"
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }])} />
      
      <PageHero
        eyebrow="Direct Factory Services"
        icon={IdCard}
        title="Comprehensive Identity & Credential Services"
        lede="From 30-mil PVC smart cards and contactless RFID badges to full-color satin lanyards and ultrasonic finishing, IDGen delivers complete wearable identification manufactured under one roof in Guwahati."
        stats={[
          { label: "Daily Output", value: "10,000+ IDs" },
          { label: "Dispatch Timeline", value: "48–72h" },
          { label: "Print Technology", value: "Thermal Retransfer" },
          { label: "Artwork Setup", value: "Zero Fee" },
        ]}
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]} />

        {/* Section 1: ID Card Printing Solutions */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Card Manufacturing"
            title="CR80 PVC & RFID Smart Card Printing"
            lede="Engineered for universities, tech parks, hospitals, and events requiring high-definition graphics and security encoding."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {idCardServices.map((service) => (
              <FeatureCard
                key={service.slug}
                title={service.title}
                body={service.shortDescription}
                href={`/${service.slug}/`}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                tag={service.tag}
                badge={service.badge}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Lanyards & Finishing Solutions */}
        <div className="mt-20">
          <SectionHead
            eyebrow="Lanyards & Assembly"
            title="Custom Lanyards & Finishing Services"
            lede="Direct factory dye-sublimation and ultrasonic welding for comfortable, tear-proof daily identification."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {lanyardServices.map((service) => (
              <FeatureCard
                key={service.slug}
                title={service.title}
                body={service.shortDescription}
                href={`/${service.slug}/`}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                tag={service.tag}
                badge={service.badge}
              />
            ))}
          </div>
        </div>

        {/* Section 3: Hardware Accessories Teaser */}
        <div className="mt-20 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Hardware Accessories</span>
              <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
                Looking for ID Card Holders & Hardware Hooks?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Complete your card setup with crystal acrylic cases, horizontal/vertical four-side-lock holders, and anti-rust swivel carabiners.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="/id-card-holders/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white"
              >
                <span>Explore Card Holders</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/id-card-hooks/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                <span>Explore Lanyard Hooks</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 4: Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need custom printing specifications or combined kits?"
            body="Contact our technical production team to review card samples, RFID reader compatibility, and custom lanyard artwork proofs."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "View Pricing Tiers", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
