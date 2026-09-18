import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Clock,
  Truck,
  Boxes,
  GraduationCap,
  Briefcase,
  Ticket,
  Hospital,
  Users,
  Anchor,
  FileCheck2,
  Lock,
  Eye,
  Sliders,
  ChevronRight,
  Shield,
  Zap,
  Check,
  PackageCheck,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { HolderHeroCarousel } from "@/components/id-card-holders/HolderHeroCarousel";
import { QuickHolderSelectionMatrix } from "@/components/id-card-holders/QuickHolderSelectionMatrix";
import { HolderAssemblyEcosystem } from "@/components/id-card-holders/HolderAssemblyEcosystem";
import { HolderRangeMasterShowcase } from "@/components/id-card-holders/HolderRangeMasterShowcase";
import { HolderEngineeringGuide } from "@/components/id-card-holders/HolderEngineeringGuide";
import { HolderApplicationsGrid } from "@/components/id-card-holders/HolderApplicationsGrid";
import { HolderWorkflowAndDispatch } from "@/components/id-card-holders/HolderWorkflowAndDispatch";
import { HolderScrollSpyNav, SectionAnchorButton } from "@/components/id-card-holders/HolderScrollSpy";
import { getDynamicIdCardHolders } from "@/lib/dynamic-id-card-holders";

export async function generateMetadata() {
  const data = getDynamicIdCardHolders();
  return pageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: data.meta.path,
  });
}

const SPEC_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  Lock,
  Sliders,
  Truck,
  CheckCircle2,
  Layers,
  Zap,
  Eye,
  Sparkles,
  Boxes,
};

export default function IdCardHoldersPage() {
  const data = getDynamicIdCardHolders();
  const hero = data.hero;

  return (
    <>
      <JsonLd
        data={productSchema({
          name: "ID Card Holders",
          description: data.meta.description,
          path: data.meta.path,
        })}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION (ID Card Holders)
      ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-8 lg:pt-10 lg:pb-10 transition-colors scroll-mt-28">
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
          {/* Breadcrumb row */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products/" },
                { name: "ID Card Holders", path: "/id-card-holders/" },
              ]}
            />
          </div>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-6">
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
                <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
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
                  const IconComp = SPEC_ICONS[card.iconName] || ShieldCheck;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                        <IconComp className="h-4 w-4 text-[#009fe3]" />
                        <span>{card.title}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                        {card.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {hero.primaryCta && (
                  <Link
                    href={hero.primaryCta.href}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                  >
                    <span>{hero.primaryCta.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
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

            {/* Right Column: Hero Visual Slider Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <HolderHeroCarousel slides={hero.slides} />
            </div>
          </div>
        </Container>
      </section>

      {/* Dynamic Scroll Spy & Sticky Table of Contents Navigation Bar */}
      <HolderScrollSpyNav />

      <div className="bg-slate-50/60 dark:bg-slate-950/20">
        <Container className="pb-12 sm:pb-16 pt-4 sm:pt-6">

          {/* Quick Holder Selection Section */}
          <div>
            <QuickHolderSelectionMatrix data={data.quickSelection} />
          </div>

          {/* What Is an ID Card Holder? Section (Interactive Assembly Ecosystem) */}
          <div className="mt-16 sm:mt-20">
            <HolderAssemblyEcosystem data={data.assemblyEcosystem} />
          </div>

          {/* ID Card Holder Range Section (Master Showcase & Explorer) */}
          <HolderRangeMasterShowcase data={data.rangeMaster} />

          {/* Engineering Guide: Orientation, Locking & 5-Step Decision Matrix */}
          <HolderEngineeringGuide data={data.engineeringGuide} />

          {/* Applications Grid across Industries */}
          <HolderApplicationsGrid data={data.applications} />

          {/* Workflow, Quality, 72-Hour Express Dispatch & Luxury Closing CTA */}
          <HolderWorkflowAndDispatch data={data.workflowAndDispatch} />

          {/* Frequently Asked Questions Section */}
          <div id="faq" className="mt-16 sm:mt-20 scroll-mt-28">
            <div className="flex items-center justify-between">
              <SectionHead
                eyebrow={data.faqs.eyebrow}
                title={data.faqs.title}
                lede={data.faqs.lede}
              />
              <SectionAnchorButton id="faq" title="FAQ" />
            </div>

            <div className="mt-8">
              <FaqList faqs={data.faqs.items} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
