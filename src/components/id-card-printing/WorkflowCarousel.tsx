"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ClipboardCheck,
  Database,
  Palette,
  Eye,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Layers,
  Truck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export interface WorkflowItem {
  num: string;
  title: string;
  body: string;
  badge: string;
  img: string;
  icon: React.ElementType;
}

export const workflowStepsData: WorkflowItem[] = [
  {
    num: "01",
    title: "Requirement",
    body: "We understand: Card type, Quantity, Organization, Required information, Design requirements, Card specification, Additional requirements.",
    badge: "Step 1 • Requirements",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    icon: ClipboardCheck,
  },
  {
    num: "02",
    title: "Data Preparation",
    body: "For personalized orders, customer information and photographs are prepared for production. Data may be supplied by the organization or collected through IDGen Studio, where applicable.",
    badge: "Step 2 • Data Setup",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    icon: Database,
  },
  {
    num: "03",
    title: "Design Preparation",
    body: "The required card artwork is prepared according to the organization's branding and specifications.",
    badge: "Step 3 • Card Artwork",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80",
    icon: Palette,
  },
  {
    num: "04",
    title: "Data & Design Preview",
    body: "Where applicable, the customer can review the personalized information and card design before production.",
    badge: "Step 4 • Digital Review",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
    icon: Eye,
  },
  {
    num: "05",
    title: "Approval",
    body: "Production proceeds after the required information, artwork and specifications are approved.",
    badge: "Step 5 • Final Signoff",
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    icon: CheckCircle2,
  },
  {
    num: "06",
    title: "Card Printing",
    body: "Approved cards move into the production process.",
    badge: "Step 6 • Precision Print",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    icon: Printer,
  },
  {
    num: "07",
    title: "Quality Check",
    body: "Finished cards are checked against the applicable approved requirements.",
    badge: "Step 7 • QA Inspection",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    icon: ShieldCheck,
  },
  {
    num: "08",
    title: "Accessories & Assembly",
    body: "If required, the cards can be combined with appropriate identification accessories. For example: ID Card → Holder → Hook → Lanyard.",
    badge: "Step 8 • Assembly Suite",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    icon: Layers,
  },
  {
    num: "09",
    title: "Packaging & Dispatch",
    body: "Completed orders are prepared for dispatch according to the applicable order timeline.",
    badge: "Step 9 • Safe Delivery",
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=80",
    icon: Truck,
  },
];

const WORKFLOW_ICON_MAP: Record<string, React.ElementType> = {
  ClipboardCheck,
  Database,
  Palette,
  Eye,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Layers,
  Truck,
};

export function WorkflowCarousel({
  steps,
}: {
  steps?: (WorkflowItem | (Omit<WorkflowItem, "icon"> & { iconName?: string; icon?: React.ElementType }))[];
}) {
  const activeSteps = steps && steps.length > 0 ? steps : workflowStepsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, activeSteps.length - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <div
      className="relative space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Carousel Navigation & Progress */}
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#009fe3] animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            9-Stage Production Workflow • Slide {currentIndex + 1} of {maxIndex + 1}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous workflow step"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-md active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next workflow step"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-md active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="overflow-hidden py-1">
        <div
          className="flex transition-transform duration-500 ease-out gap-5"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage + (itemsPerPage === 1 ? 0 : 1.2))}%)`,
          }}
        >
          {activeSteps.map((step) => {
            const IconComponent = (step as any).icon || ((step as any).iconName && WORKFLOW_ICON_MAP[(step as any).iconName]) || ClipboardCheck;
            return (
              <div
                key={step.num}
                className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-[#009fe3] dark:hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden"
              >
                {/* Step Image Frame with Hover Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={step.img}
                    alt={`${step.num} — ${step.title} ID card production step by IDGen`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Top Step Number Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1 text-xs font-black text-cyan-300 border border-white/15 shadow-sm">
                    <IconComponent className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Stage {step.num}</span>
                  </div>

                  {/* Top Right Brand Pill */}
                  <div className="absolute top-3.5 right-3.5 rounded-full bg-[#009fe3] px-2.5 py-0.5 text-[10px] font-black text-white shadow-md">
                    IDGen
                  </div>

                  {/* Bottom Image Overlay Badge */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <span className="text-[11px] font-bold text-slate-200 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      {step.badge}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#009fe3]/10 text-[#009fe3] dark:text-cyan-400 text-xs font-black">
                        {step.num}
                      </span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.body}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      <Sparkles className="h-3 w-3 text-[#009fe3] dark:text-cyan-400" />
                      <span>Production Standard</span>
                    </span>
                    <span className="text-[11px] font-bold text-[#009fe3] dark:text-cyan-400">
                      Phase {step.num} of 09
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 pt-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "w-8 bg-[#009fe3]"
                : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
