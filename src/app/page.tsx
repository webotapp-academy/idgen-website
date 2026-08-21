import type { Metadata } from "next";
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
  Clock,
  MapPin,
  Flame,
  Radio,
  Box,
  Eye,
  Check,
  MessageCircle,
  HelpCircle,
  FileCheck,
  Truck,
  RotateCcw,
  Sliders,
  Play
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, localBusinessSchema, breadcrumbSchema } from "@/lib/schema-org";
import { HeroSection } from "@/components/home/HeroSection";
import { QuoteCalculator } from "@/components/ui/QuoteCalculator";
import { SITE, SITE_URL } from "@/data/site";
import type { Faq } from "@/data/types";

/* ============================================================
   PAGE METADATA & SEO CONFORMING TO DOCX SPECIFICATION
   ============================================================ */

export const metadata: Metadata = {
  title: "ID Card Printing & Identity Solutions in Guwahati | IDGen",
  description:
    "IDGen provides ID card printing, custom lanyards, RFID cards, event badges and complete identity solutions for schools, colleges, companies and organizations across Assam and Northeast India.",
  keywords: [
    "Identity solutions",
    "ID card printing",
    "Custom printed lanyards",
    "RFID card printing",
    "Event card printing",
    "ID card accessories",
    "Student ID cards",
    "Employee ID cards",
    "Guwahati",
    "Assam",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "ID Card Printing & Identity Solutions in Guwahati | IDGen",
    description:
      "IDGen provides ID card printing, custom lanyards, RFID cards, event badges and complete identity solutions for schools, colleges, companies and organizations across Assam and Northeast India.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/idgen-complete-id-card-identification-set.jpg`,
        width: 1200,
        height: 630,
        alt: "Complete ID card identification set with ID card, holder, hook and custom printed lanyard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ID Card Printing & Identity Solutions in Guwahati | IDGen",
    description:
      "IDGen provides ID card printing, custom lanyards, RFID cards, event badges and complete identity solutions for schools, colleges, companies and organizations across Assam and Northeast India.",
  },
};

/* ============================================================
   CONTENT DEFINITIONS (STRICTLY FROM WORD DOCX)
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

/* 4 Core Services from docx */
const coreServices = [
  {
    title: "ID Card Printing",
    body: "PVC ID cards for schools, colleges, companies, hospitals and institutions.",
    href: "/id-card-printing/",
    imageSrc: "/images/service-pvc-id-card-printing-v3.jpg",
    imageAlt: "Custom PVC ID card printing by IDGen with 2 cards and clear IDGen branding",
    tag: "30-Mil CR80 PVC",
    badge: "Core Service",
  },
  {
    title: "Custom Printed Lanyards",
    body: "Branded 20 mm lanyards with logos, colors and custom artwork.",
    href: "/custom-printed-lanyard-printing/",
    imageSrc: "/images/service-custom-printed-lanyards.jpg",
    imageAlt: "Custom printed ID card lanyards by IDGen",
    tag: "20 mm Satin",
    badge: "Bestseller",
  },
  {
    title: "Event Card Printing",
    body: "Conference badges, delegate cards and event identification solutions.",
    href: "/event-card-printing/",
    imageSrc: "/images/service-event-card-printing-v3.jpg",
    imageAlt: "Custom event cards with clear IDGen logo and branded lanyards",
    tag: "Conferences & Summits",
    badge: "Express 48h",
  },
  {
    title: "RFID Card Printing",
    body: "Customized RFID cards compatible with attendance and access systems.",
    href: "/rfid-card-printing/",
    imageSrc: "/images/service-rfid-card-printing-v3.jpg",
    imageAlt: "Man tapping IDGen branded RFID smart card at electronic turnstile door sensor",
    tag: "13.56 MHz / NFC",
    badge: "Smart Contactless",
  },
];

/* Complete Identification Solutions 4 Configurations */
const completeSolutions = [
  {
    num: "1",
    title: "Card Only",
    desc: "Suitable when your organization already has holders and lanyards.",
    tag: "Card Baseline",
    href: "/id-card-printing/",
  },
  {
    num: "2",
    title: "Card + Holder",
    desc: "Protects the card while keeping it professional and durable.",
    tag: "Protection",
    href: "/id-card-holders/",
  },
  {
    num: "3",
    title: "Wearable Identification",
    desc: "Card + Holder + Hook + Lanyard for daily student and employee use.",
    tag: "Daily Wearable",
    href: "/custom-printed-lanyard-printing/",
  },
  {
    num: "4",
    title: "Complete Ready-to-Use Set",
    desc: "Ultrasonic sealing + holder + hook + lanyard for a finished wearable solution.",
    tag: "Finished Assembly",
    href: "/ultrasonic-sealing/",
  },
];

