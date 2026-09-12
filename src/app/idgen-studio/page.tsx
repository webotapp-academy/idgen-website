import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  QrCode,
  Eye,
  Send,
  LayoutDashboard,
  CheckCircle2,
  Printer,
  ArrowRight,
  ShieldCheck,
  Building2,
  GraduationCap,
  Users,
  Ticket,
  Clock,
  Layers,
  FileEdit,
  RefreshCw,
  Boxes,
  Workflow,
  AlertTriangle,
  Play,
  ExternalLink,
  Laptop,
  CheckSquare,
  FileSpreadsheet,
  Tv,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { getDynamicIdgenStudio } from "@/lib/dynamic-idgen-studio";
import { StudioVideoPlayer } from "@/components/idgen-studio/StudioVideoPlayer";

export const dynamic = "force-dynamic";

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  Users,
  Ticket,
  Sparkles,
  Workflow,
  CheckCircle2,
  Layers,
  Boxes,
  ShieldCheck,
  Clock,
  Tv,
  Laptop,
  QrCode,
};

export async function generateMetadata() {
  const data = getDynamicIdgenStudio();
  return pageMetadata({
    title: data.seo?.title || "IDGen Studio | Digital ID Card Data Collection & Printing Workflow",
    description:
      data.seo?.description ||
      "Collect student, employee and participant information digitally with IDGen Studio. Share forms by link or QR code, preview ID cards, review submissions and print approved records in batches.",
    path: data.seo?.path || "/idgen-studio/",
  });
}

