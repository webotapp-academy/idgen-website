"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Pause,
  Play,
} from "lucide-react";
import type { CityServiceItem } from "@/lib/dynamic-locations";

export function CityServicesCarousel({
  cityName,
  services,
}: {
  cityName: string;
  services: CityServiceItem[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = services.length;

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-city-service-card]");
    if (cards[index]) {
      const card = cards[index];
      const containerLeft = container.getBoundingClientRect().left;
      const cardLeft = card.getBoundingClientRect().left;
      const scrollOffset = cardLeft - containerLeft + container.scrollLeft;

      container.scrollTo({
        left: scrollOffset,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (totalSlides <= 1) return;
    const nextIdx = (currentIndex + 1) % totalSlides;
    scrollToIndex(nextIdx);
  }, [currentIndex, totalSlides, scrollToIndex]);

  const handlePrev = useCallback(() => {
    if (totalSlides <= 1) return;
    const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
    scrollToIndex(prevIdx);
  }, [currentIndex, totalSlides, scrollToIndex]);

  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, totalSlides, handleNext]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-city-service-card]");
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const distance = Math.abs(rect.left - containerRect.left);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  if (!services || services.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* Header with Title and Carousel Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 dark:bg-accent/15 px-3 py-1 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Products &amp; Services</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            ID Card Printing &amp; Identity Solutions in {cityName}
          </h2>

          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            Explore our primary identification products manufactured for institutions and corporate enterprises in {cityName}.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 rounded-2xl border border-surface-border bg-surface p-1.5 shadow-sm shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous product"
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-muted hover:bg-accent/10 hover:text-accent transition-all hover:scale-105"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <div className="px-2 text-xs font-mono font-bold text-foreground">
            <span className="text-accent">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="text-muted/60"> / </span>
            <span>{String(totalSlides).padStart(2, "0")}</span>
          </div>
          <button
            onClick={handleNext}
            aria-label="Next product"
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-muted hover:bg-accent/10 hover:text-accent transition-all hover:scale-105"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-muted hover:bg-accent/10 hover:text-accent transition-all"
          >
            {isAutoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="flex gap-6 overflow-x-auto pb-4 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service) => (
          <div
            key={service.id || service.title}
            data-city-service-card
            className="snap-start shrink-0 w-[86vw] sm:w-[360px] lg:w-[calc((100%-48px)/3)] flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-5 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 group"
          >
            <div>
              {/* Product Card Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-surface-border/80 img-shine mb-4">
                <Image
                  src={service.imageSrc || "/images/student-id-card-printing-idgen.jpg"}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                {service.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 shadow-md">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Top Right Tag */}
                {service.tag && (
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                      {service.tag}
                    </span>
                  </div>
                )}

                {/* Bottom Spec Floating Bar */}
                {service.spec && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium backdrop-blur-md bg-slate-950/85 px-3 py-1.5 rounded-xl border border-white/15">
                    <span className="truncate text-slate-200">{service.spec}</span>
                    <Sparkles className="h-3.5 w-3.5 text-accent shrink-0 ml-1.5" />
                  </div>
                )}
              </div>

              {/* Text Information */}
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent block">
                  {service.categoryLabel}
                </span>

                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Highlights List */}
                {service.highlights && service.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5 pt-3 border-t border-surface-border">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 mt-4 border-t border-surface-border flex items-center justify-between gap-2">
              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 rounded-xl bg-accent/10 border border-accent/20 px-3.5 py-2 text-xs font-bold text-accent transition-all duration-200 hover:bg-accent hover:text-white"
              >
                <span>Explore Details</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/request-a-quote/"
                className="text-[11px] font-semibold text-muted hover:text-accent transition-colors"
              >
                Get Quote →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
