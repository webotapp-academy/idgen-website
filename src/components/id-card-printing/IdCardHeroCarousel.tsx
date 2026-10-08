"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  ShieldCheck,
  Layers,
  Award,
  Pause,
  Play,
  CheckCircle2,
  Zap,
} from "lucide-react";

export interface IdCardSlide {
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

const idCardSlides: IdCardSlide[] = [
  {
    id: "corporate-pvc",
    imageSrc: "/images/id-card-hero-corporate-pvc.jpg",
    alt: "Custom PVC ID Card for corporate employees printed by IDGen with precision personalization",
    title: "Corporate PVC Employee ID Cards",
    category: "Corporate",
    topBadge: "Corporate Identity",
    specPill: "30-Mil Gloss PVC",
    bottomSpec: "Sarah Jenkins • IDG-84950 • QR & Mag Stripe",
    hubTag: "GUWAHATI HUB",
  },
  {
    id: "student-id",
    imageSrc: "/images/id-card-hero-student-id.jpg",
    alt: "Institutional Student ID Card printed by IDGen for schools, colleges and universities",
    title: "Student & University Campus Cards",
    category: "Education",
    topBadge: "School & University",
    specPill: "QR Campus Pass",
    bottomSpec: "Alex Rivera • IDG-ST-2026 • Hologram Crest",
    hubTag: "ASSAM DIRECT",
  },
  {
    id: "rfid-smart",
    imageSrc: "/images/id-card-hero-rfid-smart.jpg",
    alt: "Contactless RFID / NFC Smart Identity Card for turnstile access control printed by IDGen",
    title: "13.56 MHz RFID Smart Access Badges",
    category: "Smart Access",
    topBadge: "Smart Contactless",
    specPill: "13.56MHz / 125kHz",
    bottomSpec: "Rohan Das • IDG-RFID-7701 • NFC Turnstile Tap",
    hubTag: "ZERO MISMATCH",
  },
  {
    id: "complete-kit",
    imageSrc: "/images/id-card-hero-complete-kit.jpg",
    alt: "Complete Modular ID Kit with ID Card, Hard Acrylic Holder, Swivel Hook, and Custom Lanyard by IDGen",
    title: "Complete Modular Wearable Set",
    category: "Healthcare & Staff",
    topBadge: "Complete Wearable Set",
    specPill: "Card + Holder + Reel",
    bottomSpec: "Dr. Priya Sharma • Acrylic Case + Satin Lanyard",
    hubTag: "ALL-IN-ONE",
  },
  {
    id: "bulk-batch",
    imageSrc: "/images/id-card-hero-bulk-batch.jpg",
    alt: "High-volume bulk PVC ID cards batch production with variable data and barcodes printed by IDGen",
    title: "Institutional Bulk Batch Production",
    category: "High Volume",
    topBadge: "Bulk Batch Ready",
    specPill: "10,000+ Daily Capacity",
    bottomSpec: "Multi-Design Batches • Barcodes • Fast Turnaround",
    hubTag: "COURIER DISPATCH",
  },
];

export function IdCardHeroCarousel({ slides }: { slides?: IdCardSlide[] }) {
  const activeSlides = slides && slides.length > 0 ? slides : idCardSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  }, [activeSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
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

      {/* Main Carousel Frame with 1:1 Aspect Ratio */}
      <div className="group relative aspect-square w-full overflow-hidden rounded-[2rem] border-2 border-slate-200/90 dark:border-cyan-500/30 bg-white dark:bg-[#09111e] shadow-2xl shadow-[#009fe3]/15 transition-all duration-500 hover:border-[#009fe3]/50">
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
          aria-label="Previous card image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#009fe3] hover:text-white shadow-lg cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next card image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#009fe3] hover:text-white shadow-lg cursor-pointer"
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
                  isActive ? "bg-[#009fe3]/10" : "bg-black/20 group-hover/thumb:bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
