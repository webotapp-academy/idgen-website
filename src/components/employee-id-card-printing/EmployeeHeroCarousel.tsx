"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  Briefcase,
  Pause,
  Play,
} from "lucide-react";

export interface EmployeeHeroSlide {
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

const employeeHeroSlides: EmployeeHeroSlide[] = [
  {
    id: "executive-id",
    imageSrc: "/images/employee-hero-slide-executive-id.jpg",
    alt: "Executive corporate employee ID card with holographic seal and custom satin lanyard manufactured by IDGen",
    title: "Executive Corporate Employee ID Cards",
    category: "Executive",
    topBadge: "Executive ID Badge",
    specPill: "Holographic Seal",
    bottomSpec: "Arjun Mehta • Chief Technology Officer • QR Pass",
    hubTag: "GUWAHATI HUB",
  },
  {
    id: "corporate-set",
    imageSrc: "/images/employee-hero-slide-corporate-set.jpg",
    alt: "Corporate employee ID cards with metal clips and custom printed satin lanyards made by IDGen",
    title: "Enterprise Staff & Office Credentials",
    category: "Corporate",
    topBadge: "Corporate Staff ID",
    specPill: "30-Mil Gloss PVC",
    bottomSpec: "Sarah Jenkins • Senior Software Engineer • Dept Sets",
    hubTag: "ASSAM DIRECT",
  },
  {
    id: "rfid-access",
    imageSrc: "/images/employee-hero-slide-rfid-access.jpg",
    alt: "Contactless 13.56 MHz RFID smart employee ID card tapping turnstile access control reader",
    title: "13.56 MHz RFID / NFC Access Badges",
    category: "Smart Access",
    topBadge: "Smart Turnstile Tap",
    specPill: "13.56 MHz RFID",
    bottomSpec: "Priya Sen • Senior Product Manager • Turnstile Sync",
    hubTag: "ZERO MISMATCH",
  },
  {
    id: "modular-kit",
    imageSrc: "/images/employee-hero-slide-modular-kit.jpg",
    alt: "Complete modular corporate wearable set with ID card, holder, retractable reel and custom lanyard by IDGen",
    title: "Complete Modular Wearable ID Kit",
    category: "Modular Kit",
    topBadge: "Complete Wearable Set",
    specPill: "Retractable Reel",
    bottomSpec: "Alex Chen • Smoked Case + Reel + Satin Lanyard",
    hubTag: "ALL-IN-ONE",
  },
  {
    id: "bulk-batch",
    imageSrc: "/images/employee-hero-slide-bulk-batch.jpg",
    alt: "High-volume bulk batch corporate employee ID cards printed with variable photos and department codes by IDGen",
    title: "Workforce Bulk Batch Production",
    category: "Bulk Batch",
    topBadge: "Bulk Workforce Ready",
    specPill: "10,000+ Daily Capacity",
    bottomSpec: "Multi-Department Batches • Barcodes • Fast Dispatch",
    hubTag: "COURIER DISPATCH",
  },
];

export interface EmployeeHeroCarouselProps {
  slides?: EmployeeHeroSlide[];
}

export function EmployeeHeroCarousel({ slides: initialSlides }: EmployeeHeroCarouselProps) {
  const slides = (initialSlides && initialSlides.length > 0) ? initialSlides : employeeHeroSlides;
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
          aria-label="Previous employee ID image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#009fe3] hover:text-white shadow-lg cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next employee ID image"
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
