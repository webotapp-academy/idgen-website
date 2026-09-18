import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Building2,
  Users,
  Factory,
  Hospital,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  QrCode,
  MapPin,
  ArrowRight,
  Database,
  Layers,
  FileSpreadsheet,
  Check,
  CreditCard,
  Barcode,
  Eye,
  Sliders,
  Award,
  Clock,
  Truck,
  Briefcase,
  UserCheck,
  FileCheck,
  BadgeCheck,
  HelpCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { EmployeeHeroCarousel } from "@/components/employee-id-card-printing/EmployeeHeroCarousel";
import { EmployeeSolutionsCarousel } from "@/components/employee-id-card-printing/EmployeeSolutionsCarousel";
import { EmployeeCardAnatomy } from "@/components/employee-id-card-printing/EmployeeCardAnatomy";
import { getDynamicEmployeeIdCardPrinting } from "@/lib/dynamic-employee-id-card-printing";

const DYNAMIC_ICONS: Record<string, React.ElementType> = {
  Building2,
  Users,
  Factory,
  Hospital,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  QrCode,
  MapPin,
  ArrowRight,
  Database,
  Layers,
  FileSpreadsheet,
  Check,
  CreditCard,
  Barcode,
  Eye,
  Sliders,
  Award,
  Clock,
  Truck,
  Briefcase,
  UserCheck,
  FileCheck,
  BadgeCheck,
  HelpCircle,
};

function getIcon(name?: string, fallback: React.ElementType = Sparkles) {
  if (!name) return fallback;
  return DYNAMIC_ICONS[name] || fallback;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = getDynamicEmployeeIdCardPrinting();
  return pageMetadata({
    title: data.metadata?.title || "Employee ID Card Printing | Custom Company & Staff ID Cards | IDGen",
    description:
      data.metadata?.description ||
      "Custom employee ID card printing for companies, offices, industries, hospitals and organizations. Personalized staff cards, bulk printing, QR/barcode options and complete ID card setups by IDGen.",
    path: data.metadata?.path || "/employee-id-card-printing/",
  });
}

