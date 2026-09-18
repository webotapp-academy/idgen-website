import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Tag,
  GraduationCap,
  Building2,
  Ticket,
  Users,
  Palette,
  Repeat,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  BadgeCheck,
  Waves,
  MapPin,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { LanyardHeroCarousel } from "@/components/custom-printed-lanyard-printing/LanyardHeroCarousel";
import { getDynamicCustomPrintedLanyardPrinting } from "@/lib/dynamic-custom-printed-lanyard-printing";

const DYNAMIC_ICONS: Record<string, LucideIcon> = {
  Tag,
  GraduationCap,
  Building2,
  Ticket,
  Users,
  Palette,
  Repeat,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  BadgeCheck,
  Waves,
  MapPin,
  Check,
};

function getIcon(name?: string, fallback: LucideIcon = Sparkles): LucideIcon {
  if (!name) return fallback;
  return DYNAMIC_ICONS[name] || fallback;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = getDynamicCustomPrintedLanyardPrinting();
  return pageMetadata({
    title:
      data.metadata?.title ||
      "Custom Printed Lanyard Printing | 20mm ID Card Lanyards | IDGen",
    description:
      data.metadata?.description ||
      "Custom printed 20mm lanyards for ID cards, students, employees, organizations and events. Add your logo, branding and artwork. Bulk lanyard printing by IDGen.",
    path: data.metadata?.path || "/custom-printed-lanyard-printing/",
  });
}

