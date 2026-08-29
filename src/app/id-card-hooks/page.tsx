import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Link2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
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
  RotateCw,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { HookHeroCarousel } from "@/components/id-card-hooks/HookHeroCarousel";
import { QuickHookSelectionMatrix } from "@/components/id-card-hooks/QuickHookSelectionMatrix";
import { HookAssemblyEcosystem } from "@/components/id-card-hooks/HookAssemblyEcosystem";
import { HookRangeMasterShowcase } from "@/components/id-card-hooks/HookRangeMasterShowcase";
import { HookEngineeringGuide } from "@/components/id-card-hooks/HookEngineeringGuide";
import { HookApplicationsGrid } from "@/components/id-card-hooks/HookApplicationsGrid";
import { HookWorkflowAndDispatch } from "@/components/id-card-hooks/HookWorkflowAndDispatch";
import { HookScrollSpyNav, SectionAnchorButton } from "@/components/id-card-hooks/HookScrollSpy";
import type { Faq } from "@/data/types";

/* ─────────────────────────────────────────────────────────────
   SEO METADATA (Strictly from document)
   ───────────────────────────────────────────────────────────── */
export const metadata = pageMetadata({
  title: "ID Card Hooks & Fish Hook Attachments for Lanyards | IDGen",
  description:
    "ID card hooks and fish hook attachments for ID card holders, badges and lanyards. IDGen supplies compatible attachment options for schools, companies, institutions and events.",
  path: "/id-card-hooks/",
});

/* ─────────────────────────────────────────────────────────────
   FAQS (Strictly from document)
   ───────────────────────────────────────────────────────────── */
const faqs: Faq[] = [
  {
    q: "What is an ID card hook?",
    a: "An ID card hook is an attachment used to connect an ID card holder or badge to a lanyard.",
  },
  {
    q: "What is a fish hook for an ID card?",
    a: "A fish hook is an attachment used to connect a compatible ID card holder or badge to a lanyard.",
  },
  {
    q: "Can an ID card hook be used with an ID card holder?",
    a: "Yes. A compatible hook can connect an ID card holder to a lanyard.",
  },
  {
    q: "Can I use a hook with a custom printed lanyard?",
    a: "Yes. A suitable hook can be used with a compatible custom printed lanyard.",
  },
  {
    q: "Can IDGen supply hooks with ID card holders?",
    a: "Yes. Hooks can be supplied as part of the required identification configuration.",
  },
  {
    q: "Can I order hooks in bulk?",
    a: "Yes. ID card hooks can be supplied for institutional, organizational and event requirements, subject to availability and specifications.",
  },
  {
    q: "Do I need one or two hooks?",
    a: "That depends on the card/holder and lanyard configuration. If your setup requires two attachment points, a two-hook configuration can be used.",
  },
  {
    q: "How do I choose the correct ID card hook?",
    a: "Provide the card size, holder model, lanyard type and intended application so the compatible attachment can be identified.",
  },
];

export default function IdCardHooksPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "ID Card Hooks & Attachments",
          description:
            "ID card hooks and fish hook attachments for ID card holders, badges and lanyards. IDGen supplies compatible attachment options for schools, companies, institutions and events.",
          path: "/id-card-hooks/",
        })}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION (ID Card Hooks)
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
                { name: "ID Card Hooks", path: "/id-card-hooks/" },
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
                    ID Card Hooks &amp; Attachments
                  </span>
                  <span className="h-3 w-px bg-[#009fe3]/30" />
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    Direct Factory Supply
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.1]">
                  ID Card Hooks &amp; Attachments for{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    Lanyards and ID Cards
                  </span>
                </h1>

                {/* Subtitle / Lede */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen provides ID card hooks and attachment components used to connect identification cards, holders and badges to lanyards. The appropriate hook depends on the holder, card configuration, lanyard and intended application.
                </p>
              </div>

              {/* Typical Configuration Flow Block */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3.5 shadow-2xs space-y-1">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Typical Configuration
                </span>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white">
                  ID Card → Holder → Hook → Lanyard
                </p>
              </div>

              {/* Feature Spec Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <ShieldCheck className="h-4 w-4 text-[#009fe3]" />
                    <span>Secure Hold</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Compatible attachment</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Link2 className="h-4 w-4 text-[#009fe3]" />
                    <span>1 or 2 Hooks</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Flexible configuration</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Sliders className="h-4 w-4 text-[#009fe3]" />
                    <span>20 mm Fit</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Standard lanyard width</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Truck className="h-4 w-4 text-[#009fe3]" />
                    <span>72-Hour</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Dispatch commitment</p>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/id-card-holders/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Explore ID Card Holders</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/custom-printed-lanyard-printing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                >
                  <span>Custom Lanyards</span>
                </Link>
              </div>

              {/* Trust Badge Bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Wholesale Factory Supply</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Compatible Attachment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Ready Stock in Guwahati</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Slider Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <HookHeroCarousel />
            </div>
          </div>
        </Container>
      </section>

      {/* Dynamic Scroll Spy & Sticky Table of Contents Navigation Bar */}
      <HookScrollSpyNav />

      <div className="bg-slate-50/60 dark:bg-slate-950/20">
        <Container className="pb-12 sm:pb-16 pt-4 sm:pt-6">
          {/* Quick Selection Matrix */}
          <div>
            <QuickHookSelectionMatrix />
          </div>

          {/* What Is an ID Card Hook? Section */}
          <div className="mt-16 sm:mt-20">
            <HookAssemblyEcosystem />
          </div>

          {/* ID Card Hook Setups & Range Master Showcase */}
          <HookRangeMasterShowcase />

          {/* Choosing the Right ID Card Hook & Quality & Compatibility */}
          <HookEngineeringGuide />

          {/* ID Card Hook Uses Across Applications */}
          <HookApplicationsGrid />

          {/* Complete Sets, Bulk Orders, How to Order, 72-Hour Dispatch & Closing CTA */}
          <HookWorkflowAndDispatch />

          {/* Frequently Asked Questions Section */}
          <div id="faq" className="mt-16 sm:mt-20 scroll-mt-28">
            <div className="flex items-center justify-between">
              <SectionHead
                eyebrow="FAQ"
                title="Frequently Asked Questions"
                lede="Common questions regarding ID card hooks, fish hook attachments, configurations, and ordering:"
              />
              <SectionAnchorButton id="faq" title="FAQ" />
            </div>

            <div className="mt-8">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
