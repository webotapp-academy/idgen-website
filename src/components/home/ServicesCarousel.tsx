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
  CreditCard,
  Layers,
  CalendarDays,
  Radio,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface ServiceCardItem {
  id: string;
  title: string;
  slug: string;
  categoryLabel: string;
  serviceCode: string;
  body: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  badge: string;
  badgeColor?: string;
  spec: string;
  highlights: string[];
}

const services: ServiceCardItem[] = [
  {
    id: "id-card-printing",
    title: "ID Card Printing",
    slug: "id-card-printing",
    categoryLabel: "Card Printing",
    serviceCode: "SRV: IDG-CARD",
    body: "PVC ID cards for schools, colleges, companies, hospitals and institutions with single or double-sided high-definition printing.",
    href: "/id-card-printing/",
    imageSrc: "/images/service-pvc-id-card-printing-v3.jpg",
    imageAlt: "Custom PVC ID card printing by IDGen with 2 cards and clear IDGen branding",
    tag: "30-Mil CR80 PVC",
    badge: "Core Service",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-400/30",
    spec: "30-Mil Solid Core PVC • 1200 DPI High-Def",
    highlights: [
      "Single or Double-Side Thermal Print",
      "Dynamic QR & Barcode Variable Data",
      "High-Durability Scratch-Resistant Core",
    ],
  },
  {
    id: "custom-printed-lanyards",
    title: "Custom Printed Lanyards",
    slug: "custom-printed-lanyard-printing",
    categoryLabel: "Ribbon Branding",
    serviceCode: "SRV: IDG-LANY",
    body: "Branded 20 mm satin lanyards produced with organization logos, approved Pantone colours, and ultrasonic sealed loops.",
    href: "/custom-printed-lanyard-printing/",
    imageSrc: "/images/service-custom-printed-lanyards.jpg",
    imageAlt: "Custom printed ID card lanyards by IDGen",
    tag: "20 mm Satin",
    badge: "Bestseller",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-400/30",
    spec: "20mm Multi-Color Satin • Ultrasonic Sealed",
    highlights: [
      "Zero-Fray Ultrasonic Welded Ends",
      "True-to-Life Pantone Matching",
      "Chrome Swivel Hook & Safety Breakaways",
    ],
  },
  {
    id: "event-card-printing",
    title: "Event Card Printing",
    slug: "event-card-printing",
    categoryLabel: "Conferences & Summits",
    serviceCode: "SRV: IDG-EVNT",
    body: "Conference badges, delegate cards and event identification solutions paired with single or dual-hook custom lanyards.",
    href: "/event-card-printing/",
    imageSrc: "/images/service-event-card-printing-v3.jpg",
    imageAlt: "Custom event cards with clear IDGen logo and branded lanyards",
    tag: "Conferences & Summits",
    badge: "Express 48h",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-400/30",
    spec: "Oversized CR100/Custom • Dual Hook Ready",
    highlights: [
      "Tiered Access Color-Coding Systems",
      "High-Speed Express Batch Turnaround",
      "Anti-Twist Double-Clip Lanyard Pairing",
    ],
  },
  {
    id: "rfid-card-printing",
    title: "RFID Card Printing",
    slug: "rfid-card-printing",
    categoryLabel: "Smart Contactless",
    serviceCode: "SRV: IDG-RFID",
    body: "Customized contactless smart RFID cards pre-encoded and compatible with automated attendance and turnstile access systems.",
    href: "/rfid-card-printing/",
    imageSrc: "/images/service-rfid-card-printing-v3.jpg",
    imageAlt: "Man tapping IDGen branded RFID smart card at electronic turnstile door sensor",
    tag: "13.56 MHz / NFC",
    badge: "Smart Contactless",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-400/30",
    spec: "13.56 MHz Mifare / 125 kHz • Turnstile Ready",
    highlights: [
      "Mifare 1K / TK4100 / NTAG Chip Integration",
      "Pre-Encoded UID & Turnstile Compatibility",
      "High-Frequency Contactless Access Cards",
    ],
  },
];

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = services.length;

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-service-card]");
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
    const cards = container.querySelectorAll<HTMLElement>("[data-service-card]");
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
      <div className="pointer-events-none absolute -top-24 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px] dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-[350px] w-[350px] rounded-full bg-accent/10 blur-[140px] dark:bg-accent/15" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 dark:bg-accent/15 px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Specialized Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-foreground tracking-tight leading-tight">
              Our Identity Services
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed">
              IDGen provides specialized identification services designed for institutions and organizations.
            </p>
          </div>

          {/* Controls & CTA Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 rounded-2xl border border-surface-border bg-surface p-1.5 shadow-sm">
              <button
                onClick={handlePrev}
                aria-label="Previous service"
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
                aria-label="Next service"
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
              href="/services/"
              className="inline-flex items-center gap-1.5 rounded-2xl bg-navy px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-navy-deep hover:shadow-lg transition-all"
            >
              <span>View All Services</span>
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
          {services.map((service, idx) => (
            <div
              key={service.title}
              data-service-card
              className="snap-start shrink-0 w-[88vw] sm:w-[380px] lg:w-[calc((100%-48px)/3)] flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-5 sm:p-6 shadow-lg shadow-black/[0.03] transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Service Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-surface-border/80 img-shine mb-5">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    title={service.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md ${service.badgeColor || "text-cyan-400 bg-cyan-500/10 border-cyan-400/30"}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Top Right Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                      {service.tag}
                    </span>
                  </div>

                  {/* Bottom Spec Floating Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium backdrop-blur-md bg-slate-950/85 px-3 py-1.5 rounded-xl border border-white/15">
                    <span className="truncate text-slate-200">{service.spec}</span>
                    <Sparkles className="h-3.5 w-3.5 text-accent shrink-0 ml-1.5" />
                  </div>
                </div>

                {/* Content Header & Body */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Category Header + SKU / Code */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent">
                        {service.categoryLabel}
                      </span>
                      <span className="text-[10px] font-mono text-muted">{service.serviceCode}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-foreground tracking-tight group-hover:text-accent transition-colors mt-1">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-muted leading-relaxed mt-2 line-clamp-2">
                      {service.body}
                    </p>

                    {/* Highlights Bullet Points with CheckCircle2 */}
                    <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-surface-border">
                      {service.highlights.map((point, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span className="truncate">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button & Quote Link */}
              <div className="pt-4 mt-4 border-t border-surface-border flex items-center justify-between gap-3">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-accent/10 border border-accent/20 px-4 py-2.5 text-xs font-bold text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-md hover:shadow-accent/20"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center gap-1 text-xs font-bold text-muted hover:text-foreground transition-colors"
                >
                  <span>Get Quote</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Strip */}
        <div className="mt-8 p-4 rounded-2xl border border-surface-border bg-surface flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
            <span>Explore detailed technical specifications and material standards for each service category.</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/id-card-printing/" className="font-semibold text-foreground hover:text-accent">
              ID Cards
            </Link>
            <span>•</span>
            <Link href="/custom-printed-lanyard-printing/" className="font-semibold text-foreground hover:text-accent">
              Lanyards
            </Link>
            <span>•</span>
            <Link href="/event-card-printing/" className="font-semibold text-foreground hover:text-accent">
              Event Cards
            </Link>
            <span>•</span>
            <Link href="/rfid-card-printing/" className="font-semibold text-foreground hover:text-accent">
              RFID Smart
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
