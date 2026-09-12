"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Award,
  MapPin,
  Workflow,
  Layers,
  Zap,
  PackageCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface PillarItem {
  id: string;
  title: string;
  body: string;
  img: string;
  badge: string;
  iconType: "Target" | "Award" | "MapPin" | "Workflow" | "Layers" | "Zap" | "PackageCheck";
}

export const pillarsData: PillarItem[] = [
  {
    id: "identity-focused",
    iconType: "Target",
    title: "Identity-Focused",
    body: "IDGen is focused specifically on identification products and identification workflows.",
    img: "/images/why-idgen-cards-showcase-branded.jpg",
    badge: "Specialized Focus",
  },
  {
    id: "experience-2014",
    iconType: "Award",
    title: "Experience Since 2014",
    body: "Our identification-product experience dates back to 2014, giving us more than a decade of practical experience in this field.",
    img: "/images/why-idgen-more-than-brand.jpg",
    badge: "10+ Years Experience",
  },
  {
    id: "northeast-experience",
    iconType: "MapPin",
    title: "Northeast India Experience",
    body: "We have experience supplying identification products to customers across the Northeast India market.",
    img: "/images/why-idgen-hero-branded.jpg",
    badge: "Regional Footprint",
  },
  {
    id: "structured-workflow",
    iconType: "Workflow",
    title: "Structured Workflow",
    body: "Projects can follow a defined process from requirement through dispatch.",
    img: "/images/why-idgen-production-batches-branded.jpg",
    badge: "Precision Process",
  },
  {
    id: "digital-physical",
    iconType: "Layers",
    title: "Digital + Physical Workflow",
    body: "IDGen Studio connects digital data collection and approval with physical identification production.",
    img: "/images/why-idgen-studio-workflow-branded.jpg",
    badge: "IDGen Studio",
  },
  {
    id: "bulk-capability",
    iconType: "Zap",
    title: "Bulk Capability",
    body: "Our production operation supports institutional and high-volume requirements.",
    img: "/images/product-pvc-cards.jpg",
    badge: "Institutional Capacity",
  },
  {
    id: "complete-ecosystem",
    iconType: "PackageCheck",
    title: "Complete Identification Ecosystem",
    body: "Organizations can coordinate the relevant identification products and accessories required for their application.",
    img: "/images/why-idgen-complete-ecosystem-branded.jpg",
    badge: "Coordinated Ecosystem",
  },
];

const iconMap = {
  Target,
  Award,
  MapPin,
  Workflow,
  Layers,
  Zap,
  PackageCheck,
};

export function PillarsCarousel({ items }: { items?: PillarItem[] }) {
  const activeItems = items && items.length > 0 ? items : pillarsData;
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

  const maxIndex = Math.max(0, activeItems.length - itemsPerPage);

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
      {/* Top Carousel Navigation Controls */}
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#009fe3] animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            7 Core Pillars • Slide {currentIndex + 1} of {maxIndex + 1}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-md active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-md active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track Window */}
      <div className="overflow-hidden rounded-3xl p-1">
        <div
          className="flex transition-transform duration-500 ease-out gap-5"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage + 1.25)}%)`,
          }}
        >
          {activeItems.map((pillar) => {
            const Icon = iconMap[pillar.iconType] || Target;
            return (
              <div
                key={pillar.id}
                className="shrink-0 flex flex-col rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#009fe3]/50 dark:hover:border-cyan-500/50 group"
                style={{
                  width: `calc(${100 / itemsPerPage}% - ${(1.25 * (itemsPerPage - 1)) / itemsPerPage}rem)`,
                }}
              >
                {/* Card Header Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={pillar.img}
                    alt={`${pillar.title} - IDGen Identity Solutions`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-cyan-300 border border-white/15">
                      <Sparkles className="h-2.5 w-2.5" />
                      <span>{pillar.badge}</span>
                    </span>
                    <span className="rounded-full bg-[#009fe3] px-2.5 py-0.5 text-[10px] font-black text-white shadow-xs">
                      IDGen
                    </span>
                  </div>

                  {/* Bottom Image Overlay Label */}
                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <p className="text-[11px] font-extrabold text-white truncate">
                      IDGen Branded Identity Solutions
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50 transition-colors group-hover:bg-[#009fe3] group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-extrabold text-slate-950 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                    <span className="group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                      Guwahati, IN
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Dots Bar */}
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
