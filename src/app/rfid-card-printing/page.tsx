import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Radio,
  GraduationCap,
  Building2,
  Hospital,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  Cpu,
  MapPin,
  HelpCircle,
  FileText,
  Workflow,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  Palette,
  CreditCard,
  Lock,
  Shield,
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
import { RfidHeroCarousel } from "@/components/rfid-card-printing/RfidHeroCarousel";
import { pageMetadata } from "@/lib/metadata";
import { getDynamicRfidCardPrinting } from "@/lib/dynamic-rfid-card-printing";

export async function generateMetadata() {
  const data = getDynamicRfidCardPrinting();
  return pageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: data.meta.path,
  });
}

const DYNAMIC_ICONS: Record<string, LucideIcon> = {
  Radio,
  GraduationCap,
  Building2,
  Hospital,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  Cpu,
  MapPin,
  HelpCircle,
  FileText,
  Workflow,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  Palette,
  CreditCard,
  Lock,
  Shield,
};

function getDynamicIcon(iconName?: string, fallback: LucideIcon = Radio): LucideIcon {
  if (!iconName) return fallback;
  return DYNAMIC_ICONS[iconName] || fallback;
}

export default function RfidCardPrintingPage() {
  const data = getDynamicRfidCardPrinting();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "RFID Card Printing",
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
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Eyebrow + Heading + Paragraph + Workflow Card + CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Radio className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>{data.hero.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  {data.hero.h1}{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    {data.hero.h1Gradient}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {data.hero.description}
                </p>
              </div>

              {/* Integrated Structured Advisory Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{data.hero.advisoryBadge}</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {data.hero.advisoryTitle}
                </p>

                {/* Workflow Chain */}
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

            {/* Right Column: Hero Visual Showcase (Interactive RFID Suite Carousel) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <RfidHeroCarousel slides={data.hero.slides} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 2. ORGANIZATIONAL SUITABILITY ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                {data.orgSuitability.eyebrow}
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              {data.orgSuitability.title}
            </h2>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {data.orgSuitability.subhead}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {data.orgSuitability.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs transition-all hover:border-[#009fe3]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. WHAT IS AN RFID ID CARD? & DUAL IDENTIFICATION ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Reader interaction photo */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.whatIsRfid.image.src}
                      alt={data.whatIsRfid.image.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Cpu className="h-3 w-3 text-cyan-400" />
                        <span>{data.whatIsRfid.image.badge}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        IDGen
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            Reader Verification
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.whatIsRfid.image.caption}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.whatIsRfid.image.statusBadge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dual Identification Scope */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    {data.whatIsRfid.eyebrow}
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {data.whatIsRfid.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {data.whatIsRfid.description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {data.whatIsRfid.purposes.map((purpose) => (
                  <div
                    key={purpose.purposeNumber}
                    className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-1.5"
                  >
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                      {purpose.purposeNumber}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      {purpose.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {purpose.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4 space-y-2">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {data.whatIsRfid.typicalCardTitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.whatIsRfid.typicalCardItems.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#009fe3]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1">
                  {data.whatIsRfid.footnote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. RFID CARD APPLICATIONS (SECTORS) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.sectorApplications.eyebrow}
            title={data.sectorApplications.title}
            lede={data.sectorApplications.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.sectorApplications.items.map((app) => {
              const IconComp = getDynamicIcon(app.iconName, Radio);
              return (
                <div
                  key={app.title}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40 shadow-xs">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                      {app.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                      {app.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-4 text-xs text-amber-900 dark:text-amber-300 leading-relaxed flex items-start gap-2.5">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <div>
              <span className="font-bold">{data.sectorApplications.warningBox.title} </span>
              {data.sectorApplications.warningBox.text}
            </div>
          </div>
        </section>

        {/* ── 5. RFID TECHNOLOGY MUST MATCH YOUR SYSTEM ── */}
        <section className="mt-20">
          <div className="rounded-3xl border-2 border-sky-200 dark:border-slate-800 bg-gradient-to-br from-sky-50/70 via-white to-sky-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-8 sm:p-10 shadow-xl space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.systemCompatibility.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.systemCompatibility.title}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {data.systemCompatibility.description}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {data.systemCompatibility.subhead}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {data.systemCompatibility.factors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 space-y-3 shadow-xs">
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {data.systemCompatibility.noticeBox.text}
              </p>
              <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                {data.systemCompatibility.noticeBox.highlightText}
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. RFID CARD CUSTOMIZATION & CARD ELEMENTS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.customization.eyebrow}
            title={data.customization.title}
            lede={data.customization.lede}
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              {data.customization.subhead}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {data.customization.fields.map((field) => (
                <div
                  key={field}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 italic">
              {data.customization.footnote}
            </p>
          </div>
        </section>

        {/* ── 7. STUDENT & EMPLOYEE DEEP DIVES ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Student Identification Card */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40">
                  {(() => {
                    const StudentIcon = getDynamicIcon(
                      data.studentAndEmployee.studentCard.iconName,
                      GraduationCap
                    );
                    return <StudentIcon className="h-5 w-5" />;
                  })()}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {data.studentAndEmployee.studentCard.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                  {data.studentAndEmployee.studentCard.description}
                </p>

                <div className="pt-2">
                  <FlowChain steps={data.studentAndEmployee.studentCard.steps} />
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    {data.studentAndEmployee.studentCard.applicationsTitle}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {data.studentAndEmployee.studentCard.applications.map((app) => (
                      <li key={app}>• {app}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {data.studentAndEmployee.studentCard.note}
                </p>
                <Link
                  href={data.studentAndEmployee.studentCard.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                >
                  <span>{data.studentAndEmployee.studentCard.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Employee ID Card */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40">
                  {(() => {
                    const EmployeeIcon = getDynamicIcon(
                      data.studentAndEmployee.employeeCard.iconName,
                      Building2
                    );
                    return <EmployeeIcon className="h-5 w-5" />;
                  })()}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {data.studentAndEmployee.employeeCard.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                  {data.studentAndEmployee.employeeCard.description}
                </p>

                <div className="pt-2">
                  <FlowChain steps={data.studentAndEmployee.employeeCard.steps} />
                </div>

                <div className="pt-2">
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {data.studentAndEmployee.employeeCard.subtext}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={data.studentAndEmployee.employeeCard.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                >
                  <span>{data.studentAndEmployee.employeeCard.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. RFID CARD PRINTING PROCESS (8 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.workflowProcess.eyebrow}
            title={data.workflowProcess.title}
            lede={data.workflowProcess.lede}
          />

          <div className="mt-8">
            <WorkflowSteps steps={data.workflowProcess.steps} />
          </div>
        </section>

        {/* ── 9. RFID CARD PRINTING FOR BULK ORDERS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.bulkOrders.eyebrow}
            title={data.bulkOrders.title}
            lede={data.bulkOrders.lede}
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-6">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              {data.bulkOrders.subhead}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {data.bulkOrders.sectors.map((sector) => (
                <div
                  key={sector}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{sector}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {data.bulkOrders.infoText}
              </p>
              <div>
                <Link
                  href={data.bulkOrders.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                >
                  <span>{data.bulkOrders.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. RFID CARD + LANYARD + HOLDER ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.configurations.eyebrow}
            title={data.configurations.title}
            lede={data.configurations.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {data.configurations.items.map((cfg) => (
              <div
                key={cfg.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                    {cfg.badge}
                  </span>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-lg">
                    {cfg.title}
                  </h3>
                  <div className="mt-4 pt-2">
                    <FlowChain steps={cfg.formula} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {cfg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {data.configurations.bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </section>

        {/* ── 11. RFID CARDS FOR EXISTING SYSTEMS (CHECKLIST) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.existingSystemsChecklist.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.existingSystemsChecklist.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.existingSystemsChecklist.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {data.existingSystemsChecklist.checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-900 dark:text-slate-100"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-2">
              {data.existingSystemsChecklist.footnote}
            </p>
          </div>
        </section>

        {/* ── 12. RFID CARD PRINTING VS STANDARD ID CARD (COMPARISON TABLE) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.comparisonTable.eyebrow}
            title={data.comparisonTable.title}
          />

          <div className="mt-8">
            <CompareTable
              columns={data.comparisonTable.columns}
              rows={data.comparisonTable.rows}
              highlightColumn={2}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {data.comparisonTable.conclusionText}
            </p>
          </div>
        </section>

        {/* ── 13. RFID CARD QUALITY & VERIFICATION ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.qualityVerification.eyebrow}
            title={data.qualityVerification.title}
            lede={data.qualityVerification.lede}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.qualityVerification.aspects.map((aspect) => (
              <div
                key={aspect.title}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2 text-[#009fe3]">
                  <CheckCircle2 className="h-4 w-4" />
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {aspect.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {aspect.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 14. RFID CARD DATA & DIGITAL WORKFLOW ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.digitalWorkflow.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.digitalWorkflow.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.digitalWorkflow.description}
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={data.digitalWorkflow.steps} />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              {data.digitalWorkflow.infoText}
            </p>

            <div>
              <Link
                href={data.digitalWorkflow.ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>{data.digitalWorkflow.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 15. WHY CHOOSE IDGEN FOR RFID CARD PRINTING? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.whyChooseIdgen.eyebrow}
            title={data.whyChooseIdgen.title}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyChooseIdgen.features.map((item) => {
              const FeatureIcon = getDynamicIcon(item.iconName, ShieldCheck);
              return (
                <FeatureCard
                  key={item.title}
                  icon={FeatureIcon}
                  title={item.title}
                  body={item.body}
                />
              );
            })}
          </div>
        </section>

        {/* ── 16. WHO CAN USE RFID ID CARDS? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.eligibleSectors.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.eligibleSectors.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {data.eligibleSectors.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {data.eligibleSectors.sectors.map((sector) => (
                <div
                  key={sector}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{sector}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              {data.eligibleSectors.footnote}
            </p>
          </div>
        </section>

        {/* ── 17. FREQUENTLY ASKED QUESTIONS (Strictly 10 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.faqs.eyebrow}
            title={data.faqs.title}
          />

          <div className="mt-8">
            <FaqList faqs={data.faqs.items} />
          </div>
        </section>

        {/* ── 18. NEED RFID CARD PRINTING? (Closing CTA Band) ── */}
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

              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 text-xs text-slate-300">
                {data.closingCta.infoBox}
              </div>

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
