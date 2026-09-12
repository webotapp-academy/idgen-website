import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Ticket,
  Presentation,
  Store,
  Building2,
  Trophy,
  School,
  Link as LinkIcon,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  ShieldCheck,
  Users,
  Palette,
  QrCode,
  Waves,
  MapPin,
  ClipboardList,
  Layers,
  FileCheck,
  Zap,
  Tag,
  Radio,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { EventHeroCarousel } from "@/components/event-card-printing/EventHeroCarousel";
import { getDynamicEventCardPrinting } from "@/lib/dynamic-event-card-printing";

export const dynamic = "force-dynamic";

const DYNAMIC_ICONS: Record<string, LucideIcon> = {
  Ticket,
  Presentation,
  Store,
  Building2,
  Trophy,
  School,
  LinkIcon,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  ShieldCheck,
  Users,
  Palette,
  QrCode,
  Waves,
  MapPin,
  ClipboardList,
  Layers,
  FileCheck,
  Zap,
  Tag,
  Radio,
  Clock,
};

function getIcon(name?: string, fallback: LucideIcon = Presentation): LucideIcon {
  if (!name) return fallback;
  return DYNAMIC_ICONS[name] || fallback;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = getDynamicEventCardPrinting();
  return pageMetadata({
    title:
      data.metadata?.title ||
      "Event Card Printing | Custom Event Badges & Lanyards | IDGen",
    description:
      data.metadata?.description ||
      "Custom event card printing for conferences, exhibitions, seminars, workshops and corporate events. Personalized event badges with lanyards, one or two hooks and ultrasonic sealing options.",
    path: data.metadata?.path || "/event-card-printing/",
  });
}

