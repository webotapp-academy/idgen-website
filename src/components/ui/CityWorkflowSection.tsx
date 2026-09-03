"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ClipboardList,
  FileSpreadsheet,
  Palette,
  Eye,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Truck,
  ArrowRight,
  Phone,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { OrderStepItem } from "@/lib/dynamic-locations-types";

export interface StepItem {
  step: string;
  title: string;
  description: string;
  phase: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
}

interface CityWorkflowSectionProps {
  cityName: string;
  stateName?: string;
  isGuwahati?: boolean;
  workflowEyebrow?: string;
  workflowBadge?: string;
  workflowTitle?: string;
  workflowSubtitle?: string;
  workflowNote?: string;
  workflowCta1Text?: string;
  workflowCta2Text?: string;
  customSteps?: OrderStepItem[];
}

export function CityWorkflowSection({
  cityName,
  stateName = "Assam",
  isGuwahati = false,
  workflowEyebrow,
  workflowBadge,
  workflowTitle,
  workflowSubtitle,
  workflowNote,
  workflowCta1Text,
  workflowCta2Text,
  customSteps,
}: CityWorkflowSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Dynamically constructed 8 steps
  const steps: StepItem[] = [
    {
      step: "01",
      title: customSteps?.[0]?.title || "Tell Us Your Requirement",
      description:
        customSteps?.[0]?.description ||
        `Share your organization name, target card quantity, accessory specifications, and delivery timeline in ${cityName}.`,
      phase: customSteps?.[0]?.phase || "Intake",
      icon: ClipboardList,
      colorClass: "from-cyan-500/20 to-blue-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/30",
    },
    {
      step: "02",
      title: customSteps?.[1]?.title || "Share Your Data",
      description:
        customSteps?.[1]?.description ||
        "Provide student/employee Excel records and high-res photos, or use the secure IDGen Studio cloud collection link.",
      phase: customSteps?.[1]?.phase || "Data Intake",
      icon: FileSpreadsheet,
      colorClass: "from-blue-500/20 to-indigo-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30",
    },
    {
      step: "03",
      title: customSteps?.[2]?.title || "Confirm the Design",
      description:
        customSteps?.[2]?.description ||
        `Submit your institution's template or have our design studio craft a high-definition card layout tailored to your brand.`,
      phase: customSteps?.[2]?.phase || "Artwork",
      icon: Palette,
      colorClass: "from-indigo-500/20 to-purple-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/30",
    },
    {
      step: "04",
      title: customSteps?.[3]?.title || "Review & Proofing",
      description:
        customSteps?.[3]?.description ||
        "Review digital PDF proofs or request physical pre-production sample specimens for institutional committee approval.",
      phase: customSteps?.[3]?.phase || "Proofing",
      icon: Eye,
      colorClass: "from-purple-500/20 to-pink-500/10 text-purple-500 dark:text-purple-400 border-purple-500/30",
    },
    {
      step: "05",
      title: customSteps?.[4]?.title || "Approval Sign-Off",
      description:
        customSteps?.[4]?.description ||
        "Formal sign-off on design alignment, spelling checks, RFID frequencies, and lanyard accessory configurations.",
      phase: customSteps?.[4]?.phase || "Sign-Off",
      icon: CheckCircle2,
      colorClass: "from-emerald-500/20 to-teal-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/30",
    },
    {
      step: "06",
      title: customSteps?.[5]?.title || "Cleanroom Production",
      description:
        customSteps?.[5]?.description ||
        "High-resolution thermal / retransfer card printing, chip encoding, and ultrasonic lanyard welding in our cleanroom.",
      phase: customSteps?.[5]?.phase || "Manufacturing",
      icon: Printer,
      colorClass: "from-amber-500/20 to-orange-500/10 text-amber-500 dark:text-amber-400 border-amber-500/30",
    },
    {
      step: "07",
      title: customSteps?.[6]?.title || "100% Quality Check",
      description:
        customSteps?.[6]?.description ||
        "Individual optical inspection for color accuracy, barcode legibility, chip frequency response, and edge lamination.",
      phase: customSteps?.[6]?.phase || "Quality Audit",
      icon: ShieldCheck,
      colorClass: "from-teal-500/20 to-cyan-500/10 text-teal-500 dark:text-teal-400 border-teal-500/30",
    },
    {
      step: "08",
      title: customSteps?.[7]?.title || "Doorstep Dispatch",
      description:
        customSteps?.[7]?.description ||
        (isGuwahati
          ? "Secure sorted packaging with priority 24–48h local delivery across Guwahati."
          : `Secure class/department-wise sorted packaging with priority courier dispatch to your doorstep in ${cityName}, ${stateName}.`),
      phase: customSteps?.[7]?.phase || "Fulfillment",
      icon: Truck,
      colorClass: "from-sky-500/20 to-blue-500/10 text-sky-500 dark:text-sky-400 border-sky-500/30",
    },
  ];

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, steps.length - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section aria-labelledby="workflow-section-heading" className="relative">
      {/* Background ambient glow effects */}
      <div className="absolute -top-12 -left-12 -z-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 -z-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

      {/* Main Glassmorphic Wrapper */}
      <div
        className="relative rounded-[2.5rem] border border-slate-200/90 dark:border-white/10 bg-gradient-to-br from-white via-slate-50/60 to-white dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-9 lg:p-10 shadow-2xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-xl overflow-hidden space-y-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

        {/* Header Block */}
        <div className="relative z-10 space-y-4">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/40 dark:bg-accent/10 px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent">
              {workflowEyebrow || "Step-by-Step Production Process • Factory Quality Standard"}
            </span>
            <span className="hidden sm:inline-flex items-center rounded-md bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">
              {workflowBadge || (isGuwahati ? "Local Turnaround: 24–48h" : "Priority Turnaround")}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <h2
                id="workflow-section-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
              >
                {workflowTitle || `How to Order ID Cards in ${cityName}`}
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {workflowSubtitle ||
                  `A predictable 8-stage manufacturing workflow ensuring zero data errors, exact color calibration, and doorstep dispatch to ${cityName}.`}
              </p>
            </div>

            {/* Navigation & Controls */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-full">
                <span>Stage {currentIndex + 1} of {maxIndex + 1}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous workflow step"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0e1726] text-foreground shadow-xs transition-all hover:border-accent hover:text-accent hover:shadow-md active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next workflow step"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0e1726] text-foreground shadow-xs transition-all hover:border-accent hover:text-accent hover:shadow-md active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Workflow Step Cards Carousel Track */}
        <div className="relative z-10 overflow-hidden rounded-2xl p-1">
          <div
            className="flex transition-transform duration-500 ease-out gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage + 1)}%)`,
            }}
          >
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group shrink-0 relative flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#0e1726]/80 p-5 backdrop-blur-xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white dark:hover:bg-white/[0.07] hover:shadow-xl hover:shadow-accent/5"
                  style={{
                    width: `calc(${100 / itemsPerPage}% - ${(1 * (itemsPerPage - 1)) / itemsPerPage}rem)`,
                  }}
                >
                  <div>
                    {/* Top Row: Icon & Step Number */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br border ${item.colorClass} shadow-xs transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-black text-accent bg-accent-soft/40 dark:bg-accent/10 border border-accent/20">
                        STEP {item.step}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Phase Tag */}
                  <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-[11px]">
                    <span className="font-bold uppercase tracking-wider text-muted/80">
                      {item.phase}
                    </span>
                    <span className="text-accent font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>Phase Next</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Dots Bar */}
        <div className="relative z-10 flex items-center justify-center gap-2 pt-1">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to workflow stage ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-accent"
                  : "w-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
              }`}
            />
          ))}
        </div>

        {/* Bottom Turnaround & Action Ribbon */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-slate-200/80 dark:border-white/10">
          <div className="flex items-center gap-2.5 text-xs text-muted">
            <Clock className="h-4 w-4 text-accent shrink-0" />
            <span className="leading-relaxed">
              {workflowNote ||
                (isGuwahati
                  ? "Guwahati Hub Advantage: Free physical pre-production sample & priority 24–48h local delivery available."
                  : `Doorstep express delivery across ${cityName}, ${stateName} with rigorous optical quality verification before dispatch.`)}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contact-us/"
              className="flex-1 sm:flex-none text-center rounded-full border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 px-5 py-2.5 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              <span>{workflowCta1Text || "Call / WhatsApp IDGen"}</span>
            </Link>
            <Link
              href="/request-a-quote/"
              className="flex-1 sm:flex-none text-center rounded-full bg-accent px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-accent-hover btn-glow flex items-center justify-center gap-2"
            >
              <span>{workflowCta2Text || "Start at Step 01: Request Quote"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
