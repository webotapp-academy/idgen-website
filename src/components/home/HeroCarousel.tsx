"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Radio, ShieldCheck, Layers, Award, Pause, Play } from "lucide-react";

export interface HeroSlide {
  id: string;
  imageSrc: string;
  alt: string;
  title: string;
  category: string;
  topBadge: string;
  topBadgeColor?: string;
  specPill: string;
  bottomSpec: string;
  hubTag: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "cards-showcase",
    imageSrc: "/images/idgen-hero-cards-showcase.jpg",
    alt: "Custom ID cards and printed lanyards showcase featuring Student ID, Corporate Staff ID, and RFID Smart Card",
    title: "Complete ID Cards & Printed Lanyards",
    category: "Full Suite",
    topBadge: "ID Card Showcase",
    specPill: "Custom Printed Lanyards",
    bottomSpec: "Student IDs • Corporate Cards • RFID Access",
    hubTag: "GUWAHATI HUB",
  },
  {
    id: "corporate-id",
    imageSrc: "/images/hero-slide-corporate-id.jpg",
    alt: "Corporate Executive Employee ID card with retractable badge reel and RFID chip",
    title: "Corporate Staff & Enterprise IDs",
    category: "Corporate",
    topBadge: "Corporate Identity",
    specPill: "Retractable Reel",
    bottomSpec: "Smart RFID Chip • Smoked Acrylic Case",
    hubTag: "ASSAM DIRECT",
  },
  {
    id: "event-badge",
    imageSrc: "/images/hero-slide-event-badge.jpg",
    alt: "VIP Conference Delegate Pass with holographic security foil and dual swivel hooks",
    title: "VIP Event Passes & Delegate Badges",
    category: "Conferences",
    topBadge: "VIP Event Pass",
    specPill: "Dual Chrome Hooks",
    bottomSpec: "Holographic Foil • Express 72h Dispatch",
    hubTag: "SUMMIT READY",
  },
  {
    id: "modular-assembly",
    imageSrc: "/images/hero-slide-modular-assembly.jpg",
    alt: "Complete Modular ID System breakdown: PVC Card, Holder, Chrome Hook, and Lanyard",
    title: "Complete Modular ID System",
    category: "All-in-One",
    topBadge: "Complete Wearable Set",
    specPill: "Ultrasonic Sealed",
    bottomSpec: "Card + Holder + Hook + Custom Lanyard",
    hubTag: "ALL-IN-ONE",
  },
  {
    id: "rfid-smart",
    imageSrc: "/images/hero-slide-rfid-smart.jpg",
    alt: "Contactless 13.56 MHz RFID Smart Card tapping electronic turnstile access reader",
    title: "RFID / NFC Smart Campus Badges",
    category: "Smart Access",
    topBadge: "Smart Contactless",
    specPill: "13.56 MHz RFID",
    bottomSpec: "NFC Access & Attendance Turnstile Sync",
    hubTag: "ZERO MISMATCH",
  },
];

export function HeroCarousel({ slides: incomingSlides }: { slides?: HeroSlide[] } = {}) {
  const slides = incomingSlides && incomingSlides.length > 0 ? incomingSlides : heroSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
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
      <div className="pointer-events-none absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-accent/30 via-cyan-400/25 to-blue-600/30 blur-2xl opacity-80 dark:opacity-95 transition-all duration-700" />

      {/* Main Carousel Frame with 1:1 Aspect Ratio */}
      <div className="group relative aspect-square w-full overflow-hidden rounded-[2rem] border-2 border-surface-border dark:border-cyan-500/30 bg-surface dark:bg-[#09111e] shadow-2xl shadow-accent/15 transition-all duration-500 hover:border-accent/50">
        
        {/* Slides Images Stack with Smooth Crossfade */}
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id || idx}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.alt || slide.title}
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
      <div 
        className="mt-3.5 grid gap-2 px-1"
        style={{ gridTemplateColumns: `repeat(${Math.min(slides.length, 6)}, minmax(0, 1fr))` }}
      >
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id || idx}
              onClick={() => goToSlide(idx)}
              className={`group/thumb relative aspect-square overflow-hidden rounded-xl border transition-all duration-300 ${
                isActive
                  ? "border-accent ring-2 ring-accent/40 scale-105 shadow-md shadow-accent/20"
                  : "border-surface-border opacity-60 hover:opacity-100 hover:border-accent/50"
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
              <div className={`absolute inset-0 transition-colors ${
                isActive ? "bg-accent/10" : "bg-black/20 group-hover/thumb:bg-transparent"
              }`} />
            </button>
          );
        })}
      </div>

    </div>
  );
}
