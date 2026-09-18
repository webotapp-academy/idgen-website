import React from "react";
import Image from "next/image";
import Link from "next/link";
import { OrgApplicationsCarousel } from "@/components/id-card-printing/OrgApplicationsCarousel";
import { WorkflowCarousel } from "@/components/id-card-printing/WorkflowCarousel";
import { IdCardHeroCarousel } from "@/components/id-card-printing/IdCardHeroCarousel";
import {
  IdCardScrollSpyNav,
  SectionAnchorButton,
} from "@/components/id-card-printing/IdCardScrollSpy";
import {
  IdCard,
  GraduationCap,
  Building2,
  Ticket,
  Radio,
  Users,
  ClipboardCheck,
  Database,
  Palette,
  Eye,
  CheckCircle2,
  Printer,
  Wrench,
  Sliders,
  Truck,
  Camera,
  User,
  Hash,
  QrCode,
  Layers,
  ShieldCheck,
  RefreshCw,
  MapPin,
  Workflow,
  Zap,
  Monitor,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Package,
  Hospital,
  Factory,
  Landmark,
  Heart,
  CalendarDays,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { getDynamicIdCardPrinting } from "@/lib/dynamic-id-card-printing";

/* ── Dynamic SEO Metadata ── */
export async function generateMetadata() {
  const data = getDynamicIdCardPrinting();
  return pageMetadata({
    title: data.metadata.title,
    description: data.metadata.description,
    path: data.metadata.path || "/id-card-printing/",
  });
}

const DYNAMIC_ICONS: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  Ticket,
  Radio,
  Users,
  Hospital,
  Factory,
  Landmark,
  Heart,
  CalendarDays,
  Workflow,
  Zap,
  Database,
  Eye,
  Package,
  Monitor,
  MapPin,
  User,
  QrCode,
  CheckCircle2,
  ShieldCheck,
  Printer,
  Sparkles,
  Layers,
  Truck,
  Palette,
  ClipboardCheck,
};

