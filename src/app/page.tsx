import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  CalendarDays,
  Sparkles,
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
    title: "RFID & Smart Contactless Cards",
    body: "13.56 MHz Mifare & NFC contactless smart cards seamlessly integrated with turnstiles, attendance machines, and biometric readers.",
    href: "/rfid-card-printing/",
    imageSrc: "/images/rfid-nfc-credentials.jpg",
    imageAlt: "13.56 MHz RFID Contactless Smart Card",
    tag: "13.56 MHz / NFC",
    badge: "Enterprise"
  },
  {
    title: "Ultrasonic Lanyard Sealing",
    body: "Acoustic molecular fusing technology that eliminates bulky metal rivets or weak staples, producing zero-fray tear-resistant lanyard loops.",
    href: "/ultrasonic-sealing/",
    imageSrc: "/images/ultrasonic-welding.jpg",
    imageAlt: "Ultrasonic Lanyard Sealing & Welding Machine",
    tag: "Zero-Staple Weld",
    badge: "Proprietary Tech"
  },
  {
    title: "ID Card Holders & Crystal Cases",
    body: "Impact-resistant rigid polycarbonate holders, clear vinyl pouches, and silicone sleeves engineered for maximum badge longevity.",
    href: "/id-card-holders/",
    imageSrc: "/images/id-holders-hooks.jpg",
    imageAlt: "Rigid Polycarbonate ID Card Holders and Grippers",
    tag: "Hard Polycarbonate",
    badge: "Hardware"
  },
  {
    title: "IDGen Studio SaaS Platform",
    body: "Eliminate messy Excel rosters. Collect student and staff photographs, crop heads with AI, and verify batch proofs online before printing.",
    href: "/idgen-studio/",
    imageSrc: "/images/idgen-studio-interface.jpg",
    imageAlt: "IDGen Studio Identity Data Portal Dashboard",
    tag: "AI Photo Studio",
    badge: "Free with Bulk Orders"
  },
];

const studioFeatures = [
  {
    icon: Sparkles,
    title: "AI Headshot Cropping & Centering",
    desc: "Automatically crops mobile selfies into uniform passport dimensions with background lighting enhancement."
  },
  {
    icon: Layers,
    title: "Real-Time Digital Batch Proofing",
    desc: "Admins preview high-res digital flip proofs of every single student/staff badge before production begins."
  },
  {
    icon: ShieldCheck,
    title: "Zero Data-Mismatch Guarantee",
    desc: "Data flows directly from online intake into the high-speed thermal printing queue without manual typing."
  }
];

const orgSolutions = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    body: "Annual batch rollouts for new academic sessions. Free custom portal for student photo collection and instant replacement printing.",
    href: "/student-id-card-printing/",
    tag: "Education",
  },
  {
    icon: Building2,
    title: "Enterprises & Tech Parks",
    body: "Encrypted RFID employee badges with synchronized visitor day-passes, satin branded lanyards, and anti-tamper overlays.",
    href: "/employee-id-card-printing/",
    tag: "Corporate",
  },
  {
    icon: CalendarDays,
    title: "Conferences & Summits",
    body: "Rapid 48-hour turnarounds on large-format event badges, QR delegate cards, and color-coded VIP satin lanyards.",
    href: "/event-card-printing/",
    tag: "Events",
  },
  {
    icon: Award,
    title: "Clubs & Healthcare",
    body: "Durable metallic & holographic membership cards with magnetic stripes, barcodes, and scratch-resistant gloss finishes.",
    href: "/membership-card-printing/",
    tag: "Memberships",
  },
];

const priorityAreas = [
  "Guwahati Hub", "Jorhat", "Dibrugarh", "Silchar", "Tezpur", "Nagaon", "Tinsukia", "Bongaigaon"
];

