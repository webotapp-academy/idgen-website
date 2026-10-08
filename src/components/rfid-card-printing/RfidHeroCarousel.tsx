"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  ShieldCheck,
  Cpu,
  Zap,
  Pause,
  Play,
} from "lucide-react";

export interface RfidSlide {
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

const rfidSlides: RfidSlide[] = [
  {
    id: "rfid-smart-access",
    imageSrc: "/images/rfid-hero-slide-smart-access.jpg",
    alt: "IDGen 13.56 MHz Contactless RFID Smart Card with embedded microchip antenna inlay",
    title: "13.56 MHz RFID Smart Identity Cards",
    category: "Smart Access",
    topBadge: "Smart Contactless",
    specPill: "Mifare 1K / TK4100",
    bottomSpec: "Dual Function • Visual ID + RFID Smart Antenna",
    hubTag: "GUWAHATI HUB",
  },
  {
    id: "rfid-turnstile-tap",
    imageSrc: "/images/rfid-hero-slide-turnstile-tap.jpg",
    alt: "IDGen RFID smart card tapping against high-speed corporate turnstile access reader",
    title: "Instant Turnstile & Attendance Sync",
    category: "Access Control",
    topBadge: "Turnstile Tap Ready",
    specPill: "NFC / High-Speed Read",
    bottomSpec: "Zero-Latency Tap • Campus Gates • Attendance Readers",
    hubTag: "ZERO MISMATCH",
  },
  {
    id: "rfid-nfc-credentials",
    imageSrc: "/images/rfid-nfc-credentials.jpg",
    alt: "Custom printed RFID and NFC smart cards for corporate and institutional identity by IDGen",
    title: "Dual Frequency & Encrypted Chips",
    category: "Inlay Technology",
    topBadge: "Encrypted Inlays",
    specPill: "125 kHz & 13.56 MHz",
    bottomSpec: "EM4100 • Mifare Classic • NTAG213 • DesFire",
    hubTag: "CHIP TESTED",
  },
  {
    id: "rfid-complete-set",
    imageSrc: "/images/idgen-rfid-id-card-printing.jpg",
    alt: "Complete wearable RFID identification setup with card, hard acrylic holder, and custom lanyard",
    title: "Complete Wearable RFID Set",
    category: "Wearable Suite",
    topBadge: "Complete Wearable Set",
    specPill: "Holder + Lanyard + Hook",
    bottomSpec: "RFID Smart Card • Polycarbonate Case • Satin Lanyard",
    hubTag: "ALL-IN-ONE",
  },
  {
    id: "rfid-bulk-batch",
    imageSrc: "/images/bulk-rfid-card-printing.jpg",
    alt: "Institutional bulk RFID card printing and chip encoding batch production by IDGen",
    title: "Institutional Bulk Batch Encoding",
    category: "High Volume",
    topBadge: "Bulk Batch Ready",
    specPill: "10,000+ Daily Capacity",
    bottomSpec: "Pre-Encoded UID • Sequential Numbering • Express Dispatch",
    hubTag: "COURIER DISPATCH",
  },
];

export function RfidHeroCarousel({ slides }: { slides?: RfidSlide[] }) {
  const activeSlides = slides && slides.length > 0 ? slides : rfidSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Keep index within bounds if slides length changes
  useEffect(() => {
    if (currentIndex >= activeSlides.length) {
      setCurrentIndex(0);
    }
  }, [activeSlides.length, currentIndex]);

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
              key={slide.id || idx}
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
          aria-label="Previous RFID slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#009fe3] hover:text-white shadow-lg cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next RFID slide"
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
              key={slide.id || idx}
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
