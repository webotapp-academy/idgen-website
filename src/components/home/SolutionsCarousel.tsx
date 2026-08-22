"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Pause,
  Play,
  GraduationCap,
  Building2,
  CalendarDays,
  Award
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface SolutionCardItem {
  icon: any;
  title: string;
  body: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  badge: string;
  badgeColor?: string;
}

const orgSolutions: SolutionCardItem[] = [
  {
    icon: GraduationCap,
    title: "Students",
    body: "School, college and university identification with bulk personalization.",
    href: "/student-id-card-printing/",
    imageSrc: "/images/sol-students-idgen-v2.jpg",
    imageAlt: "Student and University ID Card Printing with clear IDGen branding",
    tag: "Education",
    badge: "Schools & Colleges",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-400/30",
  },
  {
    icon: Building2,
    title: "Companies",
    body: "Employee, staff and visitor identification with branded accessories.",
    href: "/employee-id-card-printing/",
    imageSrc: "/images/sol-companies-idgen-v2.jpg",
    imageAlt: "Employee and Staff Corporate ID Cards with metallic badge reels and clear IDGen branding",
    tag: "Corporate",
    badge: "Enterprises",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-400/30",
  },
  {
    icon: CalendarDays,
    title: "Events",
    body: "Conference badges, delegate cards and one- or two-hook lanyard configurations.",
    href: "/event-card-printing/",
    imageSrc: "/images/sol-events-idgen.png",
    imageAlt: "Event VIP Badges and Delegate Passes with clear IDGen branding",
    tag: "Events & Summits",
    badge: "Conferences",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-400/30",
  },
  {
    icon: Award,
    title: "Institutions",
    body: "Hospitals, NGOs, government organizations and membership programmes.",
    href: "/membership-card-printing/",
    imageSrc: "/images/sol-institutions-idgen.png",
    imageAlt: "Institutional and Hospital Identity Cards with clear IDGen branding",
    tag: "Institutional",
    badge: "Hospitals & NGOs",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-400/30",
  },
];

export function SolutionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = orgSolutions.length;

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-solution-card]");
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
    const nextIdx = (currentIndex + 1) % totalSlides;
    scrollToIndex(nextIdx);
  }, [currentIndex, totalSlides, scrollToIndex]);

  const handlePrev = useCallback(() => {
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
    const cards = container.querySelectorAll<HTMLElement>("[data-solution-card]");
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

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-background border-b border-surface-border transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[150px] dark:bg-accent/15" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px] dark:bg-cyan-500/15" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 dark:bg-accent/15 px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Sector Applications</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-foreground tracking-tight leading-tight">
              Solutions for Every Organization
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Instead of creating separate product pages for every customer type, IDGen builds solutions around how organizations actually use identification.
            </p>
          </div>

          {/* Controls & CTA Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 rounded-2xl border border-surface-border bg-surface p-1.5 shadow-sm">
              <button
                onClick={handlePrev}
                aria-label="Previous solution"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-muted hover:bg-accent/10 hover:text-accent transition-all hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="px-2 text-xs font-mono font-bold text-foreground">
                <span className="text-accent">{String(currentIndex + 1).padStart(2, "0")}</span>
                <span className="text-muted/60"> / </span>
                <span>{String(totalSlides).padStart(2, "0")}</span>
              </div>
              <button
                onClick={handleNext}
                aria-label="Next solution"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-muted hover:bg-accent/10 hover:text-accent transition-all hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-muted hover:bg-accent/10 hover:text-accent transition-all"
                title={isAutoPlaying ? "Pause Auto-Slide" : "Resume Auto-Slide"}
              >
                {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            </div>

            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-1.5 rounded-2xl bg-navy px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-navy-deep hover:shadow-lg transition-all"
            >
              <span>Custom Solution</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Carousel Scrollable Track (3 items per view on desktop) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {orgSolutions.map((org, idx) => (
            <div
              key={org.title}
              data-solution-card
              className="snap-start shrink-0 w-[88vw] sm:w-[380px] lg:w-[calc((100%-48px)/3)] flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-5 sm:p-6 shadow-lg shadow-black/[0.03] transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Solution Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-surface-border/80 img-shine mb-5">
                  <Image
                    src={org.imageSrc}
                    alt={org.imageAlt}
                    title={org.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md ${org.badgeColor || "text-cyan-400 bg-cyan-500/10 border-cyan-400/30"}`}>
                      {org.badge}
                    </span>
                  </div>

                  {/* Top Right Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                      {org.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-extrabold text-foreground tracking-tight group-hover:text-accent transition-colors">
                    {org.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mt-2">
                    {org.body}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-surface-border flex items-center justify-between">
                <Link
                  href={org.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-accent hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs font-mono font-bold text-muted/60">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 text-center">
          <Link
            href="/request-a-quote/"
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-7 py-3.5 text-sm font-bold text-accent shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Get a Customized Solution for Your Organization</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
