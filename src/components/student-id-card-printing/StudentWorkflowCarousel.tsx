"use client";

import React, { useState, useEffect } from "react";
import {
  FileSpreadsheet,
  Camera,
  Layers,
  Palette,
  Eye,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Package,
  Truck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  QrCode,
  Check,
  Lock,
  ArrowRight,
  Sliders,
  Cpu,
} from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  categoryTag: string;
  glowColor: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Student Data",
    description: "The institution provides the required student information.",
    icon: FileSpreadsheet,
    badge: "Step 01 / Ingestion",
    categoryTag: "Data Ingestion",
    glowColor: "from-blue-600/20 via-[#009fe3]/15 to-transparent",
  },
  {
    step: "02",
    title: "Photograph Collection",
    description: "Student photographs are provided according to the agreed data format.",
    icon: Camera,
    badge: "Step 02 / Photos",
    categoryTag: "Image Formatting",
    glowColor: "from-cyan-600/20 via-sky-500/15 to-transparent",
  },
  {
    step: "03",
    title: "Data Preparation",
    description: "The information is organized for personalization and production.",
    icon: Layers,
    badge: "Step 03 / Data Prep",
    categoryTag: "Database Normalization",
    glowColor: "from-indigo-600/20 via-blue-500/15 to-transparent",
  },
  {
    step: "04",
    title: "Design",
    description: "The student card design is prepared using the approved institution requirements.",
    icon: Palette,
    badge: "Step 04 / Artwork",
    categoryTag: "Visual Identity",
    glowColor: "from-purple-600/20 via-[#009fe3]/15 to-transparent",
  },
  {
    step: "05",
    title: "Preview",
    description: "The institution can review the personalized card information where applicable.",
    icon: Eye,
    badge: "Step 05 / Review",
    categoryTag: "Digital Soft Proof",
    glowColor: "from-sky-600/20 via-cyan-500/15 to-transparent",
  },
  {
    step: "06",
    title: "Approval",
    description: "The approved design and data are confirmed before production.",
    icon: CheckCircle2,
    badge: "Step 06 / Sign-Off",
    categoryTag: "Institutional Sign-Off",
    glowColor: "from-emerald-600/20 via-teal-500/15 to-transparent",
  },
  {
    step: "07",
    title: "Printing",
    description: "The student cards move into production.",
    icon: Printer,
    badge: "Step 07 / Factory",
    categoryTag: "Thermal Sublimation",
    glowColor: "from-[#009fe3]/25 via-blue-600/15 to-transparent",
  },
  {
    step: "08",
    title: "Quality Check",
    description: "Finished cards are checked against the applicable requirements.",
    icon: ShieldCheck,
    badge: "Step 08 / Quality QA",
    categoryTag: "Optical QA Inspection",
    glowColor: "from-amber-600/20 via-yellow-500/15 to-transparent",
  },
  {
    step: "09",
    title: "Accessories",
    description: "Where required, cards can be combined with: Holder + Hook + Custom Printed Lanyard",
    icon: Package,
    badge: "Step 09 / Assembly",
    categoryTag: "Kit Assembly",
    glowColor: "from-teal-600/20 via-cyan-500/15 to-transparent",
  },
  {
    step: "10",
    title: "Dispatch",
    description: "The completed order is packaged and dispatched according to the applicable order timeline.",
    icon: Truck,
    badge: "Step 10 / Delivery",
    categoryTag: "Secure Logistics",
    glowColor: "from-blue-600/20 via-indigo-500/15 to-transparent",
  },
];

