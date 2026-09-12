"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Hospital,
  ShieldCheck,
  Radio,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";
import type { DynamicPvcCardsApplications } from "@/lib/dynamic-pvc-cards-types";

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Briefcase,
  Hospital,
  ShieldCheck,
  Radio,
  Sparkles,
  Layers,
};

export const pvcApplications = [
  {
    title: "School, College & University IDs",
    desc: "Long-lasting 30-mil student ID cards with student photos, roll numbers, barcodes, and optional Mifare library chips.",
    icon: GraduationCap,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    accentColor: "text-[#009fe3]",
    tag: "Education",
    link: "/student-id-card-printing/",
  },
  {
    title: "Corporate & Enterprise Staff Badges",
    desc: "High-definition employee credentials with employee codes, department names, blood groups, and security QR codes.",
    icon: Briefcase,
    gradient: "from-cyan-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-cyan-500",
    tag: "Corporate",
    link: "/employee-id-card-printing/",
  },
  {
    title: "Hospital Doctors & Medical Staff",
    desc: "Sanitizable, wipeable staff cards with bold designation titles, photo IDs, and RFID access for restricted wards.",
    icon: Hospital,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-emerald-500",
    tag: "Healthcare",
    link: "/employee-id-card-printing/",
  },
  {
    title: "Clubs, Gyms & Member Cards",
    desc: "Sleek loyalty and membership cards with high-coercivity magnetic stripes, variable barcodes, and QR verification.",
    icon: Layers,
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    accentColor: "text-purple-500",
    tag: "Membership",
    link: "/membership-card-printing/",
  },
  {
    title: "RFID Turnstiles & Barrier Gates",
    desc: "13.56MHz and 125kHz contactless cards for boom barriers, turnstiles, and automated biometric time attendance.",
    icon: Radio,
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    accentColor: "text-blue-500",
    tag: "Smart Access",
    link: "/rfid-card-printing/",
  },
];

export function PvcApplicationsGrid({ data }: { data?: DynamicPvcCardsApplications }) {
  const activeApps = (data?.applications && data.applications.length > 0) ? data.applications : pvcApplications;

  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{data?.badge || "Sector Applications"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            {data?.title || "CR80 PVC Cards Across Organizations"}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {data?.lede || "Supplied to over 500+ schools, universities, hospitals, corporate headquarters, and government institutions across Northeast India."}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {data?.subtitle || `${activeApps.length} Core Sector Use Cases`}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activeApps.map((item, idx) => {
          const Icon = (item as any).icon || ((item as any).iconName && ICON_MAP[(item as any).iconName]) || Sparkles;
          const linkHref = typeof (item as any).link === "string" ? (item as any).link : (item as any).link?.href || "/request-a-quote/";
          const linkLabel = typeof (item as any).link === "object" && (item as any).link?.label ? (item as any).link.label : "Explore Service";

          return (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-[#009fe3]/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient || "from-sky-500/10 via-blue-500/5 to-transparent"} opacity-50 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-md ${item.accentColor || "text-[#009fe3]"}`}
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
                <Link href={linkHref} className="hover:underline flex items-center gap-1.5">
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
