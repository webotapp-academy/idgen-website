"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  Award,
  Pause,
  Play,
} from "lucide-react";

export interface MedalSlide {
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

const medalSlides: MedalSlide[] = [
  {
    id: "medal-championship-3d",
    imageSrc: "/images/product-zinc-medals.jpg",
    alt: "IDGen 3D high-relief die-cast zinc championship medals with custom neck ribbons",
    title: "3D Die-Cast Eco Zinc Championship Medals",
    category: "Championship",
    topBadge: "3D Die-Cast Zinc",
    specPill: "Antique Gold / Silver",
    bottomSpec: "High-Density Zinc Alloy • Deep 3D Relief • Sublimated Ribbon",
    hubTag: "GUWAHATI FACTORY",
  },
  {
    id: "medal-sports-tournament",
    imageSrc: "/images/Zinc Medal/1f4d1eda-3be4-44cf-a700-3288b93f849f.jpg",
    alt: "IDGen sports tournament and marathon die-cast medal awards",
    title: "Tournament & Sports Victory Awards",
    category: "Sports & Athletics",
    topBadge: "Victory Series",
    specPill: "Custom Ribbon Loop",
    bottomSpec: "Gold, Silver & Bronze Sets • Satin Neck Lanyards • Heavyweight Feel",
    hubTag: "ASSAM DIRECT",
  },
  {
    id: "medal-marathon-custom",
    imageSrc: "/images/Zinc Medal/20dfd541-e04b-4fc4-944f-5127c3b4ec2e.jpg",
    alt: "IDGen marathon finisher and institutional custom shaped zinc medals",
    title: "Marathon & Academic Honor Medals",
    category: "Custom Shape",
    topBadge: "Finisher Medals",
    specPill: "Custom Contour 2D/3D",
    bottomSpec: "High-Relief Engraving • Anti-Tarnish Coating • Custom Ribbon",
    hubTag: "SUMMIT READY",
  },
  {
    id: "medal-award-sets",
    imageSrc: "/images/Zinc Medal/IMG20260213095826.jpg.jpeg",
    alt: "Complete gold, silver and bronze zinc medal award collection by IDGen",
    title: "Complete Gold / Silver / Bronze Sets",
    category: "Podium Trio",
    topBadge: "Podium Award Set",
    specPill: "1st, 2nd & 3rd Place",
    bottomSpec: "Tri-Color Plating Sets • Custom Event Branding • Direct Factory Supply",
    hubTag: "PODIUM SETS",
  },
  {
    id: "medal-precision-diecast",
    imageSrc: "/images/Zinc Medal/madl.png",
    alt: "Precision die-cast eco zinc alloy medal design rendering by IDGen",
    title: "Precision Vector Proof & Die-Casting",
    category: "Engineering",
    topBadge: "Free 3D Digital Proof",
    specPill: "Eco Zinc Alloy",
    bottomSpec: "Zero Lead/Cadmium • Scratch-Resistant Enamel • 72h Dispatch",
    hubTag: "EXPRESS DISPATCH",
  },
];

export function MedalHeroCarousel({ slides }: { slides?: MedalSlide[] } = {}) {
  const activeSlides = slides && slides.length > 0 ? slides : medalSlides;
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
