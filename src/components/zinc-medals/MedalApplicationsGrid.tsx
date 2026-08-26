"use client";

import React from "react";
import Link from "next/link";
import {
  Trophy,
  GraduationCap,
  Activity,
  Briefcase,
  Flame,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";

export const medalApplications = [
  {
    title: "School & College Sports Days",
    desc: "1st, 2nd, and 3rd place Gold, Silver, and Bronze podium medal sets with matching institutional neck ribbons.",
    icon: Trophy,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    accentColor: "text-[#009fe3]",
    tag: "Athletics",
  },
  {
    title: "Marathons, 10Ks & Cycling Events",
    desc: "Commemorative mass-participation finisher medals with custom event date reliefs and full-bleed sublimated sponsor ribbons.",
    icon: Activity,
    gradient: "from-cyan-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-cyan-500",
    tag: "Marathons",
  },
  {
    title: "University Convocations & Honors",
    desc: "Antique silver and gold academic medallion crests for gold medalists, department toppers, and PhD honors.",
    icon: GraduationCap,
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    accentColor: "text-blue-500",
    tag: "Academic",
  },
  {
    title: "Corporate Recognition & Awards",
    desc: "Heavyweight mirror gold executive medallions for long-service honors, sales achievements, and annual galas.",
    icon: Briefcase,
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    accentColor: "text-purple-500",
    tag: "Corporate",
  },
  {
    title: "Martial Arts & League Cups",
    desc: "Precision cutout medals with custom federation emblems for Karate, Taekwondo, Boxing, Football, and Cricket cups.",
    icon: Flame,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-emerald-500",
    tag: "Federations",
  },
];

export function MedalApplicationsGrid() {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Event Applications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            Custom Medals Across Tournaments &amp; Honors
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Supplied to state athletic federations, universities, corporate leagues, and city marathons across Assam and all 8 Northeast states.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          5 Core Application Categories
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {medalApplications.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-[#009fe3]/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-md ${item.accentColor}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                <span>Request Tournament Quote</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
