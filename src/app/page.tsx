import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  CalendarDays,
  Sparkles,
  Workflow,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  Award
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema-org";
import { HeroSection } from "@/components/home/HeroSection";
import { QuoteCalculator } from "@/components/ui/QuoteCalculator";
import { SITE } from "@/data/site";
import type { Faq } from "@/data/types";

const coreServices = [
  {
    title: "PVC ID Card Printing",
    body: "Industrial CR80 30-mil PVC cards for schools, universities, hospitals, and corporate workforces with vivid thermal retransfer printing.",
    href: "/id-card-printing/",
    imageSrc: "/images/id-card-specimen.jpg",
    imageAlt: "Premium CR80 PVC ID Card Specimen",
    tag: "30-Mil CR80 PVC",
    badge: "Core Service"
  },
  {
    title: "Custom Printed Satin Lanyards",
    body: "High-density 20mm satin dye-sublimation lanyards with full-color brand graphics, safety breakaway clasps, and heavy-duty swivel fish hooks.",
    href: "/custom-printed-lanyard-printing/",
    imageSrc: "/images/satin-lanyards.jpg",
    imageAlt: "Custom Printed 20mm Satin Lanyards",
    tag: "Dye-Sublimation",
    badge: "Bestseller"
  },
  {
    title: "RFID & NFC Smart Credentials",
    body: "Contactless access and attendance smart cards engineered with genuine Mifare, NTAG, or EM4100 chips matched to your door readers.",
    href: "/rfid-card-printing/",
    imageSrc: "/images/rfid-nfc-credentials.jpg",
    imageAlt: "Contactless RFID and NFC Smart Access Card",
    tag: "13.56 MHz / 125 kHz",
    badge: "Smart Tech"
  },
  {
    title: "Card Holders & Hardware Hooks",
    body: "Crystal-clear hard acrylic cases, vertical/horizontal four-side-lock badge holders, and polished chrome snap hooks.",
    href: "/id-card-holders/",
    imageSrc: "/images/id-holders-hooks.jpg",
    imageAlt: "Crystal Acrylic ID Card Badge Holders and Hooks",
    tag: "Hard Acrylic / Polycarbonate",
    badge: "Accessories"
  },
  {
    title: "Precision Ultrasonic Sealing",
    body: "Acoustic hermetic ribbon bonding that eliminates thread unraveling and staple tearing for heavy institutional daily wear.",
    href: "/ultrasonic-sealing/",
    imageSrc: "/images/ultrasonic-welding.jpg",
    imageAlt: "Industrial Ultrasonic Welding Machinery",
    tag: "Hermetic Bond",
    badge: "Durability"
  },
  {
    title: "Large Format Event Passes",
    body: "Oversized VIP badges, conference delegate credentials, dual-hook lanyards, and QR code ticketing for summits & expos.",
    href: "/event-card-printing/",
    imageSrc: "/images/hero-cards-showcase.jpg",
    imageAlt: "VIP Conference Event Passes and Badges",
    tag: "Dual-Hook Setup",
    badge: "Conferences"
  },
];

const orgSolutions = [
  { 
    icon: GraduationCap, 
    title: "Universities & Schools", 
    body: "Bulk student ID cards with year-wise batch data, roll numbers, library barcodes, and ultrasonic-welded lanyards.", 
    href: "/student-id-card-printing/",
    tag: "Student Intake"
  },
  { 
    icon: Building2, 
    title: "Corporates & Tech Parks", 
    body: "Employee smart badges with RFID access integration, executive matte finishes, and premium branded satin lanyards.", 
    href: "/employee-id-card-printing/",
    tag: "Access & Attendance"
  },
  { 
    icon: CalendarDays, 
    title: "Summits & Expos", 
    body: "High-volume delegate badges, VIP holographic passes, anti-twist dual hooks, and rapid turnaround for event dates.", 
    href: "/event-card-printing/",
    tag: "Event Credentials"
  },
  { 
    icon: Award, 
    title: "Clubs & Loyalty Programs", 
    body: "Exclusive membership cards with gold/silver accents, magnetic stripes, smart chips, and secure verification.", 
    href: "/membership-card-printing/",
    tag: "VIP Membership"
  },
];

const studioFeatures = [
  { icon: Layers, title: "Automated Data Ingestion", desc: "Upload student rosters or employee CSVs with instant field mapping and verification." },
  { icon: Sparkles, title: "Biometric Face Framing", desc: "AI-assisted facial recognition centers, crops, and enhances photos to standard 35x45mm badge specs." },
  { icon: ShieldCheck, title: "Digital Proof Approval", desc: "Review 100% accurate high-resolution card previews before sending any batch to print." },
  { icon: Zap, title: "Zero Error Guarantee", desc: "Catch spelling mistakes, duplicate IDs, and missing photos before costly physical printing." },
];

