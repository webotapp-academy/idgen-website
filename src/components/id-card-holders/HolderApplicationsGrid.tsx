"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Ticket,
  Hospital,
  Users,
  Building2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const applicationsList = [
  {
    title: "Schools & Educational Institutions",
    desc: "For student, teacher, staff and visitor identification with high impact durability.",
    tag: "High Durability",
    recommended: "V-1 / V-2 Series",
    link: { label: "Explore Student ID Card Printing", href: "/student-id-card-printing/" },
    icon: GraduationCap,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    accentColor: "text-[#009fe3]",
  },
  {
    title: "Companies & Corporate Offices",
    desc: "For employees, staff, contractors, and visitors with sleek executive aesthetics.",
    tag: "Corporate Benchmark",
    recommended: "V-2 Lock / Metal Frame",
    link: { label: "Explore Employee ID Card Printing", href: "/employee-id-card-printing/" },
    icon: Briefcase,
    gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
    accentColor: "text-cyan-500",
  },
  {
    title: "Conferences, Summits & Events",
    desc: "For delegates, speakers, organizers, exhibitors and VIP summit participants.",
    tag: "Wide Landscape Format",
    recommended: "H-1 / H-2 / CV-1 Crystal",
    link: { label: "Explore Event Card Printing", href: "/event-card-printing/" },
    icon: Ticket,
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accentColor: "text-amber-500",
  },
  {
    title: "Hospitals & Healthcare Networks",
    desc: "Sanitizable 100% virgin polymer holders for doctors, nurses, and clinical staff.",
    tag: "Hygiene & Secure Lock",
    recommended: "V-2 Four-Side Lock",
    icon: Hospital,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-emerald-500",
  },
  {
    title: "Clubs, Associations & VIP Delegations",
    desc: "Executive crystal and metal finishes for premium membership and VIP identification.",
    tag: "Prestige Series",
    recommended: "CV-1 Crystal / Metal",
    icon: Users,
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    accentColor: "text-purple-500",
  },
  {
    title: "Industrial & Manufacturing Plants",
    desc: "Heavy-duty 4-side perimeter locking and chemical sealed protection for tough worksites.",
    tag: "Maximum Retention",
    recommended: "V-2 / V-3 Chemical",
    icon: Building2,
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
    accentColor: "text-slate-600 dark:text-slate-300",
  },
];

import type { DynamicIdCardHoldersApplications } from "@/lib/dynamic-id-card-holders-types";

const APP_ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Briefcase,
  Ticket,
  Hospital,
  Users,
  Building2,
  Sparkles,
  ShieldCheck,
};

export function HolderApplicationsGrid({
  data,
}: {
  data?: DynamicIdCardHoldersApplications;
} = {}) {
  const items = data?.items && data.items.length > 0 ? data.items : applicationsList;

  return (
    <section className="mt-16 sm:mt-20 scroll-mt-28" id="applications">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{data?.eyebrow || "Multi-Sector Deployment"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            {data?.title || "ID Card Holder Applications"}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {data?.lede || "Tailored holder solutions engineered for schools, corporate enterprises, hospitals, events, and industrial plants across India."}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Factory Wholesale Supply in Guwahati &amp; Pan-India
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((app) => {
          const IconComp = (app as any).icon || APP_ICON_MAP[(app as any).iconName] || Building2;
          return (
            <div
              key={app.title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br ${app.gradient} bg-white dark:bg-slate-900 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#009fe3] hover:shadow-xl dark:hover:border-cyan-500`}
            >
              <div>
                {/* Header & Icon */}
                <div className="flex items-center justify-between gap-2">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm ${app.accentColor}`}>
                    <IconComp className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                    {app.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                  {app.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {app.desc}
                </p>

                {/* Recommended Model Pill */}
                <div className="mt-4 flex items-center justify-between text-xs bg-white/80 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/70 dark:border-slate-700/70">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Recommended:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">{app.recommended}</span>
                </div>
              </div>

              {/* Link / CTA */}
              {app.link ? (
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={app.link.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{app.link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ) : (
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Custom institutional branding</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-xs font-medium text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          💡 <strong>Factory Guidance:</strong> Always match holder selection strictly with your card orientation and environment, rather than organization type alone.
        </p>
        <Link
          href="/request-a-quote/"
          className="shrink-0 font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
        >
          Request Tailored Recommendation →
        </Link>
      </div>
    </section>
  );
}
