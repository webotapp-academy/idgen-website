import React from "react";
import Link from "next/link";
import {
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Boxes,
  GraduationCap,
  Building2,
  MapPin,
  HelpCircle,
  AlertTriangle,
  Calculator,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { PricingHeroCarousel } from "@/components/pricing/PricingHeroCarousel";
import { QuickPricingGuide } from "@/components/pricing/QuickPricingGuide";
import { CategoryBreakdownSection } from "@/components/pricing/CategoryBreakdownSection";
import { TechnicalSpecificationsSection } from "@/components/pricing/TechnicalSpecificationsSection";
import { ProductShowcaseCarousel } from "@/components/home/ProductShowcaseCarousel";
import { getAllPricingItems } from "@/lib/dynamic-pricing";
import { getAllTechnicalSpecs, getSectionConfig } from "@/lib/dynamic-specifications";
import { getDynamicPricingPage } from "@/lib/dynamic-pricing-page";

export async function generateMetadata() {
  const pageData = getDynamicPricingPage();
  return pageMetadata({
    title: pageData.seo.title || "ID Card Printing Price & Lanyard Pricing | IDGen",
    description:
      pageData.seo.description ||
      "Check IDGen reference pricing for PVC ID cards, custom printed lanyards, ID card holders, event cards and RFID cards.",
    path: "/pricing/",
  });
}

export default function PricingPage() {
  const pageData = getDynamicPricingPage();
  const dynamicPricingItems = getAllPricingItems();
  const dynamicTechnicalSpecs = getAllTechnicalSpecs();
  const dynamicSectionConfig = getSectionConfig();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: pageData.seo.title || "IDGen Pricing",
          description: pageData.seo.description || "Transparent reference pricing for PVC ID cards, custom printed lanyards, event cards and RFID cards by IDGen.",
          path: "/pricing/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Eyebrow + Heading + Paragraph + Reference Rates Banner + CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <IndianRupee className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>{pageData.hero.eyebrow}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.12]">
                  {pageData.hero.title}{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    {pageData.hero.highlightText}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {pageData.hero.description}
                </p>
              </div>

              {/* Integrated Reference Banner */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{pageData.hero.ratesBanner.eyebrow}</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {pageData.hero.ratesBanner.text}
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href={pageData.hero.ctaPrimary.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>{pageData.hero.ctaPrimary.text}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={pageData.hero.ctaSecondary.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>{pageData.hero.ctaSecondary.text}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Hero Visual Slider Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <PricingHeroCarousel initialSlides={pageData.heroSlides} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. PRODUCT SHOWCASE CAROUSEL (Explore Our Complete Product Catalog) ── */}
      <ProductShowcaseCarousel />

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 3. QUICK PRICING GUIDE (DYNAMIC REAL-TIME MATRIX & SEPARATE V-1/H-1/V-2 PRICING) ── */}
        <QuickPricingGuide initialItems={dynamicPricingItems} />

        {/* ── 4. DETAILED PRODUCT REFERENCE PRICING CARDS (DYNAMIC CATEGORY BREAKDOWN) ── */}
        <CategoryBreakdownSection initialItems={dynamicPricingItems} />

        {/* ── 5. PRODUCT SPECIFICATIONS SECTION (DYNAMIC WITH IMAGES & DETAILED SPECS) ── */}
        <TechnicalSpecificationsSection
          initialItems={dynamicPricingItems}
          initialSpecs={dynamicTechnicalSpecs}
          initialConfig={dynamicSectionConfig}
        />

        {/* ── 6. WHAT AFFECTS ID CARD PRICING? (DYNAMIC FACTORS) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={pageData.costDeterminants.eyebrow}
            title={pageData.costDeterminants.title}
            lede={pageData.costDeterminants.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pageData.costDeterminants.factors.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-2 hover:border-[#009fe3]/50 transition duration-300"
              >
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. USE-CASE DEEP DIVES (STUDENT, EMPLOYEE, BULK) ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Student ID Card Pricing */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {pageData.useCases.student.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {pageData.useCases.student.desc}
                </p>
                <FlowChain steps={pageData.useCases.student.steps} />
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Applies to:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {pageData.useCases.student.appliesTo.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={pageData.useCases.student.linkHref}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline"
                >
                  <span>{pageData.useCases.student.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Employee ID Card Pricing */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {pageData.useCases.employee.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {pageData.useCases.employee.desc}
                </p>
                <FlowChain steps={pageData.useCases.employee.steps} />
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Suitable for:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {pageData.useCases.employee.suitableFor.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={pageData.useCases.employee.linkHref}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline"
                >
                  <span>{pageData.useCases.employee.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bulk ID Card Pricing */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Boxes className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {pageData.useCases.bulk.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  {pageData.useCases.bulk.desc}
                </p>
                <div className="pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Typical Bulk Projects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pageData.useCases.bulk.typicalProjects.map((p) => (
                      <span
                        key={p}
                        className="rounded-lg border border-sky-200 dark:border-cyan-800 bg-sky-50 dark:bg-cyan-950 px-2.5 py-1 text-xs font-extrabold text-[#009fe3] dark:text-cyan-400"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={pageData.useCases.bulk.linkHref}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline"
                >
                  <span>{pageData.useCases.bulk.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. PRINT-READY VS CUSTOMIZED ORDERS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {pageData.orderReadiness.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {pageData.orderReadiness.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {pageData.orderReadiness.desc}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-5 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {pageData.orderReadiness.printReady.title}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {pageData.orderReadiness.printReady.desc}
                </p>
              </div>

              <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-5 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3]">
                  {pageData.orderReadiness.customized.title}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {pageData.orderReadiness.customized.desc}
                </p>
                <FlowChain steps={pageData.orderReadiness.customized.steps} />
              </div>
            </div>

            <div>
              <Link
                href={pageData.orderReadiness.linkHref}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline"
              >
                <span>{pageData.orderReadiness.linkText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 9. IDGEN PRICING BY REQUIREMENT DIRECTORY ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={pageData.pricingDirectory.eyebrow}
            title={pageData.pricingDirectory.title}
            lede={pageData.pricingDirectory.lede}
          />

          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold text-slate-500 uppercase">
                <tr>
                  <th className="px-6 py-4">Requirement</th>
                  <th className="px-6 py-4">Best Page Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {pageData.pricingDirectory.items.map((row) => (
                  <tr key={row.requirement} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/50 transition">
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{row.requirement}</td>
                    <td className="px-6 py-4">
                      <Link
                        href={row.href}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline"
                      >
                        <span>{row.page}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 10. WHY PRICES MAY CHANGE & NEED A CUSTOM QUOTE? ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Why Prices May Change */}
            <div className="rounded-3xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-8 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {pageData.priceChangesAndQuote.priceChanges.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {pageData.priceChangesAndQuote.priceChanges.desc}
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                  {pageData.priceChangesAndQuote.priceChanges.reasons.map((r) => (
                    <span key={r}>• {r}</span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-amber-900 dark:text-amber-300 pt-3 border-t border-amber-200/60 dark:border-amber-900/40 italic">
                {pageData.priceChangesAndQuote.priceChanges.disclaimer}
              </p>
            </div>

            {/* Need a Custom Quote? */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#009fe3]">
                  <Calculator className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {pageData.priceChangesAndQuote.customQuote.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {pageData.priceChangesAndQuote.customQuote.desc}
                </p>
                <FlowChain steps={pageData.priceChangesAndQuote.customQuote.formula} />
                <div className="rounded-xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-3 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-[#009fe3]">Format: </span>
                  {pageData.priceChangesAndQuote.customQuote.exampleText}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={pageData.priceChangesAndQuote.customQuote.buttonHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-2.5 text-xs font-bold text-white shadow hover:bg-[#008bc9] transition"
                >
                  <span>{pageData.priceChangesAndQuote.customQuote.buttonText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. FREQUENTLY ASKED QUESTIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={pageData.faqsSection.eyebrow}
            title={pageData.faqsSection.title}
          />

          <div className="mt-8">
            <FaqList faqs={pageData.faqsSection.faqs} />
          </div>
        </section>

        {/* ── 12. PRICING IN ONE ANSWER (SUMMARY CALLOUT) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-sky-200 dark:border-slate-800 bg-sky-50/70 dark:bg-slate-900 p-8 shadow-lg space-y-3">
            <div className="inline-flex items-center gap-2 text-[#009fe3] dark:text-cyan-400">
              <Sparkles className="h-4 w-4" />
              <h3 className="text-base font-extrabold uppercase tracking-wider">
                {pageData.pricingSummary.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
              {pageData.pricingSummary.description}
            </p>
          </div>
        </section>

        {/* ── 13. GET YOUR EXACT IDGEN QUOTE (CLOSING CTA BAND) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>{pageData.closingCta.badge}</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {pageData.closingCta.title}
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {pageData.closingCta.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                {pageData.closingCta.buttons.map((btn, idx) => (
                  <Link
                    key={btn.text + idx}
                    href={btn.href}
                    className={
                      btn.variant === "primary"
                        ? "rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                        : "rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                    }
                  >
                    {btn.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. GEOGRAPHIC / INTERNAL LINKING REFERENCE DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                {pageData.geographicHub.hubTag}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              {pageData.geographicHub.title}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {pageData.geographicHub.description}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {pageData.geographicHub.relatedLinksTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {pageData.geographicHub.relatedLinks.map((item) => (
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
