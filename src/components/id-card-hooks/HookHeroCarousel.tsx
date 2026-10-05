"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  Link2,
  Pause,
  Play,
} from "lucide-react";

export interface HookSlide {
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

const hookSlides: HookSlide[] = [
  {
    id: "hook-chrome-swivel",
    imageSrc: "/images/product-hooks-hardware.jpg",
    alt: "IDGen chrome swivel dog hook attachments for 20mm custom printed lanyards",
    title: "Premium Chrome Swivel Dog Hook",
    category: "Dog Hook",
    topBadge: "Chrome Swivel Hook",
    specPill: "360° Free Rotation",
    bottomSpec: "High-Tensile Zinc Alloy • Chrome Polished • 20mm Loop Fit",
    hubTag: "GUWAHATI FACTORY",
  },
  {
    id: "hook-dual-event-clips",
    imageSrc: "/images/hero-slide-event-badge.jpg",
    alt: "IDGen dual chrome swivel hooks for wide conference badges and VIP event passes",
    title: "Dual-Hook Anti-Twist Configuration",
    category: "2-Hook Set",
    topBadge: "Dual-Hook Stability",
    specPill: "Zero-Flip Balance",
    bottomSpec: "Twin Chrome Clips • Balanced Wear • Summit & VIP Badges",
    hubTag: "EVENT & VIP",
  },
  {
    id: "hook-configs-system",
    imageSrc: "/images/idgen-event-card-one-hook-two-hook-configuration.jpg",
    alt: "Comparison of single hook vs dual hook lanyard attachment setups by IDGen",
    title: "1-Hook & 2-Hook Attachment System",
    category: "Multi-Option",
    topBadge: "Hardware System",
    specPill: "Fish Hook & Swivel",
    bottomSpec: "Universal Compatibility • Standard Slot / Double Slot Holders",
    hubTag: "ALL CONFIGS",
  },
  {
    id: "hook-ultrasonic-weld",
    imageSrc: "/images/idgen-ultrasonic-lanyard-sealing.jpg",
    alt: "Ultrasonic welded hook attachment on custom printed satin lanyard ribbon",
    title: "Ultrasonic Welded Hook Connection",
    category: "Acoustic Seal",
    topBadge: "Acoustic Bond",
    specPill: "Zero Sharp Staples",
    bottomSpec: "Smooth Fused Loop • High Strength Joint • Dog Hook",
    hubTag: "CLEAN FINISH",
  },
  {
    id: "hook-bulk-warehouse",
    imageSrc: "/images/id-holders-hooks.jpg",
    alt: "Wholesale bulk supply of ID card hooks and hardware accessories in Guwahati",
    title: "Wholesale Bulk Factory Supply",
    category: "Wholesale",
    topBadge: "Ready Factory Stock",
    specPill: "25,000+ Units Ready",
    bottomSpec: "Swivel Hooks • Fish Hooks • Keyrings • Express 72h Dispatch",
    hubTag: "READY STOCK",
  },
];

export function HookHeroCarousel({ slides }: { slides?: HookSlide[] }) {
  const activeSlides = slides && slides.length > 0 ? slides : hookSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Guard against index out of range if slides count changes dynamically
  useEffect(() => {
    if (currentIndex >= activeSlides.length) {
      setCurrentIndex(0);
    }
  }, [activeSlides.length, currentIndex]);

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

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      nextSlide();
      setTouchStart(null);
    } else if (diff < -50) {
      prevSlide();
      setTouchStart(null);
    }
  };

  const currentSlide = activeSlides[currentIndex] || activeSlides[0];

  if (!currentSlide) return null;

  return (
    <div
      className="relative mx-auto max-w-lg lg:max-w-none w-full select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Glowing Ambient Background Halo */}
      <div className="pointer-events-none absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-[#009fe3]/30 via-cyan-400/25 to-blue-600/30 blur-2xl opacity-80 dark:opacity-95 transition-all duration-700" />

      {/* Main Carousel Frame with 1:1 Aspect Ratio */}
      <div className="group relative aspect-square w-full overflow-hidden rounded-[2rem] border-2 border-slate-200/90 dark:border-cyan-500/30 bg-slate-100 dark:bg-[#09111e] shadow-2xl shadow-[#009fe3]/15 transition-all duration-500 hover:border-[#009fe3]/50">
        {/* Slides Images Stack with Smooth Crossfade */}
        {activeSlides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.alt}
                title={slide.title}
                fill
                unoptimized
                priority={idx < 2}
                className="object-contain object-center p-3 sm:p-5 transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          );
        })}

        {/* Left / Right Arrow Controls */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 shadow-lg cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 shadow-lg cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide Thumbnails & Quick Navigator (Under Showcase) */}
      <div className="mt-3.5 grid grid-cols-5 gap-2 px-1">
        {activeSlides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={`group/thumb relative aspect-square overflow-hidden rounded-xl border transition-all duration-300 ${
                isActive
                  ? "border-[#009fe3] ring-2 ring-[#009fe3]/40 scale-105 shadow-md shadow-[#009fe3]/20"
                  : "border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100 hover:border-[#009fe3]/50"
              }`}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.title}
                fill
                unoptimized
                className="object-contain p-1"
                sizes="(max-width: 640px) 20vw, 80px"
              />
              <div
                className={`absolute inset-0 transition-colors ${
                  isActive
                    ? "bg-[#009fe3]/10"
                    : "bg-black/20 group-hover/thumb:bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
