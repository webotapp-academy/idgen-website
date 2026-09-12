"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  QrCode,
  MapPin,
  Lock,
  Boxes,
  Layers,
  Check,
} from "lucide-react";
import type { DynamicFaqHeroShowcase } from "@/lib/dynamic-faq-types";

const FAQ_HERO_ICONS: Record<string, React.ElementType> = {
  Calculator,
  QrCode,
  MapPin,
  Lock,
  HelpCircle,
  Boxes,
  Layers,
  ShieldCheck,
  Sparkles,
};

export function FaqHeroShowcase({ data }: { data: DynamicFaqHeroShowcase }) {
  const pillars = data?.pillars || [];
  const defaultPillarId = pillars[0]?.id || "pricing";
  const [activePillarId, setActivePillarId] = useState<string>(defaultPillarId);
  const [isHovered, setIsHovered] = useState(false);

  const activePillar = pillars.find((p) => p.id === activePillarId) || pillars[0];
  const IconComp = activePillar ? FAQ_HERO_ICONS[activePillar.cardIcon] || HelpCircle : HelpCircle;

  return (
    <div className="flex flex-col h-full justify-between gap-3.5">
      {/* ── Main 3D Showcase Stage ── */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-gradient-to-b from-slate-50/90 via-white to-sky-50/40 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 shadow-2xl shadow-slate-200/60 dark:shadow-black/60 transition-all duration-500"
      >
        {/* Ambient Backlight Glows */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 dark:bg-cyan-500/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#009fe3]/15 dark:bg-[#009fe3]/20 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Top Floating Glass Header */}
        <div className="relative z-20 flex items-center justify-between p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3] text-white px-3 py-1 text-xs font-black shadow-sm">
              <HelpCircle className="h-3 w-3" />
              <span>{activePillar?.guidePill}</span>
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 hidden sm:inline">
              {activePillar?.headerSubtitle}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" />
              <span>{data?.badge || "25+ Answers"}</span>
            </span>
          </div>
        </div>

        {/* ── Central Stage Showcase ── */}
        <div className="relative h-[380px] sm:h-[410px] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent pointer-events-none" />

          {activePillar && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              {activePillar.themeStyle === "pricing" && activePillar.pricingItems ? (
                /* Pricing Card Style */
                <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-sky-500/10 text-[#009fe3] flex items-center justify-center font-bold">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
                          {activePillar.cardTitle}
                        </h4>
                        <p className="text-[10px] text-slate-500">{activePillar.cardSubtitle}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                      {activePillar.cardBadge}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 py-2 text-xs">
                    {activePillar.pricingItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700"
                      >
                        <span className="text-[10px] text-slate-400 block">{item.label}</span>
                        <span className={`text-sm font-black ${item.color || "text-slate-900 dark:text-white"}`}>
                          {item.value} <span className="text-[10px] font-normal text-slate-400">{item.unit}</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={activePillar.footerLinkHref}
                    className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-[#009fe3] hover:text-[#008bc9] transition"
                  >
                    <span>{activePillar.footerLinkText}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ) : activePillar.themeStyle === "studio" ? (
                /* Studio Dark Card Style */
                <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-cyan-400/40 bg-gradient-to-br from-slate-900 to-[#071325] shadow-xl p-4 text-white flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-white">{activePillar.cardTitle}</h4>
                        <p className="text-[9px] text-slate-400">{activePillar.cardSubtitle}</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded">
                      {activePillar.cardBadge}
                    </span>
                  </div>

                  <div className="space-y-1.5 py-1 text-[11px]">
                    {activePillar.items?.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-200">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{s}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={activePillar.footerLinkHref}
                    className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-bold text-cyan-300 hover:text-cyan-200 transition"
                  >
                    <span>{activePillar.footerLinkText}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ) : activePillar.themeStyle === "security" ? (
                /* Security Emerald Card Style */
                <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-emerald-500/40 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
                          {activePillar.cardTitle}
                        </h4>
                        <p className="text-[9px] text-slate-500">{activePillar.cardSubtitle}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                      {activePillar.cardBadge}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs py-1">
                    {activePillar.items?.map((sec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span className="text-[11px] font-medium">{sec}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={activePillar.footerLinkHref}
                    className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition"
                  >
                    <span>{activePillar.footerLinkText}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ) : (
                /* Regional Coverage / Default Card Style */
                <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-sky-500/10 text-[#009fe3] flex items-center justify-center">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
                          {activePillar.cardTitle}
                        </h4>
                        <p className="text-[9px] text-slate-500">{activePillar.cardSubtitle}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#009fe3] bg-sky-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {activePillar.cardBadge}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 text-xs py-1">
                    {activePillar.items?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                        <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                        <span className="text-[10px] font-semibold truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={activePillar.footerLinkHref}
                    className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-[#009fe3] hover:text-[#008bc9] transition"
                  >
                    <span>{activePillar.footerLinkText}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Mode Selection Tab Bar ── */}
        <div className="relative z-20 p-2.5 sm:p-3 border-t border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {pillars.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePillarId(tab.id)}
                className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all duration-200 text-center ${
                  activePillarId === tab.id
                    ? "bg-[#009fe3] text-white shadow-md font-extrabold scale-[1.02]"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 font-medium"
                }`}
              >
                <span className="text-xs sm:text-[13px] leading-tight font-bold">{tab.tabLabel}</span>
                <span
                  className={`text-[10px] leading-tight mt-0.5 ${
                    activePillarId === tab.id ? "text-cyan-100" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {tab.tabSub}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Quick Spec Strip ── */}
      <div className="grid grid-cols-3 gap-2">
        {data?.quickSpecs?.map((spec, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs"
          >
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">
              {spec.label}
            </span>
            <span className={`text-xs font-black ${spec.accentClass || "text-slate-900 dark:text-white"}`}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
