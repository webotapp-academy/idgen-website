import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  School,
  BookOpen,
  Building2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  QrCode,
  MapPin,
  ArrowRight,
  Database,
  Layers,
  Palette,
  Package,
  FileSpreadsheet,
  Check,
  CreditCard,
  Barcode,
  Users,
  Eye,
  Sliders,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { StudentHeroCarousel } from "@/components/student-id-card-printing/StudentHeroCarousel";
import { StudentOrgCarousel } from "@/components/student-id-card-printing/StudentOrgCarousel";
import { StudentWorkflowCarousel } from "@/components/student-id-card-printing/StudentWorkflowCarousel";
import { StudentCardAnatomy } from "@/components/student-id-card-printing/StudentCardAnatomy";
import { getDynamicStudentIdCardPrinting } from "@/lib/dynamic-student-id-card-printing";

const DYNAMIC_ICONS: Record<string, React.ElementType> = {
  Building2,
  Palette,
  Sparkles,
  Users,
  GraduationCap,
  QrCode,
  Barcode,
  ShieldCheck,
  Layers,
  Sliders,
  CreditCard,
  School,
  BookOpen,
  Eye,
  Package,
  Database,
  RefreshCw,
  CheckCircle2,
  MapPin,
  FileSpreadsheet,
};

export async function generateMetadata() {
  const data = getDynamicStudentIdCardPrinting();
  return pageMetadata({
    title: data.metadata.title,
    description: data.metadata.description,
    path: data.metadata.path || "/student-id-card-printing/",
  });
}

