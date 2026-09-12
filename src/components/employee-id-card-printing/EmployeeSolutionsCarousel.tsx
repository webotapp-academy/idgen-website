"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Users,
  Factory,
  Hospital,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Users,
  Factory,
  Hospital,
  HeartHandshake,
};

export interface EmployeeSolutionItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  typicalItems?: string[];
  involvesList?: string[];
  iconName?: string;
  icon?: React.ElementType;
  image: string;
  accent?: string;
}

const defaultSolutions: EmployeeSolutionItem[] = [
  {
    id: "corporate",
    title: "Corporate Employee ID Cards",
    badge: "Corporate & Offices",
    description: "For companies and corporate offices requiring professional employee identification.",
    typicalItems: [
      "Employee Photo",
      "Employee Name",
      "Employee ID",
      "Designation",
      "Department",
      "Company Branding"
    ],
    iconName: "Building2",
    icon: Building2,
    image: "/images/sol-companies-idgen-v2.jpg",
    accent: "from-blue-600 to-cyan-500",
  },
  {
    id: "staff",
    title: "Staff ID Cards",
    badge: "Offices & Institutions",
    description: "Suitable for staff members working in offices, institutions, hospitals, schools, colleges and other organizations. The design can distinguish staff categories where required.",
    typicalItems: [
      "Staff Photograph",
      "Staff Name & Role",
      "Staff Category Markers",
      "Institution Logo & Info",
      "Access & Verification"
    ],
    iconName: "Users",
    icon: Users,
    image: "/images/ID Card Full Set Samples/High-quality Employee ID Cards and Staff Identity Cards delivered to clients in Guwahati and Assam.jpg",
    accent: "from-emerald-600 to-teal-500",
  },
  {
    id: "industries",
    title: "Employee ID Cards for Industries",
    badge: "Industrial & Manufacturing",
    description: "Industrial organizations may require identification structured according to the organization's identification system for different workforce tiers.",
    involvesList: [
      "Permanent employees",
      "Supervisors",
      "Technicians",
      "Production staff",
      "Administrative staff",
      "Contract workforce"
    ],
    iconName: "Factory",
    icon: Factory,
    image: "/images/why-idgen-production-batches-branded.jpg",
    accent: "from-amber-600 to-orange-500",
  },
  {
    id: "hospitals",
    title: "Hospital Employee ID Cards",
    badge: "Healthcare & Clinics",
    description: "Hospitals and healthcare organizations can adapt their card designs according to the organization's requirements for all clinical and support staff.",
    involvesList: [
      "Doctors",
      "Nurses",
      "Administrative staff",
      "Technicians",
      "Support staff",
      "Other authorized personnel"
    ],
    iconName: "Hospital",
    icon: Hospital,
    image: "/images/Order Deliver/MY SARAH,JORHAT 1.png",
    accent: "from-cyan-600 to-sky-500",
  },
  {
    id: "ngo",
    title: "NGO & Institutional Employee ID Cards",
    badge: "NGOs, Trusts & Institutions",
    description: "NGOs, trusts, institutions and other organizations can use customized employee cards for their workforce and field personnel.",
    typicalItems: [
      "Organization Branding",
      "Field Staff Photo & Details",
      "Authorized Personnel Badge",
      "Emergency Contact Information",
      "Digital Verification QR Code"
    ],
    iconName: "HeartHandshake",
    icon: HeartHandshake,
    image: "/images/Order Deliver/NON STOP 1.png",
    accent: "from-purple-600 to-indigo-500",
  },
];

export interface EmployeeSolutionsCarouselProps {
  solutions?: EmployeeSolutionItem[];
}

export function EmployeeSolutionsCarousel({ solutions: initialSolutions }: EmployeeSolutionsCarouselProps) {
  const solutions = (initialSolutions && initialSolutions.length > 0) ? initialSolutions : defaultSolutions;
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((cur) => (cur === 0 ? solutions.length - 1 : cur - 1));
  };

  const next = () => {
    setActiveIdx((cur) => (cur === solutions.length - 1 ? 0 : cur + 1));
  };

  const current = solutions[activeIdx] || solutions[0];
  const Icon = current.icon || (current.iconName && ICON_MAP[current.iconName]) || Building2;

  return (
    <div className="space-y-8">
      {/* Category Pills Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {solutions.map((sol, idx) => {
          const SolIcon = sol.icon || (sol.iconName && ICON_MAP[sol.iconName]) || Building2;
          const isActive = idx === activeIdx;
          return (
            <button
              key={sol.id}
              onClick={() => setActiveIdx(idx)}
              className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                isActive
                  ? "bg-[#009fe3] text-white shadow-lg shadow-[#009fe3]/25 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#009fe3]/50 hover:bg-sky-50 dark:hover:bg-slate-800"
              }`}
            >
              <SolIcon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#009fe3] dark:text-cyan-400"}`} />
              <span>{sol.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Card */}
      <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-all duration-500">
        <div className="grid lg:grid-cols-12 items-stretch min-h-[460px]">
          {/* Left Visual Column */}
          <div className="relative lg:col-span-6 overflow-hidden bg-slate-950 min-h-[300px] lg:min-h-[460px]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Top Floating Badge */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-black text-white border border-white/15 shadow-md">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                <span>{current.badge}</span>
              </span>
              <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md font-mono">
                0{activeIdx + 1} / 0{solutions.length}
              </span>
            </div>

            {/* Bottom Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {current.title}
              </h3>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/25 dark:border-cyan-800/50 shadow-xs">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#009fe3] dark:text-cyan-400">
                    Employee Solution
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                    {current.title}
                  </h4>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {current.description}
              </p>

              {/* Items or Involves Breakdown */}
              {current.typicalItems && (
                <div className="space-y-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 p-4 shadow-2xs">
                  <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    Typical information can include:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {current.typicalItems.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {current.involvesList && (
                <div className="space-y-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 p-4 shadow-2xs">
                  <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    Identification categories can include:
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {current.involvesList.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                      >
                        <div className="h-2 w-2 rounded-full bg-[#009fe3]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Carousel Navigation Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xs hover:border-[#009fe3] hover:text-[#009fe3] transition-all"
                  aria-label="Previous solution"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xs hover:border-[#009fe3] hover:text-[#009fe3] transition-all"
                  aria-label="Next solution"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Request {current.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
