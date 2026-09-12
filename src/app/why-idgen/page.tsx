import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Award,
  Eye,
  PackageCheck,
  CheckCircle2,
  MapPin,
  Workflow,
  ArrowRight,
  Building2,
  Database,
  Lock,
  Zap,
  Target,
  ClipboardCheck,
  Printer,
  Wrench,
  Truck,
  LayoutGrid,
  Sparkles,
  Globe2,
  Calendar,
  CheckCircle,
  HelpCircle,
  Sliders,
  Users,
  Quote,
  HeartPulse,
  GraduationCap,
  Package,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { PillarsCarousel } from "@/components/why-idgen/PillarsCarousel";
import { ProductionApproachCarousel } from "@/components/why-idgen/ProductionApproachCarousel";
import { pageMetadata } from "@/lib/metadata";
import { getDynamicWhyIdgen } from "@/lib/dynamic-why-idgen";

/* ============================================================
   DYNAMIC METADATA GENERATOR
   ============================================================ */
export async function generateMetadata(): Promise<Metadata> {
  const data = getDynamicWhyIdgen();
  const base = pageMetadata({
    title: data.metadata?.metaTitle || "Why Choose IDGen | ID Card Printing Experience Since 2014",
    description:
      data.metadata?.metaDescription ||
      "Discover IDGen, a Guwahati-based identity solutions company built on ID card printing experience since 2014, serving organizations across Assam and Northeast India.",
    path: "/why-idgen/",
  });

  return {
    ...base,
    keywords: data.metadata?.metaKeywords || [
      "Why Choose IDGen",
      "Guwahati ID Card Factory",
      "ID Card Manufacturer Northeast India",
    ],
  };
}

const sectorIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Building2,
  HeartPulse,
  ShieldCheck,
  Users,
};

const checkpointIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  Database,
  ClipboardCheck,
  Printer,
  Wrench,
  PackageCheck,
};