/* Sector Solutions */
const orgSolutions = [
  {
    icon: GraduationCap,
    title: "Students",
    body: "School, college and university identification with bulk personalization.",
    href: "/student-id-card-printing/",
    imageSrc: "/images/sol-students-idgen-v2.jpg",
    imageAlt: "Student and University ID Card Printing with clear IDGen branding",
    tag: "Education",
    badge: "Schools & Colleges",
  },
  {
    icon: Building2,
    title: "Companies",
    body: "Employee, staff and visitor identification with branded accessories.",
    href: "/employee-id-card-printing/",
    imageSrc: "/images/sol-companies-idgen-v2.jpg",
    imageAlt: "Employee and Staff Corporate ID Cards with metallic badge reels and clear IDGen branding",
    tag: "Corporate",
    badge: "Enterprises",
  },
  {
    icon: CalendarDays,
    title: "Events",
    body: "Conference badges, delegate cards and one- or two-hook lanyard configurations.",
    href: "/event-card-printing/",
    imageSrc: "/images/sol-events-idgen.png",
    imageAlt: "Event VIP Badges and Delegate Passes with clear IDGen branding",
    tag: "Events & Summits",
    badge: "Conferences",
  },
  {
    icon: Award,
    title: "Institutions",
    body: "Hospitals, NGOs, government organizations and membership programmes.",
    href: "/membership-card-printing/",
    imageSrc: "/images/sol-institutions-idgen.png",
    imageAlt: "Institutional and Hospital Identity Cards with clear IDGen branding",
    tag: "Institutional",
    badge: "Hospitals & NGOs",
  },
];

/* IDGen Studio 4 Pillars */
const studioPillars = [
  {
    icon: Sparkles,
    title: "Digital Data Collection",
    desc: "Collect names, photographs and ID information in one workflow.",
  },
  {
    icon: Layers,
    title: "Photo Management",
    desc: "Keep photographs connected to the correct student or employee record.",
  },
  {
    icon: Eye,
    title: "Card Preview",
    desc: "Review personalized cards before production begins.",
  },
  {
    icon: ShieldCheck,
    title: "Approval Workflow",
    desc: "Approve records before printing to reduce costly reprints.",
  },
];

/* Why Organizations Choose IDGen (6 Pillars) */
const whyIdgenPillars = [
  {
    num: "01",
    title: "Identity-Focused Business",
    desc: "Specialized in organizational identification systems.",
  },
  {
    num: "02",
    title: "Structured Workflow",
    desc: "Requirement → Preview → Production → Quality → Dispatch.",
  },
  {
    num: "03",
    title: "Bulk Capability",
    desc: "Designed for institutional and high-volume projects.",
  },
  {
    num: "04",
    title: "Complete ID Solutions",
    desc: "Cards, lanyards, holders, hooks and RFID in one workflow.",
  },
  {
    num: "05",
    title: "Preview Before Printing",
    desc: "Reduce data and personalization errors before production.",
  },
  {
    num: "06",
    title: "Guwahati-Based Service",
    desc: "Serving Assam and the wider Northeast India market.",
  },
];

/* IDGen at a Glance (4 KPIs) */
const atAGlanceMetrics = [
  {
    icon: MapPin,
    metric: "Based in Guwahati",
    label: "Serving organizations across Assam and Northeast India.",
    highlight: "Regional Hub",
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-400/20",
  },
  {
    icon: Zap,
    metric: "Up to 10,000 IDs/Day",
    label: "Production capability varies by product and project requirements.",
    highlight: "High Volume",
    color: "text-accent bg-accent/10 border-accent/20",
  },
  {
    icon: Clock,
    metric: "72-Hour Dispatch",
    label: "After approval and payment, subject to applicable order conditions.",
    highlight: "Express Turnaround",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-400/20",
  },
  {
    icon: ShieldCheck,
    metric: "Institutional Focus",
    label: "Schools, colleges, companies, hospitals, NGOs and events.",
    highlight: "End-to-End",
    color: "text-blue-400 bg-blue-500/10 border-blue-400/20",
  },
];

