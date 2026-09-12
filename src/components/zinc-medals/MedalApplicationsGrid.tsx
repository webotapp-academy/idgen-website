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

const ICON_MAP: Record<string, React.ElementType> = {
  Trophy,
  GraduationCap,
  Activity,
  Briefcase,
  Flame,
  Award,
  Sparkles,
};

export function MedalApplicationsGrid({
  data,
}: {
  data?: {
    badge?: string;
    title?: string;
    description?: string;
    lede?: string;
    subtitle?: string;
    countLabel?: string;
    applications?: Array<{
      title: string;
      desc: string;
      iconName?: string;
      gradient: string;
      accentColor: string;
      tag: string;
      link?: {
        label: string;
        href: string;
      };
    }>;
    items?: Array<{
      title: string;
      desc: string;
      iconName?: string;
      gradient: string;
      accentColor: string;
      tag: string;
      link?: {
        label: string;
        href: string;
      };
    }>;
  };
} = {}) {
  const badgeTitle = data?.badge || "Event Applications";
  const sectionTitle = data?.title || "Custom Medals Across Tournaments & Honors";
  const sectionDesc =
    data?.lede ||
    data?.description ||
    "Supplied to state athletic federations, universities, corporate leagues, and city marathons across Assam and all 8 Northeast states.";
  const activeItems =
    data?.applications && data.applications.length > 0
      ? data.applications
      : data?.items && data.items.length > 0
      ? data.items
      : medalApplications;
  const countLabel =
    data?.countLabel || data?.subtitle || `${activeItems.length} Core Application Categories`;

  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{badgeTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            {sectionTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {sectionDesc}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {countLabel}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activeItems.map((item, idx) => {
          const Icon =
            ((item as any).iconName && ICON_MAP[(item as any).iconName]) ||
            (item as any).icon ||
            Award;
          const linkHref = (item as any).link?.href || "/request-a-quote/";
          const linkLabel = (item as any).link?.label || "Request Tournament Quote";

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

              <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={linkHref}
                  className="flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
                >
                  <span>{linkLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
