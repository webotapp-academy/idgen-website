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
  Award,
  Camera,
  Package,
  CheckCircle2,
  XCircle,
  Clock,
  Phone,
  Flame,
  Radio,
  Box,
  MapPin,
  Check
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

/* ============================================================
   DATA DEFINITIONS
   ============================================================ */

const institutionalClients = [
  { name: "Don Bosco Hr Sec School", location: "Gojapara, Assam", tag: "School ID & Lanyards" },
  { name: "Jorhat Kendriya Vidyalaya", location: "Jorhat, Assam", tag: "Student Smart Cards" },
  { name: "CKB College", location: "Jorhat, Assam", tag: "Faculty & Staff IDs" },
  { name: "DBS Itanagar", location: "Arunachal Pradesh", tag: "Complete Wearable Sets" },
  { name: "Rayburn College", location: "Churachandpur, Manipur", tag: "RFID Campus Cards" },
  { name: "Nathan Brown Academy", location: "Namrup, Assam", tag: "Student ID Cards" },
  { name: "Ardalivia English School", location: "Assam", tag: "Full ID Kits" },
  { name: "Assam Govt Departments", location: "Guwahati Hub", tag: "Official Credentials" },
];

const coreServices = [
  {
    title: "PVC ID Card Printing",
    body: "Industrial CR80 30-mil PVC cards for schools, universities, hospitals, and corporate workforces with vivid thermal retransfer printing.",
    href: "/id-card-printing/",
    imageSrc: "/images/ID Card Full Set Samples/Customized Student ID Cards supplied to educational institutions in Guwahati with premium PVC quality and professional design..jpg",
    imageAlt: "Premium CR80 PVC ID Cards — Printed by IDGen Guwahati",
    tag: "30-Mil CR80 PVC",
    badge: "Core Service"
  },
  {
    title: "Custom Printed Satin Lanyards",
    body: "High-density 20mm satin dye-sublimation lanyards with full-color brand graphics, safety breakaway clasps, and heavy-duty swivel fish hooks.",
    href: "/custom-printed-lanyard-printing/",
    imageSrc: "/images/Lanyard with Hook Samples/Sample 1.jpeg",
    imageAlt: "Custom Printed 20mm Satin Lanyards with Hook — IDGen Production",
    tag: "Dye-Sublimation",
    badge: "Bestseller"
  },
  {
    title: "Complete Wearable ID Packages",
    body: "Pre-assembled wearable kits: PVC card, custom satin lanyard, rigid crystal polycarbonate holder, and chrome hook — ready for immediate student distribution.",
    href: "/products/",
    imageSrc: "/images/ID Card Full Set Samples/Sample 1.jpeg",
    imageAlt: "Complete ID Card Set with Lanyard and Crystal Holder — IDGen",
    tag: "Ready-to-Wear Kit",
    badge: "Most Popular"
  },
  {
    title: "RFID & Smart Contactless Cards",
    body: "13.56 MHz Mifare & NFC contactless smart cards seamlessly integrated with turnstiles, attendance machines, and biometric readers.",
    href: "/rfid-card-printing/",
    imageSrc: "/images/ID Card Full Set Samples/High-quality Employee ID Cards and Staff Identity Cards delivered to clients in Guwahati and Assam.jpg",
    imageAlt: "RFID and NFC Contactless Smart Cards by IDGen",
    tag: "13.56 MHz / NFC",
    badge: "Enterprise"
  },
  {
    title: "ID Card Holders & Crystal Cases",
    body: "Impact-resistant rigid polycarbonate holders, clear vinyl pouches, and silicone sleeves engineered for maximum badge longevity.",
    href: "/id-card-holders/",
    imageSrc: "/images/ID card holder/IMG_20250117_172305.jpg",
    imageAlt: "Rigid Polycarbonate ID Card Holders manufactured by IDGen",
    tag: "Hard Polycarbonate",
    badge: "Hardware"
  },
  {
    title: "IDGen Studio SaaS Platform",
    body: "Eliminate messy Excel rosters. Collect student and staff photographs, crop heads with AI, and verify batch proofs online before printing.",
    href: "/idgen-studio/",
    imageSrc: "/images/ID Card Marketing Matrials/Data Collection Software.png",
    imageAlt: "IDGen Studio Identity Data Collection Platform Dashboard",
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

/* Real delivered order images for social proof gallery */
const deliveredOrders = [
  { src: "/images/Order Deliver/Ardalivia English School 1.png", title: "Ardalivia English School", state: "Assam" },
  { src: "/images/Order Deliver/CKB COLLAGE,JORHAT 1.png", title: "CKB College", state: "Jorhat, Assam" },
  { src: "/images/Order Deliver/DBS ITANAGAR 1.png", title: "DBS Itanagar", state: "Arunachal Pradesh" },
  { src: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png", title: "Don Bosco School", state: "Gojapara, Assam" },
  { src: "/images/Order Deliver/Jorhat kendra vidyalaya 1.png", title: "Jorhat Kendriya Vidyalaya", state: "Jorhat, Assam" },
  { src: "/images/Order Deliver/Nathan brown academy,Namrup 1.png", title: "Nathan Brown Academy", state: "Namrup, Assam" },
  { src: "/images/Order Deliver/RAYBURN COLLAGE,MANIPUR 1.png", title: "Rayburn College", state: "Churachandpur, Manipur" },
  { src: "/images/Order Deliver/NON STOP 1.png", title: "Non Stop Retail", state: "Guwahati, Assam" },
];

/* Real physical product showcase grid */
const productGallery = [
  { src: "/images/Acrylic Badges Samples/Sample 1.jpg", alt: "Premium Acrylic Staff Badge — IDGen", label: "Executive Acrylic Badge", cat: "Badges" },
  { src: "/images/Acrylic Badges Samples/Sample 4.jpg", alt: "Custom Acrylic Magnet Badge — IDGen", label: "Magnetic Name Badge", cat: "Badges" },
  { src: "/images/Lanyard with Holder Samples/Sample 26.jpg", alt: "Satin Lanyard with Crystal Case", label: "Lanyard + Holder Set", cat: "Lanyards" },
  { src: "/images/Lanyard with Hook Samples/Sample 11.jpg", alt: "Multi-Color Dye-Sublimation Lanyards", label: "Custom Branded Lanyards", cat: "Lanyards" },
  { src: "/images/Event Card/Events Card with 2 hook.png", alt: "VIP Event Pass with Dual Hooks", label: "Dual-Hook Event Badge", cat: "Event Passes" },
  { src: "/images/Zinc Medal/madl.png", alt: "Custom Die-Cast Zinc Alloy Medal", label: "Die-Cast Zinc Medal", cat: "Medals" },
  { src: "/images/ID Card Full Set Samples/Sample 2.jpeg", alt: "Complete Wearable ID Kit Assembly", label: "Pre-Assembled Student Set", cat: "Full Sets" },
  { src: "/images/ID Card Full Set Samples/Sample 18 .jpg", alt: "Staff Identity Cards with Lanyards", label: "Corporate ID & Lanyard", cat: "Corporate" },
];

const comparisonData = [
  {
    feature: "Production Method",
    idgen: "High-Definition Thermal Retransfer (300+ DPI Edge-to-Edge)",
    traditional: "Basic Inkjet / Cheap Heat Press (Fades & Blurs in Months)",
  },
  {
    feature: "Lanyard Joining",
    idgen: "High-Frequency Ultrasonic Molecular Weld (Zero Metal Staples)",
    traditional: "Stapled or Riveted (Scratches Skin, Tears under Tension)",
  },
  {
    feature: "Card Durability",
    idgen: "Industrial 30-Mil Solid CR80 PVC (Credit Card Thickness)",
    traditional: "Thin Flimsy Plastic or Laminated Paper Sheets",
  },
  {
    feature: "Data & Photo Collection",
    idgen: "Free IDGen Studio SaaS (AI Photo Crop & Online Batch Approval)",
    traditional: "Chaotic Excel Sheets & Blurry WhatsApp Photo Uploads",
  },
  {
    feature: "Pricing & Sourcing",
    idgen: "Direct Guwahati Factory Rates (0% Intermediary Markup)",
    traditional: "Local Stationery Middlemen (Reselling with 40-60% Markup)",
  },
  {
    feature: "Dispatch Commitment",
    idgen: "Guaranteed 48–72h Dispatch with Live Regional Tracking",
    traditional: "Unpredictable 2–3 Week Delays from Distant Metros",
  },
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
  {
    q: "Do you provide RFID and smart access cards for attendance systems?",
    a: "Yes, we manufacture ISO 14443A Mifare Classic 1K, Mifare Ultralight, DESFire EV2, and 125 kHz EM4100 proximity cards. All cards are tested for read-range compatibility with turnstiles and biometric attendance readers.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. INSTITUTIONAL CLIENT TRUST TICKER */}
      <section className="border-b border-surface-border bg-surface py-8 overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="shrink-0 max-w-xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                Trusted Credentials Partner
              </span>
              <h3 className="mt-1 text-sm font-bold text-foreground">
                Delivered to 500+ Institutions Across Northeast India
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
              {institutionalClients.slice(0, 4).map((client) => (
                <div 
                  key={client.name}
                  className="flex flex-col justify-center rounded-xl border border-surface-border bg-background p-3 transition-all duration-200 hover:border-accent/40 hover:shadow-sm"
                >
                  <p className="font-bold text-foreground text-xs truncate">{client.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <MapPin className="h-2.5 w-2.5 text-accent shrink-0" />
                    <span className="text-[10px] text-muted truncate">{client.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE PRODUCTS & SERVICES CATALOG (BENTO GRID) */}
      <section className="py-20 lg:py-24 bg-background">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead
              eyebrow="Direct Factory Catalog"
              title="Precision Identity Products & Wearable Hardware"
              lede="Explore our comprehensive range of high-durability ID cards, custom satin lanyards, smart RFID chips, and modular hardware attachments manufactured in Guwahati."
            />
            <Link
              href="/services/"
              className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-surface-border px-5 py-2.5 text-sm font-bold text-accent shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md hover:-translate-y-0.5"
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

      {/* 4. INTERACTIVE WHOLESALE PROJECT ESTIMATOR */}
      <section className="border-y border-surface-border bg-gradient-to-br from-[#060D19] via-[#0B1527] to-[#060D19] py-20 lg:py-24 text-white">
        <Container>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-300 uppercase backdrop-blur-md mb-3">
              <Zap className="h-3.5 w-3.5" />
              <span>Instant Wholesale Estimator</span>
            </div>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white tracking-tight">Calculate Your Production Costs</h2>
            <p className="mt-3 text-sm text-slate-300">
              Select card tier, quantity, custom lanyards, and crystal holders to get an instant wholesale estimate with zero hidden fees.
            </p>
          </div>

          <div className="mt-10">
            <QuoteCalculator />
          </div>
        </Container>
      </section>

      {/* 5. ANATOMY OF AN IDGEN BADGE (PHYSICAL QUALITY BREAKDOWN) */}
      <section className="py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Hardware Showcase Image */}
            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl bg-background">
                <div className="relative aspect-[16/11] w-full overflow-hidden img-shine">
                  <Image
                    src="/images/Lanyard with Holder Samples/Sample 26.jpg"
                    alt="Complete ID Badge Assembly: Rigid Holder, Chrome Swivel Hook, and Custom Satin Lanyard — IDGen"
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 bg-surface border-t border-surface-border">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-sm">Full Pre-Assembled Wearable Package</h3>
                      <p className="text-xs text-muted mt-0.5">Cards pre-inserted into holders with ultrasonic welded ribbons</p>
                    </div>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent border border-accent/20">
                      Ready to Distribute
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hardware Specs Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-accent uppercase">Engineered Durability</span>
                <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">
                  Wearable Hardware That Withstands Daily Student & Staff Use
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  A high-resolution ID card is only as good as the accessories holding it. We eliminate common wear issues like snapped rivets, cracked plastic pouches, and twisted clips.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { num: "1", title: "30-Mil CR80 Solid PVC Core", desc: "Standard credit-card thickness with scratch-resistant thermal overlay that resists peeling." },
                  { num: "2", title: "Crystal Rigid Polycarbonate Holder", desc: "Four-side-lock enclosure prevents badge bending, scratching, and water penetration." },
                  { num: "3", title: "Chrome Heavy-Duty Swivel Hook", desc: "Rust-resistant 360-degree rotation keeps badges facing forward at all times." },
                  { num: "4", title: "Ultrasonically Welded Satin Lanyard", desc: "Acoustic molecular weld withstands over 18kg of pull tension with zero fraying or metal pinch." },
                ].map((item) => (
                  <div key={item.num} className="group rounded-2xl border border-surface-border bg-background p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-white font-black text-sm shadow-md shadow-accent/25 transition-transform group-hover:scale-110">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                        <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. REAL PHYSICAL PRODUCT GALLERY SHOWCASE */}
      <section className="py-20 lg:py-24 bg-background border-b border-surface-border">
        <Container>
          <div className="text-center mb-12">
            <SectionHead
              align="center"
              eyebrow="Product Showcase"
              title="Real Products Crafted at Our Guwahati Hub"
              lede="Browse our actual physical products — from executive acrylic badges and zinc medals to custom dye-sub lanyards and complete student ID sets."
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {productGallery.map((item) => (
              <div 
                key={item.label} 
                className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/40"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-900 img-shine">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-2.5 left-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 px-2.5 py-0.5 text-[9px] font-bold text-accent uppercase">
                    {item.cat}
                  </span>
                </div>
                <div className="p-3.5">
                  <p className="text-xs font-bold text-foreground truncate">{item.label}</p>
                  <p className="text-[10px] text-muted mt-0.5">IDGen Direct Production</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 rounded-full bg-surface border border-surface-border px-7 py-3.5 text-sm font-bold text-accent shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Explore Complete Product Catalog</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 7. IDGEN STUDIO SAAS SPOTLIGHT */}
      <section className="py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase mb-4 border border-accent/15">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen Identity Portal</span>
              </div>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl leading-tight tracking-tight">
                IDGen Studio: Eliminate ID Mistakes Before Printing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Collecting student photographs, phone numbers, and employee credentials is traditionally chaotic. IDGen Studio unites digital record collection, AI face centering, and batch preview approvals in one sleek dashboard.
              </p>

              <div className="mt-8 space-y-4">
                {studioFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.title} className="flex items-start gap-3.5 group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-md shadow-accent/25 transition-transform group-hover:scale-110">
                        <Icon className="h-4.5 w-4.5" />
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
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-navy-deep hover:shadow-xl btn-glow"
                >
                  <span>Tour IDGen Studio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                >
                  <span>Request Portal Demo</span>
                </Link>
              </div>
            </div>

            {/* Right UI Visual */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-2xl">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl img-shine">
                  <Image
                    src="/images/ID Card Marketing Matrials/Data Collection Software.png"
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

      {/* 8. DIRECT GUWAHATI MANUFACTURING FACILITY & REGIONAL NETWORK */}
      <section className="py-20 lg:py-24 bg-background border-b border-surface-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Factory Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl bg-surface">
                <div className="relative aspect-[16/10] w-full overflow-hidden img-shine">
                  <Image
                    src="/images/ID Card Full Set Samples/IMG20250321154119.jpg"
                    alt="IDGen Production Line — ID Card Assembly and Quality Check"
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 bg-surface border-t border-surface-border">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-sm">Guwahati Central Production Hub</h3>
                      <p className="text-xs text-muted mt-0.5">Automated retransfer lines, dye-sub lanyards & laser encoding</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
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
                      className="rounded-xl border border-surface-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/why-idgen/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline transition-colors"
                >
                  <span>Learn About Our Manufacturing Quality</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. DELIVERED ORDERS (SOCIAL PROOF CLIENT GALLERY) */}
      <section className="py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>
          <div className="text-center mb-12">
            <SectionHead
              align="center"
              eyebrow="Real Delivered Batches"
              title="Trusted by Educational & Corporate Leaders"
              lede="Every order is manufactured, inspected, and securely packaged at our Guwahati hub before dispatch across Assam, Meghalaya, Arunachal Pradesh, Manipur, and beyond."
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {deliveredOrders.map((item) => (
              <div 
                key={item.title} 
                className="group relative overflow-hidden rounded-2xl border border-surface-border bg-background transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 img-shine">
                  <Image
                    src={item.src}
                    alt={`ID Cards delivered to ${item.title}`}
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3.5">
                  <div className="flex items-center gap-1.5">
                    <Package className="h-3.5 w-3.5 text-accent shrink-0" />
                    <p className="text-xs font-bold text-foreground truncate">{item.title}</p>
                  </div>
                  <p className="text-[10px] text-muted mt-0.5 pl-5">{item.state}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/case-studies/"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-7 py-3.5 text-sm font-bold text-accent transition-all duration-300 hover:border-accent hover:shadow-md hover:-translate-y-0.5"
            >
              <Camera className="h-4 w-4" />
              <span>Explore Verified Client Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 10. INSTITUTIONAL COMPARISON TABLE */}
      <section className="py-20 lg:py-24 bg-background border-b border-surface-border">
        <Container>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <SectionHead
              align="center"
              eyebrow="The IDGen Difference"
              title="Why Schools & Enterprises Choose Direct Manufacturing"
              lede="Compare IDGen's industrial factory retransfer process with traditional stationery resellers and local print shops."
            />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-surface-border bg-surface shadow-xl max-w-4xl mx-auto">
            <div className="min-w-[620px]">
              <div className="grid grid-cols-12 bg-muted/10 p-4 sm:p-5 border-b border-surface-border text-xs font-bold text-foreground uppercase tracking-wider">
                <div className="col-span-4 sm:col-span-3">Feature</div>
                <div className="col-span-4 sm:col-span-5 text-accent">IDGen Factory Solution</div>
                <div className="col-span-4 sm:col-span-4 text-muted">Traditional Local Reseller</div>
              </div>

              <div className="divide-y divide-surface-border">
                {comparisonData.map((row) => (
                  <div key={row.feature} className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-surface/80 transition-colors">
                    <div className="col-span-4 sm:col-span-3 font-bold text-foreground">
                      {row.feature}
                    </div>
                    <div className="col-span-4 sm:col-span-5 text-foreground font-medium flex items-start gap-2 pr-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{row.idgen}</span>
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-muted flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. INSTITUTIONAL SECTOR APPLICATIONS */}
      <section className="py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>
          <SectionHead
            eyebrow="Tailored Solutions"
            title="Customized for Every Institutional Demand"
            lede="Designed around real-world institutional needs — from annual school photo rollouts to high-security corporate turnstiles."
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

      {/* 12. FAQ SECTION */}
      <section className="border-b border-surface-border bg-background py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHead
              eyebrow="Clear Answers"
              title="Frequently Asked Questions"
              lede="Everything you need to know about ordering ID cards, custom lanyards, and RFID credentials directly from our factory."
            />
            <div className="mt-10">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* 13. CLOSING HIGH-CONVERSION CTA */}
      <section className="py-20 lg:py-24 bg-surface">
        <Container>
          <CtaBand
            title="Ready to upgrade your organization's identification system?"
            body="Whether you need 250 school ID cards or 10,000 corporate RFID badges with ultrasonic sealed lanyards, IDGen delivers factory-direct precision."
            links={[
              { label: "Request an Instant Quote", href: "/request-a-quote/", primary: true },
              { label: "Chat on WhatsApp", href: "https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20to%20request%20samples%20and%20pricing.", primary: false },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
