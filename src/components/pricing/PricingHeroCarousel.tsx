"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  IndianRupee,
  Pause,
  Play,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export interface PricingSlide {
  id: string;
  imageSrc: string;
  alt: string;
  title: string;
  category: string;
  priceTag: string;
  topBadge: string;
  specPill: string;
  bottomSpec: string;
  hubTag: string;
}

const pricingSlides: PricingSlide[] = [
  {
    id: "pvc-cards-pricing",
    imageSrc: "/images/idgen-id-card-printing-pricing.jpg",
    alt: "IDGen PVC ID Card Printing Factory Direct Reference Pricing starting at ₹15 per card",
    title: "Single & Double-Sided PVC Cards",
    category: "PVC Cards",
    priceTag: "From ₹15 / card",
    topBadge: "PVC Identity Cards",
    specPill: "CR80 30-Mil Standard",
    bottomSpec: "Thermal & Re-Transfer Dye-Sub • Single Side ₹15 • Double Side ₹16",
    hubTag: "WHOLESALE DIRECT",
  },
  {
    id: "custom-lanyards-pricing",
    imageSrc: "/images/idgen-id-card-lanyard-holder-hook-pricing.jpg",
    alt: "IDGen 20mm Custom Printed Satin Lanyards Reference Pricing starting at ₹15 per piece",
    title: "20 mm Custom Printed Lanyards",
    category: "Lanyards",
    priceTag: "From ₹15 / pc",
    topBadge: "Sublimation Lanyards",
    specPill: "Ultrasonic Weld Option",
    bottomSpec: "Multi-Color Sublimation • Dog Hook • Fish Hook • Breakaway Clasp",
    hubTag: "DIRECT FACTORY",
  },
  {
    id: "bulk-rfid-pricing",
    imageSrc: "/images/bulk-rfid-card-printing.jpg",
    alt: "IDGen Contactless Smart RFID NFC ID Card Printing Reference Pricing ₹45 per card",
    title: "Contactless RFID / NFC Smart Cards",
    category: "RFID Smart Cards",
    priceTag: "From ₹45 / card",
    topBadge: "RFID Smart Badges",
    specPill: "13.56MHz Mifare / 125kHz",
    bottomSpec: "Smart Campus Attendance • Turnstile Gate Sync • High Security Encoding",
    hubTag: "SMART CREDENTIALS",
  },
  {
    id: "event-badges-pricing",
    imageSrc: "/images/event-card-printing-lanyard-idgen.jpg",
    alt: "IDGen Large Format Event Card & Badge Printing Reference Pricing ₹35 per card",
    title: "Oversized Event & VIP Badges",
    category: "Event Cards",
    priceTag: "From ₹35 / card",
    topBadge: "Event Credentials",
    specPill: "Dual Hook Ready",
    bottomSpec: "Conferences • VIP Passes • Exhibitions • Same-Day / 72h Dispatch",
    hubTag: "EXPRESS SUMMITS",
  },
  {
    id: "complete-assembly-pricing",
    imageSrc: "/images/why-idgen-complete-ecosystem-branded.jpg",
    alt: "IDGen Complete Wearable Identity Setup Card Holder Hook Lanyard and Ultrasonic Sealing",
    title: "Complete Modular Wearable Sets",
    category: "All-In-One",
    priceTag: "All-In-One Value",
    topBadge: "Complete Wearable Suite",
    specPill: "Card + Holder + Hook + Lanyard",
    bottomSpec: "Full Assembly Kits • 100% Virgin Polycarbonate • Ready Stock in Guwahati",
    hubTag: "READY STOCK",
  },
];

export function PricingHeroCarousel({ initialSlides }: { initialSlides?: PricingSlide[] }) {
  const activeSlides = (initialSlides && initialSlides.length > 0)
    ? initialSlides.filter((s) => (s as any).isActive !== false)
    : pricingSlides;
  const currentSlides = activeSlides.length > 0 ? activeSlides : pricingSlides;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % currentSlides.length);
  }, [currentSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + currentSlides.length) % currentSlides.length
    );
  }, [currentSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const current = currentSlides[currentIndex] || currentSlides[0];

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl group select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="IDGen Identity Products & Pricing Showcase"
    >
      {/* ── Slide Images Stack ── */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] w-full overflow-hidden">
        {currentSlides.map((slide, idx) => (
          <div
            key={slide.id || idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105 pointer-events-none"
            }`}
          >
            <Image
              unoptimized
              src={slide.imageSrc}
              alt={slide.alt || slide.title || "IDGen Pricing Product"}
              fill
              priority={idx === 0}
              className="object-contain object-center p-3 sm:p-5 transform transition-transform duration-1000 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ))}

        {/* ── Center Controls (Chevron Arrows) ── */}
        <button
          onClick={prevSlide}
          aria-label="Previous Pricing Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-slate-950/75 hover:bg-[#009fe3] text-white border border-white/20 hover:border-[#009fe3] flex items-center justify-center backdrop-blur-md transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Pricing Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-slate-950/75 hover:bg-[#009fe3] text-white border border-white/20 hover:border-[#009fe3] flex items-center justify-center backdrop-blur-md transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* ── Slide Dots Indicator ── */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-950/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {currentSlides.map((slide, idx) => (
            <button
              key={slide.id || idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.title || "Product"}`}
              className={`transition-all duration-300 rounded-full h-2 ${
                idx === currentIndex
                  ? "w-6 bg-[#009fe3]"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
