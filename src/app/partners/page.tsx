import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MapPin,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Workflow,
  Wrench,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { FaqList } from "@/components/ui/FaqList";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { getDynamicPartners } from "@/lib/dynamic-partners";

export const dynamic = "force-dynamic";

/* ── Dynamic SEO Metadata ── */
export async function generateMetadata() {
  const data = getDynamicPartners();
  return pageMetadata({
    title: data.meta?.title || "ID Card Reseller & Partner Program | IDGen Northeast India",
    description:
      data.meta?.description ||
      "Become an IDGen reseller, referral, printing or School ERP partner. Build your local ID card business with IDGen production support across Northeast India.",
    path: data.meta?.path || "/partners/",
  });
}

export default function PartnersPage() {
  const data = getDynamicPartners();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: data.hero?.badge || "IDGen Partner & Reseller Program",
          description:
            data.meta?.description ||
            "Become an IDGen reseller, referral, printing or School ERP partner. Build your local ID card business with IDGen production support across Northeast India.",
          path: data.meta?.path || "/partners/",
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
            {/* Left Column: Eyebrow + Heading + Paragraph + Workflow Card + CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Handshake className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>{data.hero?.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  {data.hero?.h1}
                </h1>

                <p className="text-base sm:text-lg font-bold text-[#009fe3] dark:text-cyan-400">
                  {data.hero?.subtitle}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {data.hero?.description}
                </p>
              </div>

              {/* Integrated Value Callout & Local Partner Model */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    <span>{data.hero?.responsibilityBadge}</span>
                  </span>
                  <span className="rounded-full bg-[#009fe3] px-3 py-0.5 text-[10px] font-black text-white">
                    {data.hero?.responsibilityHighlight}
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {data.hero?.modelTitle}
                </p>

                <FlowChain steps={data.hero?.modelSteps || []} />
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href={data.hero?.primaryCta?.href || "#apply"}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>{data.hero?.primaryCta?.label}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href={data.hero?.secondaryCta?.href || "/contact/"}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>{data.hero?.secondaryCta?.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl group flex flex-col justify-between">
                <Image
                  src={data.hero?.showcaseCard?.imageSrc || "/images/idgen-partner-reseller-program.jpg"}
                  alt={data.hero?.showcaseCard?.alt || "IDGen B2B Partner & Reseller network production"}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    <span>{data.hero?.showcaseCard?.topBadge}</span>
                  </span>
                  <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                    {data.hero?.showcaseCard?.brandBadge}
                  </span>
                </div>

                {/* Bottom Floating Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                        {data.hero?.showcaseCard?.subTitle}
                      </p>
                      <p className="text-xs sm:text-sm font-black text-white">
                        {data.hero?.showcaseCard?.mainTitle}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      {data.hero?.showcaseCard?.regionBadge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners/" }]} />

        {/* ── 2. WHY PARTNER WITH IDGEN? (CAPEX BARRIER vs PARTNER MODEL) ── */}
        <section className="mt-8">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.whyPartner?.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.whyPartner?.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.whyPartner?.description}
              </p>
            </div>

            {/* Equipment Investments */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2">
              {data.whyPartner?.equipmentList?.map((eq) => (
                <div key={eq} className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-center">
                  <Wrench className="h-4 w-4 text-[#009fe3] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-tight block">{eq}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/70 dark:bg-slate-950 p-5 space-y-2">
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-cyan-300 leading-relaxed">
                {data.whyPartner?.valueCallout}
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. A PARTNERSHIP BUILT AROUND YOUR STRENGTHS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.partnerStrengths?.eyebrow || "Core Synergies"}
            title={data.partnerStrengths?.title || "A Partnership Built Around Your Strengths"}
            lede={data.partnerStrengths?.lede || "You may already have something IDGen needs:"}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.partnerStrengths?.strengths?.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}

            <div className="rounded-3xl border border-sky-200 dark:border-cyan-800 bg-sky-50 dark:bg-cyan-950/40 p-6 shadow-md flex flex-col justify-center space-y-2 sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                {data.partnerStrengths?.synergyCard?.eyebrow || "The Synergy"}
              </span>
              <p className="text-sm font-black text-slate-900 dark:text-white leading-relaxed">
                {data.partnerStrengths?.synergyCard?.text}
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. CHOOSE YOUR PARTNERSHIP MODEL (4 DETAILED MODELS) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.models?.eyebrow || "Partnership Options"}
            title={data.models?.title || "Choose Your Partnership Model"}
            lede={data.models?.lede || "IDGen can work with different partner types depending on the business relationship."}
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Model 1: Reseller */}
            {data.models?.reseller && (
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-sky-100 dark:bg-cyan-950 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                      {data.models.reseller.badge}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {data.models.reseller.title}
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-[#009fe3]">
                    {data.models.reseller.tag}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {data.models.reseller.desc}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Typical Flow:</span>
                    <FlowChain steps={data.models.reseller.flowSteps || []} />
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {data.models.reseller.note}
                  </p>

                  {data.models.reseller.suitableFor && data.models.reseller.suitableFor.length > 0 && (
                    <div className="pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Suitable for:</span>
                      <div className="flex flex-wrap gap-1">
                        {data.models.reseller.suitableFor.map((s) => (
                          <span key={s} className="rounded border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a href={data.models.reseller.ctaHref || "#apply"} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                    <span>{data.models.reseller.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Model 2: Referral */}
            {data.models?.referral && (
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-sky-100 dark:bg-cyan-950 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                      {data.models.referral.badge}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {data.models.referral.title}
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-[#009fe3]">
                    {data.models.referral.tag}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {data.models.referral.desc}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Typical Flow:</span>
                    <FlowChain steps={data.models.referral.flowSteps || []} />
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {data.models.referral.note}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a href={data.models.referral.ctaHref || "#apply"} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                    <span>{data.models.referral.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Model 3: School ERP */}
            {data.models?.erp && (
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-sky-100 dark:bg-cyan-950 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                      {data.models.erp.badge}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {data.models.erp.title}
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-[#009fe3]">
                    {data.models.erp.tag}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {data.models.erp.desc}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Simple Model:</span>
                    <FlowChain steps={data.models.erp.flowSteps || []} />
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {data.models.erp.note}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a href={data.models.erp.ctaHref || "#apply"} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                    <span>{data.models.erp.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Model 4: Technology Partner */}
            {data.models?.tech && (
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-sky-100 dark:bg-cyan-950 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                      {data.models.tech.badge}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {data.models.tech.title}
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-[#009fe3]">
                    {data.models.tech.tag}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {data.models.tech.desc}
                  </p>

                  <FlowChain steps={data.models.tech.flowSteps || []} />

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {data.models.tech.note}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a href={data.models.tech.ctaHref || "#apply"} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                    <span>{data.models.tech.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── 5. WHAT CAN IDGEN PARTNERS OFFER? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.offerings?.eyebrow || "Product Portfolio"}
            title={data.offerings?.title || "What Can IDGen Partners Offer?"}
            lede={data.offerings?.lede || "Partners can potentially offer a broad identity-product portfolio instead of selling only one product."}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-[#009fe3]">
                <BadgeCheck className="h-5 w-5" />
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Identification Cards</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.offerings?.identificationCards?.map((item) => (
                  <span key={item} className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-[#009fe3]">
                <Layers className="h-5 w-5" />
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Identification Accessories</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.offerings?.accessories?.map((item) => (
                  <span key={item} className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href={data.offerings?.ctaHref || "/products/"} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]">
              <span>{data.offerings?.ctaText || "Explore IDGen Services"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* ── 6. WHY THIS MODEL CAN WORK (ADVANTAGES, DIVISION, TARGET SECTORS & CITIES) ── */}
        <section className="mt-20 space-y-12">
          <SectionHead
            eyebrow={data.whyModelWorks?.eyebrow || "Business Rationale"}
            title={data.whyModelWorks?.title || "Why This Model Can Work"}
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {data.whyModelWorks?.cards?.map((card) => (
              <div key={card.title} className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-2">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">{card.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Build Your Customer Base & City Opportunities */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                {data.whyModelWorks?.targetCustomersTitle}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {data.whyModelWorks?.targetCustomersDesc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {data.whyModelWorks?.targetOrganizations?.map((org) => (
                  <span key={org} className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {org}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                {data.whyModelWorks?.regionalTitle}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {data.whyModelWorks?.regionalDesc}
              </p>
              <FlowChain steps={data.whyModelWorks?.regionalFlow || []} />
              <div className="flex flex-wrap gap-1.5 pt-1">
                {data.whyModelWorks?.regionalStates?.map((st) => (
                  <span key={st} className="rounded-md border border-sky-200 dark:border-cyan-800 bg-sky-50 dark:bg-cyan-950 px-2.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. WHO IS A GOOD IDGEN PARTNER? & RESELLER / ERP PROFILES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.goodPartnerProfile?.eyebrow || "Partner Profiles"}
            title={data.goodPartnerProfile?.title || "Who Is a Good IDGen Partner?"}
            lede={data.goodPartnerProfile?.lede || "We are particularly interested in partners with existing school relationships, local business networks, sales capability, and long-term commitment."}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.goodPartnerProfile?.traits?.map((trait) => (
              <div key={trait} className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{trait}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {data.goodPartnerProfile?.profileCards?.map((card, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{card.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {card.desc}
                </p>
                {(card.rolePartner || card.roleIdgen) && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                    {card.rolePartner && (
                      <div><span className="font-bold text-[#009fe3]">Your Role: </span>{card.rolePartner}</div>
                    )}
                    {card.roleIdgen && (
                      <div><span className="font-bold text-[#009fe3]">IDGen Role: </span>{card.roleIdgen}</div>
                    )}
                  </div>
                )}
                {card.flow && card.flow.length > 0 && (
                  <FlowChain steps={card.flow} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. IDGEN EXPERIENCE BEHIND THE PARTNERSHIP & DIGITAL WORKFLOW ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {data.experienceAndStudio?.experience && (
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-[#009fe3]">
                  <Award className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {data.experienceAndStudio.experience.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {data.experienceAndStudio.experience.desc}
                </p>
                <FlowChain steps={data.experienceAndStudio.experience.flow || []} />
                <p className="text-xs text-slate-700 dark:text-slate-300 font-bold">
                  {data.experienceAndStudio.experience.note}
                </p>
              </div>
            )}

            {data.experienceAndStudio?.studio && (
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-[#009fe3]">
                  <Workflow className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {data.experienceAndStudio.studio.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {data.experienceAndStudio.studio.desc}
                </p>
                <FlowChain steps={data.experienceAndStudio.studio.flow || []} />
                <div className="pt-2">
                  <Link href={data.experienceAndStudio.studio.ctaHref || "/idgen-studio/"} className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                    <span>{data.experienceAndStudio.studio.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── 9. WORKFLOWS (RESELLER & ERP) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.detailedWorkflows?.eyebrow || "Detailed Operations"}
            title={data.detailedWorkflows?.title || "Partner Order Workflows"}
          />

          <div className="mt-8 space-y-6">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              {data.detailedWorkflows?.resellerTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
              {data.detailedWorkflows?.resellerSteps?.map((w) => (
                <div key={w.step} className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-sm space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#009fe3]">{w.step}</span>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-xs">{w.title}</h4>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight font-medium">{w.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                {data.detailedWorkflows?.erpTitle}
              </h3>
              <div className="mt-3">
                <FlowChain steps={data.detailedWorkflows?.erpSteps || []} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. WHAT IDGEN PROVIDES vs WHAT WE EXPECT ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-md space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {data.divisionOfRoles?.idgenProvidesTitle}
              </h3>
              <div className="space-y-2">
                {data.divisionOfRoles?.idgenProvides?.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-md space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {data.divisionOfRoles?.partnerExpectsTitle}
              </h3>
              <div className="space-y-2">
                {data.divisionOfRoles?.partnerExpects?.map((e, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. PARTNER TERRITORY, LEGAL FRANCHISE CLARIFICATION & COMMERCIAL TERMS ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                {data.termsAndTerritory?.territoryTitle}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {data.termsAndTerritory?.territoryDesc}
              </p>
              <div className="text-xs font-bold text-[#009fe3] space-y-1">
                {data.termsAndTerritory?.territoryExamples?.map((ex, idx) => (
                  <p key={idx}>{ex}</p>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 italic">
                {data.termsAndTerritory?.territoryNote}
              </p>
            </div>

            <div className="rounded-3xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-7 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {data.termsAndTerritory?.franchiseAlertTitle}
                </h3>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {data.termsAndTerritory?.franchiseAlertDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                {data.termsAndTerritory?.commercialTitle}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {data.termsAndTerritory?.commercialDesc}
              </p>
            </div>
          </div>
        </section>

        {/* ── 12. INTERACTIVE PARTNER APPLICATION FORM ── */}
        <section id="apply" className="mt-20 scroll-mt-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-lg space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#009fe3]">
                  {data.applicationSection?.badge}
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  {data.applicationSection?.title}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                  {data.applicationSection?.description}
                </p>
                <PartnerForm />
              </div>
            </div>

            <div className="space-y-6 lg:col-span-4 flex flex-col justify-between">
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-slate-900 p-7 text-white shadow-xl space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  {data.applicationSection?.requirementsTitle}
                </h3>

                <div className="space-y-2 text-xs">
                  <span className="font-extrabold text-cyan-400 block">
                    {data.applicationSection?.resellerRequirementsTitle}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {data.applicationSection?.resellerRequirements?.map((f) => (
                      <span key={f} className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-slate-300">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-xs pt-2 border-t border-white/10">
                  <span className="font-extrabold text-cyan-400 block">
                    {data.applicationSection?.erpRequirementsTitle}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {data.applicationSection?.erpRequirements?.map((f) => (
                      <span key={f} className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-slate-300">{f}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-[4/3] shadow-md group">
                <Image
                  src={data.applicationSection?.specimenImageSrc || "/images/idgen-partner-specimen-kit.jpg"}
                  alt="Complete IDGen partner sample kit"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="rounded-full bg-[#009fe3] px-2.5 py-0.5 text-[10px] font-bold uppercase">
                    {data.applicationSection?.specimenBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. FREQUENTLY ASKED QUESTIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.faqs?.eyebrow || "Questions & Answers"}
            title={data.faqs?.title || "Frequently Asked Questions"}
          />

          <div className="mt-8">
            <FaqList faqs={data.faqs?.items || []} />
          </div>
        </section>

        {/* ── 14. READY TO PARTNER WITH IDGEN? (CLOSING SUMMARY & CTAs) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>{data.closingCta?.badge}</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {data.closingCta?.title}
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {data.closingCta?.description}
              </p>

              <div className="rounded-2xl border border-cyan-800/50 bg-slate-900/90 p-4 text-xs font-bold text-cyan-300">
                {data.closingCta?.equationText}
              </div>

              <div className="pt-2 flex flex-wrap gap-3.5">
                {data.closingCta?.ctas?.map((cta, idx) => (
                  cta.href.startsWith("/") ? (
                    <Link
                      key={idx}
                      href={cta.href}
                      className={
                        idx === 0
                          ? "rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                          : "rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                      }
                    >
                      {cta.label}
                    </Link>
                  ) : (
                    <a
                      key={idx}
                      href={cta.href}
                      className={
                        idx === 0
                          ? "rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                          : "rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                      }
                    >
                      {cta.label}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 15. REGIONAL HUB DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                {data.regionalDirectory?.title}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              {data.regionalDirectory?.subtitle}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
              Your Customers → Your Market → IDGen Production → Professional Identity Products
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Explore Related Identity Solutions:
              </p>
              <div className="flex flex-wrap gap-2">
                {data.regionalDirectory?.links?.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#009fe3]"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3" />
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
