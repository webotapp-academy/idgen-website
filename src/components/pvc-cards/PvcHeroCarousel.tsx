"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  CreditCard,
  Pause,
  Play,
} from "lucide-react";

export interface PvcSlide {
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

const pvcSlides: PvcSlide[] = [
  {
    id: "pvc-cr80-virgin",
    imageSrc: "/images/product-pvc-cards.jpg",
    alt: "IDGen CR80 30-mil virgin PVC cards for student and corporate identification",
    title: "30-Mil CR80 Virgin White Core Cards",
    category: "Virgin PVC",
    topBadge: "CR80 30-Mil Bank Grade",
    specPill: "100% Virgin Core",
    bottomSpec: "85.6 × 54.0 mm • 0.76mm Thickness • Mirror Gloss Finish",
    hubTag: "GUWAHATI FACTORY",
  },
  {
    id: "pvc-custom-hd-print",
    imageSrc: "/images/custom-pvc-id-card-printing-idgen.jpg",
    alt: "Custom PVC ID card printing with high definition dye-sublimation by IDGen",
    title: "High-Definition 300 DPI Sublimation",
    category: "HD Print",
    topBadge: "Vibrant Print Series",
    specPill: "Dye-Sublimation",
    bottomSpec: "True-to-Life Colors • Sharp Barcodes • Holographic Overlay",
    hubTag: "ASSAM DIRECT",
  },
  {
    id: "pvc-institutional-cards",
    imageSrc: "/images/PVC-ID-Card-Printing-for-Organizations.png",
    alt: "Institutional PVC ID card printing for schools, colleges and companies by IDGen",
    title: "Enterprise & Campus Identity Cards",
    category: "Institutional",
    topBadge: "Institutional IDs",
    specPill: "Anti-Delamination",
    bottomSpec: "Student IDs • Staff Cards • Healthcare • Membership Badges",
    hubTag: "ZERO MISMATCH",
  },
  {
    id: "pvc-rfid-smart-chips",
    imageSrc: "/images/service-pvc-id-card-printing-v3.jpg",
    alt: "Contactless RFID and NFC smart chips embedded in 30-mil PVC cards by IDGen",
    title: "RFID / NFC Smart Campus Badges",
    category: "Smart Chips",
    topBadge: "Mifare 13.56 MHz",
    specPill: "Turnstile Access",
    bottomSpec: "1K S50 / TK4100 / NTAG213 • Contactless Attendance Sync",
    hubTag: "SMART RFID",
  },
  {
    id: "pvc-corporate-executive",
    imageSrc: "/images/id-card-hero-corporate-pvc.jpg",
    alt: "Corporate executive PVC ID card in acrylic case with printed lanyard by IDGen",
    title: "Executive Corporate PVC Credentials",
    category: "Full Suite",
    topBadge: "Ready Factory Stock",
    specPill: "10,000+ Daily Capacity",
    bottomSpec: "Ready Stock in Guwahati • 24–48h Dispatch Across 8 NE States",
    hubTag: "EXPRESS DISPATCH",
  },
];

export function PvcHeroCarousel({ slides }: { slides?: PvcSlide[] } = {}) {
  const activeSlides = slides && slides.length > 0 ? slides : pvcSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const safeIndex = currentIndex < activeSlides.length ? currentIndex : 0;

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

  const currentSlide = activeSlides[safeIndex] || activeSlides[0];

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
          const isActive = idx === safeIndex;
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
          const isActive = idx === safeIndex;
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