export default async function EmployeeIdCardPrintingPage() {
  const data = getDynamicEmployeeIdCardPrinting();

  return (
    <div className="bg-[#f8fafc] dark:bg-[#070d18] text-slate-900 dark:text-slate-100 min-h-screen selection:bg-[#009fe3]/20 selection:text-[#009fe3] transition-colors">
      <JsonLd
        data={serviceSchema({
          name: "Employee ID Card Printing",
          description:
            data.metadata?.description ||
            "Custom employee ID card printing for companies, offices, industries, hospitals and organizations. Personalized staff cards, bulk printing, QR/barcode options and complete ID card setups by IDGen.",
          path: "/employee-id-card-printing/",
        })}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.2),rgba(7,13,24,0))]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/30 bg-gradient-to-r from-[#009fe3]/10 via-sky-50 to-white dark:from-cyan-950/60 dark:via-slate-900 dark:to-slate-800 px-4 py-1.5 shadow-2xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
                  <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    {data.hero.badge}
                  </span>
                  <span className="h-3 w-px bg-[#009fe3]/30" />
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    {data.hero.badgeSub}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1]">
                  <span className="text-slate-950 dark:text-white">{data.hero.title} </span>
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    {data.hero.titleHighlight}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {data.hero.description}
                </p>
              </div>

              {/* Personalization Info Card Strip */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 p-4 sm:p-5 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                    <span>{data.hero.personalizationTitle}</span>
                  </span>
                  <span className="text-[11px] font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-sky-200/60 dark:border-cyan-800/50">
                    Custom Fields
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {data.hero.personalizationItems.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 sm:px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {data.hero.note}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href={data.hero.primaryCtaLink}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#009fe3] to-[#0084be] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>{data.hero.primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={data.hero.secondaryCtaLink}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>{data.hero.secondaryCtaText}</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Sliding Showcase Carousel */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
              <EmployeeHeroCarousel slides={data.heroSlides} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Employee ID Card Printing", path: "/employee-id-card-printing/" },
          ]}
        />

        {/* ─────────────────────────────────────────────────────────────
            2. EMPLOYEE IDENTIFICATION FOR MODERN WORKPLACES
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-14 pt-4">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Building2 className="h-3.5 w-3.5" />
              <span>{data.modernWorkplaces.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              {data.modernWorkplaces.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {data.modernWorkplaces.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(data.modernWorkplaces?.items || data.modernWorkplaces?.uses || []).map((use, idx) => {
              const UseIcon = getIcon(use.iconName, Award);
              return (
                <div
                  key={use.title}
                  className="group rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-[#009fe3]/50 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                      <UseIcon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-950 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                      {use.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {use.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {data.modernWorkplaces.footerNote && (
            <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-sky-50/80 dark:bg-slate-800/80 p-4 text-center">
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold">
                {data.modernWorkplaces.footerNote}
              </p>
            </div>
          )}
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. EMPLOYEE ID CARD SOLUTIONS (Interactive Carousel)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Briefcase className="h-3.5 w-3.5" />
              <span>{data.solutionsSection.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              {data.solutionsSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {data.solutionsSection.description}
            </p>
          </div>

          <EmployeeSolutionsCarousel solutions={data.solutions} />
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. EMPLOYEE ID CARD DESIGN (Front & Back Anatomy)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Sliders className="h-3.5 w-3.5" />
              <span>{data.cardAnatomy.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              {data.cardAnatomy.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {data.cardAnatomy.description}
            </p>
          </div>

          <EmployeeCardAnatomy
            frontFields={data.cardAnatomy.frontFields}
            backFields={data.cardAnatomy.backFields}
            frontCardImage={data.cardAnatomy.frontCardImage}
            backCardImage={data.cardAnatomy.backCardImage}
          />

          {data.cardAnatomy.footerNote && (
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4 italic">
              {data.cardAnatomy.footerNote}
            </p>
          )}
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. EMPLOYEE ID CARD PERSONALIZATION
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto flex flex-col items-center space-y-2 border-b border-slate-100 dark:border-slate-800 pb-6">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.personalization.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.personalization.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
                {data.personalization.description}
              </p>
            </div>

            {/* Table Representation */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-black uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-6 py-4">Field</th>
                    <th className="px-6 py-4">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  {data.personalization.fields.map((row) => {
                    const RowIcon = getIcon(row.iconName, Users);
                    return (
                      <tr key={row.field} className="hover:bg-sky-50/50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                          <RowIcon className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                          <span>{row.field}</span>
                        </td>
                        <td className="px-6 py-3.5 font-medium text-slate-600 dark:text-slate-300">
                          {row.example}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {data.personalization.footerNote && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4 text-center">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold">
                  {data.personalization.footerNote}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. NEW EMPLOYEE ONBOARDING
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.onboarding.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.onboarding.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {data.onboarding.description}
              </p>
            </div>

            {/* Stepper Flow */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 text-center">
                A typical workflow can be:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {data.onboarding.steps.map((step, idx) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-xl bg-sky-50 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 px-3.5 py-1.5 text-xs font-black text-slate-900 dark:text-slate-100 shadow-2xs">
                      {step}
                    </span>
                    {idx < data.onboarding.steps.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto text-center">
              {data.onboarding.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {data.onboarding.ctaLink && (
              <div className="flex justify-center pt-2">
                <Link
                  href={data.onboarding.ctaLink}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#009fe3]/25 hover:bg-[#0084be] transition-all"
                >
                  <span>{data.onboarding.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. EMPLOYEE ID CARD REPLACEMENT
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <RefreshCw className="h-3.5 w-3.5" />
              <span>{data.replacement.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              {data.replacement.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {data.replacement.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.replacement.reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
              >
                <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                <span>{reason}</span>
              </div>
            ))}
          </div>

          {data.replacement.footerNote && (
            <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-800/80 p-4 text-center">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold">
                {data.replacement.footerNote}
              </p>
            </div>
          )}
        </section>

        {/* ─────────────────────────────────────────────────────────────
            8. DEPARTMENT-WISE EMPLOYEE IDENTIFICATION
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.departments.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.departments.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {data.departments.description}
              </p>
            </div>

            {/* Department Example Chain */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-5 space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 text-center">
                For example:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {(data.departments?.items || data.departments?.departments || []).map((dept, idx, arr) => (
                  <span key={dept} className="flex items-center gap-2">
                    <span className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-black text-slate-800 dark:text-slate-200 shadow-2xs">
                      {dept}
                    </span>
                    {idx < arr.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto text-center">
              {(data.departments?.paragraphs || [data.departments?.paragraph1, data.departments?.paragraph2].filter(Boolean) as string[]).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            9. EMPLOYEE ID CARDS WITH DIGITAL IDENTIFICATION
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.digitalId.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.digitalId.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {data.digitalId.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
              {(data.digitalId?.technologies || []).map((tech) => {
                const TechIcon = getIcon(tech.iconName, CreditCard);
                return (
                  <div
                    key={tech.name}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-center space-y-2 shadow-2xs"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 mx-auto">
                      <TechIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-black text-slate-900 dark:text-white text-base">{tech.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{tech.desc}</p>
                  </div>
                );
              })}
            </div>

            {data.digitalId.footerNote && (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
                {data.digitalId.footerNote}
              </p>
            )}

            {data.digitalId.ctaLink && (
              <div className="flex justify-center pt-2">
                <Link
                  href={data.digitalId.ctaLink}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#009fe3] text-[#009fe3] dark:text-cyan-400 px-7 py-3 text-sm font-bold bg-white dark:bg-slate-800 shadow-2xs hover:bg-[#009fe3] hover:text-white transition-all"
                >
                  <span>{data.digitalId.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            10. EMPLOYEE ID CARD COMPLETE SETUP
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.completeSetup.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.completeSetup.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {data.completeSetup.description}
              </p>
            </div>

            {/* Complete Setup Pill */}
            <div className="max-w-2xl mx-auto rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/70 dark:bg-slate-800/70 p-5 text-center space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block">
                Depending on the organization&apos;s requirements, the identification setup can include:
              </span>
              <div className="rounded-xl bg-white dark:bg-slate-900 border border-sky-200/80 dark:border-slate-700 p-3 text-sm sm:text-base font-black text-slate-950 dark:text-white shadow-2xs">
                {data.completeSetup.comboPill}
              </div>
            </div>

            {data.completeSetup.footerNote && (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-center max-w-3xl mx-auto">
                {data.completeSetup.footerNote}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {data.completeSetup.links.map((linkItem) => (
                <Link
                  key={linkItem.label}
                  href={linkItem.url}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-[#009fe3] hover:text-[#009fe3] transition-colors"
                >
                  <span>{linkItem.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            11. EMPLOYEE ID CARD PRINTING FOR BULK REQUIREMENTS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.bulk.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.bulk.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {data.bulk.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {data.bulk.requirements.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-800 p-4 text-center space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                {data.bulk.factorsTitle}
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                {data.bulk.factorsPill}
              </p>
            </div>

            {data.bulk.footerNote && (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center">
                {data.bulk.footerNote}
              </p>
            )}

            {data.bulk.ctaLink && (
              <div className="flex justify-center pt-1">
                <Link
                  href={data.bulk.ctaLink}
                  className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#0084be] transition-colors"
                >
                  <span>{data.bulk.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            12. EMPLOYEE ID CARD DATA & PHOTO REQUIREMENTS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.dataRequirements.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.dataRequirements.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {data.dataRequirements.description}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3 shadow-2xs">
              <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 text-center">
                A typical data structure may include:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-1">
                {data.dataRequirements.pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#009fe3]" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto text-center">
              {data.dataRequirements.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {data.dataRequirements.ctaLink && (
              <div className="flex justify-center pt-1">
                <Link
                  href={data.dataRequirements.ctaLink}
                  className="inline-flex items-center gap-2 rounded-full border border-[#009fe3] text-[#009fe3] dark:text-cyan-400 px-7 py-3 text-sm font-bold bg-white dark:bg-slate-800 shadow-2xs hover:bg-[#009fe3] hover:text-white transition-all"
                >
                  <span>{data.dataRequirements.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            13. EMPLOYEE ID CARD PREVIEW & APPROVAL
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.previewApproval.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.previewApproval.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {data.previewApproval.description}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-5 space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 text-center">
                This provides an opportunity to identify issues such as:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 pt-1">
                {data.previewApproval.issues.map((issue) => (
                  <div
                    key={issue}
                    className="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {data.previewApproval.objectiveNote && (
              <div className="max-w-xl mx-auto rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-800 p-4 text-center">
                <p className="text-xs sm:text-sm font-black text-slate-950 dark:text-white">
                  {data.previewApproval.objectiveNote}
                </p>
              </div>
            )}

            {data.previewApproval.ctaLink && (
              <div className="flex justify-center pt-1">
                <Link
                  href={data.previewApproval.ctaLink}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
                >
                  <span>{data.previewApproval.ctaText}</span>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            14. EMPLOYEE ID CARD PRICING
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-6">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.pricing.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.pricing.title}
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto text-center">
              {data.pricing.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {data.pricing.ctaLink && (
              <div className="flex justify-center pt-2">
                <Link
                  href={data.pricing.ctaLink}
                  className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0084be] transition-colors"
                >
                  <span>{data.pricing.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            15. WHO CAN ORDER EMPLOYEE ID CARDS?
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Building2 className="h-3.5 w-3.5" />
              <span>{data.whoCanOrder.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              {data.whoCanOrder.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {data.whoCanOrder.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {data.whoCanOrder.clients.map((client) => (
              <div
                key={client}
                className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
              >
                <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                <span>{client}</span>
              </div>
            ))}
          </div>

          {data.whoCanOrder.footerNote && (
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4 italic">
              {data.whoCanOrder.footerNote}
            </p>
          )}
        </section>

        {/* ─────────────────────────────────────────────────────────────
            16. EMPLOYEE ID CARD PRINTING IN ASSAM
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.coverage.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.coverage.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {data.coverage.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {data.coverage.locations.map((loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>

            {data.coverage.footerNote && (
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto">
                {data.coverage.footerNote}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              {data.coverage.links.map((lnk) => (
                <Link
                  key={lnk.label}
                  href={lnk.url}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#0084be] transition-colors"
                >
                  <span>{lnk.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            17. WHY CHOOSE IDGEN FOR EMPLOYEE ID CARDS?
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Award className="h-3.5 w-3.5" />
              <span>{data.whyChoose.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              {data.whyChoose.title}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyChoose.pillars.map((pillar) => {
              const PillarIcon = getIcon(pillar.iconName, Users);
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-3 hover:border-[#009fe3]/50 transition-all flex flex-col justify-between"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                    <PillarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-950 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {data.whyChoose.ctaLink && (
            <div className="flex justify-center pt-8">
              <Link
                href={data.whyChoose.ctaLink}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>{data.whyChoose.ctaText}</span>
              </Link>
            </div>
          )}
        </section>

        {/* ─────────────────────────────────────────────────────────────
            18. HOW TO ORDER EMPLOYEE ID CARDS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                {data.howToOrder.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                {data.howToOrder.title}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data.howToOrder.steps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-5 space-y-2 shadow-2xs"
                >
                  <span className="font-mono text-xs font-black text-[#009fe3] dark:text-cyan-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                    {step.num}
                  </span>
                  <h3 className="font-black text-slate-950 dark:text-white text-sm pt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {data.howToOrder.ctaLink && (
              <div className="flex justify-center pt-2">
                <Link
                  href={data.howToOrder.ctaLink}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#009fe3]/25 hover:bg-[#0084be] transition-all"
                >
                  <span>{data.howToOrder.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            19. FREQUENTLY ASKED QUESTIONS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <SectionHead
            align="center"
            eyebrow={data.faq.eyebrow}
            title={data.faq.title}
            lede={data.faq.lede}
          />
          <div className="mt-10 max-w-3xl mx-auto">
            <FaqList faqs={data.faq.faqs} />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            20. EMPLOYEE ID CARD PRINTING — QUICK ANSWER
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-3xl border border-[#009fe3]/30 dark:border-cyan-800/50 bg-gradient-to-br from-sky-50 via-white to-sky-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
              <h3 className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                {data.quickAnswer.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {data.quickAnswer.text}
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            21. READY TO PRINT EMPLOYEE ID CARDS? (Bottom CTA Banner)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-[#004b75] to-slate-950 text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#009fe3]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {data.closingCta.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                {data.closingCta.description}
              </p>
            </div>

            {/* Workflow Flow Badge in CTA */}
            {data.closingCta.workflowPill && (
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 text-xs sm:text-sm font-black text-cyan-300">
                  {data.closingCta.workflowPill}
                </div>
              </div>
            )}

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Link
                href={data.closingCta.primaryCtaLink}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg hover:bg-cyan-50 transition-all hover:scale-105"
              >
                <span>{data.closingCta.primaryCtaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {data.closingCta.secondaryCtaLink && (
                <Link
                  href={data.closingCta.secondaryCtaLink}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  <span>{data.closingCta.secondaryCtaText}</span>
                </Link>
              )}
              {data.closingCta.tertiaryCtaLink && (
                <Link
                  href={data.closingCta.tertiaryCtaLink}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-950/40 text-cyan-300 px-7 py-3.5 text-sm font-bold hover:bg-cyan-900/60 transition-all"
                >
                  <span>{data.closingCta.tertiaryCtaText}</span>
                </Link>
              )}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
