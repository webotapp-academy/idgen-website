"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Building2,
  MapPin,
  Camera,
  Layers,
  Check,
} from "lucide-react";

type CaseStudyPillar = "school" | "college" | "government" | "wearable";

export function CaseStudiesHeroShowcase() {
  const [activePillar, setActivePillar] = useState<CaseStudyPillar>("school");
  const [isHovered, setIsHovered] = useState(false);

  const pillars = {
    school: {
      title: "School ID Card Project",
      loc: "Gojapara, Assam",
      org: "Don Bosco Hr Sec School",
      image: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png",
      req: "Student Data + Photographs + PVC ID Cards + Lanyards + Holders",
      badge: "Real Delivered Batch",
    },
    college: {
      title: "College Campus Pass Project",
      loc: "Jorhat, Assam",
      org: "CKB College",
      image: "/images/Order Deliver/CKB COLLAGE,JORHAT 1.png",
      req: "Institutional student passes with department codes & QR verification",
      badge: "Campus Batch",
    },
    government: {
      title: "Institutional Project",
      loc: "Nagaon, Assam",
      org: "Government of Assam",
      image: "/images/Order Deliver/Government of assam,nagoan 1.jpeg",
      req: "Official staff identification credentials & custom printed lanyards",
      badge: "Institutional",
    },
    wearable: {
      title: "Complete Wearable Setup",
      loc: "Manipur",
      org: "Rayburn College",
      image: "/images/Order Deliver/RAYBURN COLLAGE,MANIPUR 1.png",
      req: "CR80 PVC Cards + Protective Holders + Hooks + Sublimation Lanyards",
      badge: "Wearable Set",
    },
  };

  const active = pillars[activePillar];

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
              <Camera className="h-3 w-3" />
              <span>{active.badge}</span>
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 hidden sm:inline">
              {active.org} • {active.loc}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" />
              <span>100% Real Evidence</span>
            </span>
          </div>
        </div>

        {/* ── Central Stage Showcase ── */}
        <div className="relative h-[380px] sm:h-[410px] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent pointer-events-none" />

          <div
            className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-md ${
              isHovered ? "scale-[1.02] -translate-y-1" : "scale-100"
            }`}
          >
            <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl">
              <Image
                src={active.image}
                alt={active.org}
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                    {active.loc}
                  </span>
                  <h4 className="text-sm font-black text-white">{active.org}</h4>
                </div>
                <span className="rounded-lg bg-white/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white">
                  Real Photo
                </span>
              </div>
            </div>

            <div className="mt-3 w-full rounded-2xl bg-white/90 dark:bg-slate-900/90 p-3 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[80%]">
                <strong className="text-slate-900 dark:text-white">Spec: </strong>
                {active.req}
              </p>
              <span className="text-[10px] font-mono font-bold text-[#009fe3]">
                Delivered Batch
              </span>
            </div>
          </div>
        </div>

        {/* ── Mode Selection Tab Bar ── */}
        <div className="relative z-20 p-2.5 sm:p-3 border-t border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {[
              { id: "school", label: "School Project", sub: "Don Bosco" },
              { id: "college", label: "College Project", sub: "CKB College" },
              { id: "government", label: "Institutional", sub: "Govt of Assam" },
              { id: "wearable", label: "Wearable Setup", sub: "Rayburn College" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePillar(tab.id as CaseStudyPillar)}
                className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all duration-200 text-center ${
                  activePillar === tab.id
                    ? "bg-[#009fe3] text-white shadow-md font-extrabold scale-[1.02]"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 font-medium"
                }`}
              >
                <span className="text-xs sm:text-[13px] leading-tight font-bold">{tab.label}</span>
                <span
                  className={`text-[10px] leading-tight mt-0.5 ${
                    activePillar === tab.id ? "text-cyan-100" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {tab.sub}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Quick Spec Strip ── */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Evidence</span>
          <span className="text-xs font-black text-slate-900 dark:text-white">100% Real Projects</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Coverage</span>
          <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400">Assam &amp; Northeast</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Trust Rule</span>
          <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">Zero Fake Claims</span>
        </div>
      </div>
    </div>
  );
}