export default function WhyIdgenPage() {
  const data = getDynamicWhyIdgen();
  const {
    hero,
    experience2014,
    regional,
    journey,
    sectorsAndTrust,
    pillars,
    dataSecurity,
    ecosystem,
    productionApproach,
    institutionalScale,
    faqs: dynamicFaqs,
    closingCta,
  } = data;

  return (
    <div className="bg-[#f8fafc] dark:bg-[#070d18] text-slate-900 dark:text-slate-100 min-h-screen selection:bg-[#009fe3]/20 selection:text-[#009fe3] transition-colors">
      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM HERO SECTION (100% Dynamic)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.2),rgba(7,13,24,0))]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/30 bg-gradient-to-r from-[#009fe3]/10 via-sky-50 to-white dark:from-cyan-950/60 dark:via-slate-900 dark:to-slate-800 px-4 py-1.5 shadow-2xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
                  <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    {hero.badge || "Identity Solutions Simplified | Guwahati, Assam"}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.08]">
                  {hero.headingPrefix}{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    {hero.headingHighlight}
                  </span>
                </h1>

                <div className="flex items-center gap-2.5 pt-0.5">
                  <span className="h-1 w-8 rounded-full bg-[#009fe3]" />
                  <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                    {hero.subheading}
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {hero.paragraphs?.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Our Approach Flow */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/85 dark:bg-slate-900/90 p-4 sm:p-5 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                    <Workflow className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                    <span>{hero.approachPillLabel || "Our approach is:"}</span>
                  </div>
                  <Link
                    href={hero.approachPillLink || "#production-approach"}
                    className="text-[11px] font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-sky-200/60 dark:border-cyan-800/50 hover:underline"
                  >
                    {hero.approachPillAction || "9-Step Precision Flow"}
                  </Link>
                </div>
                <div className="flex items-center gap-2 pt-1 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-extrabold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    {hero.quickPillLabel}
                  </span>
                  <span className="font-black text-slate-900 dark:text-white bg-white dark:bg-slate-800 px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                    {hero.quickPillValue}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href={hero.primaryCtaLink || "/contact/"}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#009fe3] to-[#0084be] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>{hero.primaryCtaText || "Request a Quote"}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={hero.secondaryCtaLink || "/products/"}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>{hero.secondaryCtaText || "Explore Products"}</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl flex-1 min-h-[380px] sm:min-h-[420px] flex flex-col">
                <div className="relative flex-1 w-full overflow-hidden bg-slate-900 min-h-[320px]">
                  <Image
                    src={hero.heroImage || "/images/why-idgen-hero-branded.jpg"}
                    alt="IDGen Identity Solutions Showcase"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold text-white border border-white/15 shadow-md">
                      <Sparkles className="h-3 w-3 text-cyan-300 animate-pulse" />
                      <span>{hero.floatingCardTag || "IDGen Identity Solutions"}</span>
                    </div>
                    <div className="rounded-full bg-[#009fe3] px-3 py-1 text-[11px] font-black text-white shadow-md">
                      {hero.floatingCardLocation || "Guwahati Hub"}
                    </div>
                  </div>

                  {/* Bottom Image Overlay Label */}
                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <p className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-0.5">
                      {hero.floatingCardTitle || "Direct ID Card & Lanyard Factory"}
                    </p>
                    <p className="text-sm font-extrabold text-white leading-snug">
                      {hero.floatingCardSubtitle || "Serving all 8 Northeast States"}
                    </p>
                  </div>
                </div>

                {/* Sub-Card Trust Indicators */}
                <div className="p-3 bg-white dark:bg-slate-900 grid grid-cols-2 gap-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Since 2014</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Regional Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Globe2 className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Northeast India</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Assam &amp; 7 States</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Symmetrical Bottom Summary Micro-Bar */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-2xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Digital + Physical Workflow</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">IDGen Studio &amp; Structured Production</p>
                  </div>
                </div>
                <Link
                  href="/services/"
                  className="shrink-0 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Explore <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators Strip */}
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">Dating to 2014</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">A decade of experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">8 Northeast States</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Regional supply footprint</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">Digital + Physical</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">IDGen Studio workflow</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">Data Confidentiality</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Responsible data handling</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Why IDGen", path: "/why-idgen/" },
          ]}
        />

        {/* ─────────────────────────────────────────────────────────────
            2. EXPERIENCE SINCE 2014 (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-14 pt-4">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                  <Award className="h-3.5 w-3.5" />
                  <span>{experience2014.eyebrow}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                  {experience2014.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {experience2014.desc1}
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {experience2014.desc2}
                </p>
                <p className="font-bold text-slate-900 dark:text-slate-100 text-sm pt-1">
                  {experience2014.involvesTitle}
                </p>
              </div>

              {/* Dynamic Project Involves Items */}
              <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                {experience2014.involvesItems?.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-800/80 p-4">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold leading-relaxed">
                  IDGen brings this practical experience into a more structured identity-solutions workflow.
                </p>
              </div>
            </div>

            {/* Right Photo Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl flex-1 min-h-[440px] sm:min-h-[480px] flex flex-col">
                <div className="relative flex-1 w-full overflow-hidden bg-slate-900 min-h-[360px]">
                  <Image
                    src={experience2014.image || "/images/why-idgen-more-than-brand.jpg"}
                    alt="IDGen smart ID cards and woven lanyards"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/20" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold text-white border border-white/15 shadow-sm">
                      <Sparkles className="h-3 w-3 text-cyan-300" />
                      <span>{experience2014.badgeYearLabel || "Experience Began"}</span>
                    </div>
                    <span className="rounded-full bg-[#009fe3] px-3 py-1 text-[11px] font-black text-white shadow-sm">
                      {experience2014.badgeYear || "2014"}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <p className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-0.5">
                      {experience2014.badgeFootprintLabel || "Northeast Coverage"}
                    </p>
                    <p className="text-sm font-extrabold text-white leading-snug">
                      {experience2014.badgeFootprint || "8 States"} • Structured Identity Operations
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 grid grid-cols-2 gap-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Since 2014</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Field Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Bulk &amp; Custom</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Complete Supply</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-2xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Personalization + Accessories + Production</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">End-to-End Identification Operations</p>
                  </div>
                </div>
                <Link
                  href="/services/"
                  className="shrink-0 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Explore <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. SERVING NORTHEAST INDIA & OUR JOURNEY (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Card: Serving Northeast India */}
            <div className="lg:col-span-6 rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/30 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                  <Globe2 className="h-3.5 w-3.5" />
                  <span>{regional.eyebrow}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                  {regional.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {regional.subtitle}
                </p>

                {/* 8-State Interactive Matrix */}
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-4 space-y-2.5 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                      Our regional focus includes:
                    </p>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                      {regional.states?.length || 8} States
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {regional.states?.map((st, idx) => {
                      const slug = st.name.toLowerCase().replace(/\s+/g, "-");
                      return (
                        <Link
                          key={st.name}
                          href={`/service-areas/${slug}/`}
                          className="group flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-2xs hover:border-[#009fe3]/50 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                        >
                          <span className="text-[10px] font-black text-[#009fe3]/70 dark:text-cyan-400/80 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 font-mono">
                            0{idx + 1}
                          </span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors truncate">
                            {st.name}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Guwahati Central Base Highlight */}
              <Link
                href="/service-areas/assam/guwahati/"
                className="group rounded-2xl border border-[#009fe3]/30 dark:border-cyan-800/50 bg-sky-50/80 dark:bg-slate-800/80 p-4 shadow-2xs hover:shadow-md hover:border-[#009fe3]/70 hover:-translate-y-0.5 transition-all flex items-start gap-3.5 cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30 group-hover:scale-105 transition-transform">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 group-hover:underline">
                      {regional.centralBaseCity} {regional.centralBaseBadge}
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {regional.centralBaseDescription}
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Card: Our Journey (Connected Timeline) */}
            <div className="lg:col-span-6 rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-1 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-3">
                  <Calendar className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400" />
                  <span>{journey.eyebrow}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                  {journey.title}
                </h3>
              </div>

              {/* Continuous Connected Timeline */}
              <div className="relative pl-6 sm:pl-8 space-y-3.5 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#009fe3] before:via-sky-300 before:to-[#009fe3]">
                {journey.milestones?.map((item) => (
                  <div key={item.year} className="relative group">
                    <div className="absolute -left-6 sm:-left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-900 border-2 border-[#009fe3] shadow-md group-hover:scale-110 transition-transform">
                      <span className="h-2 w-2 rounded-full bg-[#009fe3]" />
                    </div>

                    <div className="rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/90 p-3.5 shadow-2xs group-hover:border-[#009fe3]/40 group-hover:shadow-xs transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs font-black text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-sky-200/60 dark:border-cyan-800/50">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-bold text-slate-900 dark:text-slate-100">{item.label}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#009fe3]/25 dark:border-cyan-800/50 bg-sky-50/80 dark:bg-slate-800/80 p-3.5 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                    IDGen represents the next stage of that journey.
                  </p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                  Since 2014
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. ORGANIZATIONS & TRUST PHILOSOPHY (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-7 sm:p-12 shadow-xl space-y-8 relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                <Building2 className="h-3.5 w-3.5" />
                <span>{sectorsAndTrust.eyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {sectorsAndTrust.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {sectorsAndTrust.subtitle}
              </p>
            </div>

            {/* Sectors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sectorsAndTrust.sectors?.map((sec) => {
                const IconComponent = sectorIconMap[sec.iconKey] || Building2;
                return (
                  <div
                    key={sec.title}
                    className="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3 hover:border-[#009fe3]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 flex items-center justify-center">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">{sec.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{sec.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sec.tags?.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold bg-sky-50 dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 px-2 py-0.5 rounded-md border border-sky-100 dark:border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Philosophy Quote Card */}
            <div className="rounded-2xl border border-[#009fe3]/25 dark:border-cyan-800/50 bg-sky-50/90 dark:bg-slate-800/80 p-6 shadow-2xs space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
                <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Our Trust Philosophy
                </span>
              </div>
              <div className="rounded-xl bg-white dark:bg-slate-900 border border-sky-200/80 dark:border-slate-800 p-3.5 text-xs sm:text-sm font-black text-slate-950 dark:text-white shadow-2xs">
                &ldquo;{sectorsAndTrust.trustQuote}&rdquo;
              </div>
            </div>

            {/* Recommended Trust Evidence Grid */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Recommended Trust Evidence
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sectorsAndTrust.trustEvidenceTags?.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. WHY CHOOSE IDGEN? CORE PILLARS (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Target className="h-3.5 w-3.5" />
              <span>{pillars.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.2]">
              {pillars.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {pillars.subtitle}
            </p>
          </div>

          <div className="mt-8">
            <PillarsCarousel items={pillars.carouselItems} />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. DATA CONFIDENTIALITY & RESPONSIBLE HANDLING (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
            {/* Header Banner */}
            <div className="relative h-56 sm:h-72 w-full bg-slate-900">
              <Image
                src="/images/why-idgen-data-security-light.jpg"
                alt="IDGen confidential handling of student and employee identification data"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-cyan-300 border border-white/15 shadow-md">
                  <Lock className="h-3.5 w-3.5 text-cyan-300 animate-pulse" />
                  <span>{dataSecurity.eyebrow}</span>
                </div>
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-black text-white shadow-md">
                  Guaranteed Privacy
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-center text-white z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  {dataSecurity.title}
                </h2>
              </div>
            </div>

            {/* Body Content */}
            <div className="p-6 sm:p-10 space-y-8">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {dataSecurity.leadText}
              </p>

              {/* Handled Data Types */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/70 p-6 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                    {dataSecurity.dataTypesTitle}
                  </h3>
                  <span className="text-[10px] font-bold text-[#009fe3] dark:text-cyan-400 bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-slate-700">
                    {dataSecurity.dataTypes?.length || 12} Data Types
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {dataSecurity.dataTypes?.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium shadow-2xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsible Handling Principles */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/70 p-6 space-y-4 shadow-2xs">
                <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                  {dataSecurity.responsiblePracticesTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {dataSecurity.responsiblePractices?.map((practice) => (
                    <div
                      key={practice}
                      className="flex items-start gap-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-3 text-xs text-slate-700 dark:text-slate-300 font-semibold shadow-2xs"
                    >
                      <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{practice}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* IDGen Studio Callout */}
              <div className="rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-gradient-to-br from-sky-50/80 via-white to-sky-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <h4 className="font-extrabold text-sm text-slate-950 dark:text-white">
                    {dataSecurity.studioCalloutTitle}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {dataSecurity.studioCalloutBody}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {dataSecurity.studioSteps?.map((step, idx) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-lg bg-white dark:bg-slate-800 border border-sky-200 dark:border-slate-700 px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                        {step}
                      </span>
                      {idx < (dataSecurity.studioSteps?.length || 0) - 1 && (
                        <ArrowRight className="h-3 w-3 text-slate-400" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. ONE IDENTITY PARTNER: CONNECTED PRODUCTS (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="text-center max-w-4xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Package className="h-3.5 w-3.5" />
              <span>{ecosystem.eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              {ecosystem.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {ecosystem.subtitle}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.products?.map((prod) => (
              <div
                key={prod.step}
                className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-lg hover:shadow-xl hover:border-[#009fe3]/50 transition-all flex flex-col justify-between"
              >
                <div className="relative h-44 w-full bg-slate-900">
                  <Image src={prod.image} alt={prod.title} fill className="object-cover" />
                  <span className="absolute top-3 left-3 text-[10px] font-black text-slate-950 bg-teal-400 px-2.5 py-1 rounded-md font-mono">
                    Step {prod.step}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-extrabold text-base text-slate-950 dark:text-white">{prod.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{prod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            8. 9-STEP PRODUCTION APPROACH & QUALITY CHECKPOINTS (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section id="production-approach" className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-4xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <ClipboardCheck className="h-3.5 w-3.5" />
              <span>{productionApproach.eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              {productionApproach.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {productionApproach.subtitle}
            </p>
          </div>

          <div className="mt-8">
            <ProductionApproachCarousel steps={productionApproach.steps} />
          </div>

          {/* Quality Checkpoints */}
          <div className="mt-14 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900 p-6 sm:p-8 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white tracking-tight">
                {productionApproach.checkpointsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {productionApproach.checkpointsSubtitle}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {productionApproach.checkpoints?.map((cp) => {
                const IconComponent = checkpointIconMap[cp.iconKey] || ShieldCheck;
                return (
                  <div
                    key={cp.title}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <h4 className="font-bold text-xs text-slate-950 dark:text-white">{cp.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">{cp.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            9. SCALE, CAPABILITY & COMMITMENTS (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {institutionalScale.commitmentsEyebrow || "Our Commitment"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {institutionalScale.commitmentsTitle || "What We Hold Ourselves To"}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {institutionalScale.commitments?.map(({ label, body }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-5 shadow-2xs hover:border-emerald-500/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all space-y-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <h3 className="font-black text-slate-950 dark:text-white text-base">{label}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            10. WHO WE SERVE (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div>
                <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-2">
                  {institutionalScale.whoWeServeEyebrow || "Who We Serve"}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                  {institutionalScale.whoWeServeTitle || "Identification Solutions for Organizations"}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
                  {institutionalScale.whoWeServeDesc || "IDGen provides identification solutions for organizations including:"}
                </p>
              </div>

              <Link
                href="/services/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#38bdf8] transition-colors shrink-0"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {institutionalScale.whoWeServeList?.map((org) => (
                <div
                  key={org}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 px-4 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]/50 dark:hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-800 hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-sm transition-all"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <span className="truncate">{org}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            11. FREQUENTLY ASKED QUESTIONS (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <SectionHead
            align="center"
            eyebrow={dynamicFaqs.eyebrow || "FAQ"}
            title={dynamicFaqs.title || "Frequently Asked Questions"}
          />
          <div className="mt-10 max-w-3xl mx-auto">
            <FaqList faqs={dynamicFaqs.items} />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            12. IDGEN IN ONE SENTENCE (100% Dynamic Quote Banner)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-14 pt-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-200/70 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900 p-8 sm:p-10 shadow-sm">
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider shadow-2xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{closingCta.quoteEyebrow || "IDGen in One Sentence"}</span>
              </div>

              <div className="relative pt-2 pb-2">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-[#009fe3]/20 dark:text-cyan-400/20 -scale-x-100 pointer-events-none" />
                <blockquote className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 dark:text-slate-100 leading-relaxed px-4">
                  &ldquo;{closingCta.quoteText}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            13. CLOSING CTA BANNER (100% Dynamic)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-10 pt-2">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-10 px-6 sm:py-12 sm:px-12 text-white shadow-2xl border border-slate-800">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#009fe3]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-black text-cyan-300 uppercase tracking-wider backdrop-blur-md">
                {closingCta.ctaEyebrow || "Need an Identity Solution?"}
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {closingCta.ctaTitle}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
                {closingCta.ctaSubtitle}
              </p>

              {/* Workflow Ribbon */}
              <div className="space-y-2 max-w-2xl mx-auto pt-1">
                <p className="text-xs font-black uppercase tracking-wider text-cyan-400">
                  Start With Your Requirement
                </p>
                <div className="rounded-xl border border-white/10 bg-white/5 py-2.5 px-4 text-xs sm:text-sm text-slate-200 font-bold backdrop-blur-md">
                  {closingCta.ctaWorkflow}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <Link
                  href={closingCta.primaryCtaLink || "/request-a-quote/"}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#009fe3]/30 transition-all hover:bg-[#38bdf8] hover:-translate-y-0.5"
                >
                  <span>{closingCta.primaryCtaText || "Request a Quote"}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={closingCta.secondaryCtaLink || "/services/"}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span>{closingCta.secondaryCtaText || "Explore Services"}</span>
                </Link>
                <Link
                  href={closingCta.studioCtaLink || "/idgen-studio/"}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span>{closingCta.studioCtaText || "Explore IDGen Studio"}</span>
                </Link>
                <Link
                  href={closingCta.contactCtaLink || "/contact-us/"}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span>{closingCta.contactCtaText || "Contact IDGen"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Brand Subtext */}
        <section className="mt-16 mb-12 text-center space-y-3">
          <h2 className="text-xl font-black text-slate-950 dark:text-white tracking-tight">
            {closingCta.footerBrandTitle}
          </h2>
          <p className="text-xs sm:text-sm font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
            {closingCta.footerBrandTagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">
            {closingCta.footerBrandSubtext}
          </p>
        </section>
      </Container>
    </div>
  );
}
