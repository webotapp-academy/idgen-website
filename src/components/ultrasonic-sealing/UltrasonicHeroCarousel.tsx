"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  ShieldCheck,
  Pause,
  Play,
} from "lucide-react";

export interface UltrasonicSlide {
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

const ultrasonicSlides: UltrasonicSlide[] = [
  {
    id: "ultrasonic-single-seal",
    imageSrc: "/images/idgen-ultrasonic-lanyard-sealing.jpg",
    alt: "IDGen single hook ultrasonic acoustic welded lanyard attachment with zero metal staples",
    title: "Single-Hook Ultrasonic Acoustic Fusion",
    category: "1-Point Seal",
    topBadge: "Acoustic Fusion Weld",
    specPill: "Zero Metal Staples",
    bottomSpec: "IDGen Acoustic Weld • High Tensile Bond • Dog Hook",
    hubTag: "GUWAHATI FACTORY",
  },
  {
    id: "ultrasonic-dual-hook",
    imageSrc: "/images/two-hook-ultrasonic-lanyard-sealing.jpg",
    alt: "IDGen dual hook ultrasonic sealing for conference and event lanyard badge attachments",
    title: "Two-Hook Ultrasonic Welded Configuration",
    category: "2-Point Seal",
    topBadge: "Dual-Hook Sealing",
    specPill: "Anti-Twist Stability",
    bottomSpec: "Dual Acoustic Welds • Wide Badge Balanced Carry",
    hubTag: "EVENT & VIP PASS",
  },
  {
    id: "ultrasonic-precision-seam",
    imageSrc: "/images/lanyard-hero-slide-ultrasonic-sealed.jpg",
    alt: "IDGen ultrasonic welded seam on custom printed satin lanyard ribbon with seamless joint",
    title: "Precision High-Frequency Acoustic Weld",
    category: "Weld Detail",
    topBadge: "Acoustic Bond Tech",
    specPill: "Skin-Friendly Finish",
    bottomSpec: "High-Frequency Vibration • Zero Scratch Fabric Fusion",
    hubTag: "ZERO TEAR",
  },
  {
    id: "ultrasonic-complete-kit",
    imageSrc: "/images/complete-id-card-lanyard-ultrasonic-sealing.jpg",
    alt: "Complete IDGen identification set with card, holder, hook and ultrasonic sealed lanyard",
    title: "Complete Integrated ID Badge Assembly",
    category: "Full System",
    topBadge: "Full ID Ecosystem",
    specPill: "Ready-to-Wear Kit",
    bottomSpec: "Card + Holder + Hook + Ultrasonic Sealed Lanyard",
    hubTag: "ALL-IN-ONE",
  },
  {
    id: "ultrasonic-vs-metal",
    imageSrc: "/images/ultrasonic-sealing-vs-metal-lanyard-attachment.jpg",
    alt: "IDGen ultrasonic sealed attachment compared with conventional exposed metal attachments",
    title: "Acoustic Fusion vs Metal Hardware",
    category: "Clean Finish",
    topBadge: "Clean vs Traditional",
    specPill: "Corrosion-Free",
    bottomSpec: "No Sharp Crimps • No Surface Rust • Modern Aesthetic",
    hubTag: "PREMIUM FINISH",
  },
];

export function UltrasonicHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % ultrasonicSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + ultrasonicSlides.length) % ultrasonicSlides.length
    );
  }, []);

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

  const currentSlide = ultrasonicSlides[currentIndex];

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
        {ultrasonicSlides.map((slide, idx) => {
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
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />
            </div>
          );
        })}

        {/* Top-Left Floating Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 text-xs font-extrabold text-white shadow-xl transition-all">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{currentSlide.topBadge}</span>
        </div>

        {/* Top-Right Floating Brand & Spec Badge */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-cyan-300 shadow-xl transition-all">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>{currentSlide.specPill}</span>
          </div>
          <span className="rounded-full bg-[#009fe3] px-3.5 py-1.5 text-xs font-black text-white shadow-lg border border-white/20">
            IDGen
          </span>
        </div>

        {/* Bottom Floating Spec Bar */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-2 rounded-2xl border border-white/25 bg-slate-950/90 backdrop-blur-md p-3 text-white shadow-2xl transition-all">
          <div className="flex items-center gap-2 min-w-0">
            <Radio className="h-4 w-4 text-cyan-400 shrink-0" />
            <span className="text-xs font-bold truncate text-slate-100">
              {currentSlide.bottomSpec}
            </span>
          </div>
          <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 bg-cyan-950/90 px-2.5 py-1 rounded-lg border border-cyan-500/40 shadow-sm">
            {currentSlide.hubTag}
          </span>
        </div>

        {/* Left / Right Arrow Controls */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Bottom Pagination Indicators */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1.5 border border-white/20 shadow-lg">
          {ultrasonicSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-6 bg-cyan-400 shadow-sm shadow-cyan-400/50"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            className="ml-1 text-slate-300 hover:text-cyan-300 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-3 w-3" />
            ) : (
              <Play className="h-3 w-3" />
            )}
          </button>
        </div>
      </div>

      {/* Slide Thumbnails & Quick Navigator (Under Showcase) */}
      <div className="mt-3.5 grid grid-cols-5 gap-2 px-1">
        {ultrasonicSlides.map((slide, idx) => {
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
                className="object-cover"
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