export default async function EventCardPrintingPage() {
  const data = getDynamicEventCardPrinting();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Event Card Printing",
          description:
            data.metadata?.description ||
            "Custom event cards and badges for conferences, exhibitions, seminars, workshops and corporate events. Personalized event badges with lanyards, one or two hooks and ultrasonic sealing options.",
          path: "/event-card-printing/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Eyebrow + Heading + Paragraph + Workflow Card + CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Ticket className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>{data.hero.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-[1.15]">
                  <span className="text-slate-950 dark:text-white">{data.hero.title} </span>
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    {data.hero.titleHighlight}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {data.hero.description}
                </p>
              </div>

              {/* Integrated Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {data.hero.workflowHeading}
                </p>

                {/* Flow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  {data.hero.workflowChain.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span>{step}</span>
                      {idx < data.hero.workflowChain.length - 1 && (
                        <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href={data.hero.primaryCtaLink}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>{data.hero.primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={data.hero.secondaryCtaLink}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>{data.hero.secondaryCtaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Sliding Showcase Carousel */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <EventHeroCarousel slides={data.heroSlides} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Event Card Printing", path: "/event-card-printing/" },
          ]}
        />

        {/* ── 2. WHAT IS AN EVENT CARD? & WHO IT IDENTIFIES ── */}
        <section className="mt-8">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                {data.whatIs.eyebrow}
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              {data.whatIs.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
              {data.whatIs.description}
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {data.whatIs.attendeesHeading}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {data.whatIs.attendees.map((person) => (
                <div
                  key={person}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs transition-all hover:border-[#009fe3]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{person}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CUSTOM EVENT CARD PRINTING & SPECIMEN ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.customFields.eyebrow}
            title={data.customFields.title}
            lede={data.customFields.lede}
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Custom fields grid */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg space-y-4">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {data.customFields.fieldsHeading}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.customFields.fields.map((field) => (
                    <div
                      key={field}
                      className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Example Layout Specimen Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-[#009fe3]/40 bg-gradient-to-br from-slate-950 via-slate-900 to-[#071526] p-7 text-white shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    {data.customFields.specimen.eyebrow}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {data.customFields.specimen.structureTag}
                  </span>
                </div>

                <div className="space-y-2 text-center py-2">
                  <div className="text-xs font-mono tracking-widest text-cyan-300 font-bold uppercase">
                    {data.customFields.specimen.eventLogoText}
                  </div>
                  <div className="text-sm sm:text-base font-black text-white uppercase tracking-tight">
                    {data.customFields.specimen.eventName}
                  </div>
                  <div className="pt-2 text-base font-extrabold text-white">
                    {data.customFields.specimen.participantName}
                  </div>
                  <div className="text-xs text-cyan-400 font-bold">
                    {data.customFields.specimen.organization}
                  </div>
                  <div className="inline-block mt-2 rounded-full bg-[#009fe3] px-4 py-1 text-xs font-black text-white">
                    {data.customFields.specimen.categoryBadge}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    {data.customFields.specimen.regNumber}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 text-center">
                  <p className="text-xs text-slate-400 italic">
                    {data.customFields.specimen.footerNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. EVENT CARD TYPES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.eventTypes.eyebrow}
            title={data.eventTypes.title}
            lede={data.eventTypes.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.eventTypes.types.map((type) => {
              const TypeIcon = getIcon(type.iconName, Presentation);
              return (
                <div
                  key={type.title}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40 shadow-xs">
                      <TypeIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                      {type.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                      {type.body}
                    </p>
                  </div>

                  {type.href && (
                    <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <Link
                        href={type.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                      >
                        <span>{type.linkText || "Explore Related"}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 5. EVENT CARD + LANYARD + HOOK (ONE-HOOK VS TWO-HOOK) ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Real Comparison Photo */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={data.attachment.image}
                      alt={data.attachment.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>{data.attachment.imageBadge}</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        {data.attachment.imageTag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            {data.attachment.imageFooterSubtitle}
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            {data.attachment.imageFooterTitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          {data.attachment.imageFooterTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Attachment Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    {data.attachment.eyebrow}
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {data.attachment.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {data.attachment.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    {data.attachment.option1.heading}
                  </span>
                  <FlowChain steps={data.attachment.option1.chain} />
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                    {data.attachment.option1.note}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    {data.attachment.option2.heading}
                  </span>
                  <FlowChain steps={data.attachment.option2.chain} />
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                    {data.attachment.option2.note}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                {data.attachment.note}
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {data.attachment.links.map((lnk) => (
                  <Link
                    key={lnk.topic}
                    href={lnk.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
                  >
                    <span>{lnk.topic}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. ULTRASONIC SEALING FOR EVENT CARDS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.ultrasonic.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.ultrasonic.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
                {data.ultrasonic.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950/80 p-5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  {data.ultrasonic.oneHookHeading}
                </span>
                <FlowChain steps={data.ultrasonic.oneHookChain} />
              </div>

              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950/80 p-5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  {data.ultrasonic.twoHookHeading}
                </span>
                <FlowChain steps={data.ultrasonic.twoHookChain} />
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={data.ultrasonic.ctaLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>{data.ultrasonic.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. WHY EVENT CARDS NEED THE RIGHT ATTACHMENT ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.rightAttachment.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.rightAttachment.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.rightAttachment.description}
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={data.rightAttachment.chain} />
            </div>

            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {data.rightAttachment.note}
            </p>
          </div>
        </section>

        {/* ── 8. EVENT CARD CATEGORIES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.categories.eyebrow}
            title={data.categories.title}
            lede={data.categories.lede}
          />

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {data.categories.categories.map((cat) => (
              <div
                key={cat.name}
                className={`flex items-center justify-between rounded-2xl border p-4 shadow-sm ${cat.color}`}
              >
                <span className="text-sm font-extrabold uppercase tracking-wider">{cat.name}</span>
                <span className="text-[10px] font-bold opacity-75">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. EVENT BRANDING & EXAMPLE BRANDING STRUCTURE ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Branding elements */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.branding.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.branding.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.branding.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {data.branding.elements.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 text-xs font-bold text-slate-900 dark:text-slate-100"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Example Branding Structure Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  {data.branding.structureHeading}
                </span>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2 text-center font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                  {data.branding.structureSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className={idx === 0 ? "text-cyan-500" : idx === data.branding.structureSteps.length - 1 ? "text-slate-500" : "text-slate-900 dark:text-white"}>
                        {step}
                      </div>
                      {idx < data.branding.structureSteps.length - 1 && (
                        <div className="text-slate-400">↓</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center">
                  {data.branding.structureNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. PERSONALIZED EVENT CARDS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.personalization.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.personalization.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
                {data.personalization.description}
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={data.personalization.chain} />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              {data.personalization.note}
            </p>

            <div>
              <Link
                href={data.personalization.ctaLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>{data.personalization.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. EVENT CARD PRINTING FOR BULK EVENTS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.bulk.eyebrow}
            title={data.bulk.title}
            lede={data.bulk.lede}
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {data.bulk.factorsHeading}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {data.bulk.factors.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              {data.bulk.footerNote}
            </p>
          </div>
        </section>

        {/* ── 12. EVENT CARD PRINTING PROCESS (9 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.process.eyebrow}
            title={data.process.title}
          />

          <div className="mt-8">
            <WorkflowSteps steps={data.process.steps} />
          </div>
        </section>

        {/* ── 13. EVENT CARD SOLUTIONS BY EVENT TYPE ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.solutions.eyebrow}
            title={data.solutions.title}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.solutions.solutions.map((sol) => (
              <div
                key={sol.type}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    {sol.type}
                  </span>
                  <div className="mt-3">
                    <FlowChain steps={sol.setup} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 14. EVENT CARD VS STUDENT OR EMPLOYEE ID CARD ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.comparison.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.comparison.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.comparison.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {data.comparison.items.map((item) => (
                <div
                  key={item.type}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                    {item.type}
                  </span>
                  <FlowChain steps={item.setup} />
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              {data.comparison.footerNote}
            </p>

            <div className="flex flex-wrap gap-3">
              {data.comparison.links.map((lnk) => (
                <Link
                  key={lnk.label}
                  href={lnk.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
                >
                  <span>{lnk.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 15. WHAT INFORMATION DO WE NEED? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.informationNeeded.eyebrow}
            title={data.informationNeeded.title}
            lede={data.informationNeeded.lede}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.informationNeeded.groups.map((grp) => (
              <div
                key={grp.title}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3"
              >
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm uppercase tracking-wider text-[#009fe3]">
                  {grp.title}
                </h3>
                <ul className="space-y-2">
                  {grp.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 16. EVENT CARD QUALITY CHECKS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.qualityChecks.eyebrow}
            title={data.qualityChecks.title}
            lede={data.qualityChecks.lede}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {data.qualityChecks.checks.map((qc) => (
              <div
                key={qc.title}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2 text-[#009fe3]">
                  <CheckCircle2 className="h-4 w-4" />
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {qc.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {qc.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 17. EVENT CARD PRICING ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.pricing.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.pricing.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.pricing.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {data.pricing.factors.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              {data.pricing.note}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={data.pricing.cta1Link}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>{data.pricing.cta1Text}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={data.pricing.cta2Link}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
              >
                <span>{data.pricing.cta2Text}</span>
              </Link>
              <Link
                href={data.pricing.cta3Link}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
              >
                <span>{data.pricing.cta3Text}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 18. WHY CHOOSE IDGEN FOR EVENT CARDS? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  {data.whyChoose.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {data.whyChoose.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.whyChoose.description}
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={data.whyChoose.chain} />
            </div>

            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {data.whyChoose.note}
            </p>

            <div>
              <Link
                href={data.whyChoose.ctaLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
              >
                <span>{data.whyChoose.ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 19. FREQUENTLY ASKED QUESTIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow={data.faq.eyebrow}
            title={data.faq.title}
          />

          <div className="mt-8">
            <FaqList faqs={data.faq.faqs} />
          </div>
        </section>

        {/* ── 20. NEED EVENT CARDS? (Closing CTA Band) ── */}
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

              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                {data.closingCta.packages.map((pkg) => (
                  <div
                    key={pkg.title}
                    className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-2"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      {pkg.badge}
                    </span>
                    <h4 className="font-extrabold text-white text-sm">{pkg.title}</h4>
                    <FlowChain steps={pkg.formula} dark />
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3.5">
                <Link
                  href={data.closingCta.primaryCtaLink}
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  {data.closingCta.primaryCtaText}
                </Link>
                <Link
                  href={data.closingCta.secondaryCtaLink}
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  {data.closingCta.secondaryCtaText}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 21. SUMMARY BANNER ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-900 p-8 sm:p-10 shadow-sm text-center space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#009fe3]">
              {data.summaryBanner.eyebrow}
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {data.summaryBanner.title}
            </h2>
            <div className="flex justify-center pt-2">
              <FlowChain steps={data.summaryBanner.chain} />
            </div>
          </div>
        </section>

        {/* ── 22. GEOGRAPHIC / INTERNAL LINKING REFERENCE DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                {data.geographicDirectory.eyebrow}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              {data.geographicDirectory.title}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.geographicDirectory.description}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {data.geographicDirectory.directoryHeading}
              </p>
              <div className="flex flex-wrap gap-2">
                {data.geographicDirectory.links.map((item) => (
                  <Link
                    key={item.topic}
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 transition hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400"
                  >
                    <span>{item.topic}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
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