export default function StudentIdCardPrintingPage() {
  const data = getDynamicStudentIdCardPrinting();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: data.metadata.title,
          description: data.metadata.description,
          path: data.metadata.path || "/student-id-card-printing/",
        })}
      />

      {/* ── 1. LUXURY UNIFIED HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 sm:py-16 text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-sky-200/40 dark:bg-[#009fe3]/15 blur-[120px]" />
          <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-blue-100/40 dark:bg-blue-600/10 blur-[100px]" />
        </div>

        <Container className="relative z-10 space-y-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Heading, Lede, Stats & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-100/80 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 backdrop-blur-md shadow-xs">
                  <GraduationCap className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span className="uppercase tracking-wider">{data.hero.badge}</span>
                </div>

                {/* Main Titles */}
                <div className="space-y-2.5">
                  <h1 className="text-3xl font-black sm:text-4xl lg:text-[2.65rem] leading-[1.12] tracking-tight text-slate-900 dark:text-white">
                    <span>{data.hero.titlePrefix}</span>
                    <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                      {data.hero.titleHighlight}
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg font-extrabold text-[#009fe3] dark:text-cyan-400">
                    {data.hero.subtitle}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                    {data.hero.lede}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {data.hero.description}
                  </p>
                </div>
              </div>

              {/* 4 Stats Chips */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {data.hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-3.5 shadow-2xs space-y-0.5"
                  >
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                      {stat.label}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href={data.hero.primaryCtaLink}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>{data.hero.primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={data.hero.secondaryCtaLink}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] transition-all"
                >
                  <span>{data.hero.secondaryCtaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Sliding Showcase Carousel */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <StudentHeroCarousel slides={data.heroSlides} />
            </div>
          </div>

          {/* Bottom Hero Panel: 16 Key Identification Elements */}
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 backdrop-blur-md space-y-5 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-cyan-300">
                  Student ID cards can include:
                </p>
              </div>
              <span className="text-xs font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3 py-1 rounded-full">
                {data.hero.studentCardFields.length} Key Identification Elements
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {data.hero.studentCardFields.map((field) => (
                <div
                  key={field}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/80 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:bg-white dark:hover:bg-slate-900 transition-all"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>

            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              {data.hero.studentCardFieldsNote}
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20 space-y-20">
        {/* ── 2. PRINTING FOR EVERY TYPE OF INSTITUTION (CAROUSEL) ── */}
        <section>
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.scope.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                {data.scope.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {data.scope.description}
              </p>
            </div>

            <StudentOrgCarousel items={data.scope.items} />

            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              {data.scope.footerNote}
            </p>
          </div>
        </section>

        {/* ── 3. WHAT CAN BE PRINTED ON A STUDENT ID CARD? (CARD ANATOMY) ── */}
        <section>
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.cardAnatomy.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                {data.cardAnatomy.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {data.cardAnatomy.description}
              </p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2">
                {data.cardAnatomy.subheading}
              </p>
            </div>

            <StudentCardAnatomy
              frontFields={data.cardAnatomy.frontFields}
              backFields={data.cardAnatomy.backFields}
              frontCardImage={data.cardAnatomy.frontCardImage}
              backCardImage={data.cardAnatomy.backCardImage}
            />

            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              {data.cardAnatomy.footerNote}
            </p>
          </div>
        </section>

        {/* ── 4. STUDENT ID CARD DESIGN & BRANDING ── */}
        <section>
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.design.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                {data.design.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {data.design.description}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Side: Artwork Showcase Container */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto w-full">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#009fe3]/25 via-sky-400/20 to-blue-600/25 blur-2xl opacity-75" />
                  <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={data.design.imageSrc}
                        alt={data.design.imageAlt}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                          <Palette className="h-3.5 w-3.5 text-cyan-400" />
                          <span>{data.design.badgeTopLeft}</span>
                        </span>
                        <span className="rounded-full bg-[#009fe3] px-3.5 py-1 text-xs font-black text-white shadow-md">
                          {data.design.badgeTopRight}
                        </span>
                      </div>

                      {/* Bottom Info Bar */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.design.footerTagline}
                          </p>
                          <p className="text-xs sm:text-sm font-black">
                            {data.design.footerTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-extrabold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                          {data.design.footerStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: 10 Customization Elements */}
              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-xl space-y-5 backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                      <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        {data.design.boxTitle}
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-2.5 py-0.5 rounded-full">
                      {data.design.elements.length} Elements
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {data.design.elements.map((item, idx) => {
                      const ItemIcon = DYNAMIC_ICONS[item.iconName] || Palette;
                      return (
                        <div
                          key={item.name}
                          className="group relative flex items-center justify-between gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50/60 dark:from-slate-900 dark:to-slate-950 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors duration-200">
                              <ItemIcon className="h-3.5 w-3.5" />
                            </div>
                            <span className="truncate group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3] shrink-0">
                            {idx < 9 ? `0${idx + 1}` : idx + 1}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-start gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0 mt-0.5" />
                    <p>{data.design.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PVC STUDENT ID CARDS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#009fe3]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                    {data.pvc.eyebrow}
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                  {data.pvc.title}
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/80 dark:bg-cyan-950/80 border border-sky-200/70 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-extrabold text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                <Sparkles className="h-3.5 w-3.5" />
                {data.pvc.specPill}
              </span>
            </div>

            {/* 3 Bento Specification Cards */}
            <div className="relative z-10 grid gap-6 md:grid-cols-3">
              {data.pvc.cards.map((card) => {
                const CardIcon = DYNAMIC_ICONS[card.iconName] || CreditCard;
                const isIndigo = card.colorScheme === "indigo";
                const isTeal = card.colorScheme === "teal";
                return (
                  <div
                    key={card.number}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-lg hover:shadow-xl hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors shadow-2xs ${
                            isIndigo
                              ? "bg-indigo-100/80 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border-indigo-200/70 dark:border-indigo-800/50 group-hover:bg-indigo-600 group-hover:text-white"
                              : isTeal
                              ? "bg-teal-100/80 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 border-teal-200/70 dark:border-teal-800/50 group-hover:bg-teal-600 group-hover:text-white"
                              : "bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white"
                          }`}
                        >
                          <CardIcon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3] transition-colors">
                          {card.number}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider ${
                            isIndigo
                              ? "text-indigo-600 dark:text-indigo-400"
                              : isTeal
                              ? "text-teal-600 dark:text-teal-400"
                              : "text-[#009fe3] dark:text-cyan-400"
                          }`}
                        >
                          {card.tag}
                        </span>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-400">
                      <span>{card.bottomLeft}</span>
                      <span
                        className={
                          isIndigo
                            ? "text-indigo-600 dark:text-indigo-400"
                            : isTeal
                            ? "text-teal-600 dark:text-teal-400"
                            : "text-[#009fe3] dark:text-cyan-400"
                        }
                      >
                        {card.bottomRight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Action Strip */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <div className="flex items-start gap-3 max-w-2xl">
                <CheckCircle2 className="h-5 w-5 text-[#009fe3] dark:text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                  {data.pvc.footerNote}
                </p>
              </div>
              <Link
                href={data.pvc.footerCtaLink}
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <span>{data.pvc.footerCtaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. STUDENT ID CARD PRINTING PROCESS (CAROUSEL) ── */}
        <section>
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.process.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                {data.process.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {data.process.description}
              </p>
            </div>

            <StudentWorkflowCarousel steps={data.process.steps} />
          </div>
        </section>

        {/* ── 7. COMPLETE IDENTIFICATION SET (TIER CARDS) ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#009fe3]/10 blur-3xl" />
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.assembly.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.assembly.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.assembly.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.assembly.tiers.map((item) => {
                const TierIcon = DYNAMIC_ICONS[item.iconName] || CreditCard;
                return (
                  <div
                    key={item.title}
                    className={`group relative rounded-2xl border p-4 sm:p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      item.isHighlight
                        ? "border-[#009fe3] bg-gradient-to-br from-sky-50/90 via-white to-sky-100/50 dark:from-sky-950/60 dark:via-slate-900 dark:to-slate-950 shadow-sky-500/10 ring-2 ring-[#009fe3]/30"
                        : "border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 hover:border-sky-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          item.isHighlight
                            ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30"
                            : "bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors"
                        }`}
                      >
                        <TierIcon className="h-5 w-5" />
                      </div>
                      <span
                        className={`text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full ${
                          item.isHighlight
                            ? "bg-[#009fe3] text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        TIER {item.tier}
                      </span>
                    </div>

                    {item.isHighlight && (
                      <span className="inline-block text-[10px] font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-1">
                        ★ Full Wearable Kit
                      </span>
                    )}
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-extrabold text-[#009fe3] dark:text-cyan-400 mt-1.5 leading-snug">
                      {item.card}
                    </p>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <div className="flex items-start gap-3 max-w-2xl">
                <CheckCircle2 className="h-5 w-5 text-[#009fe3] dark:text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-relaxed">
                  {data.assembly.footerNote}
                </p>
              </div>
              <Link
                href={data.assembly.footerCtaLink}
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <span>{data.assembly.footerCtaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 8. CUSTOM STUDENT ID LANYARDS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.lanyards.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.lanyards.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.lanyards.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.lanyards.items.map((item, idx) => (
                <div
                  key={item}
                  className="group relative flex items-center justify-between gap-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                      {item}
                    </span>
                  </div>
                  <span className="text-xs font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3]">
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Typical Setup Chain Visual */}
            <div className="rounded-3xl border-2 border-sky-200/90 dark:border-sky-800/60 bg-gradient-to-r from-sky-50 via-white to-sky-50/70 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 p-6 sm:p-7 space-y-4 shadow-md">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
                <p className="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {data.lanyards.setupBannerTitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                {data.lanyards.setupSteps.map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-center justify-between rounded-2xl bg-white dark:bg-slate-800 px-4 py-3.5 border-2 border-sky-200/80 dark:border-slate-700 shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#009fe3] text-white text-xs font-black">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-black text-slate-900 dark:text-white">
                        {step}
                      </span>
                    </div>
                    {idx < data.lanyards.setupSteps.length - 1 && (
                      <span className="hidden lg:block text-[#009fe3] dark:text-cyan-400 font-black text-lg">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                {data.lanyards.footerNote}
              </p>
              <Link
                href={data.lanyards.footerCtaLink}
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <span>{data.lanyards.footerCtaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 9. STUDENT ID CARD DATA COLLECTION (IDGEN STUDIO) ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.studio.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.studio.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.studio.description}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Digital Workflow Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-5 sm:p-6 shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 dark:bg-cyan-950/60 border border-sky-200/80 dark:border-cyan-800/50 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                      <Sparkles className="h-3.5 w-3.5" />
                      {data.studio.badge}
                    </span>
                    <span className="text-xs font-black text-slate-400 dark:text-slate-500">
                      {data.studio.cloudLabel}
                    </span>
                  </div>

                  {/* Flow Steps */}
                  <div className="rounded-xl border-2 border-sky-200/80 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-950 p-3 space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      {data.studio.flowTitle}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-black">
                      {data.studio.flowSteps.map((step, idx) => (
                        <React.Fragment key={step}>
                          <span className="inline-flex items-center rounded-lg bg-white dark:bg-slate-900 px-2.5 py-1.5 text-xs text-slate-900 dark:text-cyan-300 border border-sky-200/80 dark:border-slate-700 shadow-2xs">
                            {step}
                          </span>
                          {idx < data.studio.flowSteps.length - 1 && (
                            <span className="text-[#009fe3] dark:text-cyan-400 font-black text-xs">
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    {data.studio.subheading}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {data.studio.fields.map((field) => (
                      <div
                        key={field}
                        className="flex items-center gap-2 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-3 py-2 text-xs font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                        <span>{field}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-2">
                    {data.studio.closingNote}
                  </p>
                </div>

                <Link
                  href={data.studio.ctaLink}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>{data.studio.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Right Column: Platform Image */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto w-full">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#009fe3]/25 via-cyan-500/20 to-blue-600/25 blur-2xl opacity-75" />
                  <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={data.studio.imageSrc}
                        alt={data.studio.imageAlt}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.studio.imageBadge}
                          </p>
                          <p className="text-xs sm:text-sm font-black">
                            {data.studio.imageTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-extrabold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          {data.studio.imageTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. BULK STUDENT ID CARD PRINTING ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.bulk.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.bulk.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.bulk.description}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 font-black">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    {data.bulk.leftBoxTitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.bulk.bulkRequirements.map((item, idx) => (
                    <div
                      key={item}
                      className="group flex items-center justify-between gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-4 py-3 text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3]">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-black">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <p className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    {data.bulk.rightBoxTitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.bulk.productionScheduleFactors.map((factor, idx) => (
                    <div
                      key={factor}
                      className="group flex items-center justify-between gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-4 py-3 text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-indigo-500 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span>{factor}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-indigo-500">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 max-w-2xl leading-relaxed">
                {data.bulk.footerNote}
              </p>
              <Link
                href={data.bulk.footerCtaLink}
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <span>{data.bulk.footerCtaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. NEW ACADEMIC SESSIONS & REPLACEMENTS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Box 1: New Academic Sessions */}
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-px w-5 bg-[#009fe3]" aria-hidden="true" />
                    <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                      {data.sessions.box1Eyebrow}
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {data.sessions.box1Title}
                  </h3>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                    {data.sessions.box1Subtitle}
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-sky-200/80 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-950 p-4 space-y-3">
                  <p className="text-xs font-black uppercase text-slate-600 dark:text-slate-400">
                    {data.sessions.annualFlowTitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-black">
                    {data.sessions.annualFlowSteps.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="rounded-xl bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-slate-900 dark:text-cyan-300 border border-sky-200 dark:border-slate-700 shadow-2xs">
                          {step}
                        </span>
                        {idx < data.sessions.annualFlowSteps.length - 1 && (
                          <span className="text-[#009fe3] text-sm font-black">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>{data.sessions.box1Paragraph1}</p>
                  <p>{data.sessions.box1Paragraph2}</p>
                </div>
              </div>

              {/* Box 2: Replacement Student ID Cards */}
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-px w-5 bg-[#009fe3]" aria-hidden="true" />
                    <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                      {data.sessions.box2Eyebrow}
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {data.sessions.box2Title}
                  </h3>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                    {data.sessions.box2Subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.sessions.replacementReasons.map((reason, idx) => (
                    <div
                      key={reason}
                      className="group flex items-center justify-between gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-4 py-3 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <RefreshCw className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                        <span>{reason}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3]">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  <p>{data.sessions.box2Paragraph1}</p>
                  <p>{data.sessions.box2Paragraph2}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. QR CODE / BARCODE & SECURITY ACCURACY ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <QrCode className="h-5 w-5 text-[#009fe3]" />
                    <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                      {data.security.qrEyebrow}
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {data.security.qrTitle}
                  </h3>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                    {data.security.qrSubtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {data.security.qrListTitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.security.qrApplications.map((app) => (
                    <div
                      key={app}
                      className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-4 py-3 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  {data.security.qrNote}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">
                    {data.security.rfidNote}
                  </p>
                  <Link
                    href={data.security.rfidCtaLink}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-[#009fe3] hover:text-white text-slate-900 dark:text-slate-100 px-6 py-3 text-xs sm:text-sm font-black transition-all shadow-sm"
                  >
                    <span>{data.security.rfidCtaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#009fe3]" />
                    <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                      {data.security.qcEyebrow}
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {data.security.qcTitle}
                  </h3>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                    {data.security.qcSubtitle}
                  </p>
                </div>

                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  {data.security.qcParagraph1}
                </p>

                <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {data.security.qcWorkflowTitle}
                </p>

                <div className="rounded-2xl border-2 border-sky-200/80 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-950 p-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-black">
                    {data.security.qcWorkflowSteps.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="rounded-xl bg-white dark:bg-slate-900 px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-cyan-300 border border-sky-200 dark:border-slate-700 shadow-2xs">
                          {step}
                        </span>
                        {idx < data.security.qcWorkflowSteps.length - 1 && (
                          <span className="text-[#009fe3] text-sm font-black">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
                  {data.security.qcParagraph2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. STUDENT ID CARD APPLICATIONS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.applications.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.applications.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.applications.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
              {data.applications.applications.map((app, idx) => (
                <div
                  key={app}
                  className="group relative flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                      {app}
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3] shrink-0">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm font-bold text-slate-600 dark:text-slate-300 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              {data.applications.footerNote}
            </p>
          </div>
        </section>

        {/* ── 14. ASSAM & NORTHEAST INDIA COVERAGE ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-[#009fe3]/40 dark:border-sky-800/50 bg-gradient-to-br from-sky-600 via-[#009fe3] to-sky-500 p-6 sm:p-8 md:p-12 shadow-2xl space-y-8 text-white">
            <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-white/15 blur-[100px]" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-white/80" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-white/90 uppercase">
                  {data.coverage.eyebrow}
                </p>
                <span className="h-px w-6 bg-white/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.coverage.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-sky-100 leading-relaxed max-w-4xl">
                {data.coverage.description}
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              <p className="text-sm font-black uppercase tracking-wider text-white">
                {data.coverage.subheading}
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {data.coverage.cities.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 text-sm font-extrabold text-white shadow-sm hover:bg-white hover:text-[#009fe3] transition-all cursor-default"
                  >
                    <MapPin className="h-3.5 w-3.5 text-cyan-200" />
                    <span>{city}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-5">
              <p className="text-sm font-bold text-sky-100">
                {data.coverage.footerNote}
              </p>
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href={data.coverage.cta1Link}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black shadow-lg hover:bg-sky-50 transition-all hover:-translate-y-0.5"
                >
                  <span>{data.coverage.cta1Text}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={data.coverage.cta2Link}
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/40 text-white px-6 py-3 text-xs sm:text-sm font-black backdrop-blur-md hover:bg-white hover:text-[#009fe3] transition-all hover:-translate-y-0.5"
                >
                  <span>{data.coverage.cta2Text}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 15. WHY CHOOSE IDGEN FOR STUDENT ID CARDS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.whyChoose.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.whyChoose.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.whyChoose.description}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.whyChoose.reasons.map((reason) => {
                const ReasonIcon = DYNAMIC_ICONS[reason.iconName] || GraduationCap;
                return (
                  <div
                    key={reason.title}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-lg hover:border-[#009fe3] dark:hover:border-cyan-500 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-5"
                  >
                    <div className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-950/60 dark:to-sky-900/30 border border-sky-200/60 dark:border-sky-800/40 text-[#009fe3] dark:text-cyan-400 shadow-md group-hover:scale-110 transition-transform">
                        <ReasonIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                          {reason.title}
                        </h3>
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                          {reason.body}
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-400">
                      <span>Institutional Standard</span>
                      <span className="text-[#009fe3] dark:text-cyan-400">Verified</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                {data.whyChoose.footerNote}
              </p>
              <Link
                href={data.whyChoose.footerLinkUrl}
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-black text-[#009fe3] dark:text-cyan-400 hover:underline shrink-0"
              >
                <span>{data.whyChoose.footerLinkText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 16. STUDENT ID CARD PRICING ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.pricing.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.pricing.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.pricing.description}
              </p>
            </div>

            <div className="rounded-3xl border-2 border-sky-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  {data.pricing.boxTitle}
                </p>
                <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3 py-1 rounded-full">
                  {data.pricing.badge}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {data.pricing.factors.map((factor, idx) => (
                  <div
                    key={factor}
                    className="group flex items-center justify-between gap-2 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-3.5 py-3 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span className="truncate">{factor}</span>
                    </div>
                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3]">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 pt-2 leading-relaxed">
                {data.pricing.boxNote}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <p className="text-base font-black text-slate-900 dark:text-white">
                {data.pricing.bottomText}
              </p>
              <Link
                href={data.pricing.ctaLink}
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{data.pricing.ctaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 17. WHO CAN ORDER STUDENT ID CARDS? ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.eligibleOrgs.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.eligibleOrgs.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.eligibleOrgs.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
              {data.eligibleOrgs.organizations.map((org, idx) => (
                <div
                  key={org}
                  className="group relative flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                      <School className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                      {org}
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3] shrink-0">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 18. FREQUENTLY ASKED QUESTIONS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">
                  {data.faq.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                {data.faq.title}
              </h2>
            </div>

            <FaqList faqs={data.faq.faqs} />
          </div>
        </section>

        {/* ── 19. QUICK ANSWER & START YOUR PROJECT CTA ── */}
        <section className="space-y-10">
          <div className="rounded-3xl border-2 border-sky-200/90 dark:border-slate-800 bg-gradient-to-br from-sky-50/90 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-4">
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
              <h3 className="text-sm font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                {data.quickAnswerAndCta.quickAnswerBadge}
              </h3>
            </div>
            <p className="text-base font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
              {data.quickAnswerAndCta.quickAnswerBody}
            </p>
          </div>

          <CtaBand
            title={data.quickAnswerAndCta.ctaTitle}
            body={data.quickAnswerAndCta.ctaBody}
            links={[
              {
                label: data.quickAnswerAndCta.primaryButtonText,
                href: data.quickAnswerAndCta.primaryButtonLink,
                primary: true,
              },
              ...data.quickAnswerAndCta.secondaryLinks.map((l) => ({
                label: l.label,
                href: l.href,
              })),
            ]}
          />
        </section>
      </Container>
    </>
  );
}