export default async function CustomPrintedLanyardPrintingPage() {
  const data = getDynamicCustomPrintedLanyardPrinting();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Custom Printed Lanyard Printing",
          description:
            data.metadata?.description ||
            "Custom 20mm printed lanyards for ID cards, organizations and events. Add your logo, branding and artwork. Bulk lanyard printing by IDGen.",
          path: "/custom-printed-lanyard-printing/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Eyebrow + Heading + Paragraph + Workflow Card + CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Tag className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>{data.hero.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-[1.15]">
                  <span className="text-slate-950 dark:text-white">{data.hero.title} </span>
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    {data.hero.titleHighlight}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {data.hero.description}
                </p>
              </div>

              {/* Integrated Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {data.hero.workflowHeading}
                </p>

                {/* Flow Chain */}
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

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {data.hero.workflowNote}
                </p>
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

            {/* Right Column: Dynamic Sliding Showcase Carousel */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <LanyardHeroCarousel slides={data.heroSlides} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Custom Printed Lanyards", path: "/custom-printed-lanyard-printing/" },
          ]}
        />

        {/* ── 2. CUSTOMIZATION PARAMETERS SECTION ── */}
        <section className="mt-8">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                {data.customElements.eyebrow}
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              {data.customElements.title}
            </h2>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Side: Macro Branding Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.customElements.image}
                      alt={data.customElements.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>{data.customElements.imageBadge}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.customElements.imageWidthBadge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.customElements.imageFooterSubtitle}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.customElements.imageFooterTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.customElements.imageFooterTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Sleek Glassmorphic Parameters Container */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-3xl border border-sky-100 dark:border-slate-800 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-100/80 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{data.customElements.containerBadge}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {data.customElements.containerCount}
                  </span>
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  {data.customElements.containerIntro}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.customElements.elements.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-950/90 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:shadow-sm dark:hover:border-cyan-400 transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={data.customElements.primaryCtaLink}
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-5 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
                  >
                    <span>{data.customElements.primaryCtaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={data.customElements.secondaryCtaLink}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition hover:border-[#009fe3] hover:text-[#009fe3]"
                  >
                    <span>{data.customElements.secondaryCtaText}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHAT IS CUSTOM PRINTED LANYARD PRINTING? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.whatIs.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight">
                {data.whatIs.title}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {data.whatIs.description}
              </p>

              <div className="pt-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {data.whatIs.arrangementHeading}
                </p>
                <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950/60 p-4">
                  <FlowChain steps={data.whatIs.arrangementChain} />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  {data.whatIs.arrangementNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. 20 MM CUSTOM PRINTED LANYARDS & SUITABLE FOR ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.suitableFor.eyebrow}
            title={data.suitableFor.title}
            lede={data.suitableFor.lede}
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              {data.suitableFor.subheading}
            </h3>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {data.suitableFor.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200 transition-all hover:border-[#009fe3] hover:shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {data.suitableFor.footerNote && (
              <div className="mt-6 rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-sky-50/40 dark:bg-slate-950/60 p-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">Note: </span>
                {data.suitableFor.footerNote}
              </div>
            )}
          </div>
        </section>

        {/* ── 5. CUSTOM LANYARD PRINTING OPTIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.printingOptions.eyebrow}
            title={data.printingOptions.title}
            lede={data.printingOptions.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {data.printingOptions.options.map((opt) => (
              <div
                key={opt.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-[#009fe3] dark:text-cyan-400">
                    <Palette className="h-5 w-5" />
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                      {opt.title}
                    </h3>
                  </div>

                  <div className="mt-4 rounded-xl bg-slate-950 p-3 border border-white/10 font-mono text-xs text-cyan-300 font-bold tracking-wider">
                    {opt.pattern}
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. WHAT CAN BE PRINTED ON A LANYARD? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.printableItems.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight">
                {data.printableItems.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {data.printableItems.intro}
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {data.printableItems.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {data.printableItems.footerNote && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                    {data.printableItems.footerNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 7. LANYARD PRINTING FOR DIFFERENT APPLICATIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.applicationCards.eyebrow}
            title={data.applicationCards.title}
            lede={data.applicationCards.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.applicationCards.cards.map((app) => {
              const AppIcon = getIcon(app.iconName, GraduationCap);
              return (
                <div
                  key={app.title}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40 shadow-xs">
                      <AppIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                      {app.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {app.body}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href={app.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 transition hover:text-[#008bc9]"
                    >
                      <span>{app.linkText}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 8. LANYARD + ID CARD SETUP (With Complete Setup Image) ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Image of Complete Setup */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.lanyardSetup.image}
                      alt={data.lanyardSetup.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>{data.lanyardSetup.imageBadge}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.lanyardSetup.imageTag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.lanyardSetup.imageFooterSubtitle}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.lanyardSetup.imageFooterTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.lanyardSetup.imageFooterTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Setup Details & Configurations */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    {data.lanyardSetup.eyebrow}
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {data.lanyardSetup.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {data.lanyardSetup.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    {data.lanyardSetup.option1Heading}
                  </span>
                  <FlowChain steps={data.lanyardSetup.option1Chain} />
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    {data.lanyardSetup.option2Heading}
                  </span>
                  <FlowChain steps={data.lanyardSetup.option2Chain} />
                </div>
              </div>

              {data.lanyardSetup.note && (
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {data.lanyardSetup.note}
                </p>
              )}

              <div className="flex flex-wrap gap-2.5 pt-1">
                {data.lanyardSetup.links.map((linkItem) => (
                  <Link
                    key={linkItem.topic}
                    href={linkItem.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
                  >
                    <span>{linkItem.topic}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. CUSTOM LANYARD PRINTING FOR BULK ORDERS (With Bulk Image) ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    {data.bulkOrders.eyebrow}
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {data.bulkOrders.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {data.bulkOrders.description}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {data.bulkOrders.requirementsTitle}
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {data.bulkOrders.requirements.map((req) => (
                    <div
                      key={req}
                      className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {data.bulkOrders.note && (
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {data.bulkOrders.note}
                </p>
              )}

              {data.bulkOrders.ctaLink && (
                <div>
                  <Link
                    href={data.bulkOrders.ctaLink}
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
                  >
                    <span>{data.bulkOrders.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column: Bulk Image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.bulkOrders.image}
                      alt={data.bulkOrders.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>{data.bulkOrders.imageBadge}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.bulkOrders.imageTag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.bulkOrders.imageFooterSubtitle}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.bulkOrders.imageFooterTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.bulkOrders.imageFooterTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. LANYARD ARTWORK PROCESS (8 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.artworkProcess.eyebrow}
            title={data.artworkProcess.title}
            lede={data.artworkProcess.lede}
          />

          <div className="mt-8">
            <WorkflowSteps steps={data.artworkProcess.steps} />
          </div>
        </section>

        {/* ── 11. WHY USE CUSTOM PRINTED LANYARDS? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.whyUseLanyards.eyebrow}
            title={data.whyUseLanyards.title}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyUseLanyards.items.map((b) => {
              const BenefitIcon = getIcon(b.iconName, ShieldCheck);
              return (
                <FeatureCard key={b.title} icon={BenefitIcon} title={b.title} body={b.body} />
              );
            })}
          </div>
        </section>

        {/* ── 12. CUSTOM LANYARD DESIGN ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.designGuidelines.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.designGuidelines.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.designGuidelines.description}
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200/90 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950/80 p-5 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                {data.designGuidelines.recommendedHeading}
              </p>
              <p className="font-mono text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                {data.designGuidelines.recommendedFormula}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {data.designGuidelines.guidelinesHeading}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {data.designGuidelines.guidelines.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {data.designGuidelines.footerNote && (
              <p className="text-xs text-slate-600 dark:text-slate-400 pt-2">
                {data.designGuidelines.footerNote}
              </p>
            )}
          </div>
        </section>

        {/* ── 13. LANYARD QUALITY CONSIDERATIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.qualityConsiderations.eyebrow}
            title={data.qualityConsiderations.title}
            lede={data.qualityConsiderations.lede}
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {data.qualityConsiderations.considerationsHeading}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {data.qualityConsiderations.factors.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {data.qualityConsiderations.footerNote && (
              <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                {data.qualityConsiderations.footerNote}
              </p>
            )}
          </div>
        </section>

        {/* ── 14. ULTRASONIC SEALING WITH LANYARD ATTACHMENTS (With Ultrasonic Image) ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.ultrasonicSealing.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.ultrasonicSealing.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.ultrasonicSealing.paragraph1}
              </p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.ultrasonicSealing.paragraph2}
              </p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.ultrasonicSealing.paragraph3}
              </p>
              {data.ultrasonicSealing.ctaLink && (
                <div className="pt-3">
                  <Link
                    href={data.ultrasonicSealing.ctaLink}
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
                  >
                    <span>{data.ultrasonicSealing.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column: Ultrasonic Photo */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.ultrasonicSealing.image}
                      alt={data.ultrasonicSealing.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Waves className="h-3 w-3 text-cyan-400" />
                        <span>{data.ultrasonicSealing.imageBadge}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.ultrasonicSealing.imageTag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.ultrasonicSealing.imageFooterSubtitle}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.ultrasonicSealing.imageFooterTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.ultrasonicSealing.imageFooterTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 15. CUSTOM LANYARDS AS PART OF A COMPLETE IDENTIFICATION ORDER ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.completeConfigurations.eyebrow}
            title={data.completeConfigurations.title}
            lede={data.completeConfigurations.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {data.completeConfigurations.tiers.map((tier) => (
              <div
                key={tier.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                    {tier.badge}
                  </span>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-lg">
                    {tier.title}
                  </h3>
                  <div className="mt-4 pt-2">
                    <FlowChain steps={tier.formula} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {data.completeConfigurations.ctaLink && (
            <div className="mt-8 text-center">
              <Link
                href={data.completeConfigurations.ctaLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
              >
                <span>{data.completeConfigurations.ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </section>

        {/* ── 16. HOW TO ORDER CUSTOM PRINTED LANYARDS (8 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.howToOrder.eyebrow}
            title={data.howToOrder.title}
          />

          <div className="mt-8">
            <WorkflowSteps steps={data.howToOrder.steps} />
          </div>

          {data.howToOrder.ctaLink && (
            <div className="mt-8 text-center">
              <Link
                href={data.howToOrder.ctaLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
              >
                <span>{data.howToOrder.ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </section>

        {/* ── 17. CUSTOM PRINTED LANYARD PRICE ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.pricing.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.pricing.title}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {data.pricing.description}
              </p>

              <div className="mt-6 rounded-2xl border border-sky-200/90 dark:border-slate-800 bg-gradient-to-br from-sky-50/70 to-white dark:from-slate-950 dark:to-slate-900 p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                      {data.pricing.standardProductBadge}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                      {data.pricing.standardProductName}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {data.pricing.standardProductNote}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-3xl font-black text-slate-900 dark:text-white">
                      {data.pricing.price} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">{data.pricing.unit}</span>
                    </div>
                  </div>
                </div>
              </div>

              {data.pricing.ctaLink && (
                <div className="pt-2">
                  <Link
                    href={data.pricing.ctaLink}
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
                  >
                    <span>{data.pricing.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 18. FREQUENTLY ASKED QUESTIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.faq.eyebrow}
            title={data.faq.title}
          />

          <div className="mt-8">
            <FaqList faqs={data.faq.faqs} />
          </div>
        </section>

        {/* ── 19. NEED CUSTOM PRINTED LANYARDS? (Closing CTA Band) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>{data.closingCta.badge}</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {data.closingCta.title}
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {data.closingCta.description}
              </p>

              <div className="pt-2">
                <FlowChain steps={data.closingCta.flowChain} dark />
              </div>

              <div className="pt-4 flex flex-wrap gap-3.5">
                <Link
                  href={data.closingCta.primaryCtaLink}
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  {data.closingCta.primaryCtaText}
                </Link>
                <Link
                  href={data.closingCta.secondaryCtaLink}
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  {data.closingCta.secondaryCtaText}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 20. GEOGRAPHIC / INTERNAL LINKING REFERENCE DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                {data.geographicDirectory.eyebrow}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              {data.geographicDirectory.title}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.geographicDirectory.description}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {data.geographicDirectory.directoryHeading}
              </p>
              <div className="flex flex-wrap gap-2">
                {data.geographicDirectory.links.map((item) => (
                  <Link
                    key={item.topic}
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 transition hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400"
                  >
                    <span>{item.topic}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
