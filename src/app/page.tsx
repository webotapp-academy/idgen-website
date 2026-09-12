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
import { ProductShowcaseCarousel } from "@/components/home/ProductShowcaseCarousel";
import { ServicesCarousel } from "@/components/home/ServicesCarousel";
import { SolutionsCarousel } from "@/components/home/SolutionsCarousel";
import { QuoteCalculator } from "@/components/ui/QuoteCalculator";
import { SITE, SITE_URL } from "@/data/site";
import type { Faq } from "@/data/types";
import { getDynamicHomePage } from "@/lib/dynamic-homepage";

/* ============================================================
   DYNAMIC METADATA & SEO
   ============================================================ */

export async function generateMetadata(): Promise<Metadata> {
  const data = getDynamicHomePage();
  const meta = data.metadata || {
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
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
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
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function HomePage() {
  const dynamicData = getDynamicHomePage();
  const {
    hero,
    productCatalog,
    trust,
    identityServices,
    completeSolutions,
    studio,
    whyIdgen,
    atAGlance,
    regionalHub,
    faq,
    closingCta,
  } = dynamicData;

  const breadcrumbItems = [{ name: "Home", path: "/" }];

  const allClients = [...trust.clients, ...trust.clients];

  const getStudioIcon = (key: string) => {
    switch (key) {
      case "sparkles": return Sparkles;
      case "layers": return Layers;
      case "eye": return Eye;
      case "shield": return ShieldCheck;
      default: return Sparkles;
    }
  };

  const getGlanceIcon = (key: string) => {
    switch (key) {
      case "map-pin": return MapPin;
      case "zap": return Zap;
      case "clock": return Clock;
      case "shield": return ShieldCheck;
      default: return MapPin;
    }
  };

  const getGlanceColor = (colorKey: string) => {
    switch (colorKey) {
      case "cyan": return "text-cyan-400 bg-cyan-500/10 border-cyan-400/20";
      case "accent": return "text-accent bg-accent/10 border-accent/20";
      case "emerald": return "text-emerald-400 bg-emerald-500/10 border-emerald-400/20";
      case "blue": return "text-blue-400 bg-blue-500/10 border-blue-400/20";
      default: return "text-cyan-400 bg-cyan-500/10 border-cyan-400/20";
    }
  };

  return (
    <>
      {/* JSON-LD SCHEMAS (FAQPage, LocalBusiness, BreadcrumbList) */}
      <JsonLd data={faqSchema(faq.faqs)} />
      <JsonLd data={localBusinessSchema({ areaServed: ["Assam", "Northeast India"] })} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      {/* ============================================================
          1. DYNAMIC HERO SECTION (H1, Subhead, Description, Badges, Showcase)
          ============================================================ */}
      <HeroSection data={hero} />

      {/* ============================================================
          2. PRODUCT SHOWCASE CAROUSEL (DIRECT HARDWARE & CARD PRODUCTS)
          ============================================================ */}
      <ProductShowcaseCarousel
        eyebrow={productCatalog?.eyebrow}
        title={productCatalog?.title}
        subtitle={productCatalog?.subtitle}
        buttonText={productCatalog?.buttonText}
        buttonHref={productCatalog?.buttonHref}
        products={productCatalog?.products}
      />

      {/* ============================================================
          3. DYNAMIC TRUSTED BY ORGANIZATIONS
          ============================================================ */}
      <section className="relative overflow-hidden bg-background dark:bg-gradient-to-b dark:from-[#050B14] dark:via-[#0A1628] dark:to-[#050B14] py-16 lg:py-24 text-foreground dark:text-white border-b border-surface-border dark:border-white/10 transition-colors duration-300">
        <div className="hero-grid-pattern absolute inset-0 opacity-15 pointer-events-none" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 dark:bg-cyan-500/10 blur-[180px]" />

        <Container className="relative z-10">
          <div className="text-center w-full mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 dark:border-cyan-400/30 bg-accent/10 dark:bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold text-accent dark:text-cyan-300 uppercase tracking-widest backdrop-blur-md shadow-sm dark:shadow-lg dark:shadow-cyan-500/10">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{trust.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground dark:text-white tracking-tight leading-tight w-full px-4 text-balance mx-auto">
              {trust.title}
            </h2>

            <p className="text-base sm:text-lg font-semibold text-accent dark:text-cyan-200">
              {trust.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-muted dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {trust.description}
            </p>
          </div>
        </Container>

        {/* Dynamic Client Logo Carousel Ticker */}
        <div className="mt-14 relative z-10 w-full">
          <div className="text-center mb-6">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent dark:text-cyan-400 bg-accent/10 dark:bg-cyan-500/10 px-4 py-1.5 rounded-full border border-accent/20 dark:border-cyan-400/20 shadow-sm dark:shadow-md">
              {trust.tickerEyebrow}
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-8 bg-surface/30 dark:bg-white/[0.01] border-y border-surface-border/80 dark:border-white/10 backdrop-blur-md transition-colors duration-300">
            <div className="absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-background dark:from-[#0A1628] via-background/90 dark:via-[#0A1628]/90 to-transparent z-10 pointer-events-none transition-colors duration-300" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-background dark:from-[#0A1628] via-background/90 dark:via-[#0A1628]/90 to-transparent z-10 pointer-events-none transition-colors duration-300" />

            <div className="animate-marquee flex items-center gap-10 sm:gap-14">
              {allClients.map((client, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center shrink-0 w-36 sm:w-44 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-20 sm:h-24 w-full flex items-center justify-center overflow-hidden mb-2">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain drop-shadow-sm filter dark:brightness-105 group-hover:drop-shadow-md transition-all duration-300"
                      sizes="(max-width: 640px) 144px, 176px"
                    />
                  </div>

                  <div className="text-center w-full min-w-0">
                    <h4 className="text-xs sm:text-[13px] font-extrabold text-foreground dark:text-white group-hover:text-accent dark:group-hover:text-cyan-300 transition-colors truncate">
                      {client.name}
                    </h4>
                    <p className="text-[10px] font-bold text-accent dark:text-cyan-400 truncate mt-0.5">
                      {client.tag || client.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Container className="relative z-10">
          {/* Dynamic Video & Workflow Callout Banner */}
          <div className="mt-10 p-5 rounded-2xl bg-surface dark:bg-white/[0.03] border border-surface-border dark:border-white/10 flex flex-wrap items-center justify-between gap-4 shadow-sm dark:shadow-none transition-colors duration-300">
            <div className="flex items-center gap-3.5">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent dark:bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-md shadow-accent/30 dark:shadow-cyan-500/30 group cursor-pointer hover:scale-105 transition-transform">
                <Play className="h-6 w-6 fill-white dark:fill-slate-950 ml-0.5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent dark:text-cyan-400">
                  {trust.videoBanner.eyebrow}
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-foreground dark:text-white">
                  {trust.videoBanner.title}
                </h4>
                <p className="text-xs text-muted dark:text-slate-300 mt-0.5 max-w-xl leading-relaxed">
                  {trust.videoBanner.desc}
                </p>
              </div>
            </div>

            <Link
              href={trust.videoBanner.buttonHref || "/why-idgen/"}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 dark:border-cyan-400/40 bg-accent/10 dark:bg-cyan-500/10 px-5 py-2.5 text-xs font-bold text-accent dark:text-cyan-300 hover:bg-accent/20 dark:hover:bg-cyan-500/20 hover:border-accent/50 dark:hover:border-cyan-400 transition-all shrink-0"
            >
              <span>{trust.videoBanner.buttonText || "Watch Video"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ============================================================
          4. OUR IDENTITY SERVICES (CAROUSEL WITH 3 PER ROW)
          ============================================================ */}
      <ServicesCarousel
        eyebrow={identityServices?.eyebrow}
        title={identityServices?.title}
        description={identityServices?.description}
        buttonText={identityServices?.buttonText}
        buttonHref={identityServices?.buttonHref}
        services={identityServices?.services}
      />

      {/* ============================================================
          5. DYNAMIC COMPLETE IDENTIFICATION SOLUTIONS
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 dark:bg-accent/15 px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>{completeSolutions.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {completeSolutions.title}
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {completeSolutions.description}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Complete Assembly Photograph */}
            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl bg-background transition-all duration-300 hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden img-shine bg-[#08111f]">
                  <Image
                    src={completeSolutions.image.src}
                    alt={completeSolutions.image.alt}
                    title={completeSolutions.image.title}
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
                        {completeSolutions.image.cardHeading}
                      </h3>
                      <p className="text-xs text-muted mt-0.5">
                        {completeSolutions.image.cardDesc}
                      </p>
                    </div>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent border border-accent/20">
                      {completeSolutions.image.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Modular Configurations */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
              <div className="space-y-3">
                {completeSolutions.items.map((item) => (
                  <Link
                    key={item.num}
                    href={item.href}
                    className="group block rounded-2xl border border-surface-border bg-background p-4 sm:p-4.5 transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white font-black text-[15px] shadow-md shadow-accent/25 transition-transform group-hover:scale-110">
                          {item.num}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-extrabold text-foreground text-[15px] group-hover:text-accent transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-[11px] font-bold text-muted bg-surface px-2 py-0.5 rounded border border-surface-border">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-[13px] text-muted mt-0.5 leading-snug">{item.desc}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={completeSolutions.ctaButtons.button1Href || "/id-card-printing/"}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-navy-deep hover:shadow-lg"
                >
                  <span>{completeSolutions.ctaButtons.button1Text || "Explore Card Printing"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href={completeSolutions.ctaButtons.button2Href || "/ultrasonic-sealing/"}
                  className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-5 py-3 text-xs sm:text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
                >
                  <span>{completeSolutions.ctaButtons.button2Text || "Ultrasonic Lanyard Sealing"}</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          6. SOLUTIONS FOR EVERY ORGANIZATION (CAROUSEL WITH 3 PER ROW)
          ============================================================ */}
      <SolutionsCarousel />

      {/* ============================================================
          7. DYNAMIC IDGEN STUDIO WORKFLOW
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase border border-accent/15">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{studio.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
              {studio.title}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-muted">
              {studio.description}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3.5">
                {studio.pillars.map((pillar) => {
                  const Icon = getStudioIcon(pillar.iconKey);
                  return (
                    <div key={pillar.title} className="flex items-start gap-3.5 group p-3 rounded-2xl bg-background border border-surface-border/70 hover:border-accent/40 transition-colors">
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
                    {studio.slogan.quote}
                  </span>
                  <span className="text-[11px] font-semibold text-accent">{studio.slogan.badge}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3.5">
                  <Link
                    href={studio.ctaButtons.primaryHref || "/idgen-studio/"}
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-navy-deep hover:shadow-xl btn-glow"
                  >
                    <span>{studio.ctaButtons.primaryText || "Explore IDGen Studio"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={studio.ctaButtons.secondaryHref || "/request-a-quote/"}
                    className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                  >
                    <span>{studio.ctaButtons.secondaryText || "Request Demo"}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Software Screenshot */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-2xl">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl img-shine">
                  <Image
                    src={studio.image.src}
                    alt={studio.image.alt}
                    title={studio.image.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div className="flex items-center justify-between p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{studio.image.caption}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">{studio.image.badge}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          8. DYNAMIC WHY ORGANIZATIONS CHOOSE IDGEN & KPIS
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-background border-b border-surface-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 dark:bg-accent/15 px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              <span>{whyIdgen.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {whyIdgen.title}
            </h2>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {whyIdgen.description}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Production Photo */}
            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl bg-surface">
                <div className="relative aspect-[16/10] w-full overflow-hidden img-shine">
                  <Image
                    src={whyIdgen.photo.src}
                    alt={whyIdgen.photo.alt}
                    title={whyIdgen.photo.title}
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 bg-surface border-t border-surface-border">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-sm">
                        {whyIdgen.photo.heading}
                      </h3>
                      <p className="text-xs text-muted mt-0.5">
                        {whyIdgen.photo.subheading}
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {whyIdgen.photo.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Pillars */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {whyIdgen.pillars.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-surface-border bg-surface p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 dark:bg-cyan-500/10 border border-accent/20 text-accent dark:text-cyan-400 font-mono font-extrabold text-[13px] mb-2.5 shadow-sm">
                      {p.num}
                    </div>
                    <h3 className="font-extrabold text-foreground text-[15px]">{p.title}</h3>
                    <p className="text-[13px] text-muted mt-1 leading-snug">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={whyIdgen.linkHref || "/why-idgen/"}
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline transition-colors"
                >
                  <span>{whyIdgen.linkText || "Learn more about Why IDGen"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* DYNAMIC IDGEN AT A GLANCE */}
          <div className="mt-16 pt-12 border-t border-surface-border">
            <div className="mb-8 text-center max-w-xl mx-auto">
              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                {atAGlance.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-1.5">
                {atAGlance.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {atAGlance.metrics.map((card) => {
                const Icon = getGlanceIcon(card.iconKey);
                const colorClass = getGlanceColor(card.colorKey);
                return (
                  <div
                    key={card.metric}
                    className="group relative rounded-2xl border border-surface-border bg-surface p-6 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-between"
                  >
                    <div className="flex flex-col items-center">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${colorClass} shadow-md transition-transform duration-300 group-hover:scale-110 mb-3.5`}>
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
          9. DYNAMIC SERVING ASSAM & NORTHEAST INDIA
          ============================================================ */}
      <section className="relative overflow-hidden py-20 lg:py-24 bg-surface border-b border-surface-border">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1 text-xs font-bold text-accent border border-accent/20">
                <MapPin className="h-3.5 w-3.5" />
                <span>{regionalHub.eyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                {regionalHub.title}
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {regionalHub.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={regionalHub.topButtons.button1Href || "/service-areas/assam/"}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-navy-deep transition-all"
              >
                <span>{regionalHub.topButtons.button1Text || "Assam Service Areas"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={regionalHub.topButtons.button2Href || "/service-areas/assam/guwahati/"}
                className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-5 py-3 text-xs sm:text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-all"
              >
                <span>{regionalHub.topButtons.button2Text || "Guwahati Hub Details"}</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Priority Assam Cities & Northeast Coverage Grid */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                  {regionalHub.priorityCitiesTitle}
                </span>
                <p className="text-xs text-muted mt-1">
                  {regionalHub.priorityCitiesDesc}
                </p>

                <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {regionalHub.priorityCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/assam/${city.slug}/`}
                      className="group flex items-center justify-between rounded-xl border border-surface-border bg-background p-2.5 transition-all duration-200 hover:border-accent hover:bg-accent-soft/30 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <MapPin className="h-3 w-3 text-accent shrink-0" />
                        <span className="font-bold text-foreground text-xs truncate group-hover:text-accent">
                          {city.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Northeast States List */}
              <div className="pt-3 border-t border-surface-border">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2.5">
                  {regionalHub.northeastStatesTitle}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {regionalHub.northeastStates.map((st) => (
                    <Link
                      key={st.slug}
                      href={`/service-areas/${st.slug}/`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-surface-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent-soft/20 hover:-translate-y-0.5 shadow-2xs"
                    >
                      <CheckCircle2 className="h-3 w-3 text-accent" />
                      <span>{st.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Callout Link */}
              <div className="p-4 rounded-2xl bg-background border border-surface-border flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-muted">{regionalHub.quoteCallout.text}</span>
                <Link
                  href={regionalHub.quoteCallout.buttonHref || "/request-a-quote/"}
                  className="font-bold text-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>{regionalHub.quoteCallout.buttonText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Regional Hub Photography & Badges */}
            <div className="lg:col-span-6 space-y-4">
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border shadow-2xl bg-background">
                <div className="relative aspect-[16/10] w-full overflow-hidden img-shine">
                  <Image
                    src={regionalHub.image.src}
                    alt={regionalHub.image.alt}
                    title={regionalHub.image.title}
                    fill
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 bg-background border-t border-surface-border flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-semibold text-foreground">{regionalHub.image.caption}</span>
                  </div>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold text-accent">
                    {regionalHub.image.tag}
                  </span>
                </div>
              </div>

              {/* Regional Dispatch KPIs */}
              <div className="grid grid-cols-3 gap-3">
                {regionalHub.dispatchKpis.map((kpi, idx) => {
                  const textColor =
                    kpi.highlightType === "accent"
                      ? "text-accent"
                      : kpi.highlightType === "emerald"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-foreground";
                  return (
                    <div key={idx} className="rounded-2xl border border-surface-border bg-background p-3 text-center">
                      <p className={`text-xs sm:text-sm font-extrabold ${textColor}`}>{kpi.title}</p>
                      <p className="text-[10px] text-muted mt-0.5">{kpi.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          10. DYNAMIC FREQUENTLY ASKED QUESTIONS
          ============================================================ */}
      <section className="border-b border-surface-border bg-background py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHead
              align="center"
              eyebrow={faq.eyebrow}
              title={faq.title}
              lede={faq.lede}
            />
            <div className="mt-10">
              <FaqList faqs={faq.faqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          11. DYNAMIC CLOSING CTA BANNER
          ============================================================ */}
      <section className="py-10 lg:py-14 bg-surface">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#060D19] via-[#0E1E38] to-[#060D19] py-8 px-6 sm:py-10 sm:px-12 lg:px-16 text-white shadow-2xl border border-white/15">
            <div className="hero-grid-pattern absolute inset-0 opacity-15 pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Flame className="h-3.5 w-3.5" />
                <span>{closingCta.eyebrow}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {closingCta.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
                {closingCta.description}
              </p>

              <div className="py-2.5 px-4 rounded-xl bg-white/[0.04] border border-white/10 max-w-lg mx-auto backdrop-blur-sm">
                <p className="text-xs text-slate-200">
                  <strong className="text-white font-semibold">{closingCta.note.label}</strong>{" "}
                  {closingCta.note.text}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={closingCta.ctaButtons.primaryHref || "/request-a-quote/"}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-xs sm:text-sm font-bold text-navy-deep shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
                >
                  <span>{closingCta.ctaButtons.primaryText || "Request a Quote"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={`https://wa.me/${closingCta.ctaButtons.whatsappPhone || "919207012084"}?text=${encodeURIComponent(closingCta.ctaButtons.whatsappMessage || "Hi IDGen Team, I would like to request samples and pricing for our organization.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-emerald-300 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{closingCta.ctaButtons.whatsappText || "WhatsApp IDGen"}</span>
                </a>

                <Link
                  href={closingCta.ctaButtons.secondaryHref || "/contact-us/"}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <span>{closingCta.ctaButtons.secondaryText || "Contact Our Team"}</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