export default function IdCardPrintingPage() {
  const data = getDynamicIdCardPrinting();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: data.hero.title || "ID Card Printing",
          description: data.metadata.description,
          path: data.metadata.path || "/id-card-printing/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM HERO SECTION ── */}
      <section
        id="overview"
        className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors scroll-mt-28"
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <IdCard className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>{data.hero.eyebrow}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  {data.hero.title}{" "}
                  {data.hero.titleHighlight && (
                    <span className="bg-gradient-to-r from-[#009fe3] via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                      {data.hero.titleHighlight}
                    </span>
                  )}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {data.hero.description}
                </p>
              </div>

              {/* Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {data.hero.workflowCardHeading}
                </p>

                {/* Workflow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  {data.hero.workflowChain.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span>{step}</span>
                      {idx < data.hero.workflowChain.length - 1 && (
                        <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {data.hero.workflowCardNote && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {data.hero.workflowCardNote}
                  </p>
                )}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href={data.hero.primaryCtaLink}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>{data.hero.primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={data.hero.secondaryCtaLink}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>{data.hero.secondaryCtaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Sliding Showcase Carousel */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <IdCardHeroCarousel slides={data.hero.slides} />
            </div>
          </div>
        </Container>
      </section>

      {/* Dynamic Scroll Spy & Sticky Table of Contents Navigation Bar */}
      <IdCardScrollSpyNav />

      <Container className="pb-14 pt-4 sm:pt-6">
        {/* ── 2. CUSTOM PVC ID CARD PRINTING ── */}
        <section id="custom-pvc-cards" className="mt-0 scroll-mt-28">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                {data.customPvcSection.eyebrow}
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              <SectionAnchorButton id="custom-pvc-cards" title={data.customPvcSection.eyebrow} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full md:whitespace-nowrap">
              {data.customPvcSection.title}
            </h2>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Side: Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />

                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.customPvcSection.imageSrc}
                      alt={data.customPvcSection.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>{data.customPvcSection.imageTopBadge}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.customPvcSection.imageTopBrand}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.customPvcSection.imageBottomEyebrow}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.customPvcSection.imageBottomTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.customPvcSection.imageBottomLocation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Feature Pills Grid */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-3xl border border-sky-100 dark:border-slate-800 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-100/80 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{data.customPvcSection.containerBadge}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {data.customPvcSection.containerCountLabel}
                  </span>
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  {data.customPvcSection.containerTitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.customPvcSection.cardInfoItems.map((item, idx) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-950/90 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:shadow-sm dark:hover:border-cyan-400 transition-all ${
                        idx === data.customPvcSection.cardInfoItems.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 space-y-1.5 shadow-2xs">
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                    {data.customPvcSection.noteLede}
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                    IDGen produces customized cards according to the{" "}
                    <span className="text-[#009fe3] dark:text-cyan-400 font-extrabold">
                      {data.customPvcSection.noteStrong}
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. ID CARDS FOR DIFFERENT ORGANIZATIONS (CAROUSEL) ── */}
        <section id="applications" className="mt-20 scroll-mt-28">
          <div className="w-full space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                {data.applicationsSection.eyebrow}
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              <SectionAnchorButton id="applications" title={data.applicationsSection.title} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
              {data.applicationsSection.title}{" "}
              {data.applicationsSection.titleHighlight && (
                <span className="bg-gradient-to-r from-[#009fe3] via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  {data.applicationsSection.titleHighlight}
                </span>
              )}
            </h2>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {data.applicationsSection.description}
            </p>
          </div>
          <div className="mt-8">
            <OrgApplicationsCarousel items={data.applicationsSection.items} />
          </div>
        </section>

        {/* ── 4. BULK ID CARD PRINTING ── */}
        <section id="bulk-printing" className="mt-20 scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.bulkSection.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                <SectionAnchorButton id="bulk-printing" title={data.bulkSection.title} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                {data.bulkSection.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.bulkSection.description}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col justify-start rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-md space-y-4 backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200/80 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                    <Package className="h-3.5 w-3.5" />
                    <span>{data.bulkSection.leftBadge}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {data.bulkSection.leftCountLabel}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {data.bulkSection.leftTitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.bulkSection.bulkProjectTypes.map((item, idx) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/80 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:bg-white dark:hover:bg-slate-900 transition-all ${
                        idx === data.bulkSection.bulkProjectTypes.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Dark Guarantee Card */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-slate-900 dark:border-slate-800 bg-slate-950 p-5 sm:p-7 text-white shadow-2xl flex flex-col justify-between space-y-5">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#009fe3]/25 blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{data.bulkSection.rightBadge}</span>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-sm font-bold text-slate-100 leading-relaxed">
                      {data.bulkSection.rightTitle}
                    </p>
                    <p className="text-xs font-medium text-slate-300">
                      {data.bulkSection.rightSubtitle}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-3.5 space-y-2 shadow-inner">
                    <div className="flex flex-wrap gap-1.5">
                      {data.bulkSection.consistencyFactors.map((factor) => (
                        <span
                          key={factor}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/90 px-2.5 py-1.5 text-[11px] font-bold text-cyan-300 border border-cyan-500/30"
                        >
                          <Sparkles className="h-3 w-3 text-cyan-400" />
                          <span>{factor}</span>
                        </span>
                      ))}
                    </div>
                    {data.bulkSection.factorEquation && (
                      <p className="text-[10px] font-mono text-slate-400 pt-1 border-t border-white/10">
                        {data.bulkSection.factorEquation}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {data.bulkSection.footerNote}
                  </p>
                </div>

                <div className="relative pt-3 border-t border-white/10">
                  <Link
                    href={data.bulkSection.ctaLink}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>{data.bulkSection.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. ONE ID CARD PRINTING WORKFLOW (INTERACTIVE 9-STAGE CAROUSEL) ── */}
        <section id="production-workflow" className="mt-20 scroll-mt-28">
          <div className="flex items-center justify-between">
            <SectionHead
              eyebrow={data.workflowSection.eyebrow}
              title={data.workflowSection.title}
              lede={data.workflowSection.lede}
            />
            <SectionAnchorButton id="production-workflow" title={data.workflowSection.title} />
          </div>
          <div className="mt-8">
            <WorkflowCarousel steps={data.workflowSection.steps} />
          </div>
        </section>

        {/* ── 6. WHAT INFORMATION CAN BE PRINTED ── */}
        <section id="card-information" className="mt-20 scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.cardInformationSection.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                <SectionAnchorButton id="card-information" title={data.cardInformationSection.title} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                {data.cardInformationSection.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.cardInformationSection.description}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {data.cardInformationSection.categories.map((group) => {
                const IconComponent = (group.iconName && DYNAMIC_ICONS[group.iconName]) || User;
                return (
                  <div
                    key={group.id || group.title}
                    className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 shadow-sm hover:shadow-xl hover:border-[#009fe3] dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-slate-700 transition-colors group-hover:bg-[#009fe3] group-hover:text-white group-hover:border-[#009fe3]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                          {group.badge}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                        {group.title}
                      </h3>

                      <ul className="space-y-1.5 pt-1">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 rounded-lg bg-slate-50/70 dark:bg-slate-950/70 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-800/80"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
                        {group.items.length} Field Types
                      </span>
                      <span className="text-[11px] font-bold text-[#009fe3] dark:text-cyan-400">
                        Customizable
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Highlight Notice Box */}
            <div className="rounded-2xl border border-sky-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-950 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  {data.cardInformationSection.noticeText}
                </p>
              </div>
              <Link
                href={data.cardInformationSection.noticeCtaLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#008bc9] hover:shadow-lg transition-all shrink-0"
              >
                <span>{data.cardInformationSection.noticeCtaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. ID CARD DESIGN & BRANDING ── */}
        <section id="design-branding" className="mt-20 scroll-mt-28">
          <div className="flex items-center justify-between">
            <SectionHead
              eyebrow={data.designBrandingSection.eyebrow}
              title={data.designBrandingSection.title}
              lede={data.designBrandingSection.lede}
            />
            <SectionAnchorButton id="design-branding" title={data.designBrandingSection.title} />
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Side Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />

                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.designBrandingSection.imageSrc}
                      alt={data.designBrandingSection.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Palette className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{data.designBrandingSection.topBadge}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.designBrandingSection.topBrand}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.designBrandingSection.bottomEyebrow}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.designBrandingSection.bottomTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.designBrandingSection.bottomLocation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Elements */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-3xl border border-sky-100 dark:border-slate-800 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-100/80 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{data.designBrandingSection.badge}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {data.designBrandingSection.countLabel}
                  </span>
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  {data.designBrandingSection.bodyHeading}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.designBrandingSection.designElements.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-950/90 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:shadow-sm dark:hover:border-cyan-400 transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 space-y-2 shadow-2xs text-xs leading-relaxed">
                  <p className="text-slate-700 dark:text-slate-300">
                    {data.designBrandingSection.noteExisting}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                    {data.designBrandingSection.noteNew}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. BULK PERSONALIZED DATA ── */}
        <section id="bulk-data" className="mt-20 scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.bulkDataSection.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                <SectionAnchorButton id="bulk-data" title={data.bulkDataSection.title} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                {data.bulkDataSection.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.bulkDataSection.description}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 items-stretch">
              {/* Left Card */}
              <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-md flex flex-col justify-between space-y-5 backdrop-blur-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200/80 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                      <Database className="h-3.5 w-3.5" />
                      <span>{data.bulkDataSection.leftBadge}</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      {data.bulkDataSection.leftCountLabel}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {data.bulkDataSection.leftDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {data.bulkDataSection.fields.map((field) => (
                      <span
                        key={field}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400" />
                        <span>{field}</span>
                      </span>
                    ))}
                  </div>

                  {data.bulkDataSection.formula && (
                    <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 p-3 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                      {data.bulkDataSection.formula}
                    </div>
                  )}
                </div>

                {data.bulkDataSection.errorNotice && (
                  <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/30 p-3.5 flex items-center gap-2.5">
                    <span className="flex h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                    <p className="text-xs font-semibold text-amber-900 dark:text-amber-300">
                      {data.bulkDataSection.errorNotice}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Card */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-slate-900 dark:border-slate-800 bg-slate-950 p-5 sm:p-7 text-white shadow-2xl flex flex-col justify-between space-y-5">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#009fe3]/25 blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-md">
                    <Workflow className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{data.bulkDataSection.rightBadge}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {data.bulkDataSection.rightDescription}
                  </p>

                  <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-3.5 space-y-2 shadow-inner">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                      {data.bulkDataSection.pipelineSteps.map((step, idx) => (
                        <React.Fragment key={step}>
                          <span className="inline-flex items-center rounded-lg bg-slate-900/90 px-2.5 py-1.5 text-cyan-300 border border-cyan-500/30">
                            {step}
                          </span>
                          {idx < data.bulkDataSection.pipelineSteps.length - 1 && (
                            <span className="text-[#009fe3] dark:text-cyan-400 font-extrabold px-0.5">
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {data.bulkDataSection.rightFooterText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. IDGEN STUDIO FOR DATA COLLECTION AND PREVIEW ── */}
        <section id="idgen-studio" className="mt-20 scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.studioSection.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                <SectionAnchorButton id="idgen-studio" title={data.studioSection.title} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                {data.studioSection.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.studioSection.lede}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200/80 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full w-fit">
                  <Monitor className="h-3.5 w-3.5" />
                  <span>{data.studioSection.badge}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {data.studioSection.bodyText1}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {data.studioSection.bodyText2}
                </p>
                <div className="pt-2">
                  <Link
                    href={data.studioSection.ctaButtonLink}
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#008bc9] transition-all"
                  >
                    <span>{data.studioSection.ctaButtonText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-md space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {data.studioSection.useCasesHeading}
                </p>
                <div className="space-y-2">
                  {data.studioSection.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="flex items-center gap-2 rounded-xl bg-slate-50/70 dark:bg-slate-950/70 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. ID CARDS AND ACCESSORIES ── */}
        <section id="accessories" className="mt-20 scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.accessoriesSection.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                <SectionAnchorButton id="accessories" title={data.accessoriesSection.title} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                {data.accessoriesSection.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.accessoriesSection.lede}
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="p-4">Application Environment</th>
                    <th className="p-4">Typical Configuration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                  {data.accessoriesSection.configRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-sky-50/40 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="p-4 font-bold text-slate-900 dark:text-white">{row.application}</td>
                      <td className="p-4 font-medium text-[#009fe3] dark:text-cyan-400">{row.configuration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {data.accessoriesSection.note}
              </p>
              <Link
                href={data.accessoriesSection.viewAllLink}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline shrink-0"
              >
                <span>{data.accessoriesSection.viewAllText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. ORGANIZATIONS WE SERVE ── */}
        <section id="organizations" className="mt-20 scroll-mt-28">
          <div className="flex items-center justify-between">
            <SectionHead
              eyebrow={data.organizationsSection.eyebrow}
              title={data.organizationsSection.title}
              lede={data.organizationsSection.lede}
            />
            <SectionAnchorButton id="organizations" title={data.organizationsSection.title} />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.organizationsSection.institutions.map((inst) => {
              const IconComponent = (inst.iconName && DYNAMIC_ICONS[inst.iconName]) || Building2;
              return (
                <div
                  key={inst.title}
                  className="group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 shadow-sm hover:border-[#009fe3] hover:shadow-xl transition-all duration-300 space-y-3"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-slate-700 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{inst.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{inst.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 12. QUALITY CHECKPOINTS ── */}
        <section id="quality-checks" className="mt-20 scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.qualityCheckpointsSection.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                <SectionAnchorButton id="quality-checks" title={data.qualityCheckpointsSection.title} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                {data.qualityCheckpointsSection.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.qualityCheckpointsSection.lede}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.qualityCheckpointsSection.checkpoints.map((cp, idx) => (
                <div
                  key={cp.title}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 shadow-xs space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#009fe3]/10 text-[11px] font-bold text-[#009fe3]">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{cp.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-7">{cp.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 13. NEW CARDS, BATCHES & RENEWALS ── */}
        <section id="new-cards-renewals" className="mt-20 scroll-mt-28">
          <div className="flex items-center justify-between">
            <SectionHead
              eyebrow={data.renewalsSection.eyebrow}
              title={data.renewalsSection.title}
              lede={data.renewalsSection.lede}
            />
            <SectionAnchorButton id="new-cards-renewals" title={data.renewalsSection.title} />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#009fe3]" />
                <span>{data.renewalsSection.newCardsTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.renewalsSection.newCardTypes.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-[#009fe3]" />
                <span>{data.renewalsSection.renewalsTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.renewalsSection.renewalTypes.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. WHY CHOOSE IDGEN ── */}
        <section id="why-idgen" className="mt-20 scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.whyIdgenSection.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                <SectionAnchorButton id="why-idgen" title={data.whyIdgenSection.title} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                {data.whyIdgenSection.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {data.whyIdgenSection.lede}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.whyIdgenSection.reasons.map((reason) => {
                const IconComponent = (reason.iconName && DYNAMIC_ICONS[reason.iconName]) || Workflow;
                return (
                  <div
                    key={reason.title}
                    className="group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 shadow-md hover:border-[#009fe3]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-950/60 dark:to-sky-900/30 border border-sky-200/60 dark:border-sky-800/40 text-[#009fe3] dark:text-cyan-400 shadow-sm group-hover:scale-110 transition-transform">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{reason.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">
                        {reason.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-slate-200/80 dark:border-slate-800 pt-4">
              <Link
                href="/why-idgen/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#009fe3] dark:text-cyan-400 hover:underline group"
              >
                Why IDGen? <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 15. HOW TO ORDER ── */}
        <section id="how-to-order" className="mt-20 scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.orderWorkflowSection.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                <SectionAnchorButton id="how-to-order" title={data.orderWorkflowSection.title} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                {data.orderWorkflowSection.title}
              </h2>
            </div>
            <WorkflowSteps steps={data.orderWorkflowSection.steps} />
            <div className="border-t border-slate-200/80 dark:border-slate-800 pt-4">
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Request an ID Card Quote{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 16. FAQS ── */}
        <section id="faq" className="mt-20 scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.faqsSection.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                <SectionAnchorButton id="faq" title={data.faqsSection.title} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                {data.faqsSection.title}
              </h2>
              {data.faqsSection.lede && (
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {data.faqsSection.lede}
                </p>
              )}
            </div>
            <FaqList faqs={data.faqsSection.faqs} />
          </div>
        </section>

        {/* ── 17. CLOSING CTA ── */}
        <div className="mt-16">
          <CtaBand
            title={data.ctaBand.title}
            body={data.ctaBand.body}
            links={[
              { label: data.ctaBand.primaryButtonText, href: data.ctaBand.primaryButtonLink, primary: true },
              { label: data.ctaBand.secondaryButtonText, href: data.ctaBand.secondaryButtonLink },
              { label: "View ID Card Pricing", href: "/pricing/" },
              { label: "Explore Student ID Cards", href: "/student-id-card-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
