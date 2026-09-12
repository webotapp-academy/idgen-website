"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileSpreadsheet,
  Pause,
  Play,
  CheckCircle2,
} from "lucide-react";

export interface TemplateSlide {
  id: string;
  imageSrc: string;
  alt: string;
  title: string;
  category: string;
  topBadge: string;
  specPill: string;
  bottomSpec: string;
  hubTag: string;
}

const templateSlides: TemplateSlide[] = [
  {
    id: "student-data-template",
    imageSrc: "/images/student-data-collection-workflow-v1.jpg",
    alt: "IDGen Student ID Card Data Template and structured spreadsheet planning",
    title: "Student ID Card Data Template",
    category: "Data Schema",
    topBadge: "Academic Template",
    specPill: "XLSX / CSV Format",
    bottomSpec: "Field Structure • Photo Matching • Class & Roll Mapping • QR Data",
    hubTag: "EXCEL / STUDIO",
  },
  {
    id: "employee-data-template",
    imageSrc: "/images/idgen-studio-digital-id-card-data-collection-workflow.jpg",
    alt: "IDGen Employee and Staff ID card data collection and form planning template",
    title: "Employee ID Card Planning Template",
    category: "Corporate Roster",
    topBadge: "Corporate Template",
    specPill: "HR Data Schema",
    bottomSpec: "Department • Designation • Employee ID • QR/Barcode Encoding",
    hubTag: "HR & ENTERPRISE",
  },
  {
    id: "studio-form-planning",
    imageSrc: "/images/idgen-studio-interface.jpg",
    alt: "IDGen Studio digital form planning and field type configuration template",
    title: "IDGen Studio Form Planning Template",
    category: "Digital Collection",
    topBadge: "Digital Form Builder",
    specPill: "16+ Field Types",
    bottomSpec: "Input Formats • Dropdowns • Photo Uploads • Live Card Previews",
    hubTag: "ONLINE WORKFLOW",
  },
  {
    id: "bulk-project-checklist",
    imageSrc: "/images/why-idgen-complete-ecosystem-branded.jpg",
    alt: "IDGen Bulk ID Card Project Checklist and specification template",
    title: "Bulk Project Specification Checklist",
    category: "Checklists",
    topBadge: "Pre-Flight Checklist",
    specPill: "Complete Spec Sheet",
    bottomSpec: "Cards • Holders • Hooks • Lanyards • RFID Specs • Delivery Terms",
    hubTag: "READY FOR PRODUCTION",
  },
];

export function TemplatesHeroCarousel({ slides = templateSlides }: { slides?: TemplateSlide[] }) {
  const activeSlides = slides && slides.length > 0 ? slides : templateSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  }, [activeSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + activeSlides.length) % activeSlides.length
    );
  }, [activeSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const current = activeSlides[currentIndex] || activeSlides[0] || templateSlides[0];

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl group select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="IDGen ID Card Project Templates Showcase"
    >
      {/* ── Slide Images Stack ── */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] w-full overflow-hidden">
        {activeSlides.map((slide, idx) => (
          <div
            key={slide.id || idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 scale-105 pointer-events-none"
            }`}
          >
            <Image
              src={slide.imageSrc}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="object-cover object-center transform transition-transform duration-1000 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Multi-tier Gradient for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/40 pointer-events-none" />
          </div>
        ))}

        {/* ── Top Header Strip Overlay (Brand, Spec & Category Pill) ── */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
          {/* IDGen Brand Identifier */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 border border-[#009fe3]/40 shadow-lg shadow-[#009fe3]/15">
            <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
            <span className="text-xs font-black text-white tracking-wide">IDGen</span>
            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest pl-1 border-l border-white/20">
              TEMPLATES
            </span>
          </div>

          {/* Format Tag Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3] text-white px-3.5 py-1.5 shadow-md shadow-[#009fe3]/30 border border-sky-300/30">
            <FileSpreadsheet className="h-3.5 w-3.5 text-white" />
            <span className="text-xs font-black tracking-tight">{current.specPill}</span>
          </div>
        </div>

        {/* ── Center Controls (Chevron Arrows) ── */}
        <button
          onClick={prevSlide}
          aria-label="Previous Template Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-slate-950/75 hover:bg-[#009fe3] text-white border border-white/20 hover:border-[#009fe3] flex items-center justify-center backdrop-blur-md transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Template Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-slate-950/75 hover:bg-[#009fe3] text-white border border-white/20 hover:border-[#009fe3] flex items-center justify-center backdrop-blur-md transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* ── Bottom Information Card Overlay ── */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="rounded-2xl border border-white/15 bg-slate-950/90 backdrop-blur-md p-4 sm:p-5 shadow-2xl">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-cyan-400">
                <Sparkles className="h-3.5 w-3.5 text-[#009fe3]" />
                <span>{current.topBadge}</span>
              </div>
              <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                {current.hubTag}
              </span>
            </div>

            <h3 className="text-base sm:text-lg lg:text-xl font-black text-white leading-snug">
              {current.title}
            </h3>

            <p className="mt-1 text-xs text-slate-300 leading-relaxed line-clamp-2">
              {current.bottomSpec}
            </p>

            {/* Quick Indicators & Play/Pause */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              {/* Slide Dots */}
              <div className="flex items-center gap-1.5">
                {activeSlides.map((slide, idx) => (
                  <button
                    key={slide.id || idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                    className={`transition-all duration-300 rounded-full h-2 ${
                      idx === currentIndex
                        ? "w-6 bg-[#009fe3]"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              {/* Pause/Play Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause carousel slideshow" : "Play carousel slideshow"}
                className="flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white transition"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-3 w-3 text-cyan-400" />
                    <span>Auto-Playing</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3 text-emerald-400" />
                    <span>Paused</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