const faqs: Faq[] = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "We support orders starting at just 25 cards for small businesses and pilot projects, with high-volume volume discounts scaling up to 50,000+ units for university rollouts and government tenders.",
  },
  {
    q: "How fast can you deliver across Assam and Northeast India?",
    a: "Standard orders dispatch within 48 to 72 hours from our Guwahati manufacturing hub. Priority rush production is available for urgent conference badges and emergency replacements with 24-hour regional courier delivery.",
  },
  {
    q: "Can we get physical printed samples before placing our bulk order?",
    a: "Yes! We dispatch institutional sample boxes containing printed CR80 PVC cards, satin lanyards, crystal holders, and ultrasonic welds directly to school administrators and procurement teams across Northeast India.",
  },
  {
    q: "What is Ultrasonic Lanyard Sealing?",
    a: "Unlike cheap stapled or riveted lanyards that pinch and tear over time, our high-frequency acoustic welding molecularly bonds the polyester ribbon into a smooth, unbreakable loop with zero metal clips scratching the neck.",
  },
  {
    q: "How does IDGen Studio eliminate ID card mistakes?",
    a: "IDGen Studio gives your institution a private web link where students or employees submit their details and photos. The platform automatically flags blurry photos, crops portraits uniformly, and allows principals/HR to approve proofs before printing.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Core Products & Services Visual Catalog */}
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

      {/* 3. Interactive Live Quote Calculator */}
      <section className="border-y border-surface-border bg-[#0B1320] py-20 text-white">
        <Container>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-300 uppercase backdrop-blur-md mb-3">
              <Zap className="h-3.5 w-3.5" />
              <span>Instant Wholesale Estimator</span>
            </div>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white">Calculate Your Production Costs</h2>
            <p className="mt-2 text-sm text-slate-300">
              Select card tier, quantity, custom lanyards, and crystal holders to get an instant wholesale estimate with zero hidden fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <QuoteCalculator />
          </div>
        </Container>
      </section>

      {/* 4. Ultrasonic Hardware & Accessories Breakdown */}
      <section className="py-20 bg-surface border-b border-surface-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Hardware Image */}
            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="/images/id-holders-hooks.jpg"
                    alt="Complete ID Badge Assembly: Rigid Holder, Chrome Swivel Hook, and Custom Satin Lanyard"
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 bg-background border-t border-surface-border">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-sm">Pre-Assembled Wearable Packages</h3>
                      <p className="text-xs text-muted mt-0.5">Cards pre-slotted into holders with attached ultrasonic ribbons</p>
                    </div>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                      Ready to Distribute
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hardware Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-accent uppercase">Engineered Durability</span>
                <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
                  Wearable Hardware That Withstands Daily Student & Staff Use
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  A high-resolution ID card is only as good as the accessories holding it. We eliminate common wear issues like snapped rivets, cracked plastic pouches, and twisted clips.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-surface-border bg-background p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-slate-950 font-black text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">30-Mil CR80 Solid PVC Core</h3>
                      <p className="text-xs text-muted mt-0.5">Standard credit-card thickness with scratch-resistant thermal overlay.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-surface-border bg-background p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-slate-950 font-black text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Crystal Rigid Polycarbonate Holder</h3>
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
          </div>
        </Container>
      </section>

      {/* 5. IDGen Studio SaaS Spotlight */}
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
                  <span>Tour IDGen Studio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
                >
                  <span>Request Portal Demo</span>
                </Link>
              </div>
            </div>

            {/* Right UI Visual */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-2xl">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/idgen-studio-interface.jpg"
                    alt="IDGen Studio Cloud ID Intake and AI Face Centering Interface"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
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

      {/* 6. Direct Manufacturing Facility & Regional Network */}
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
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {SITE.dailyCapacity}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Factory Specs */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <SectionHead
                eyebrow="Local Manufacturing Advantage"
                title="Direct Assam Production Hub. Zero Third-Party Middlemen."
                lede="Located in Guwahati, Assam, IDGen operates dedicated high-speed card retransfer presses, ultrasonic ribbon welders, and chip encoding machines. Local production means rapid dispatch, zero shipping delays, and direct accountability."
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

      {/* 7. Institutional Applications */}
      <section className="py-20 bg-background border-b border-surface-border">
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

      {/* 8. Trust Band: Factory Direct Quality & Institutional Standards (Just Above FAQ) */}
      <section className="relative border-b border-surface-border bg-gradient-to-b from-surface via-background/60 to-surface py-20">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase mb-3 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
              <span>Institutional Standard</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl tracking-tight">
              One Partner. Complete Identity Workflow.
            </h2>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
              From digital biometric roster collection in IDGen Studio to automated ultrasonic lanyard assembly and express Guwahati dispatch across all 8 Northeast states.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1 */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent border border-accent/20 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold text-accent">
                    Factory Direct
                  </span>
                </div>
                <h3 className="mt-5 font-bold text-foreground text-base">Direct Factory Sourcing</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  No middlemen or reseller markups. Direct high-definition thermal retransfer and satin dye-sublimation from our Guwahati production hub.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-border text-[11px] font-semibold text-accent">
                Zero Intermediary Fees →
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent border border-accent/20 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <Layers className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold text-accent">
                    Pre-Assembled
                  </span>
                </div>
                <h3 className="mt-5 font-bold text-foreground text-base">Full Hardware Assembly</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Complete wearable kits: cards inserted into hard holders, chrome swivel hooks attached, and ribbons ultrasonically welded into tear-proof loops.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-border text-[11px] font-semibold text-accent">
                Ready-to-Distribute Sets →
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent border border-accent/20 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold text-accent">
                    Zero Errors
                  </span>
                </div>
                <h3 className="mt-5 font-bold text-foreground text-base">IDGen Studio Portal</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Eliminate spreadsheet chaos. Cloud student photo submission, automatic AI face centering, and batch preview approvals prior to printing.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-border text-[11px] font-semibold text-accent">
                Explore Digital Ingestion →
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent border border-accent/20 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold text-accent">
                    48–72h SLA
                  </span>
                </div>
                <h3 className="mt-5 font-bold text-foreground text-base">Express Dispatch</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  High-capacity daily production with express air and road logistics connecting all 8 Northeast states with live door-step tracking.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-border text-[11px] font-semibold text-accent">
                Regional Logistics Network →
              </div>
            </div>
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
            ]}
          />
        </Container>
      </section>
    </>
  );
}
