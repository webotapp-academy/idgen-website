import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Download,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { TemplatesHeroCarousel } from "@/components/templates/TemplatesHeroCarousel";
import { TemplateResources } from "@/components/templates/TemplateResources";
import { getDynamicTemplates } from "@/lib/dynamic-templates";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const data = getDynamicTemplates();
  return pageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: data.meta.path,
  });
}

export default function TemplatesPage() {
  const data = getDynamicTemplates();
  const hero = data.hero;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.meta.title,
    description: data.meta.description,
    url: `https://idgen.in${data.meta.path || "/templates/"}`,
  };

  return (
    <>
      <JsonLd data={jsonLdData} />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Dynamic ID Card Printing Templates & Resources)
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
                { name: "Templates", path: "/templates/" },
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
                    {hero.badge}
                  </span>
                  {hero.subBadge && (
                    <>
                      <span className="h-3 w-px bg-[#009fe3]/30" />
                      <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                        {hero.subBadge}
                      </span>
                    </>
                  )}
                </div>

                {/* Main Heading (Dual Color) */}
                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.15]">
                  {hero.h1Prefix}{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    {hero.h1Gradient}
                  </span>
                </h1>

                {/* Subtitle / Intro Paragraphs strictly from dynamic data */}
                <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {hero.p1 && (
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      {hero.p1}
                    </p>
                  )}
                  {hero.p2 && <p>{hero.p2}</p>}
                  {hero.p3 && (
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {hero.p3}
                    </p>
                  )}
                </div>
              </div>

              {/* Quick Jump Navigation Pill Bar */}
              {hero.quickLinks && hero.quickLinks.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {hero.quickLinks.map((link, idx) => {
                    if (link.isDownload) {
                      return (
                        <a
                          key={idx}
                          href={link.href}
                          className="rounded-full bg-[#009fe3] text-white px-3.5 py-1.5 text-xs font-extrabold shadow-sm hover:bg-[#008bc9] transition flex items-center gap-1"
                        >
                          <Download className="h-3 w-3" />
                          <span>{link.label}</span>
                        </a>
                      );
                    }
                    return (
                      <a
                        key={idx}
                        href={link.href}
                        className="rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-[#009fe3] hover:text-[#009fe3] transition"
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              )}

              {/* Trust Badge Bar */}
              {hero.trustBadges && hero.trustBadges.length > 0 && (
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {hero.trustBadges.map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Visual Hero Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <TemplatesHeroCarousel slides={hero.slides} />
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN DYNAMIC TEMPLATE CONTENT
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-slate-50/60 dark:bg-slate-950/20 py-12 sm:py-16">
        <Container>
          <TemplateResources data={data} />
        </Container>
      </div>
    </>
  );
}
