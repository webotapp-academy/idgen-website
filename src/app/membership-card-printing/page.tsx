import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  GraduationCap,
  Building2,
  Hotel,
  Users,
  MapPin,
  HelpCircle,
  FileText,
  Workflow,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  QrCode,
  Barcode,
  Radio,
  Lock,
  RefreshCw,
  Dumbbell,
  HeartHandshake,
  Layout,
  Palette,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { MembershipHeroCarousel } from "@/components/membership-card-printing/MembershipHeroCarousel";
import { getDynamicMembershipCardPrinting } from "@/lib/dynamic-membership-card-printing";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const data = getDynamicMembershipCardPrinting();
  return pageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: data.meta.path,
  });
}

const ICON_MAP: Record<string, LucideIcon> = {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  GraduationCap,
  Building2,
  Hotel,
  Users,
  MapPin,
  HelpCircle,
  FileText,
  Workflow,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  QrCode,
  Barcode,
  Radio,
  Lock,
  RefreshCw,
  Dumbbell,
  HeartHandshake,
  Layout,
  Palette,
  Gamepad2,
};

function getIcon(name: string, Fallback: LucideIcon): LucideIcon {
  return ICON_MAP[name] || Fallback;
}

export default function MembershipCardPrintingPage() {
  const data = getDynamicMembershipCardPrinting();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Membership Card Printing",
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
                  <Award className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>{data.hero.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  {data.hero.h1}
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
                  <span>{data.hero.workflowBadge}</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {data.hero.workflowTitle}
                </p>

                {/* Flow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  {(data.hero.workflowSteps || []).map((step, idx, arr) => (
                    <React.Fragment key={idx}>
                      <span>{step}</span>
                      {idx < arr.length - 1 && (
                        <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {data.hero.primaryCta?.href && (
                  <Link
                    href={data.hero.primaryCta.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                  >
                    <span>{data.hero.primaryCta.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
                {data.hero.secondaryCta?.href && (
                  <Link
                    href={data.hero.secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                  >
                    <span>{data.hero.secondaryCta.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: Hero Visual Slider Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <MembershipHeroCarousel slides={data.hero.slides} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 2. PERSONALIZED CARD INFORMATION ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                {data.personalizedData.eyebrow}
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              {data.personalizedData.title}
            </h2>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {(data.personalizedData.items || []).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs transition-all hover:border-[#009fe3]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 leading-relaxed font-medium">
              {data.personalizedData.footnote}
            </p>
          </div>
        </section>

        {/* ── 3. WHAT IS A MEMBERSHIP ID CARD? ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Card designs image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.whatIs.image.src}
                      alt={data.whatIs.image.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Award className="h-3 w-3 text-cyan-400" />
                        <span>{data.whatIs.image.badgeTop}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.whatIs.image.brandTop}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.whatIs.image.badgeBottomSub}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.whatIs.image.badgeBottomTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.whatIs.image.badgeBottomTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Definition & Capabilities */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    {data.whatIs.eyebrow}
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {data.whatIs.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {data.whatIs.description}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {data.whatIs.functionsTitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(data.whatIs.functions || []).map((fn) => (
                    <div
                      key={fn}
                      className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{fn}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                {data.whatIs.footnote}
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. CUSTOM MEMBERSHIP CARDS — DESIGNED AROUND YOUR ORGANIZATION ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.customDesign.eyebrow}
            title={data.customDesign.title}
            lede={data.customDesign.lede}
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              {data.customDesign.elementsTitle}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {(data.customDesign.elements || []).map((elem) => (
                <div
                  key={elem}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{elem}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
              {data.customDesign.footnote}
            </p>
          </div>
        </section>

        {/* ── 5. PVC MEMBERSHIP CARD PRINTING ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.pvcPrinting.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.pvcPrinting.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.pvcPrinting.description}
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={data.pvcPrinting.flowSteps || []} />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.pvcPrinting.footnote}
            </p>

            {data.pvcPrinting.cta?.href && (
              <div>
                <Link
                  href={data.pvcPrinting.cta.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                >
                  <span>{data.pvcPrinting.cta.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ── 6. MEMBERSHIP CARDS FOR GAMESZONE & DIFFERENT ORGANIZATIONS (6 Sectors) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.sectorsSection.eyebrow}
            title={data.sectorsSection.title}
            lede={data.sectorsSection.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(data.sectorsSection.sectors || []).map((sector) => (
              <div
                key={sector.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div className="space-y-3">
                  <h3 className="font-black text-slate-900 dark:text-white text-lg">
                    {sector.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {sector.desc}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {(sector.items || []).map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6b. DEDICATED GAMESZONE & GAMING ARENA SECTION ── */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 text-white shadow-2xl space-y-8">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-400 backdrop-blur-md">
                  <Gamepad2 className="h-4 w-4" />
                  <span>{data.gameszoneSpotlight.badge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  {data.gameszoneSpotlight.title}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                    {data.gameszoneSpotlight.titleGradient}
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {data.gameszoneSpotlight.description}
                </p>
              </div>

              {data.gameszoneSpotlight.cta?.href && (
                <Link
                  href={data.gameszoneSpotlight.cta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-xs font-extrabold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>{data.gameszoneSpotlight.cta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            {/* 4 Key Gameszone Features Grid */}
            <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(data.gameszoneSpotlight.features || []).map((feat) => {
                const FeatIcon = getIcon(feat.iconName, RefreshCw);
                return (
                  <div
                    key={feat.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md space-y-2.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      <FeatIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{feat.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 7. SCANNABLE CREDENTIALS: QR CODES & BARCODES ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: QR/Barcode visual */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.scannableCredentials.image.src}
                      alt={data.scannableCredentials.image.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <QrCode className="h-3 w-3 text-cyan-400" />
                        <span>{data.scannableCredentials.image.badgeTop}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.scannableCredentials.image.brandTop}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.scannableCredentials.image.badgeBottomSub}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.scannableCredentials.image.badgeBottomTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.scannableCredentials.image.badgeBottomTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: QR Code & Barcode Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              {/* QR Code Section */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-[#009fe3]">
                  <QrCode className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {data.scannableCredentials.qrSection.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {data.scannableCredentials.qrSection.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(data.scannableCredentials.qrSection.functions || []).map((fn) => (
                    <div key={fn} className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{fn}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-3 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-bold">{data.scannableCredentials.qrSection.alertTitle}</span>
                    {data.scannableCredentials.qrSection.alertText}
                  </span>
                </div>
              </div>

              {/* Barcode Section */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="inline-flex items-center gap-2 text-[#009fe3]">
                  <Barcode className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {data.scannableCredentials.barcodeSection.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {data.scannableCredentials.barcodeSection.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(data.scannableCredentials.barcodeSection.applications || []).map((app) => (
                    <span key={app} className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {app}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  {data.scannableCredentials.barcodeSection.footnote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. RFID, LANYARDS & HOLDERS INTEGRATION ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.wearableAccessories.eyebrow}
            title={data.wearableAccessories.title}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {(data.wearableAccessories.items || []).map((item) => {
              const ItemIcon = getIcon(item.iconName, Radio);
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                      <ItemIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {item.description}
                    </p>
                    <FlowChain steps={item.steps || []} />
                  </div>
                  {item.linkHref && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <Link href={item.linkHref} className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                        <span>{item.linkText}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 9. BULK MEMBERSHIP CARD PRINTING ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.bulkPrinting.eyebrow}
            title={data.bulkPrinting.title}
            lede={data.bulkPrinting.lede}
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-6">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              {data.bulkPrinting.requirementsTitle}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(data.bulkPrinting.scenarios || []).map((sc) => (
                <div
                  key={sc}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{sc}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3]">
                {data.bulkPrinting.workflowLabel}
              </span>
              <FlowChain steps={data.bulkPrinting.workflowSteps || []} />
              <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 italic">
                {data.bulkPrinting.footnote}
              </p>
            </div>
          </div>
        </section>

        {/* ── 10. IDGEN STUDIO & BATCH-WISE PRINTING ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Studio visual */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.studioWorkflow.image.src}
                      alt={data.studioWorkflow.image.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Eye className="h-3 w-3 text-cyan-400" />
                        <span>{data.studioWorkflow.image.badgeTop}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.studioWorkflow.image.brandTop}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.studioWorkflow.image.badgeBottomSub}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.studioWorkflow.image.badgeBottomTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.studioWorkflow.image.badgeBottomTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Studio & Batch-Wise Explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    {data.studioWorkflow.eyebrow}
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {data.studioWorkflow.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {data.studioWorkflow.description}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {data.studioWorkflow.submissionWorkflowLabel}
                </span>
                <FlowChain steps={data.studioWorkflow.submissionSteps || []} />
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3]">
                  {data.studioWorkflow.batchWiseLabel}
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  {(data.studioWorkflow.batches || []).map((b, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2.5">
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {data.studioWorkflow.cta?.href && (
                <div className="pt-2">
                  <Link
                    href={data.studioWorkflow.cta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
                  >
                    <span>{data.studioWorkflow.cta.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 11. DATA CONFIDENTIALITY & PRIVACY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <Lock className="h-4 w-4 text-[#009fe3]" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.dataPrivacy.badge}
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.dataPrivacy.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.dataPrivacy.description}
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-5 space-y-2">
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {data.dataPrivacy.policyText}
              </p>
            </div>

            {data.dataPrivacy.cta?.href && (
              <div>
                <Link href={data.dataPrivacy.cta.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                  <span>{data.dataPrivacy.cta.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ── 12. CARD DESIGN SPECIMEN & REPLACEMENT ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Front & Reverse Design Specimen */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Layout className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {data.specimenReplacement.specimen.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {data.specimenReplacement.specimen.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] block mb-1">
                    {data.specimenReplacement.specimen.frontLabel}
                  </span>
                  <FlowChain steps={data.specimenReplacement.specimen.frontSteps || []} />
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    {data.specimenReplacement.specimen.reverseLabel}
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                    {(data.specimenReplacement.specimen.reverseElements || []).map((elem) => (
                      <span key={elem}>• {elem}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Replacement & Renewal Triggers */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {data.specimenReplacement.replacement.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {data.specimenReplacement.replacement.description}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {(data.specimenReplacement.replacement.triggers || []).map((trig) => (
                    <div key={trig} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{trig}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {data.specimenReplacement.replacement.footnote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. PRICING FACTORS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.pricingFactors.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.pricingFactors.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.pricingFactors.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(data.pricingFactors.factors || []).map((factor) => (
                <div
                  key={factor}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              {data.pricingFactors.note}
            </p>

            <div className="flex flex-wrap gap-3">
              {(data.pricingFactors.ctas || []).map((cta, idx) => (
                <Link
                  key={idx}
                  href={cta.href}
                  className={
                    idx === 0
                      ? "inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
                      : "inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]"
                  }
                >
                  <span>{cta.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 14. 9-STEP PRODUCTION PROCESS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.productionProcess.eyebrow}
            title={data.productionProcess.title}
          />

          <div className="mt-8">
            <WorkflowSteps steps={data.productionProcess.steps || []} />
          </div>
        </section>

        {/* ── 15. COMPLETE IDENTIFICATION SETUP PACKAGES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.setupPackages.eyebrow}
            title={data.setupPackages.title}
            lede={data.setupPackages.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(data.setupPackages.packages || []).map((pkg) => (
              <div
                key={pkg.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                    {pkg.badge}
                  </span>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                    {pkg.title}
                  </h3>
                  <div className="mt-4 pt-1">
                    <FlowChain steps={pkg.formula || []} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {pkg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {data.setupPackages.footnote}
            </p>
          </div>
        </section>

        {/* ── 16. WHY CHOOSE IDGEN FOR MEMBERSHIP CARDS? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.whyChoose.eyebrow}
            title={data.whyChoose.title}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(data.whyChoose.items || []).map((item) => {
              const ItemIcon = getIcon(item.iconName, ShieldCheck);
              return (
                <FeatureCard
                  key={item.title}
                  icon={ItemIcon}
                  title={item.title}
                  body={item.body}
                />
              );
            })}
          </div>

          {data.whyChoose.cta?.href && (
            <div className="mt-6 text-center">
              <Link href={data.whyChoose.cta.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                <span>{data.whyChoose.cta.label}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </section>

        {/* ── 17. WHO CAN USE CUSTOM MEMBERSHIP CARDS? (18 Sectors) ── */}
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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {(data.eligibleSectors.sectors || []).map((sec) => (
                <div
                  key={sec}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 18. FREQUENTLY ASKED QUESTIONS (Strictly 11 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.faqsSection.eyebrow}
            title={data.faqsSection.title}
          />

          <div className="mt-8">
            <FaqList faqs={data.faqsSection.faqs || []} />
          </div>
        </section>

        {/* ── 19. NEED CUSTOM MEMBERSHIP CARDS? (Closing CTA Band) ── */}
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
                {(data.closingCta.ctas || []).map((cta, idx) => (
                  <Link
                    key={idx}
                    href={cta.href}
                    className={
                      cta.isPrimary
                        ? "rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                        : "rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                    }
                  >
                    {cta.label}
                  </Link>
                ))}
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
                {data.hubDirectory.hubBadge}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              {data.hubDirectory.hubTitle}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.hubDirectory.hubDescription}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {data.hubDirectory.linksLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {(data.hubDirectory.internalLinks || []).map((item) => (
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
