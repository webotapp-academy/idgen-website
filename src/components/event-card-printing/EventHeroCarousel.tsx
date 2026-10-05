"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  Ticket,
  Pause,
  Play,
} from "lucide-react";

export interface EventHeroSlide {
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

const eventHeroSlides: EventHeroSlide[] = [
  {
    id: "event-vip-summit",
    imageSrc: "/images/idgen-custom-event-card-printing.jpg",
    alt: "Global Tech Summit 2026 VIP Delegate Pass printed by IDGen",
    title: "VIP Conference & Summit Badges",
    category: "Conference VIP",
    topBadge: "VIP Conference Pass",
    specPill: "Dual Swivel Hooks",
    bottomSpec: "Aravind Sharma • VIP Delegate • Global Tech Summit",
    hubTag: "SUMMIT READY",
  },
  {
    id: "event-badge-showcase",
    imageSrc: "/images/hero-slide-event-badge.jpg",
    alt: "VIP Conference Delegate Pass with holographic foil and satin lanyard",
    title: "Holographic Event Badges & Passes",
    category: "Executive Events",
    topBadge: "Executive Summit",
    specPill: "Holographic Security",
    bottomSpec: "Express 48h Delivery • Anti-Counterfeit Foil",
    hubTag: "EXPRESS DISPATCH",
  },
  {
    id: "event-two-hook-config",
    imageSrc: "/images/idgen-event-card-one-hook-two-hook-configuration.jpg",
    alt: "Single hook and dual hook event badge configurations by IDGen",
    title: "Single & Dual Hook Configurations",
    category: "Hook Formats",
    topBadge: "1-Hook / 2-Hook Options",
    specPill: "Anti-Twist Double Hook",
    bottomSpec: "No-Flip Dual Hook • Ultrasonic Sealed Lanyards",
    hubTag: "ZERO TWIST",
  },
  {
    id: "event-categories",
    imageSrc: "/images/idgen-event-badge-categories.jpg",
    alt: "Color-coded attendee categories for Delegate Speaker VIP Organizer and Sponsor",
    title: "Color-Coded Attendee Categories",
    category: "Multi-Role Access",
    topBadge: "Role-Based Badges",
    specPill: "Color-Coded Categories",
    bottomSpec: "Delegate • Speaker • VIP • Organizer • Sponsor • Press",
    hubTag: "GUWAHATI HUB",
  },
  {
    id: "event-exhibition-seminar",
    imageSrc: "/images/event-card-printing-lanyard-idgen.jpg",
    alt: "Exhibition, trade show and seminar attendee badges with custom printed lanyards",
    title: "Exhibitions & Seminar Badge Sets",
    category: "Trade Expos",
    topBadge: "Expo & Trade Shows",
    specPill: "Bulk Fast Turnaround",
    bottomSpec: "Personalized Attendee QR Codes • Onsite Scanning",
    hubTag: "ALL-IN-ONE",
  },
];

export interface EventHeroCarouselProps {
  slides?: EventHeroSlide[];
}

export function EventHeroCarousel({ slides: initialSlides }: EventHeroCarouselProps = {}) {
  const slides =
    initialSlides && initialSlides.length > 0 ? initialSlides : eventHeroSlides;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

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

  const currentSlide = slides[currentIndex] || slides[0];

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
        {slides.map((slide, idx) => {
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
          aria-label="Previous event badge image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#009fe3] hover:text-white shadow-lg cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next event badge image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#009fe3] hover:text-white shadow-lg cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide Thumbnails & Quick Navigator (Under Showcase) */}
      <div className="mt-3.5 grid grid-cols-5 gap-2 px-1">
        {slides.map((slide, idx) => {
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