export default function IdgenStudioPage() {
  const data = getDynamicIdgenStudio();
  const hero = data.hero;
  const actionVideo = data.actionVideo;
  const tryDemo = data.tryDemo;
  const workflowSteps = data.workflowSteps;
  const organizations = data.organizations;
  const twoSides = data.twoSides;
  const dashboard = data.dashboard;
  const why = data.why;
  const comparison = data.comparison;
  const journey = data.journey;
  const formPlanning = data.formPlanning;
  const customers = data.customers;
  const disclaimer = data.disclaimer;
  const fullDemo = data.fullDemo;
  const closingCta = data.closingCta;
  const faqs = data.faqs;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: data.seo?.title || "IDGen Studio",
          description:
            data.seo?.description ||
            "Collect student, employee and participant information digitally with IDGen Studio. Share forms by link or QR code, preview ID cards, review submissions and print approved records in batches.",
          path: data.seo?.path || "/idgen-studio/",
        })}
      />

      {/* ── 1. HERO / BANNER WITH DUAL-COLOUR TITLE & VIDEO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.22),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/15 dark:bg-[#009fe3]/20 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-cyan-400/15 dark:bg-cyan-500/15 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "IDGen Studio", path: "/idgen-studio/" },
            ]}
          />

          <div className="mt-6 grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Dual Colour Title & Information */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>{hero.badge || "IDGen Studio"}</span>
                </div>

                {/* DUAL COLOUR TITLE */}
                <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight leading-[1.15]">
                  <span className="text-slate-950 dark:text-white">{hero.titlePrefix || "IDGen Studio — "}</span>
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    {hero.titleHighlight || "Digital ID Card Data Collection & Printing Workflow"}
                  </span>
                </h1>

                {/* Subtitle Slogan */}
                <p className="text-base sm:text-lg font-extrabold text-[#009fe3] dark:text-cyan-400 tracking-tight">
                  {hero.slogan || "Collect Data. Preview the ID Card. Approve. Print."}
                </p>

                {/* Lead Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {hero.description1}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {hero.description2}
                </p>
              </div>

              {/* IDGen Studio Flow Chain */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <Workflow className="h-4 w-4" />
                  <span>{hero.flowChainTitle || "IDGen Studio Flow"}</span>
                </div>

                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  {hero.flowChainSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span>{step}</span>
                      {idx < hero.flowChainSteps.length - 1 && (
                        <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Primary Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {hero.primaryCta && (
                  <a
                    href={hero.primaryCta.href || "#try-demo"}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                  >
                    <span>{hero.primaryCta.label || "Try IDGen Studio Yourself"}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}

                {hero.secondaryCta && (
                  <Link
                    href={hero.secondaryCta.href || "/request-a-quote/"}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                  >
                    <span>{hero.secondaryCta.label || "Request IDGen Studio"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: VIDEO SECTION IN BANNER */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 dark:border-cyan-500/30 bg-slate-900 shadow-2xl group flex flex-col">
                {/* Video Header Tag */}
                <div className="bg-slate-950/90 border-b border-white/10 px-4 py-2.5 flex items-center justify-between text-xs text-white z-10">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-bold uppercase tracking-wider text-[11px] text-cyan-300">
                      Demo Video In Banner
                    </span>
                  </div>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
                    {hero.bannerVideo.sourceType === "youtube" ? "YouTube Video" : "MP4 Video"}
                  </span>
                </div>

                {/* Video Embed Frame */}
                <StudioVideoPlayer
                  video={hero.bannerVideo}
                  title={hero.bannerVideo.title || "IDGen Studio Hero Banner Demo"}
                />

                {/* Banner Video Meta Box */}
                <div className="p-4 bg-slate-950/90 text-white space-y-2 border-t border-white/10">
                  <p className="text-xs font-black text-cyan-400">
                    {hero.bannerVideo.title || "How IDGen Studio Works | Digital ID Card Data Collection & Printing"}
                  </p>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {hero.bannerVideo.description || "Watch the actual user journey from digital form creation, photo upload, and instant ID card preview to approval and factory batch printing."}
                  </p>
                  <div className="pt-1 flex items-center justify-between">
                    <a
                      href={hero.bannerVideo.youtubeLinkHref || "https://www.youtube.com/@iDGenguwahati"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-red-400 hover:text-red-300 transition"
                    >
                      <span>{hero.bannerVideo.youtubeLinkText || "Watch on YouTube"}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="#see-in-action"
                      className="text-[11px] text-cyan-300 font-semibold hover:underline"
                    >
                      Learn More ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-16 pt-10 sm:pt-14 space-y-20">
        {/* ── 2. 🎥 SEE IDGEN STUDIO IN ACTION ── */}
        <section id="see-in-action" className="scroll-mt-20">
          <SectionHead
            eyebrow={actionVideo.eyebrow || "🎥 See IDGen Studio in Action"}
            title={actionVideo.title || "From Data Collection to Printed ID Card"}
            lede={actionVideo.lede || "Watch how IDGen Studio can simplify the identification-card data collection process."}
          />

          <div className="mt-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-xl space-y-8">
            {/* Demo Video Player */}
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-950 shadow-2xl">
              <StudioVideoPlayer
                video={actionVideo.video}
                title={actionVideo.video.title || "See IDGen Studio in Action Video"}
              />
            </div>

            {/* Video Title & User Journey Description */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  {actionVideo.video.title || "Video Title: How IDGen Studio Works | Digital ID Card Data Collection & Printing"}
                </h3>
                <a
                  href={actionVideo.video.youtubeLinkHref || "https://www.youtube.com/@iDGenguwahati"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-red-600 dark:text-red-400"
                >
                  <span>{actionVideo.video.youtubeLinkText || "Open on YouTube"}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {actionVideo.video.description || "The demonstration shows the actual user journey:"}
              </p>

              {/* Journey Pipeline */}
              <div className="rounded-xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4 text-xs font-bold text-slate-800 dark:text-cyan-300 flex flex-wrap items-center gap-2">
                {actionVideo.journeyPipeline.map((jp, idx) => (
                  <React.Fragment key={idx}>
                    <span>{jp}</span>
                    {idx < actionVideo.journeyPipeline.length - 1 && (
                      <span className="text-[#009fe3]">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. 🧪 TRY IDGEN STUDIO YOURSELF ── */}
        <section id="try-demo" className="scroll-mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#009fe3]/40 bg-gradient-to-br from-white via-sky-50/40 to-white dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 dark:border-cyan-500/40 bg-sky-100/70 dark:bg-cyan-950/60 px-3.5 py-1 text-xs font-extrabold text-[#009fe3] dark:text-cyan-400">
                <span>{tryDemo.badge || "🧪 Interactive Live Demonstration"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {tryDemo.title || "Try IDGen Studio Yourself — "}<span className="text-[#009fe3] dark:text-cyan-400">{tryDemo.titleHighlight || "Experience the ID Card Data Collection Process"}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {tryDemo.description}
              </p>
            </div>

            {/* Try the Demo: 2 Option Columns */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Option 1: Scan QR Code */}
              <div className="flex flex-col items-center justify-center text-center rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md shadow-lg space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#009fe3] dark:text-cyan-400">
                  {tryDemo.option1Title || "Option 1"}
                </span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  {tryDemo.option1Subtitle || "1. Scan the QR Code"}
                </h3>

                {/* Stylized QR Code Element */}
                <div className="relative p-4 rounded-2xl border-2 border-dashed border-[#009fe3]/50 bg-white dark:bg-slate-900 shadow-inner">
                  {tryDemo.option1QrImage ? (
                    <div className="relative h-44 w-44 sm:h-48 sm:w-48 mx-auto rounded-xl overflow-hidden bg-slate-950 p-2">
                      <Image
                        src={tryDemo.option1QrImage}
                        alt={tryDemo.option1QrAlt || "IDGen Studio QR Code"}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="relative h-44 w-44 sm:h-48 sm:w-48 mx-auto flex items-center justify-center bg-slate-950 rounded-xl p-3 text-white">
                      <QrCode className="h-full w-full text-cyan-400" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="rounded bg-[#009fe3] px-2 py-0.5 text-[10px] font-black text-white shadow">
                          IDGen
                        </span>
                      </div>
                    </div>
                  )}
                  <p className="mt-2 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {tryDemo.option1QrLabel || "[IDGEN STUDIO DEMO QR CODE]"}
                  </p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {tryDemo.option1Note || "Scan using any smartphone camera or QR reader"}
                </p>
              </div>

              {/* Option 2: Open Live Form */}
              <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md shadow-lg space-y-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#009fe3] dark:text-cyan-400">
                    {tryDemo.option2Title || "Option 2"}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                    {tryDemo.option2Subtitle || "2. Open the Demo Form"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {tryDemo.option2Description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href={tryDemo.option2ButtonHref || "/request-a-quote/"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#009fe3] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{tryDemo.option2ButtonText || "Try the Live ID Card Form"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-900/50 p-4 space-y-2">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      {tryDemo.option2ExperiencesTitle || "What you can experience:"}
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {tryDemo.option2Experiences.map((exp, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience the Process Steps */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-3">
              <p className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                {tryDemo.processStepsTitle || "Experience the Process"}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                {tryDemo.processSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg text-slate-800 dark:text-slate-200">
                      {step}
                    </span>
                    {idx < tryDemo.processSteps.length - 1 && <span>↓</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Demo Form Safety Note & Conclusion */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 p-4 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
              <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">{tryDemo.noticeTitle || "Demo Form Notice: "}</span>
                {tryDemo.noticeText}
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                {tryDemo.footerTitle || "One Link. One QR Code. One Simple Process."}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {tryDemo.footerSubtitle || "Try it yourself and see how an end user experiences IDGen Studio."}
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. HOW IDGEN STUDIO WORKS (01 - 09) ── */}
        <section className="space-y-8">
          <SectionHead
            eyebrow={workflowSteps.eyebrow || "Workflow Breakdown"}
            title={workflowSteps.title || "How IDGen Studio Works"}
            lede={workflowSteps.lede || "A progressive, 9-stage digital workflow from form definition to batch factory dispatch."}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition hover:border-[#009fe3] hover:shadow-xl space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#009fe3] dark:text-cyan-400">
                      {step.num}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#009fe3]" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                    {step.desc}
                  </p>

                  {/* School / Company fields */}
                  {step.schoolExamples && step.schoolExamples.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        For example, a school may collect:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.schoolExamples.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.companyExamples && step.companyExamples.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        A company may collect:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.companyExamples.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Channels */}
                  {step.channels && step.channels.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        The form can be distributed through:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.channels.map((ch) => (
                          <span
                            key={ch}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Preview Items */}
                  {step.previewItems && step.previewItems.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        They can check information such as:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.previewItems.map((pi) => (
                          <span
                            key={pi}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {pi}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlight Slogan */}
                  {step.highlight && (
                    <div className="rounded-xl border border-sky-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-950 p-3 text-xs font-bold text-[#009fe3] dark:text-cyan-300 leading-relaxed">
                      {step.highlight}
                    </div>
                  )}

                  {/* Check items */}
                  {step.checkItems && step.checkItems.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        The organization can check information such as:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.checkItems.map((ci) => (
                          <span
                            key={ci}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {ci}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Flow transition */}
                  {step.flowTransition && (
                    <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30 p-2.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      {step.flowTransition}
                    </div>
                  )}

                  {/* Batches breakdown */}
                  {step.batches && step.batches.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {step.batches.map((b) => (
                        <div
                          key={b.name}
                          className="flex items-center justify-between text-xs rounded-lg bg-slate-50 dark:bg-slate-950 p-2 border border-slate-200 dark:border-slate-800 font-semibold"
                        >
                          <span className="font-bold text-[#009fe3]">{b.name}</span>
                          <span className="text-[11px] text-slate-600 dark:text-slate-300">{b.detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.principle && (
                    <p className="text-xs font-black text-[#009fe3] dark:text-cyan-400 pt-1">
                      {step.principle}
                    </p>
                  )}

                  {step.note && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                      {step.note}
                    </p>
                  )}
                </div>

                {step.ctaHref && step.ctaText && (
                  <Link
                    href={step.ctaHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
                  >
                    <span>{step.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. IDGEN STUDIO FOR DIFFERENT ORGANIZATIONS ── */}
        <section className="space-y-8">
          <SectionHead
            eyebrow={organizations.eyebrow || "Sector Adaptability"}
            title={organizations.title || "IDGen Studio for Different Organizations"}
            lede={organizations.lede || "Customized digital onboarding workflows tailored to your sector's operational model."}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {organizations.organizations.map((org) => {
              const Icon = ICON_MAP[org.iconName] || Building2;
              return (
                <div
                  key={org.id}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md transition hover:border-[#009fe3] space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-950/60 text-[#009fe3]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{org.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {org.desc}
                    </p>

                    {org.categories && org.categories.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {org.categories.map((cat) => (
                          <span
                            key={cat}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}

                    {org.typicalFlow && (
                      <div className="rounded-xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-3 text-xs font-bold text-[#009fe3] dark:text-cyan-300">
                        <p className="text-[10px] text-slate-500 uppercase">{org.typicalFlowTitle || "Typical Flow:"}</p>
                        <p>{org.typicalFlow}</p>
                      </div>
                    )}

                    {org.note && (
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {org.note}
                      </p>
                    )}
                  </div>

                  {org.linkHref && (
                    <Link
                      href={org.linkHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
                    >
                      <span>{org.linkText || "Learn More"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 6. TWO SIDES OF THE IDGEN STUDIO EXPERIENCE ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow={twoSides.eyebrow || "Integrated Ecosystem"}
            title={twoSides.title || "Two Sides of the IDGen Studio Experience"}
            lede={twoSides.lede || "IDGen Studio connects the end user and the organization in one workflow."}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* End User */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md space-y-4">
              <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>{twoSides.endUserTitle || "👤 End User"}</span>
              </h3>
              <div className="flex flex-col space-y-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                {twoSides.endUserSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">
                      {step}
                    </div>
                    {idx < twoSides.endUserSteps.length - 1 && (
                      <div className="text-center text-[#009fe3]">↓</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Organization */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md space-y-4">
              <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>{twoSides.organizationTitle || "🏢 Organization"}</span>
              </h3>
              <div className="flex flex-col space-y-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                {twoSides.organizationSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">
                      {step}
                    </div>
                    {idx < twoSides.organizationSteps.length - 1 && (
                      <div className="text-center text-[#009fe3]">↓</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
            {twoSides.footerNote}
          </p>
        </section>

        {/* ── 7. IDGEN STUDIO DASHBOARD ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow={dashboard.eyebrow || "Progress Visibility"}
            title={dashboard.title || "IDGen Studio Dashboard"}
            lede={dashboard.lede || "The organization can use its IDGen Studio workflow to monitor the progress of its identification project."}
          />

          <div className="max-w-2xl mx-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                {dashboard.statusHeader || "Status"}
              </span>
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                {dashboard.recordsHeader || "Records"}
              </span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {dashboard.rows.map((row) => (
                <div
                  key={row.status}
                  className="px-6 py-3.5 flex items-center justify-between text-xs sm:text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-950 transition"
                >
                  <span className="text-slate-700 dark:text-slate-300 font-bold">{row.status}</span>
                  <span className="font-mono font-bold text-[#009fe3] dark:text-cyan-400">{row.count}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 border-t border-slate-200 dark:border-slate-800 text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                {dashboard.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* ── 8. WHY IDGEN STUDIO? ── */}
        <section className="space-y-8">
          <SectionHead
            eyebrow={why.eyebrow || "Operational Value"}
            title={why.title || "Why IDGen Studio?"}
            lede={why.lede || "Engineered to solve real-world organizational bottlenecking in ID data collection."}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {why.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition hover:border-[#009fe3] space-y-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950/60 text-[#009fe3]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. TRADITIONAL VS IDGEN STUDIO COMPARISON ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow={comparison.eyebrow || "Process Transformation"}
            title={comparison.title || "Traditional ID Card Data Collection vs IDGen Studio"}
            lede={comparison.lede || "A direct comparison between legacy collection methods and progressive batch workflows."}
          />

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {comparison.aspectHeader || "Aspect"}
                  </th>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {comparison.traditionalHeader || "Traditional Process"}
                  </th>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    {comparison.studioHeader || "IDGen Studio"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {comparison.rows.map((row) => (
                  <tr key={row.aspect} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/50 transition">
                    <td className="px-6 py-3.5 font-bold text-slate-900 dark:text-white">
                      {row.aspect}
                    </td>
                    <td className="px-6 py-3.5 text-slate-500 dark:text-slate-400">
                      {row.traditional}
                    </td>
                    <td className="px-6 py-3.5 font-bold text-[#009fe3] dark:text-cyan-300">
                      {row.studio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 10. FROM QR CODE TO PRINTED ID CARD (THE COMPLETE JOURNEY) ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow={journey.eyebrow || "Lifecycle"}
            title={journey.title || "From QR Code to Printed ID Card"}
            lede={journey.lede || "The Complete Journey: End-to-end trace from digital entry to physical card delivery."}
          />

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-9">
            {journey.steps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-1"
              >
                <span className="text-[10px] font-black uppercase tracking-wider text-[#009fe3]">
                  {step.num}
                </span>
                <p className="text-xs font-black text-slate-900 dark:text-white">
                  {step.title}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 11. IDGEN STUDIO FORM PLANNING ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow={formPlanning.eyebrow || "Structure & Specifications"}
            title={formPlanning.title || "IDGen Studio Form Planning"}
            lede={formPlanning.lede || "Plan Your Form Before Creating It. A good data-collection form starts with deciding what information to collect and how each field should be entered."}
          />

          <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    {formPlanning.requirementHeader || "Requirement"}
                  </th>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    {formPlanning.fieldTypeHeader || "Example Field Type"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {formPlanning.fields.map((f) => (
                  <tr key={f.requirement} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/50 transition">
                    <td className="px-6 py-3 font-semibold text-slate-800 dark:text-slate-200">
                      {f.requirement}
                    </td>
                    <td className="px-6 py-3 font-mono font-bold text-[#009fe3] dark:text-cyan-300">
                      {f.fieldType}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {formPlanning.ctaCardTitle || "Need to plan your form?"}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {formPlanning.ctaCardSubtitle || "The exact field types match the current IDGen Studio implementation."}
                </p>
              </div>
              <Link
                href={formPlanning.ctaButtonHref || "/templates/"}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-[#008bc9] transition shrink-0"
              >
                <span>{formPlanning.ctaButtonText || "IDGen Studio Form Planning Template"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 12. IDGEN STUDIO FOR IDGEN CUSTOMERS ── */}
        <section className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {customers.title || "IDGen Studio for IDGen Customers"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {customers.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 pt-2">
            {customers.products.map((prod) => (
              <div
                key={prod}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-center text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
              >
                {prod}
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
            {customers.footerNote}
          </p>
        </section>

        {/* ── 13. IMPORTANT: ACTUAL FEATURES MAY VARY ── */}
        <section className="rounded-3xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-6 sm:p-8 text-amber-950 dark:text-amber-200 space-y-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <AlertTriangle className="h-4 w-4" />
            <span>{disclaimer.badge || "Important: Actual Features May Vary"}</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed font-medium">
            {disclaimer.description}
          </p>
          <p className="text-xs text-amber-800/80 dark:text-amber-300/80 italic">
            {disclaimer.note}
          </p>
        </section>

        {/* ── 14. FREQUENTLY ASKED QUESTIONS ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow={faqs.eyebrow || "Help & Guidance"}
            title={faqs.title || "Frequently Asked Questions"}
            lede={faqs.lede || "Common questions regarding links, parent submissions, ID card previews, editing and batch printing."}
          />

          <div className="max-w-4xl mx-auto">
            <FaqList faqs={faqs.faqs} />
          </div>
        </section>

        {/* ── 15. EXPERIENCE IDGEN STUDIO YOURSELF (CALLOUT) ── */}
        <section className="rounded-[2.5rem] border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 text-white shadow-2xl text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black">
              Experience IDGen Studio Yourself
            </h2>
            <p className="text-sm text-cyan-300 font-bold">
              Don't Just Read About It. Try It.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              Use test information and experience the journey from Form → Photo Upload → ID Card Preview → Submission, then see how the same concept connects with Organization Review → Approval → Printing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#try-demo"
              className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-xs font-extrabold text-white shadow-lg hover:bg-[#008bc9] transition"
            >
              <QrCode className="h-4 w-4" />
              <span>Scan the QR Code</span>
            </a>

            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs font-extrabold text-white hover:bg-white/20 transition"
            >
              <span>Try Live ID Card Form</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ── 16. WATCH THE FULL DEMONSTRATION ── */}
        <section className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6 text-center">
          <div className="max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {fullDemo.title || "Watch the Full Demonstration"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {fullDemo.subtitle || "See How IDGen Studio Connects Data Collection With ID Card Printing"}
            </p>
          </div>

          {/* Full Demo Video Player */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl">
            <StudioVideoPlayer
              video={fullDemo.video}
              title={fullDemo.video.title || "Full IDGen Studio Demonstration Video"}
            />
          </div>

          <div className="pt-2">
            <a
              href={fullDemo.video.youtubeLinkHref || "https://www.youtube.com/@iDGenguwahati"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-xs font-bold text-white shadow-md hover:bg-red-700 transition"
            >
              <span>{fullDemo.video.youtubeLinkText || "Watch on YouTube"}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* ── 17. READY TO USE IDGEN STUDIO? (CLOSING CTA) ── */}
        <section className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/50 to-white dark:from-[#09111e] dark:via-[#0e1726] dark:to-[#070d18] p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
              {closingCta.title || "Ready to Use IDGen Studio?"}
            </h2>
            <p className="text-base sm:text-lg font-extrabold text-[#009fe3] dark:text-cyan-400">
              {closingCta.slogan || "Make ID Card Data Collection Simpler"}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {closingCta.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            {closingCta.buttons.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.href}
                className={
                  btn.primary
                    ? "inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-xs font-extrabold text-white shadow-lg hover:bg-[#008bc9] transition"
                    : "inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-xs font-extrabold text-slate-800 dark:text-slate-200 hover:border-[#009fe3] transition"
                }
              >
                <span>{btn.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 max-w-xl mx-auto space-y-1">
            <p className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              {closingCta.brandingTitle}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {closingCta.brandingSteps}
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500">
              {closingCta.brandingCompany}
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