/* Priority Service Areas from docx */
const priorityAreas = [
  "Guwahati",
  "Jorhat",
  "Dibrugarh",
  "Silchar",
  "Tezpur",
  "Nagaon",
  "Tinsukia",
  "Sivasagar",
  "Golaghat",
  "Barpeta",
];

/* 5 Core FAQs verbatim from docx */
const faqs: Faq[] = [
  {
    q: "What does IDGen do?",
    a: "IDGen provides customized ID cards, printed lanyards, RFID cards, event badges, ID card accessories and digital identity workflows for organizations.",
  },
  {
    q: "Where is IDGen located?",
    a: "IDGen is based in Guwahati, Assam, and serves customers across Northeast India.",
  },
  {
    q: "Can IDGen handle bulk ID card printing?",
    a: "Yes. Bulk ID card printing is supported for schools, colleges, companies, institutions and events through the main ID card printing service.",
  },
  {
    q: "Can I order a complete ID card set?",
    a: "Yes. You can combine ID cards, holders, hooks, ultrasonic sealing and custom printed lanyards into one complete wearable identification solution.",
  },
  {
    q: "Does IDGen provide data collection?",
    a: "Yes. IDGen Studio supports digital data collection, photograph management, card preview and approval before printing.",
  },
];

/* Production Workflow Steps */
const workflowSteps = [
  { step: "1", title: "Customer Data", desc: "Digital intake via IDGen Studio" },
  { step: "2", title: "Card Design", desc: "Custom branding & formatting" },
  { step: "3", title: "Preview", desc: "Digital proof verification" },
  { step: "4", title: "Printing", desc: "High-definition PVC retransfer" },
  { step: "5", title: "Lanyard", desc: "20 mm dye-sub printed ribbon" },
  { step: "6", title: "Assembly", desc: "Ultrasonic weld & crystal holder" },
  { step: "7", title: "Quality Check", desc: "Barcode & physical inspection" },
  { step: "8", title: "Finished Order", desc: "72-hour regional dispatch" },
];

