"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ClipboardCheck,
  Database,
  LayoutGrid,
  Eye,
  CheckCircle,
  Printer,
  Wrench,
  Sliders,
  Truck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export interface ProductionStep {
  num: string;
  title: string;
  body: string;
  badge: string;
  img: string;
  iconType:
    | "ClipboardCheck"
    | "Database"
    | "LayoutGrid"
    | "Eye"
    | "CheckCircle"
    | "Printer"
    | "Wrench"
    | "Sliders"
    | "Truck";
}

export const productionStepsData: ProductionStep[] = [
  {
    num: "01",
    title: "Requirement",
    body: "We understand the required: Product, Quantity, Specifications, Personalization, Accessories, Delivery requirements.",
    badge: "Step 1 • Requirements",
    img: "/images/why-idgen-cards-showcase-branded.jpg",
    iconType: "ClipboardCheck",
  },
  {
    num: "02",
    title: "Data",
    body: "For personalized projects, the required information and photographs are prepared. Where appropriate, IDGen Studio can support digital data collection and organization.",
    badge: "Step 2 • Data Setup",
    img: "/images/idgen-studio-id-card-data-collection.jpg",
    iconType: "Database",
  },
  {
    num: "03",
    title: "Design",
    body: "Artwork and personalization are prepared according to the project requirements.",
    badge: "Step 3 • Card Design",
    img: "/images/hero-slide-corporate-id.jpg",
    iconType: "LayoutGrid",
  },
  {
    num: "04",
    title: "Preview",
    body: "Where applicable, the customer or organization can review standard digital previews before production.",
    badge: "Step 4 • Digital Review",
    img: "/images/why-idgen-studio-workflow-branded.jpg",
    iconType: "Eye",
  },
  {
    num: "05",
    title: "Approval",
    body: "Approved information and specifications are released for production.",
    badge: "Step 5 • Final Signoff",
    img: "/images/hero-slide-student-id.jpg",
    iconType: "CheckCircle",
  },
  {
    num: "06",
    title: "Production",
    body: "The project moves into production according to the agreed specification.",
    badge: "Step 6 • High-Speed Print",
    img: "/images/product-pvc-cards.jpg",
    iconType: "Printer",
  },
  {
    num: "07",
    title: "Accessories",
    body: "Lanyards, card holders, hooks and related identification accessories are matched with the order.",
    badge: "Step 7 • Accessories",
    img: "/images/hero-slide-modular-assembly.jpg",
    iconType: "Wrench",
  },
  {
    num: "08",
    title: "Quality Check",
    body: "Completed products undergo quality inspection before dispatch.",
    badge: "Step 8 • Inspection",
    img: "/images/why-idgen-more-than-brand.jpg",
    iconType: "Sliders",
  },
  {
    num: "09",
    title: "Dispatch",
    body: "Orders are packed and dispatched for delivery across Assam and Northeast India.",
    badge: "Step 9 • Delivery",
    img: "/images/why-idgen-hero-showcase.jpg",
    iconType: "Truck",
  },
];

const iconMap = {
  ClipboardCheck,
  Database,
  LayoutGrid,
  Eye,
  CheckCircle,
  Printer,
  Wrench,
  Sliders,
  Truck,
};

export function ProductionApproachCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items count
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

  const maxIndex = Math.max(0, productionStepsData.length - itemsPerPage);

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
    <div
      className="relative space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Bar */}
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#009fe3] animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            9-Step Precision Approach • Step {currentIndex + 1} of {productionStepsData.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous step"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-md active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next step"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-md active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="overflow-hidden rounded-3xl p-1">
        <div
          className="flex transition-transform duration-500 ease-out gap-5"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage + 1.25)}%)`,
          }}
        >
          {productionStepsData.map((step) => {
            const Icon = iconMap[step.iconType];
            return (
              <div
                key={step.num}
                className="shrink-0 flex flex-col rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#009fe3]/50 dark:hover:border-cyan-500/50 group"
                style={{
                  width: `calc(${100 / itemsPerPage}% - ${(1.25 * (itemsPerPage - 1)) / itemsPerPage}rem)`,
                }}
              >
                {/* Header Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={step.img}
                    alt={`IDGen Step ${step.num}: ${step.title}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-cyan-300 border border-white/15">
                      <Sparkles className="h-2.5 w-2.5" />
                      <span>{step.badge}</span>
                    </span>
                    <span className="font-mono rounded-full bg-[#009fe3] px-2.5 py-0.5 text-[11px] font-black text-white shadow-xs">
                      {step.num}
                    </span>
                  </div>

                  {/* Bottom Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <p className="text-[11px] font-extrabold text-cyan-300 uppercase tracking-wider">
                      Production Process
                    </p>
                    <p className="text-sm font-black text-white truncate">
                      {step.num} — {step.title}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50 transition-colors group-hover:bg-[#009fe3] group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-extrabold text-slate-950 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                        {step.num} — {step.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.body}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                    <span className="group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      Structured Flow <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                      IDGen Workflow
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "w-8 bg-[#009fe3]"
                : "w-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
