import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Waves,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  GraduationCap,
  Building2,
  Ticket,
  Users,
  MapPin,
  HelpCircle,
  FileText,
  Workflow,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { UltrasonicHeroCarousel } from "@/components/ultrasonic-sealing/UltrasonicHeroCarousel";
import { getDynamicUltrasonicSealing } from "@/lib/dynamic-ultrasonic-sealing";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const data = getDynamicUltrasonicSealing();
  return pageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: data.meta.path,
  });
}

const DYNAMIC_ICONS: Record<string, LucideIcon> = {
  Waves,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  GraduationCap,
  Building2,
  Ticket,
  Users,
  MapPin,
  HelpCircle,
  FileText,
  Workflow,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  Zap,
};

function getDynamicIcon(iconName?: string, fallback: LucideIcon = Sparkles): LucideIcon {
  if (!iconName) return fallback;
  return DYNAMIC_ICONS[iconName] || fallback;
}

export default function UltrasonicSealingPage() {
  const data = getDynamicUltrasonicSealing();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Ultrasonic Sealing for ID Card Lanyards",
          description: data.meta.description,
          path: data.meta.path,
        })}
      />

      {/* ── 1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Eyebrow + Heading + Paragraph + Workflow Card + CTAs */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Waves className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>{data.hero.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  {data.hero.h1}{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    {data.hero.h1Gradient}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {data.hero.description}
                </p>
              </div>

              {/* Integrated Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{data.hero.advisoryBadge}</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {data.hero.advisoryTitle}
                </p>

                {/* Flow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  {data.hero.advisorySteps.map((step, idx) => (
                    <React.Fragment key={step}>
                      {idx > 0 && <span className="text-[#009fe3] dark:text-cyan-400">→</span>}
                      <span>{step}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href={data.hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>{data.hero.primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={data.hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>{data.hero.secondaryCta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Slider Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <UltrasonicHeroCarousel slides={data.hero.slides} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 2. WHO IT IS USEFUL FOR ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                {data.suitableOrganizations.eyebrow}
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              {data.suitableOrganizations.title}
            </h2>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.suitableOrganizations.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs transition-all hover:border-[#009fe3]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. WHAT IS ULTRASONIC SEALING? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.whatIsSealing.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.whatIsSealing.title}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {data.whatIsSealing.description}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {data.whatIsSealing.factorsTitle}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {data.whatIsSealing.factors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              {data.whatIsSealing.footnote}
            </p>
          </div>
        </section>

        {/* ── 4. WHY USE ULTRASONIC SEALING? & CORE ADVANTAGES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.whyUseSealing.eyebrow}
            title={data.whyUseSealing.title}
            lede={data.whyUseSealing.lede}
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg space-y-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {data.whyUseSealing.hardwareIssuesTitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.whyUseSealing.hardwareIssues.map((issue) => (
                <div
                  key={issue}
                  className="flex items-center gap-2 rounded-xl border border-rose-200/60 dark:border-rose-900/40 bg-rose-50/40 dark:bg-rose-950/20 p-3 text-xs font-bold text-rose-900 dark:text-rose-300"
                >
                  <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {data.whyUseSealing.advantages.map((adv) => {
              const AdvIcon = getDynamicIcon(adv.iconName, Sparkles);
              return <FeatureCard key={adv.title} icon={AdvIcon} title={adv.title} body={adv.body} />;
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-4 text-xs text-amber-900 dark:text-amber-300 leading-relaxed flex items-start gap-2.5">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <div>
              <span className="font-bold">{data.whyUseSealing.warningBox.title} </span>
              {data.whyUseSealing.warningBox.text}
            </div>
          </div>
        </section>

        {/* ── 5. COMPARISON TABLE ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.compareTable.eyebrow}
            title={data.compareTable.title}
          />

          <div className="mt-8">
            <CompareTable
              columns={data.compareTable.columns}
              rows={data.compareTable.rows}
              highlightColumn={2}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {data.compareTable.conclusionText}
            </p>
          </div>
        </section>

        {/* ── 6. ULTRASONIC SEALING FOR ID CARD LANYARDS (SETUP) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.wearableIntegration.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.wearableIntegration.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.wearableIntegration.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {data.wearableIntegration.typicalFlow.label}
                </span>
                <FlowChain steps={data.wearableIntegration.typicalFlow.steps} />
              </div>

              <div className="rounded-2xl border border-sky-200/90 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                  {data.wearableIntegration.sealedFlow.label}
                </span>
                <FlowChain steps={data.wearableIntegration.sealedFlow.steps} />
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              {data.wearableIntegration.footnote}
            </p>
          </div>
        </section>

        {/* ── 7. ONE HOOK VS TWO HOOK SEALING ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.sealingPoints.eyebrow}
            title={data.sealingPoints.title}
            lede={data.sealingPoints.lede}
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* One-Hook Configuration */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-4">
              <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                {data.sealingPoints.oneHook.badge}
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                {data.sealingPoints.oneHook.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {data.sealingPoints.oneHook.desc}
              </p>
              <div className="pt-2">
                <FlowChain steps={data.sealingPoints.oneHook.steps} />
              </div>
            </div>

            {/* Two-Hook Configuration */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-4">
              <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                {data.sealingPoints.twoHook.badge}
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                {data.sealingPoints.twoHook.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {data.sealingPoints.twoHook.desc}
              </p>
              <div className="pt-2 space-y-2">
                <FlowChain steps={data.sealingPoints.twoHook.flow1} />
                <FlowChain steps={data.sealingPoints.twoHook.flow2} />
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {data.sealingPoints.footnote}
            </p>
          </div>
        </section>

        {/* ── 8. ULTRASONIC SEALING FOR EVENT CARDS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.eventCards.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.eventCards.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.eventCards.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-1">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                  {data.eventCards.oneHookCard.title}
                </h4>
                <p className="text-xs text-[#009fe3] font-bold">
                  {data.eventCards.oneHookCard.formula}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-1">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                  {data.eventCards.twoHookCard.title}
                </h4>
                <p className="text-xs text-[#009fe3] font-bold">
                  {data.eventCards.twoHookCard.formula}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.eventCards.infoText}
            </p>

            <div>
              <Link
                href={data.eventCards.linkHref}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
              >
                <span>{data.eventCards.linkText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 9. ULTRASONIC SEALING FOR COMPLETE ID CARD SETS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.completeSets.eyebrow}
            title={data.completeSets.title}
            lede={data.completeSets.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {data.completeSets.setup1.badge}
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                {data.completeSets.setup1.title}
              </h3>
              <FlowChain steps={data.completeSets.setup1.steps} />
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3]">
                {data.completeSets.setup2.badge}
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                {data.completeSets.setup2.title}
              </h3>
              <FlowChain steps={data.completeSets.setup2.steps} />
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-500">
                {data.completeSets.setup3.badge}
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                {data.completeSets.setup3.title}
              </h3>
              <FlowChain steps={data.completeSets.setup3.steps} />
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href={data.completeSets.linkHref}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
            >
              <span>{data.completeSets.linkText}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* ── 10. SCHOOLS & COMPANIES DEEP DIVES ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Schools */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40">
                  {(() => {
                    const SchoolIcon = getDynamicIcon(data.schoolsAndCompanies.schools.iconName, GraduationCap);
                    return <SchoolIcon className="h-5 w-5" />;
                  })()}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {data.schoolsAndCompanies.schools.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {data.schoolsAndCompanies.schools.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {data.schoolsAndCompanies.schools.useCases.map((use) => (
                    <div key={use} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <FlowChain steps={data.schoolsAndCompanies.schools.steps} />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {data.schoolsAndCompanies.schools.note}
                </p>
                <Link
                  href={data.schoolsAndCompanies.schools.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                >
                  <span>{data.schoolsAndCompanies.schools.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Companies */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40">
                  {(() => {
                    const CompIcon = getDynamicIcon(data.schoolsAndCompanies.companies.iconName, Building2);
                    return <CompIcon className="h-5 w-5" />;
                  })()}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {data.schoolsAndCompanies.companies.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {data.schoolsAndCompanies.companies.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {data.schoolsAndCompanies.companies.useCases.map((use) => (
                    <div key={use} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <FlowChain steps={data.schoolsAndCompanies.companies.steps} />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={data.schoolsAndCompanies.companies.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                >
                  <span>{data.schoolsAndCompanies.companies.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. ULTRASONIC SEALING PROCESS (7 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.processWorkflow.eyebrow}
            title={data.processWorkflow.title}
          />

          <div className="mt-8">
            <WorkflowSteps steps={data.processWorkflow.steps} />
          </div>
        </section>

        {/* ── 12. QUALITY MATTERS IN LANYARD SEALING ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.qualityAspects.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.qualityAspects.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.qualityAspects.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {data.qualityAspects.aspects.map((aspect) => (
                <div
                  key={aspect}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{aspect}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              {data.qualityAspects.footnote}
            </p>
          </div>
        </section>

        {/* ── 13. ULTRASONIC SEALING PRICE ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.pricingLogic.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.pricingLogic.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.pricingLogic.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {data.pricingLogic.principle1.label}
                </span>
                <p className="text-base font-black text-slate-900 dark:text-white">
                  {data.pricingLogic.principle1.text}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                  {data.pricingLogic.principle2.label}
                </span>
                <p className="text-base font-black text-slate-900 dark:text-white">
                  {data.pricingLogic.principle2.text}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              {data.pricingLogic.infoText}
            </p>

            <div>
              <Link
                href={data.pricingLogic.linkHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>{data.pricingLogic.linkText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. COMPLETE LANYARD ATTACHMENT OPTIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.attachmentOptions.eyebrow}
            title={data.attachmentOptions.title}
            lede={data.attachmentOptions.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.attachmentOptions.items.map((opt) => (
              <div
                key={opt.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                    {opt.badge}
                  </span>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                    {opt.title}
                  </h3>
                  <div className="mt-4 pt-1">
                    <FlowChain steps={opt.formula} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {data.attachmentOptions.footnote}
            </p>
          </div>
        </section>

        {/* ── 15. WHY IDGEN USES ULTRASONIC SEALING ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.whyIdgenUses.eyebrow}
            title={data.whyIdgenUses.title}
            lede={data.whyIdgenUses.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyIdgenUses.features.map((item) => {
              const WhyIcon = getDynamicIcon(item.iconName, Sparkles);
              return (
                <FeatureCard key={item.title} icon={WhyIcon} title={item.title} body={item.body} />
              );
            })}
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {data.whyIdgenUses.footnote}
            </p>
          </div>
        </section>

        {/* ── 16. WHO CAN ORDER ULTRASONIC SEALING? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.eligibleOrganizations.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.eligibleOrganizations.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {data.eligibleOrganizations.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {data.eligibleOrganizations.items.map((org) => (
                <div
                  key={org}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{org}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              {data.eligibleOrganizations.footnote}
            </p>
          </div>
        </section>

        {/* ── 17. FREQUENTLY ASKED QUESTIONS (Strictly 12 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.faqs.eyebrow}
            title={data.faqs.title}
          />

          <div className="mt-8">
            <FaqList faqs={data.faqs.items} />
          </div>
        </section>

        {/* ── 18. NEED ULTRASONIC SEALING? (Closing CTA Band) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-6">
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

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link
                  href={data.closingCta.buttonPrimary.href}
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  {data.closingCta.buttonPrimary.text}
                </Link>
                <Link
                  href={data.closingCta.buttonSecondary.href}
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  {data.closingCta.buttonSecondary.text}
                </Link>
                <Link
                  href={data.closingCta.buttonTertiary.href}
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  {data.closingCta.buttonTertiary.text}
                </Link>
                <Link
                  href={data.closingCta.buttonQuaternary.href}
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  {data.closingCta.buttonQuaternary.text}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 19. GEOGRAPHIC / INTERNAL LINKING REFERENCE DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                {data.regionalDirectory.hubTag}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              {data.regionalDirectory.title}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.regionalDirectory.description}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {data.regionalDirectory.subhead}
              </p>
              <div className="flex flex-wrap gap-2">
                {data.regionalDirectory.links.map((item) => (
                  <Link
                    key={item.topic}
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 transition hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400"
                  >
                    <span>{item.topic}</span>
                    <ArrowRight className="h-3 w-3 opacity-60" />
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