const priorityAreas = [
  "Guwahati", "Jorhat", "Dibrugarh", "Silchar", "Tezpur", 
  "Nagaon", "Tinsukia", "Sivasagar", "Golaghat", "Barpeta", 
  "Bongaigaon", "Shillong", "Dimapur", "Itanagar"
];

const faqs: Faq[] = [
  { q: "What products and services does IDGen provide?", a: "IDGen manufactures customized PVC ID cards, custom printed satin lanyards, RFID/NFC smart cards, crystal badge holders, attachment hooks, ultrasonic sealing, and cloud data workflows via IDGen Studio." },
  { q: "Where is IDGen's manufacturing factory located?", a: "Our direct manufacturing and finishing facility is located in Guwahati, Assam. We provide fast regional dispatch across Assam and all eight Northeast Indian states." },
  { q: "What is the typical production and dispatch turnaround time?", a: "Standard production batches of 100 to 2,000 cards/lanyards are typically manufactured and dispatched within 48 to 72 hours after digital proof approval and order confirmation." },
  { q: "Can IDGen match our existing RFID reader frequencies?", a: "Yes. We offer 13.56 MHz (Mifare 1K, Mifare 4K, DESFire, NTAG) and 125 kHz (EM4100/TK4100) credentials that seamlessly integrate with biometric attendance and access turnstiles." },
  { q: "How does IDGen Studio eliminate ID card printing errors?", a: "IDGen Studio allows institutional admins to upload rosters, automatically crop facial portraits, generate batch preview proofs, and obtain administrator sign-off before manufacturing starts, virtually eliminating reprint costs." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Band: Factory Direct Quality */}
      <section className="border-b border-surface-border bg-surface py-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Institutional Standard</span>
              <h2 className="mt-1 text-2xl font-extrabold text-foreground">
                One Partner. Complete Identity Workflow.
              </h2>
            </div>
            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-surface-border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">Direct Factory Sourcing</h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    No middlemen or reseller markups. Direct thermal retransfer and dye-sublimation from our Guwahati hub.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-surface-border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">Full Hardware Assembly</h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    Pre-assembled wearable packages: cards inserted into holders, hooks clamped, and ribbons ultrasonically sealed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Core Products & Services Visual Catalog */}
      <section className="py-20 bg-background">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead
              eyebrow="Direct Factory Catalog"
              title="Precision Identity Products & Solutions"
              lede="Explore our comprehensive range of high-durability ID cards, custom lanyards, smart RFID chips, and modular hardware attachments."
            />
            <Link
              href="/services/"
              className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-surface-border px-5 py-2.5 text-sm font-bold text-accent shadow-sm transition hover:border-accent hover:shadow-md"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <FeatureCard
                key={service.title}
                title={service.title}
                body={service.body}
                href={service.href}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                tag={service.tag}
                badge={service.badge}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Interactive Live Quote Calculator */}
      <section className="border-y border-surface-border bg-[#0B1320] py-20 text-white">
        <Container>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-300 uppercase backdrop-blur-md mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Transparent Pricing Engine</span>
            </div>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
              Instant Institutional Project Estimator
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Calculate dynamic quantity-tier pricing, optional finishes, and turnaround times for your batch.
            </p>
          </div>

          <QuoteCalculator />
        </Container>
      </section>

      {/* 5. Complete Wearable Identification Anatomy */}
      <section className="py-20 bg-surface border-b border-surface-border">
        <Container>
          <SectionHead
            eyebrow="The Full Assembly"
            title="Anatomy of an IDGen Wearable ID Setup"
            lede="Why settle for loose cards? We supply complete, ready-to-distribute sets engineered for comfort, durability, and enterprise security."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Graphics Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-surface-border shadow-2xl">
                <Image
                  src="/images/hero-cards-showcase.jpg"
                  alt="Complete IDGen Wearable ID Kit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="rounded bg-accent px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider">
                    All-in-One Package
                  </span>
                  <h3 className="text-xl font-bold mt-1.5">Card + Holder + Hook + Sealed Lanyard</h3>
                  <p className="text-xs text-slate-300 mt-1">Pre-assembled in sequence for instant classroom or office handover.</p>
                </div>
              </div>
            </div>

            {/* Right Breakdown Checklist */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl border border-surface-border bg-background p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-slate-950 font-black text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">30-Mil Thermal Retransfer PVC Card</h3>
                    <p className="text-xs text-muted mt-0.5">High-definition edge-to-edge color, barcodes, and optional embedded RFID chips.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-surface-border bg-background p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-slate-950 font-black text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Hard Acrylic or Polycarbonate Holder</h3>
                    <p className="text-xs text-muted mt-0.5">Four-side-lock enclosure prevents bending, scratching, and moisture penetration.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-surface-border bg-background p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-slate-950 font-black text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Chrome Heavy-Duty Swivel Hook</h3>
                    <p className="text-xs text-muted mt-0.5">Rust-resistant 360-degree rotation keeps badges facing forward at all times.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-surface-border bg-background p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-slate-950 font-black text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Ultrasonically Welded Satin Lanyard</h3>
                    <p className="text-xs text-muted mt-0.5">Acoustic welded loop withstands over 18kg of pull tension with zero fraying.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. IDGen Studio SaaS Spotlight */}
      <section className="py-20 bg-background border-b border-surface-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen Identity Portal</span>
              </div>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl leading-tight">
                IDGen Studio: Eliminate ID Mistakes Before Printing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Collecting student photographs, phone numbers, and employee credentials is traditionally chaotic. IDGen Studio unites digital record collection, AI face centering, and batch preview approvals in one sleek dashboard.
              </p>

              <div className="mt-8 space-y-4">
                {studioFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.title} className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-sm">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">{feat.title}</h3>
                        <p className="text-xs text-muted mt-0.5">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/idgen-studio/"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-navy-deep hover:shadow-xl"
                >
                  <span>Explore IDGen Studio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/templates/"
                  className="text-sm font-bold text-accent hover:underline"
                >
                  Browse ID Card Templates →
                </Link>
              </div>
            </div>

            {/* Right High-Tech SaaS Interface Render */}
            <div className="lg:col-span-7">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-[0_30px_70px_-20px_rgba(7,25,46,0.3)]">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/idgen-studio-interface.jpg"
                    alt="IDGen Studio Digital Identity & Biometric Photo Management Portal"
                    fill
                    className="img-zoom object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex items-center justify-between p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Real-time Biometric Match: 98.5% Accuracy</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">IDGen Studio v3.2</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Direct Manufacturing Facility & Regional Network */}
      <section className="py-20 bg-surface border-b border-surface-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Factory Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="/images/factory-production.jpg"
                    alt="IDGen High-Capacity Card Printing & Laser Encoding Production Line"
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 bg-background border-t border-surface-border">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-sm">Guwahati Central Production Hub</h3>
                      <p className="text-xs text-muted mt-0.5">Automated retransfer lines, dye-sub lanyards & laser encoding</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                      10,000+ IDs / Day
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy & Regional Map Links */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <SectionHead
                eyebrow="Regional Reach"
                title="Direct Factory Dispatch Across Northeast India"
                lede={`Headquartered in ${SITE.hqCity}, ${SITE.hqState}, IDGen operates dedicated supply corridors ensuring rapid transit across all eight Northeast states.`}
              />

              <div className="mt-6">
                <p className="text-xs font-bold tracking-widest text-muted uppercase">Priority Dispatch Network</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {priorityAreas.map((city) => (
                    <Link
                      key={city}
                      href="/service-areas/assam/"
                      className="rounded-xl border border-surface-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/why-idgen/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
                >
                  <span>Learn About Our Manufacturing Quality</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Institutional Applications */}
      <section className="py-20 bg-background">
        <Container>
          <SectionHead
            eyebrow="Applications"
            title="Tailored for Every Sector"
            lede="Designed around real-world institutional demands — from annual school intakes to high-security corporate turnstiles."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {orgSolutions.map((org) => (
              <FeatureCard
                key={org.title}
                icon={org.icon}
                title={org.title}
                body={org.body}
                href={org.href}
                tag={org.tag}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 9. FAQ Section */}
      <section className="border-y border-surface-border bg-surface py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHead
              eyebrow="Clear Answers"
              title="Frequently Asked Questions"
              lede="Everything you need to know about ordering ID cards, custom lanyards, and RFID credentials."
            />
            <div className="mt-10">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Closing High-Conversion CTA */}
      <section className="py-20 bg-background">
        <Container>
          <CtaBand
            title="Ready to upgrade your organization's identification system?"
            body="Whether you need 250 school ID cards or 10,000 corporate RFID badges with ultrasonic sealed lanyards, IDGen delivers factory-direct precision."
            links={[
              { label: "Request an Instant Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "View Pricing Tiers", href: "/pricing/" },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
