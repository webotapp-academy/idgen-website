"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  Tag,
  Pause,
  Play,
} from "lucide-react";

export interface LanyardHeroSlide {
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

const lanyardHeroSlides: LanyardHeroSlide[] = [
  {
    id: "lanyard-20mm-satin",
    imageSrc: "/images/lanyard-hero-slide-20mm-satin.jpg",
    alt: "20mm custom printed satin lanyard with crisp idGen branding, chrome hook and acrylic card holder",
    title: "20 mm Premium Custom Printed Satin Lanyard",
    category: "20 mm Satin",
    topBadge: "20 mm Satin Lanyards",
    specPill: "Sublimation Print",
    bottomSpec: "Vibrant HD Print • Repeating Logo • Chrome Swivel Hook",
    hubTag: "GUWAHATI FACTORY",
  },
  {
    id: "lanyard-multicolor",
    imageSrc: "/images/lanyard-hero-slide-multicolor-array.jpg",
    alt: "Assorted corporate color custom printed satin lanyards made by idGen",
    title: "Multi-Color Corporate Brand Match",
    category: "Color Palette",
    topBadge: "Multi-Color Matching",
    specPill: "Pantone Accurate",
    bottomSpec: "Royal Blue • Teal • Emerald • Crimson • Black",
    hubTag: "ASSAM DIRECT",
  },
  {
    id: "lanyard-ultrasonic",
    imageSrc: "/images/lanyard-hero-slide-ultrasonic-sealed.jpg",
    alt: "Ultrasonic acoustic welded seam attachment on custom printed lanyard by idGen",
    title: "Ultrasonic Welded Hook Attachment",
    category: "Ultrasonic Sealing",
    topBadge: "Ultrasonic Welded Joint",
    specPill: "Zero Metal Staple",
    bottomSpec: "Acoustic Fusion • High Tensile Bond • Dog Hook",
    hubTag: "ZERO TEAR",
  },
  {
    id: "lanyard-complete-kit",
    imageSrc: "/images/20mm-custom-printed-lanyard-branding.jpg",
    alt: "20mm custom printed lanyard branding setup with hard acrylic holder and ID card by idGen",
    title: "Wearable ID Kit & Lanyard Integration",
    category: "Full Kit",
    topBadge: "Full Wearable Kit",
    specPill: "Card + Holder + Lanyard",
    bottomSpec: "Oxford & Globex Specimens • Single & Dual Hook",
    hubTag: "ALL-IN-ONE",
  },
  {
    id: "lanyard-bulk-production",
    imageSrc: "/images/bulk-custom-lanyard-printing-idgen.jpg",
    alt: "High volume bulk custom lanyard printing and spool production by idGen",
    title: "Institutional Bulk Lanyard Production",
    category: "Bulk Volume",
    topBadge: "Bulk Batch Ready",
    specPill: "5,000+ Daily Capacity",
    bottomSpec: "Schools • Universities • Summits • Corporate Offices",
    hubTag: "EXPRESS DISPATCH",
  },
];

export function LanyardHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % lanyardHeroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + lanyardHeroSlides.length) % lanyardHeroSlides.length
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

  const currentSlide = lanyardHeroSlides[currentIndex];

  return (
    <div
      className="relative mx-auto max-w-lg lg:max-w-none w-full select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Glowing Ambient Background Halo */}
      <div className="pointer-events-none absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-[#009fe3]/30 via-cyan-400/25 to-blue-600/30 blur-2xl opacity-80 dark:opacity-95 transition-all duration-700" />

      {/* Main Carousel Frame with 1:1 Aspect Ratio matching home page */}
      <div className="group relative aspect-square w-full overflow-hidden rounded-[2rem] border-2 border-slate-200/90 dark:border-cyan-500/30 bg-white dark:bg-[#09111e] shadow-2xl shadow-[#009fe3]/15 transition-all duration-500 hover:border-[#009fe3]/50">
        {/* Slides Images Stack with Smooth Crossfade */}
        {lanyardHeroSlides.map((slide, idx) => {
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20 pointer-events-none" />
            </div>
          );
        })}

        {/* Top-Left Floating Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 text-xs font-extrabold text-white shadow-xl transition-all">
          <Tag className="h-3.5 w-3.5 text-cyan-400" />
          <span>{currentSlide.topBadge}</span>
        </div>

        {/* Top-Right Floating Spec Badge */}
        <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white shadow-xl transition-all">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span>{currentSlide.specPill}</span>
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
          aria-label="Previous lanyard image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#009fe3] hover:text-white shadow-lg cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next lanyard image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#009fe3] hover:text-white shadow-lg cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Bottom Pagination Indicators */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1.5 border border-white/20 shadow-lg">
          {lanyardHeroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-6 bg-[#009fe3] shadow-sm shadow-[#009fe3]/50"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            className="ml-1 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          </button>
        </div>
      </div>

      {/* Slide Thumbnails & Quick Navigator (Under Showcase) */}
      <div className="mt-3.5 grid grid-cols-5 gap-2 px-1">
        {lanyardHeroSlides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={`group/thumb relative aspect-square overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer ${
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
