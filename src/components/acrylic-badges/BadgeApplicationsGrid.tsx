"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Hospital,
  GraduationCap,
  Building2,
  Ticket,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export const badgeApplications = [
  {
    title: "Corporate & Executive Teams",
    desc: "Executive name tags for board members, branch managers, banking personnel, and IT enterprise staff.",
    icon: Briefcase,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    accentColor: "text-[#009fe3]",
    tag: "Corporate",
  },
  {
    title: "Hospitals & Medical Staff",
    desc: "Anti-bacterial, wipeable acrylic tags with high-visibility titles for doctors, surgeons, nurses, and lab staff.",
    icon: Hospital,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-emerald-500",
    tag: "Healthcare",
  },
  {
    title: "School Leadership & Prefects",
    desc: "Vibrant student leadership badges for Head Boys, Head Girls, House Captains, and 100% Attendance stars.",
    icon: GraduationCap,
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    accentColor: "text-blue-500",
    tag: "Academic",
  },
  {
    title: "Hotels, Resorts & Hospitality",
    desc: "Luxury acrylic name badges designed to match boutique uniforms and fine dining front-of-house attire.",
    icon: Building2,
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accentColor: "text-amber-500",
    tag: "Hospitality",
  },
  {
    title: "VIP Summits & Delegations",
    desc: "Gold-bordered and custom contour badges for conference speakers, international delegates, and VIP organizers.",
    icon: Ticket,
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    accentColor: "text-purple-500",
    tag: "Events & Conclaves",
  },
];

export function BadgeApplicationsGrid() {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Sector Applications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            Acrylic Badges Across Industries
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Engineered to provide professional prestige identification across healthcare, education, corporate, and luxury hospitality sectors.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          5 Specialized Sectors
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {badgeApplications.map((item, idx) => {
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
                <span>Request Custom Quote</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
