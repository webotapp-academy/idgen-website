import React from "react";
import Link from "next/link";
import {
  HelpCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Boxes,
  Layers,
  Calculator,
  QrCode,
  MapPin,
  Lock,
  Radio,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  Truck,
  Sliders,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { FaqHeroShowcase } from "@/components/faq/FaqHeroShowcase";
import { FaqPageClient } from "@/components/faq/FaqPageClient";
import { getDynamicFaq } from "@/lib/dynamic-faq";

export async function generateMetadata() {
  const data = getDynamicFaq();
  return pageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: data.meta.path,
  });
}

const SPEC_ICONS: Record<string, React.ElementType> = {
  HelpCircle,
  Calculator,
  MapPin,
  Lock,
  Boxes,
  Layers,
  ShieldCheck,
  Truck,
  Sliders,
  Sparkles,
  CheckCircle2,
};

export default function FaqPage() {
  const data = getDynamicFaq();
  const hero = data.hero;
  const closingCta = data.closingCta;

  const allFaqs = data.explorerMatrix.categories.flatMap((c) => c.faqs);

  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION (FAQ Hub)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-8 lg:pt-10 lg:pb-10 transition-colors">
        {/* Ambient background lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.2),rgba(7,13,24,0))] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "FAQ", path: "/faq/" },
              ]}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/30 bg-gradient-to-r from-[#009fe3]/10 via-sky-50 to-white dark:from-cyan-950/60 dark:via-slate-900 dark:to-slate-800 px-4 py-1.5 shadow-2xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
                  <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    {hero.badgePrefix}
                  </span>
                  <span className="h-3 w-px bg-[#009fe3]/30" />
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    {hero.badgeHighlight}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.1]">
                  {hero.titlePrefix}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    {hero.titleHighlight}
                  </span>
                </h1>

                {/* Subtitle / Lede */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {hero.description}
                </p>
              </div>

              {/* Feature Spec Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {hero.featureCards.map((card, idx) => {
                  const IconComp = SPEC_ICONS[card.iconName] || HelpCircle;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                        <IconComp className="h-4 w-4 text-[#009fe3]" />
                        <span>{card.title}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{card.subtitle}</p>
                    </div>
                  );
                })}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {hero.primaryCta && (
                  <a
                    href={hero.primaryCta.href}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                  >
                    <span>{hero.primaryCta.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
                {hero.secondaryCta && (
                  <Link
                    href={hero.secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                  >
                    <span>{hero.secondaryCta.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {hero.tertiaryCta && (
                  <Link
                    href={hero.tertiaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                  >
                    <span>{hero.tertiaryCta.label}</span>
                  </Link>
                )}
              </div>

              {/* Trust Badge Bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400">
                {hero.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Hero Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <FaqHeroShowcase data={data.heroShowcase} />
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-slate-50/60 dark:bg-slate-950/20">
        <Container className="pb-12 sm:pb-16 pt-4 sm:pt-6">
          {/* Client-side Interactive Topic Highlights & Accordion Explorer */}
          <FaqPageClient data={data} />

          {/* Ultra-Luxury Closing CTA Banner */}
          <div className="mt-16 sm:mt-20">
            <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1320] via-[#0e1a2e] to-[#071525] px-6 py-12 text-white sm:px-12 sm:py-16 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.25),rgba(255,255,255,0))] pointer-events-none" />
              <div className="pointer-events-none absolute -top-28 right-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[100px]" />

              <div className="relative z-10 space-y-8">
                <div className="max-w-3xl space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-xs border border-white/10">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-300 animate-pulse" />
                    <span>{closingCta.badge}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                    {closingCta.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {closingCta.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {closingCta.primaryCta && (
                    <Link
                      href={closingCta.primaryCta.href}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] hover:bg-[#008bc9] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#009fe3]/50 hover:-translate-y-0.5"
                    >
                      <span>{closingCta.primaryCta.label}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                  {closingCta.secondaryCta && (
                    <Link
                      href={closingCta.secondaryCta.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
                    >
                      <span>{closingCta.secondaryCta.label}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                  {closingCta.tertiaryCta && (
                    <Link
                      href={closingCta.tertiaryCta.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
                    >
                      <span>{closingCta.tertiaryCta.label}</span>
                    </Link>
                  )}
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-400">
                  <p className="font-mono text-slate-300">
                    {closingCta.footerTitle}
                  </p>
                  <p>{closingCta.footerSubtitle}</p>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}