export function StudentWorkflowCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? workflowSteps.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === workflowSteps.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const currentStep = workflowSteps[currentIndex];
  const Icon = currentStep.icon;

  return (
    <div
      className="space-y-6"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* 10-Step Timeline Navigation Pills (Luxury Glass Track) */}
      <div className="p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {workflowSteps.map((item, index) => {
            const isActive = index === currentIndex;
            const StepIcon = item.icon;
            return (
              <button
                key={item.step}
                onClick={() => setCurrentIndex(index)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-300 shadow-md shadow-[#009fe3]/15 border border-sky-200/90 dark:border-cyan-700/50 scale-[1.02]"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60"
                }`}
              >
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-black ${
                    isActive
                      ? "bg-[#009fe3] text-white"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {item.step}
                </div>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Card */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-2xl backdrop-blur-xl transition-all duration-500">
        {/* Dynamic Glow */}
        <div
          className={`pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br ${currentStep.glowColor} blur-3xl transition-all duration-700`}
        />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center p-6 sm:p-8 md:p-10">
          {/* Left Column: Stage Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 dark:bg-cyan-950/60 border border-sky-200/70 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-extrabold text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                {currentStep.badge}
              </span>
              <span className="text-xs font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                Stage {currentStep.step} of 10
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#009fe3] to-sky-600 text-white shadow-xl shadow-[#009fe3]/25">
                <div className="absolute inset-0 rounded-2xl bg-[#009fe3]/20 blur-sm" />
                <Icon className="relative z-10 h-8 w-8" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  {currentStep.categoryTag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {currentStep.step} — {currentStep.title}
                </h3>
              </div>
            </div>

            {/* Description Box with Accent Border */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-r from-sky-50/60 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-5 shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#009fe3]" />
              <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 leading-relaxed pl-1">
                {currentStep.description}
              </p>
            </div>

            {/* Navigation & Controls */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous Stage"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-xs hover:bg-[#009fe3] hover:text-white hover:border-[#009fe3] transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next Stage"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-xs hover:bg-[#009fe3] hover:text-white hover:border-[#009fe3] transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="text-xs font-black text-slate-700 dark:text-slate-300 px-2 tabular-nums">
                  {currentIndex + 1} / 10
                </span>
              </div>

              {/* Step indicator dots */}
              <div className="hidden sm:flex items-center gap-1.5">
                {workflowSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to step ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-7 bg-[#009fe3]"
                        : "w-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Holographic UI Stage Preview */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#009fe3]/25 to-sky-500/20 blur-2xl opacity-75" />
              
              {/* Dynamic UI Graphic Terminal / Specimen Frame */}
              <div className="relative min-h-[300px] sm:min-h-[340px] w-full rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl text-white flex flex-col justify-between overflow-hidden">
                {/* Background Tech Grid Lines */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#009fe3_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

                {/* Top Status Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] font-mono text-slate-400 ml-2">IDGEN WORKFLOW ENGINE</span>
                  </div>
                  <span className="rounded-full bg-[#009fe3]/20 border border-[#009fe3]/40 px-2.5 py-0.5 text-[10px] font-black text-cyan-300">
                    STAGE {currentStep.step} VERIFIED
                  </span>
                </div>

                {/* Dynamic Content Graphic per Step */}
                <div className="relative z-10 py-6 space-y-4">
                  {currentStep.step === "01" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span>STUDENT RECORD INGESTION</span>
                        <span>FORMAT: XLSX / CSV</span>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-3 space-y-2 font-mono text-[11px]">
                        <div className="flex justify-between text-slate-400 border-b border-white/10 pb-1">
                          <span>ADM_NO</span>
                          <span>STUDENT_NAME</span>
                          <span>CLASS</span>
                          <span>STATUS</span>
                        </div>
                        <div className="flex justify-between text-slate-200">
                          <span>#2026-001</span>
                          <span>Sarah Jenkins</span>
                          <span>Grade 12-A</span>
                          <span className="text-emerald-400">READY</span>
                        </div>
                        <div className="flex justify-between text-slate-200">
                          <span>#2026-002</span>
                          <span>Alex Rivera</span>
                          <span>B.Tech CSE</span>
                          <span className="text-emerald-400">READY</span>
                        </div>
                        <div className="flex justify-between text-slate-200">
                          <span>#2026-003</span>
                          <span>Priya Sharma</span>
                          <span>MBA Finance</span>
                          <span className="text-emerald-400">READY</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep.step === "02" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span>PHOTO FORMAT ALIGNMENT</span>
                        <span>ASPECT: 35x45mm • 300DPI</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-xl bg-white/5 border border-emerald-500/40 p-2.5 space-y-1">
                          <div className="h-10 w-10 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Camera className="h-5 w-5" />
                          </div>
                          <p className="text-[10px] font-mono text-emerald-400">PHOTO_01 OK</p>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-emerald-500/40 p-2.5 space-y-1">
                          <div className="h-10 w-10 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Camera className="h-5 w-5" />
                          </div>
                          <p className="text-[10px] font-mono text-emerald-400">PHOTO_02 OK</p>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-emerald-500/40 p-2.5 space-y-1">
                          <div className="h-10 w-10 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Camera className="h-5 w-5" />
                          </div>
                          <p className="text-[10px] font-mono text-emerald-400">PHOTO_03 OK</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep.step === "03" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span>VARIABLE DATA MERGE ENGINE</span>
                        <span>INDEXING: 100% MATCH</span>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-3 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-300">Data Normalization</span>
                          <span className="text-emerald-400 font-bold">100% COMPLETE</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#009fe3] to-emerald-400 w-full" />
                        </div>
                        <p className="text-[10px] font-mono text-slate-400 pt-1">
                          Photos mapped to enrollment IDs and academic sessions.
                        </p>
                      </div>
                    </div>
                  )}

                  {currentStep.step === "04" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span>VECTOR ARTWORK &amp; BRANDING</span>
                        <span>RESOLUTION: 600 DPI</span>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs font-black text-white">Institution Crest &amp; Colours</p>
                          <p className="text-[10px] text-slate-400">Cyan #009fe3 • Navy #0f172a</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="h-6 w-6 rounded-full bg-[#009fe3] border border-white/20" />
                          <div className="h-6 w-6 rounded-full bg-blue-900 border border-white/20" />
                          <div className="h-6 w-6 rounded-full bg-cyan-400 border border-white/20" />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep.step === "05" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span>INSTITUTIONAL SOFT PROOF</span>
                        <span>ZOOM: 100% PIXEL ACCURATE</span>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-sky-500/20 text-[#009fe3] flex items-center justify-center shrink-0">
                          <Eye className="h-5 w-5" />
                        </div>
                        <div className="text-xs space-y-0.5">
                          <p className="font-bold text-white">Digital Proof Viewer Ready</p>
                          <p className="text-[10px] text-slate-400">Institutional coordinator inspection before run.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep.step === "06" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                        <span>FINAL SIGN-OFF CONFIRMATION</span>
                        <span>STATUS: APPROVED</span>
                      </div>
                      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5 flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs font-black text-white">Design &amp; Student Data Locked</p>
                          <p className="text-[10px] text-emerald-300">Production authorization granted.</p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md">
                          <Check className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep.step === "07" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span>THERMAL DYE-SUBLIMATION RUN</span>
                        <span>SPEED: HIGH-CAPACITY LINE</span>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-3 space-y-2">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300">30-Mil CR80 PVC Production</span>
                          <span className="text-cyan-400">ACTIVE</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 via-[#009fe3] to-cyan-300 animate-pulse w-4/5" />
                        </div>
                        <p className="text-[10px] font-mono text-slate-400">Factory direct production line in Guwahati.</p>
                      </div>
                    </div>
                  )}

                  {currentStep.step === "08" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-amber-300">
                        <span>12-POINT OPTICAL QA</span>
                        <span>ACCURACY: 99.9%</span>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-white">Barcode &amp; QR Code Legibility</p>
                          <p className="text-[10px] text-slate-400">Zero defect inspection before packaging.</p>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-400 text-xs font-mono font-black">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>PASS</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep.step === "09" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span>MODULAR ACCESSORY ATTACHMENT</span>
                        <span>WEARABLE KIT</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                        <div className="rounded-xl bg-white/5 border border-white/10 p-2 text-slate-200">
                          <span>Card Holder</span>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-white/10 p-2 text-slate-200">
                          <span>Metal Hook</span>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-white/10 p-2 text-cyan-300 border-cyan-500/30">
                          <span>Custom Lanyard</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep.step === "10" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span>TAMPER-EVIDENT PACKAGING</span>
                        <span>DISPATCH: ON TIME</span>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs font-black text-white">Organized Department-Wise</p>
                          <p className="text-[10px] text-slate-400">Dispatched directly to institution campus.</p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-[#009fe3] text-white flex items-center justify-center shadow-md">
                          <Truck className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Bar in Terminal */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-slate-400 font-mono">
                  <span>IDGEN SYSTEM PRODUCTION PIPELINE</span>
                  <span className="text-cyan-400">READY FOR DISPATCH</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Autoplay Progress Line at Base */}
        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            key={currentIndex}
            className="h-full bg-gradient-to-r from-[#009fe3] via-cyan-400 to-blue-600 animate-[progress_6s_linear]"
          />
        </div>
      </div>
    </div>
  );
}
