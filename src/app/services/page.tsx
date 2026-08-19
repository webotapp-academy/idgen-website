import Image from "next/image";
import Link from "next/link";
import { IdCard, ArrowRight, ShieldCheck, Sparkles, Layers, Zap } from "lucide-react";
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
    imageSrc: "/images/PVC Cards Samples/Sample 1.jpg",
    imageAlt: "PVC ID Card Printing Specimen",
    tag: "30-Mil CR80",
    badge: "Core Service"
  },
  {
    title: "Student ID Card Printing",
    slug: "student-id-card-printing",
    shortDescription: "High-volume student identification for schools and colleges, featuring automated roster imports, batch photo cropping, and library barcodes.",
    imageSrc: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png",
    imageAlt: "Student ID Card Printing Service for Schools",
    tag: "Education",
    badge: "Bulk Intake"
  },
  {
    title: "Employee ID Card Printing",
    slug: "employee-id-card-printing",
    shortDescription: "Corporate employee badges with RFID turnstile integration, executive finishes, department color bands, and security holograms.",
    imageSrc: "/images/ID Card Full Set Samples/High-quality Employee ID Cards and Staff Identity Cards delivered to clients in Guwahati and Assam.jpg",
    imageAlt: "Corporate Employee ID Card Printing",
    tag: "Corporate",
    badge: "Enterprise"
  },
  {
    title: "RFID & NFC Smart Card Printing",
    slug: "rfid-card-printing",
    shortDescription: "13.56 MHz (Mifare, DESFire, NTAG) and 125 kHz contactless smart cards customized with high-security encoding and durable lamination.",
    imageSrc: "/images/ID Card Full Set Samples/IMG20250328133145.jpg",
    imageAlt: "Contactless RFID Smart Card Printing",
    tag: "13.56 MHz / 125 kHz",
    badge: "Contactless"
  },
  {
    title: "Event & Conference Badges",
    slug: "event-card-printing",
    shortDescription: "Oversized VIP passes, delegate badges, and accreditation credentials with dual-hook anti-twist lanyards and fast event turnaround.",
    imageSrc: "/images/Event Card/Events Card with 2 hook.png",
    imageAlt: "Event & Conference Badge Printing with Dual Hooks",
    tag: "Summits & Expos",
    badge: "VIP Credentials"
  },
  {
    title: "Membership & Loyalty Cards",
    slug: "membership-card-printing",
    shortDescription: "Premium VIP club membership cards with embossed foil stamping, magnetic stripes, smart chips, and luxury matte or gloss surfaces.",
    imageSrc: "/images/PVC Cards Samples/Sample 3.jpg",
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
    imageSrc: "/images/Lanyard with Hook Samples/Sample 1.jpeg",
    imageAlt: "Custom Printed Satin Lanyards IDGen",
    tag: "20mm Satin Sublimation",
    badge: "Bestseller"
  },
  {
    title: "Precision Ultrasonic Sealing",
    slug: "ultrasonic-sealing",
    shortDescription: "Acoustic high-frequency welding that seamlessly bonds lanyard ribbon loops, delivering 18kg+ pull resistance with zero staples or loose threads.",
    imageSrc: "/images/Lanyard with Holder Samples/Sample 26.jpg",
    imageAlt: "Ultrasonic Sealing of Lanyards by IDGen",
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
        visual={
          <div className="relative h-[420px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Top Image: Real Delivered Full Set */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/Sample 1.jpeg"
                  alt="Complete ID Card and Satin Lanyard Kit by IDGen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Guwahati Factory</span>
                </div>
              </div>

              {/* Secondary Overlapping Image: Real Event Card */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Event Card/Events Card with 2 hook.png"
                  alt="High-Visibility VIP Event Badge"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tertiary Accent: Satin Lanyard Details */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 12.jpg"
                  alt="Dye-Sublimated Lanyard with Swivel Hook"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
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
        <div className="mt-20 rounded-3xl border border-surface-border bg-gradient-to-br from-surface to-background p-8 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-accent uppercase mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Hardware Accessories & Holders</span>
              </span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                Looking for ID Card Holders & Hardware Hooks?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted max-w-2xl">
                Complete your card setup with crystal acrylic cases, horizontal/vertical four-side-lock holders, and anti-rust swivel carabiners manufactured for maximum durability.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/id-card-holders/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-accent-hover hover:text-white"
              >
                <span>Explore Card Holders</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/id-card-hooks/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                <span>Explore Lanyard Hooks</span>
              </Link>
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
