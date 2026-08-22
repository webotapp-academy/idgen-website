"use client";

import React, { useState, useEffect } from "react";
import {
  School,
  BookOpen,
  GraduationCap,
  Building2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface OrgType {
  id: string;
  badge: string;
  title: string;
  categoryDesc: string;
  forLabel: string;
  items: string[];
  icon: React.ElementType;
  accentGradient: string;
  bgGlow: string;
  pillColor: string;
}

const orgTypes: OrgType[] = [
  {
    id: "schools",
    badge: "K-12 & High Schools",
    title: "Schools",
    categoryDesc: "Tailored student identification cards for structured school environments from foundational to senior levels.",
    forLabel: "For:",
    items: [
      "Primary schools",
      "Secondary schools",
      "Senior secondary schools",
      "Private schools",
      "Public schools",
      "Residential schools",
      "Boarding schools",
    ],
    icon: School,
    accentGradient: "from-blue-600 via-[#009fe3] to-cyan-400",
    bgGlow: "from-blue-500/15 via-[#009fe3]/10 to-transparent",
    pillColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/60",
  },
  {
    id: "colleges",
    badge: "Higher Education",
    title: "Colleges",
    categoryDesc: "Streamlined bulk ID production suited for multi-stream college departments, admissions, and annual sessions.",
    forLabel: "For:",
    items: [
      "Undergraduate students",
      "Postgraduate students",
      "Department-wise batches",
      "New admissions",
      "Annual renewals",
    ],
    icon: BookOpen,
    accentGradient: "from-[#009fe3] via-sky-500 to-indigo-500",
    bgGlow: "from-[#009fe3]/15 via-indigo-500/10 to-transparent",
    pillColor: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-cyan-300 dark:border-sky-800/60",
  },
  {
    id: "universities",
    badge: "Campuses & Research",
    title: "Universities",
    categoryDesc: "Robust identity systems built for expansive university campuses, specialized research wings, and diverse faculties.",
    forLabel: "For:",
    items: [
      "Undergraduate students",
      "Postgraduate students",
      "Research scholars",
      "Department-wise identification",
      "Campus-wide student batches",
    ],
    icon: GraduationCap,
    accentGradient: "from-indigo-600 via-[#009fe3] to-teal-400",
    bgGlow: "from-indigo-500/15 via-[#009fe3]/10 to-transparent",
    pillColor: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/60",
  },
  {
    id: "other",
    badge: "Specialized Training",
    title: "Other Educational Institutions",
    categoryDesc: "Flexible credentialing solutions customized for professional institutes, academies, and coaching centers.",
    forLabel: "Student identification can also be required by:",
    items: [
      "Coaching institutes",
      "Training institutes",
      "Professional institutes",
      "Vocational institutions",
      "Educational organizations",
    ],
    icon: Building2,
    accentGradient: "from-teal-600 via-sky-500 to-blue-600",
    bgGlow: "from-teal-500/15 via-sky-500/10 to-transparent",
    pillColor: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800/60",
  },
];

export function StudentOrgCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? orgTypes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === orgTypes.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const activeOrg = orgTypes[currentIndex];
  const Icon = activeOrg.icon;

  return (
    <div
      className="space-y-6"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Category Selection Tabs - Modern Luxury Glass Pill Design */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
        {orgTypes.map((org, index) => {
          const TabIcon = org.icon;
          const isActive = index === currentIndex;
          return (
            <button
              key={org.id}
              onClick={() => setCurrentIndex(index)}
              className={`group relative flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-300 shadow-md shadow-[#009fe3]/10 border border-sky-200/80 dark:border-cyan-700/50 scale-[1.02]"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/50"
              }`}
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#009fe3] text-white shadow-xs"
                    : "bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-sky-100 group-hover:text-[#009fe3]"
                }`}
              >
                <TabIcon className="h-3.5 w-3.5" />
              </div>
              <span>{org.title}</span>
              <span
                className={`ml-0.5 text-[10px] font-black rounded-full px-1.5 py-0.5 ${
                  isActive
                    ? "bg-sky-100 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-300"
                    : "bg-slate-200/80 dark:bg-slate-800 text-slate-500"
                }`}
              >
                {org.items.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Luxury Feature Stage Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-2xl backdrop-blur-xl transition-all duration-500">
        {/* Dynamic ambient background glow that shifts per category */}
        <div
          className={`pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br ${activeOrg.bgGlow} blur-3xl transition-all duration-700`}
        />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-200/30 dark:bg-[#009fe3]/10 blur-3xl" />

        {/* Top Control & Header Bar */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
          <div className="flex items-start sm:items-center gap-4">
            {/* Holographic Glowing Icon Badge */}
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white via-sky-50 to-sky-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border-2 border-sky-200/80 dark:border-sky-800/60 shadow-lg text-[#009fe3] dark:text-cyan-400">
              <div className="absolute inset-0 rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-400/10 blur-sm" />
              <Icon className="relative z-10 h-8 w-8" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider rounded-full px-3 py-1 border shadow-xs ${activeOrg.pillColor}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                  {activeOrg.badge}
                </span>
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
                  Adaptive Workflow
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {activeOrg.title}
              </h3>
            </div>
          </div>

          {/* Navigation Controls with Active Progress Indicator */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            {/* Progress Dots */}
            <div className="hidden sm:flex items-center gap-1.5 mr-2">
              {orgTypes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-7 bg-[#009fe3]"
                      : "w-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 p-1 shadow-sm">
              <button
                onClick={prevSlide}
                aria-label="Previous Category"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-[#009fe3] hover:text-white transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-xs font-black text-slate-800 dark:text-slate-200 px-2.5 tabular-nums">
                {currentIndex + 1} / {orgTypes.length}
              </span>
              <button
                onClick={nextSlide}
                aria-label="Next Category"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-[#009fe3] hover:text-white transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section: Cards Grid with High-End Visual Accents */}
        <div className="relative z-10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                {activeOrg.forLabel}
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Personalized Card &amp; Identity Delivery
            </span>
          </div>

          {/* Luxury Bento Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {activeOrg.items.map((item, itemIdx) => (
              <div
                key={item}
                className="group relative flex items-center gap-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50/70 dark:from-slate-900 dark:to-slate-950 p-4 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 shadow-sm hover:shadow-md hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Subtle left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#009fe3] to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Check badge */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                <div className="flex-1">
                  <span className="leading-snug">{item}</span>
                </div>

                <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                  0{itemIdx + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Micro Footer in the Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
              <ShieldCheck className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
              <span>Full-batch verification &amp; institutional standards compliant</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400">
              <Layers className="h-3.5 w-3.5" />
              <span>Card + Lanyard + Holder Compatible</span>
            </div>
          </div>
        </div>

        {/* Autoplay Progress Line at the very bottom */}
        <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            key={currentIndex}
            className="h-full bg-gradient-to-r from-[#009fe3] via-cyan-400 to-blue-600 animate-[progress_6s_linear]"
          />
        </div>
      </div>
    </div>
  );
}