export default function HomePage() {
  const breadcrumbItems = [{ name: "Home", path: "/" }];

  return (
    <>
      {/* JSON-LD SCHEMAS (FAQPage, LocalBusiness, BreadcrumbList) */}
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={localBusinessSchema({ areaServed: ["Assam", "Northeast India"] })} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      {/* ============================================================
          1. HERO SECTION (H1, Subhead, Description, Badges, Showcase)
          ============================================================ */}
      <HeroSection />

      {/* ============================================================
          2. TRUSTED BY ORGANIZATIONS THAT NEED MORE THAN JUST AN ID CARD
             ("One workflow. One partner." - Distinct Full-Width Process Design)
          ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050B14] via-[#0A1628] to-[#050B14] py-16 lg:py-24 text-white border-b border-white/10">
        {/* Background Ambient Glows & Grid */}
        <div className="hero-grid-pattern absolute inset-0 opacity-15 pointer-events-none" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <Container className="relative z-10">

          {/* Centered Master Section Header */}
          <div className="text-center w-full mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold text-cyan-300 uppercase tracking-widest backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <Sparkles className="h-3.5 w-3.5" />
              <span>One Workflow. One Partner.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight w-full px-4 text-balance mx-auto">
              Trusted by Organizations That Need More Than Just an ID Card
            </h2>

            <p className="text-base sm:text-lg font-semibold text-cyan-200">
              Most organizations don&apos;t simply need a card—they need a complete identification system.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re onboarding 2,000 students, issuing employee ID cards, organizing a conference, or replacing annual ID cards, IDGen helps coordinate the entire workflow from data collection to finished wearable identification.
            </p>
          </div>

          {/* Institutional Client Trust Logo Carousel Ticker */}
          <div className="mt-14">
            <div className="text-center mb-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-400/20 shadow-md">
                Trusted Credentials Partner Across Assam &amp; Northeast India
              </span>
            </div>

            {/* Premium Seamless Colorful Infinite Auto-Sliding Logo Ticker */}
            <div className="relative w-full overflow-hidden py-4 bg-white/[0.02] border-y border-white/10 rounded-2xl backdrop-blur-md">
              {/* Fade masks for smooth left/right edges */}
              <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#050B14] via-[#050B14]/80 to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee flex items-center gap-5 sm:gap-6">
                {[
                  { name: "Don Bosco Hr Sec School", logo: "/images/clint logo/1.png", location: "Gojapara, Assam", tag: "School ID & Lanyards" },
                  { name: "Jorhat Kendriya Vidyalaya", logo: "/images/clint logo/2.png", location: "Jorhat, Assam", tag: "Student Smart Cards" },
                  { name: "CKB College", logo: "/images/clint logo/3.png", location: "Jorhat, Assam", tag: "Faculty & Staff IDs" },
                  { name: "DBS Itanagar", logo: "/images/clint logo/4.png", location: "Arunachal Pradesh", tag: "Complete Wearable Sets" },
                  { name: "Rayburn College", logo: "/images/clint logo/5.png", location: "Churachandpur, Manipur", tag: "RFID Campus Cards" },
                  { name: "Nathan Brown Academy", logo: "/images/clint logo/6.png", location: "Namrup, Assam", tag: "Student ID Cards" },
                  { name: "Ardalivia English School", logo: "/images/clint logo/7.png", location: "Assam", tag: "Full ID Kits" },
                  { name: "Assam Govt Departments", logo: "/images/clint logo/8.png", location: "Guwahati Hub", tag: "Official Credentials" },
                  { name: "Don Bosco Hr Sec School", logo: "/images/clint logo/1.png", location: "Gojapara, Assam", tag: "School ID & Lanyards" },
                  { name: "Jorhat Kendriya Vidyalaya", logo: "/images/clint logo/2.png", location: "Jorhat, Assam", tag: "Student Smart Cards" },
                  { name: "CKB College", logo: "/images/clint logo/3.png", location: "Jorhat, Assam", tag: "Faculty & Staff IDs" },
                  { name: "DBS Itanagar", logo: "/images/clint logo/4.png", location: "Arunachal Pradesh", tag: "Complete Wearable Sets" },
                  { name: "Rayburn College", logo: "/images/clint logo/5.png", location: "Churachandpur, Manipur", tag: "RFID Campus Cards" },
                  { name: "Nathan Brown Academy", logo: "/images/clint logo/6.png", location: "Namrup, Assam", tag: "Student ID Cards" },
                  { name: "Ardalivia English School", logo: "/images/clint logo/7.png", location: "Assam", tag: "Full ID Kits" },
                  { name: "Assam Govt Departments", logo: "/images/clint logo/8.png", location: "Guwahati Hub", tag: "Official Credentials" },
                ].map((client, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:p-3.5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.1] hover:shadow-xl hover:shadow-cyan-500/15 shrink-0 w-44 sm:w-52"
                  >
                    {/* Colorful White Badge Frame for Logo */}
                    <div className="relative h-14 sm:h-16 w-full flex items-center justify-center p-1.5 rounded-xl bg-white/95 shadow-inner overflow-hidden mb-2.5 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 640px) 160px, 208px"
                      />
                    </div>

                    {/* Bottom Client Name & Category Tag */}
                    <div className="text-center w-full min-w-0">
                      <h4 className="text-xs sm:text-[13px] font-extrabold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {client.name}
                      </h4>
                      <p className="text-[10px] font-semibold text-cyan-300/80 truncate mt-0.5">
                        {client.tag}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video & Workflow Callout Banner */}
          <div className="mt-10 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30 group cursor-pointer hover:scale-105 transition-transform">
                <Play className="h-6 w-6 fill-slate-950 ml-0.5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                  30–60 Second Workflow Video
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-white">
                  IDGen ID Card Printing &amp; Identification Production Process
                </h4>
                <p className="text-xs text-slate-300 mt-0.5 max-w-xl leading-relaxed">
                  See how IDGen manages organizational identification projects from data and design through preview, production, quality checking and finished identification sets.
                </p>
              </div>
            </div>

            <Link
              href="/why-idgen/"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shrink-0"
            >
              <span>Watch 60s Video</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </Container>
      </section>

      {/* ============================================================
          3. OUR IDENTITY SERVICES (4 CORE SERVICES)
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-background border-b border-surface-border">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead
              eyebrow="Specialized Capabilities"
              title="Our Identity Services"
              lede="IDGen provides specialized identification services designed for institutions and organizations."
            />
            <Link
              href="/services/"
              className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-surface-border px-5 py-2.5 text-sm font-bold text-accent shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md hover:-translate-y-0.5"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-10 p-4 rounded-2xl border border-surface-border bg-surface flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
              <span>Explore detailed technical specifications and material standards for each service category.</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/id-card-printing/" className="font-semibold text-foreground hover:text-accent">
                ID Cards
              </Link>
              <span>•</span>
              <Link href="/custom-printed-lanyard-printing/" className="font-semibold text-foreground hover:text-accent">
                Lanyards
              </Link>
              <span>•</span>
              <Link href="/event-card-printing/" className="font-semibold text-foreground hover:text-accent">
                Event Cards
              </Link>
              <span>•</span>
              <Link href="/rfid-card-printing/" className="font-semibold text-foreground hover:text-accent">
                RFID Smart
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          4. COMPLETE IDENTIFICATION SOLUTIONS (ASSEMBLY WORKFLOW)
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left: Complete Assembly Photograph (Uncropped 5-Step Breakdown) */}
            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl bg-background transition-all duration-300 hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden img-shine bg-[#08111f]">
                  <Image
                    src="/images/idgen-complete-modular-system.jpg"
                    alt="Complete ID card identification set breakdown: ID Card, Holder, Hook, Lanyard, and Assembled Set"
                    title="IDGen Complete Identification Modular Breakdown"
                    fill
                    priority
                    className="object-contain p-2 sm:p-3 object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-surface border-t border-surface-border">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-extrabold text-foreground text-sm">
                        Complete Ready-to-Use Identification Breakdown
                      </h3>
                      <p className="text-xs text-muted mt-0.5">
                        Modular assembly: ID Card → Holder → Hook → Lanyard → Assembled Set.
                      </p>
                    </div>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent border border-accent/20">
                      Modular Assembly
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 4 Modular Configurations */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-accent uppercase">
                  Modular Systems
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight leading-tight">
                  Complete Identification Solutions
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Most customers don&apos;t order individual products—they order a complete wearable identification system.
                </p>
              </div>

              <div className="space-y-3">
                {completeSolutions.map((item) => (
                  <Link
                    key={item.num}
                    href={item.href}
                    className="group block rounded-2xl border border-surface-border bg-background p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-white font-black text-sm shadow-md shadow-accent/25 transition-transform group-hover:scale-110">
                          {item.num}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-foreground text-sm group-hover:text-accent transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-[10px] font-semibold text-muted bg-surface px-2 py-0.5 rounded border border-surface-border">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/id-card-printing/"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-navy-deep hover:shadow-lg"
                >
                  <span>Explore Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/ultrasonic-sealing/"
                  className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-5 py-3 text-xs sm:text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
                >
                  <span>Ultrasonic Lanyard Sealing</span>
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          5. SOLUTIONS FOR EVERY ORGANIZATION (BY USE-CASE)
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-background border-b border-surface-border">
        <Container>
          <SectionHead
            eyebrow="Sector Applications"
            title="Solutions for Every Organization"
            lede="Instead of creating separate product pages for every customer type, IDGen builds solutions around how organizations actually use identification."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {orgSolutions.map((org) => (
              <FeatureCard
                key={org.title}
                icon={org.icon}
                title={org.title}
                body={org.body}
                href={org.href}
                imageSrc={org.imageSrc}
                imageAlt={org.imageAlt}
                tag={org.tag}
                badge={org.badge}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-7 py-3.5 text-sm font-bold text-accent shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Get a Customized Solution for Your Organization</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ============================================================
          6. IDGEN STUDIO — DIGITAL IDENTITY WORKFLOW
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase mb-4 border border-accent/15">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Digital Identity Workflow</span>
                </div>

                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl leading-tight tracking-tight">
                  IDGen Studio — Digital Identity Workflow
                </h2>

                <p className="mt-4 text-base leading-relaxed text-muted">
                  Collecting photographs and personal information is often the most difficult part of an ID card project. IDGen Studio connects digital data collection with physical ID card production.
                </p>
              </div>

              {/* 4 Pillars from docx */}
              <div className="space-y-3.5">
                {studioPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="flex items-start gap-3.5 group">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-md shadow-accent/25 transition-transform group-hover:scale-110">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">{pillar.title}</h3>
                        <p className="text-xs text-muted mt-0.5 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Slogan & Action */}
              <div className="pt-2">
                <div className="p-3.5 rounded-2xl bg-background border border-surface-border flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold text-foreground">
                    &ldquo;See It Before We Print It.&rdquo;
                  </span>
                  <span className="text-[11px] font-semibold text-accent">Zero Data Mismatch</span>
                </div>

                <div className="flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/idgen-studio/"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-navy-deep hover:shadow-xl btn-glow"
                  >
                    <span>Explore IDGen Studio</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/request-a-quote/"
                    className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                  >
                    <span>Request Demo</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Real Software Screenshot */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-2xl">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl img-shine">
                  <Image
                    src="/images/service-idgen-studio.jpg"
                    alt="IDGen Studio digital ID card data collection and preview"
                    title="IDGen Studio Digital ID Card Data Collection and Preview"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div className="flex items-center justify-between p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Collect, review and prepare identification data before printing.</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">IDGen Studio Cloud</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          7. WHY ORGANIZATIONS CHOOSE IDGEN & IDGEN AT A GLANCE
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-background border-b border-surface-border">
        <Container>

          {/* Why Organizations Choose IDGen */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Production Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl bg-surface">
                <div className="relative aspect-[16/10] w-full overflow-hidden img-shine">
                  <Image
                    src="/images/service-idgen-production.jpg"
                    alt="IDGen identity product production and quality workflow in Guwahati"
                    title="IDGen Production and Quality Workflow"
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 bg-surface border-t border-surface-border">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-sm">
                        Guwahati Identity Products &amp; Production Workflow
                      </h3>
                      <p className="text-xs text-muted mt-0.5">
                        IDGen production and quality workflow in Guwahati, Assam
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Direct Hub
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Pillars */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <SectionHead
                eyebrow="Proven Quality"
                title="Why Organizations Choose IDGen"
                lede="Specialized in institutional identity workflows with direct manufacturing and guaranteed regional reliability."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {whyIdgenPillars.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-surface-border bg-surface p-3.5 transition-all duration-300 hover:border-accent/40 hover:shadow-sm"
                  >
                    <span className="text-[10px] font-mono font-bold text-accent">{p.num}</span>
                    <h3 className="font-bold text-foreground text-xs sm:text-sm mt-1">{p.title}</h3>
                    <p className="text-[11px] text-muted mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/why-idgen/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline transition-colors"
                >
                  <span>Learn more about Why IDGen</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* IDGen at a Glance (4 Metric Cards) */}
          <div className="mt-16 pt-12 border-t border-surface-border">
            <div className="mb-8 text-center max-w-xl mx-auto">
              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                IDGen at a Glance
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-1.5">
                Built to serve institutional and high-volume identity rollouts across Northeast India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {atAGlanceMetrics.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.metric}
                    className="group relative rounded-2xl border border-surface-border bg-surface p-6 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-between"
                  >
                    <div className="flex flex-col items-center">
                      {/* Glowing Icon Container */}
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${card.color} shadow-md transition-transform duration-300 group-hover:scale-110 mb-3.5`}>
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="inline-block rounded-full bg-accent/10 px-3 py-0.5 text-[10px] font-bold text-accent mb-2 border border-accent/20">
                        {card.highlight}
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-foreground">{card.metric}</h4>
                      <p className="text-xs text-muted mt-1.5 leading-relaxed">{card.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </Container>
      </section>

      {/* ============================================================
          8. SERVING ASSAM & NORTHEAST INDIA (LOCATION & REGIONAL HUB)
          ============================================================ */}
      <section className="relative overflow-hidden py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>

          {/* Section Header */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1 text-xs font-bold text-accent border border-accent/20">
                <MapPin className="h-3.5 w-3.5" />
                <span>Direct Regional Manufacturing &amp; Fulfillment</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Serving Assam &amp; Northeast India
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                IDGen is headquartered in Guwahati, Assam—providing localized digital workflows, direct factory production, and express regional dispatch across all 8 Northeast states.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/service-areas/assam/"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-navy-deep transition-all"
              >
                <span>Assam Service Areas</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/service-areas/assam/guwahati/"
                className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-5 py-3 text-xs sm:text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-all"
              >
                <span>Guwahati Hub Details</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

            {/* Left: Priority Assam Cities & Northeast Coverage Grid */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                  Priority Assam Service Cities
                </span>
                <p className="text-xs text-muted mt-1">
                  Fast courier and direct institutional delivery available in all major districts:
                </p>

                {/* 10 Priority City Cards */}
                <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {priorityAreas.map((city) => (
                    <Link
                      key={city}
                      href={city === "Guwahati" ? "/service-areas/assam/guwahati/" : "/service-areas/assam/"}
                      className="group flex items-center justify-between rounded-xl border border-surface-border bg-background p-2.5 transition-all duration-200 hover:border-accent hover:bg-accent-soft/30 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <MapPin className="h-3 w-3 text-accent shrink-0" />
                        <span className="font-bold text-foreground text-xs truncate group-hover:text-accent">
                          {city}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Northeast States List */}
              <div className="pt-3 border-t border-surface-border">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2.5">
                  Complete 8-State Northeast Coverage
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Assam", "Arunachal Pradesh", "Meghalaya", "Manipur", "Mizoram", "Nagaland", "Tripura", "Sikkim"].map((st) => (
                    <span
                      key={st}
                      className="inline-flex items-center gap-1 rounded-lg border border-surface-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground"
                    >
                      <CheckCircle2 className="h-3 w-3 text-accent" />
                      <span>{st}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Callout Link */}
              <div className="p-4 rounded-2xl bg-background border border-surface-border flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-muted">Need a custom regional rollout or district delivery quote?</span>
                <Link
                  href="/request-a-quote/"
                  className="font-bold text-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>Request Assam Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Dedicated Guwahati Regional Hub Photography & Badges */}
            <div className="lg:col-span-6 space-y-4">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl bg-background">
                <div className="relative aspect-[16/10] w-full overflow-hidden img-shine">
                  <Image
                    src="/images/service-guwahati-hub-unique.jpg"
                    alt="IDGen identity solutions in Guwahati Assam"
                    title="IDGen Guwahati Regional Hub and Dispatch Center"
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 bg-background border-t border-surface-border flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-semibold text-foreground">Guwahati Central Hub &amp; Regional Dispatch</span>
                  </div>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold text-accent">
                    Assam • Northeast India
                  </span>
                </div>
              </div>

              {/* Regional Dispatch KPIs */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-surface-border bg-background p-3 text-center">
                  <p className="text-xs sm:text-sm font-extrabold text-foreground">Guwahati</p>
                  <p className="text-[10px] text-muted mt-0.5">Same-Day Pickup</p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-background p-3 text-center">
                  <p className="text-xs sm:text-sm font-extrabold text-accent">72 Hours</p>
                  <p className="text-[10px] text-muted mt-0.5">Regional Dispatch</p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-background p-3 text-center">
                  <p className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400">100% Zero</p>
                  <p className="text-[10px] text-muted mt-0.5">Transit Mismatch</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* ============================================================
          10. FREQUENTLY ASKED QUESTIONS (5 EXACT FAQS FROM DOCX)
          ============================================================ */}
      <section className="border-b border-surface-border bg-background py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHead
              align="center"
              eyebrow="Clear Answers"
              title="Frequently Asked Questions"
              lede="Frequently asked questions about IDGen identity solutions, card printing, custom lanyards, and digital workflows."
            />
            <div className="mt-10">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          11. READY TO BUILD YOUR IDENTIFICATION SYSTEM? (CLOSING CTA)
          ============================================================ */}
      <section className="py-10 lg:py-14 bg-surface">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#060D19] via-[#0E1E38] to-[#060D19] py-8 px-6 sm:py-10 sm:px-12 lg:px-16 text-white shadow-2xl border border-white/15">
            <div className="hero-grid-pattern absolute inset-0 opacity-15 pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Flame className="h-3.5 w-3.5" />
                <span>Start Your Project</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Build Your Identification System?
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Whether you need student ID cards, employee identification, RFID cards, event badges or complete wearable ID solutions, IDGen helps coordinate the entire workflow from data to dispatch.
              </p>

              <div className="py-2.5 px-4 rounded-xl bg-white/[0.04] border border-white/10 max-w-lg mx-auto backdrop-blur-sm">
                <p className="text-xs text-slate-200">
                  <strong className="text-white font-semibold">Tell us your requirement:</strong> We&apos;ll help you choose the right products, accessories and workflow for your organization.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-xs sm:text-sm font-bold text-navy-deep shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20to%20request%20samples%20and%20pricing%20for%20our%20organization."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-emerald-300 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp IDGen</span>
                </a>

                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
