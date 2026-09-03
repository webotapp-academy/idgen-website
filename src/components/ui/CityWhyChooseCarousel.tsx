"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Award,
  Building2,
  PackageCheck,
  Workflow,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import type { CityData, StateData } from "@/lib/dynamic-locations";

export interface WhyChooseSlide {
  id: string;
  title: string;
  desc: string;
  image: string;
  badge: string;
  stat: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface CityWhyChooseCarouselProps {
  city: CityData;
  state: StateData;
}

export function CityWhyChooseCarousel({ city, state }: CityWhyChooseCarouselProps) {
  const isGuwahati = city.slug === "guwahati" || city.isPrimary;

  // Dynamic slides based on city
  const slides: WhyChooseSlide[] = [
    {
      id: "hub-manufacturing",
      title: isGuwahati ? "Guwahati-Based Manufacturing" : `${city.name} Direct Regional Fulfillment`,
      desc: isGuwahati
        ? "Local presence in Guwahati ensures direct factory communication, rapid physical proofs, and 24–48h fast dispatch across Assam."
        : `Direct logistical coordination from our regional manufacturing cleanroom with doorstep delivery across ${city.name} and ${state.name}.`,
      image: isGuwahati ? "/images/service-guwahati-hub.jpg" : "/images/idgen-id-card-solutions-guwahati-assam.jpg",
      badge: isGuwahati ? "Direct Cleanroom Hub" : "Regional Priority",
      stat: isGuwahati ? "24–48h Local Delivery" : "Fast Doorstep Dispatch",
      icon: MapPin,
    },
    {
      id: "experience-2014",
      title: "Experience Since 2014",
      desc: "Over a decade of specialized expertise in high-volume card manufacturing, color calibration, RFID encoding, and zero-defect data integrity.",
      image: "/images/why-idgen-more-than-brand.jpg",
      badge: "10+ Years Proven",
      stat: "Since 2014",
      icon: Award,
    },
    {
      id: "organizational-focus",
      title: "Organizational & Institutional Focus",
      desc: `Engineered specifically for schools, colleges, corporate offices, and government bodies in ${city.name} rather than basic retail single-card prints.`,
      image: "/images/sol-institutions-idgen-v1.jpg",
      badge: "Institutional Grade",
      stat: "Bulk & Enterprise",
      icon: Building2,
    },
    {
      id: "complete-ecosystem",
      title: "Complete Identification Ecosystem",
      desc: "One-stop coordinated supply of premium CR80 PVC cards, RFID chips, custom satin lanyards, crystal holders, and ultrasonic tamper-evident sealing.",
      image: "/images/why-idgen-complete-ecosystem-branded.jpg",
      badge: "Turnkey Packages",
      stat: "Cards + Lanyards + Holders",
      icon: PackageCheck,
    },
    {
      id: "structured-workflow",
      title: "Structured 8-Stage Workflow",
      desc: "Rigorous quality stages from requirement → data check → proofing → cleanroom production → 100% optical inspection → dispatch.",
      image: "/images/why-idgen-production-batches-branded.jpg",
      badge: "Quality Assured",
      stat: "Zero-Defect Standard",
      icon: Workflow,
    },
    {
      id: "idgen-studio",
      title: "IDGen Studio Digital Portal",
      desc: "Cloud platform for online student and employee photo collection, background removal, and batch approvals without spreadsheet chaos.",
      image: "/images/idgen-studio-digital-id-card-data-collection-workflow.jpg",
      badge: "Cloud Automation",
      stat: "Digital Previews",
      icon: Layers,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, slides.length - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <div
      className="relative space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Carousel Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 dark:border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            {slides.length} Core Advantage Pillars • Slide {currentIndex + 1} of {maxIndex + 1}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous advantage"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0e1726] text-foreground shadow-xs transition-all hover:border-accent hover:text-accent hover:shadow-md active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next advantage"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0e1726] text-foreground shadow-xs transition-all hover:border-accent hover:text-accent hover:shadow-md active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track Window */}
      <div className="overflow-hidden rounded-[2rem] p-1">
        <div
          className="flex transition-transform duration-500 ease-out gap-5"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage + 1.25)}%)`,
          }}
        >
          {slides.map((slide) => {
            const Icon = slide.icon;
            return (
              <div
                key={slide.id}
                className="shrink-0 flex flex-col rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0e1726]/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-accent/50 group"
                style={{
                  width: `calc(${100 / itemsPerPage}% - ${(1.25 * (itemsPerPage - 1)) / itemsPerPage}rem)`,
                }}
              >
                {/* Dynamic Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={slide.image}
                    alt={`${slide.title} - IDGen Identity Solutions in ${city.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-cyan-300 border border-white/15 shadow-sm">
                      <Sparkles className="h-2.5 w-2.5" />
                      <span>{slide.badge}</span>
                    </span>
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-black text-white shadow-xs">
                      IDGen
                    </span>
                  </div>

                  {/* Bottom Image Stat Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white z-10 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-white truncate drop-shadow-sm">
                      {slide.stat}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {city.name}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent border border-accent/20 transition-colors group-hover:bg-accent group-hover:text-white shadow-xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-extrabold text-foreground group-hover:text-accent transition-colors">
                        {slide.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {slide.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-accent">
                    <Link
                      href="/why-idgen/"
                      className="group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Explore Advantage</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <span className="text-[11px] text-muted font-medium">
                      {isGuwahati ? "Guwahati HQ" : `${city.name} Coverage`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Dots Bar */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "w-8 bg-accent"
                : "w-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
