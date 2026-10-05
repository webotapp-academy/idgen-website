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

export interface MembershipSlide {
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

const membershipSlides: MembershipSlide[] = [
  {
    id: "membership-custom-pvc",
    imageSrc: "/images/idgen-custom-membership-card-printing.jpg",
    alt: "Custom PVC membership cards printed by IDGen for clubs, gyms, and associations",
    title: "Premium PVC Membership Cards",
    category: "Club & Society",
    topBadge: "PVC Membership Card",
    specPill: "CR80 30-Mil Standard",
    bottomSpec: "High-Gloss PVC • Vibrant Color • Member Photo & ID",
    hubTag: "GUWAHATI HUB",
  },
  {
    id: "membership-designs-array",
    imageSrc: "/images/idgen-membership-card-designs-club-gym-association.png",
    alt: "Assorted membership card designs for fitness gyms, golf clubs, and professional associations by IDGen",
    title: "Club, Gym & Association Designs",
    category: "Custom Branding",
    topBadge: "Multi-Category Pass",
    specPill: "Gold / Silver Tiers",
    bottomSpec: "Tier Badging • VIP Access • Membership Expiry Dates",
    hubTag: "CUSTOM DESIGN",
  },
  {
    id: "membership-qr-barcode",
    imageSrc: "/images/idgen-membership-card-qr-barcode.jpg",
    alt: "Smart QR code and barcode membership cards for digital member attendance and check-in by IDGen",
    title: "QR Code & Barcode Integration",
    category: "Smart Check-In",
    topBadge: "Digital Verification",
    specPill: "Scan & Sync Ready",
    bottomSpec: "Dynamic QR Codes • 1D/2D Barcodes • Instant Verification",
    hubTag: "ZERO MISMATCH",
  },
  {
    id: "membership-wearable-set",
    imageSrc: "/images/idgen-membership-card-holder-lanyard.jpg",
    alt: "Complete membership wearable set with acrylic holder and custom branded lanyard by IDGen",
    title: "Complete Membership Wearable Set",
    category: "Full Ecosystem",
    topBadge: "Full Wearable Kit",
    specPill: "Card + Holder + Lanyard",
    bottomSpec: "Hard Acrylic Case • Custom Printed Satin Lanyard • Chrome Hook",
    hubTag: "ALL-IN-ONE",
  },
  {
    id: "membership-studio-preview",
    imageSrc: "/images/idgen-studio-membership-data-collection-preview.jpg",
    alt: "IDGen Studio digital membership data collection form and instant card preview workflow",
    title: "IDGen Studio Digital Onboarding",
    category: "Data Workflow",
    topBadge: "IDGen Studio Workflow",
    specPill: "Live Member Preview",
    bottomSpec: "Digital Member Forms • Photo Upload • Zero Reprint Errors",
    hubTag: "PREVIEW FIRST",
  },
];

export function MembershipHeroCarousel({ slides }: { slides?: MembershipSlide[] }) {
  const activeSlides = slides && slides.length > 0 ? slides : membershipSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
