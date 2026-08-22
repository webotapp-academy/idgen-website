"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Award,
  CheckCircle2,
  SlidersHorizontal,
  Pause,
  Play,
  Zap
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: "holders" | "hardware" | "lanyards" | "badges" | "medals" | "cards";
  categoryLabel: string;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  badge: string;
  badgeColor: string;
  shortDescription: string;
  spec: string;
  highlights: string[];
}

const products: ProductItem[] = [
  {
    id: "id-card-holders",
    slug: "id-card-holders",
    name: "ID Card Holders",
    category: "holders",
    categoryLabel: "Protection Cases",
    imageSrc: "/images/product-id-holders.jpg",
    imageAlt: "Crystal Clear Hard Acrylic and Polycarbonate ID Card Badge Holders",
    tag: "Hard Acrylic / PMMA",
    badge: "Protection",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-400/30",
    shortDescription: "Crystal-clear vertical and horizontal hard cases, four-side-lock enclosures, and flexible PVC sleeves designed to protect CR80 cards.",
    spec: "UV-Stabilized Polycarbonate • 0.82mm CR80",
    highlights: ["4-Side Snap Lock Mechanism", "Crystal Optical Transparency", "Moisture & Dust Resistant"],
  },
  {
    id: "id-card-hooks",
    slug: "id-card-hooks",
    name: "Hooks & Hardware Clips",
    category: "hardware",
    categoryLabel: "Attachments",
    imageSrc: "/images/product-hooks-hardware.jpg",
    imageAlt: "Chrome Swivel Dog Hooks and Lanyard Hardware Clips",
    tag: "Chrome-Plated Metal",
    badge: "Hardware",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-400/30",
    shortDescription: "Heavy-duty chrome-plated swivel dog hooks, alligator clips, round carabiners, and safety breakaway clips for high-tension daily use.",
    spec: "Anti-Rust Nickel Plating • 25kg Tensile",
    highlights: ["360° Free Swivel Rotation", "High-Tension Spring Lever", "Quick Auto-Release Breakaway"],
  },
  {
    id: "custom-printed-lanyards",
    slug: "custom-printed-lanyard-printing",
    name: "Custom Printed Lanyards",
    category: "lanyards",
    categoryLabel: "Ribbon Branding",
    imageSrc: "/images/product-satin-lanyards.jpg",
    imageAlt: "Custom Printed 20mm Satin Neck Lanyards with Ultrasonic Sealing",
    tag: "20mm Satin Ribbon",
    badge: "Bestseller",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-400/30",
    shortDescription: "Branded 20mm satin finish neck lanyards featuring high-definition dye-sublimation artwork and ultrasonic sealed attachment loops.",
    spec: "20mm Multi-Color Satin • Ultrasonic Sealed",
    highlights: ["Zero-Fray Ultrasonic Welded Ends", "True-to-Life Pantone Matching", "Single or Double Hook Configs"],
  },
  {
    id: "acrylic-badges",
    slug: "acrylic-badges",
    name: "Custom Acrylic Badges & Pins",
    category: "badges",
    categoryLabel: "Executive Badges",
    imageSrc: "/images/product-acrylic-badges.jpg",
    imageAlt: "Laser-Cut Crystal Acrylic Name Badges with Magnetic Backing",
    tag: "Laser Cut PMMA",
    badge: "Executive",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-400/30",
    shortDescription: "Precision laser-cut crystal acrylic badges with triple neodymium magnetic backings or safety pins for corporate staff and doctors.",
    spec: "Polished Bevel PMMA • Triple Neodymium",
    highlights: ["No Garment Puncture or Tearing", "Diamond-Polished Bevel Edges", "High-Definition 1200 DPI Print"],
  },
  {
    id: "zinc-medals",
    slug: "zinc-medals",
    name: "Die-Cast Zinc Medals",
    category: "medals",
    categoryLabel: "Sports & Honors",
    imageSrc: "/images/product-zinc-medals.jpg",
    imageAlt: "3D Die-Cast Zinc Medals in Antique Gold, Silver and Bronze with Satin Ribbons",
    tag: "Die-Cast Metal",
    badge: "Recognition",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-400/30",
    shortDescription: "High-relief antique gold, silver, and bronze die-cast zinc medals paired with full-color satin neck ribbons for ceremonies and tournaments.",
    spec: "3D Sculpted Zinc Alloy • Heavy Antique Finish",
    highlights: ["Custom 3D Institutional Crests", "Tri-Tone Antique Gold/Silver/Bronze", "Matching V-Cut Satin Ribbon"],
  },
  {
    id: "pvc-cards",
    slug: "pvc-cards",
    name: "30-Mil CR80 PVC Smart Cards",
    category: "cards",
    categoryLabel: "Card Media",
    imageSrc: "/images/product-pvc-cards.jpg",
    imageAlt: "Solid Virgin PVC Core ID Cards and Smart RFID Media",
    tag: "Virgin PVC Core",
    badge: "Core Media",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-400/30",
    shortDescription: "Bank-grade 30-mil CR80 solid virgin PVC cards featuring 300 DPI dye-sublimation, contactless RFID chips, and edge-to-edge overlaminate.",
    spec: "CR80 30-Mil Standard • 300 DPI Sublimation",
    highlights: ["Bank-Grade 100% Virgin Core", "Integrated RFID & NFC Chips", "Scratch-Resistant Overlaminate"],
  },
];

export function ProductShowcaseCarousel() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const totalSlides = filteredProducts.length;

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-product-card]");
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

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, totalSlides, handleNext]);

  // Sync scroll position with current index
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-product-card]");
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
    <section className="relative overflow-hidden py-16 lg:py-24 bg-surface/50 border-b border-surface-border transition-colors duration-300">
      {/* Background Ambient Lights */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px] dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px] dark:bg-accent/15" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 dark:bg-accent/15 px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-md">
              <Package className="h-3.5 w-3.5 text-accent" />
              <span>Hardware &amp; Identity Products</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-foreground tracking-tight leading-tight">
              Explore Our Complete Product Catalog
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed">
              From crystal-clear acrylic badge cases and anti-rust swivel hooks to custom satin lanyards and 30-mil virgin PVC smart cards, discover IDGen&apos;s direct factory products.
            </p>
          </div>

          {/* Controls & CTA Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 rounded-2xl border border-surface-border bg-surface p-1.5 shadow-sm">
              <button
                onClick={handlePrev}
                aria-label="Previous product"
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
                aria-label="Next product"
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
              href="/products/"
              className="inline-flex items-center gap-1.5 rounded-2xl bg-navy px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-navy-deep hover:shadow-lg transition-all"
            >
              <span>All Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Carousel Scrollable Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              data-product-card
              className="snap-start shrink-0 w-[88vw] sm:w-[380px] lg:w-[390px] flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-5 sm:p-6 shadow-lg shadow-black/[0.03] transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1.5 card-3d group"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-surface-border/80 img-shine mb-5">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  title={product.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-cover object-center img-zoom transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>

                {/* Top Right Tag */}
                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                    {product.tag}
                  </span>
                </div>

                {/* Bottom Spec Floating Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium backdrop-blur-md bg-slate-950/85 px-3 py-1.5 rounded-xl border border-white/15">
                  <span className="truncate text-slate-200">{product.spec}</span>
                  <Sparkles className="h-3.5 w-3.5 text-accent shrink-0 ml-1.5" />
                </div>
              </div>

              {/* Product Info & Highlights */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent">
                      {product.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-muted">SKU: IDG-{product.slug.toUpperCase().slice(0, 4)}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-foreground tracking-tight group-hover:text-accent transition-colors mt-1">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-muted leading-relaxed mt-2 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Highlights Bullet Points */}
                  <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-surface-border">
                    {product.highlights.map((point, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span className="truncate">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="pt-4 border-t border-surface-border flex items-center justify-between gap-3">
                  <Link
                    href={`/${product.slug}/`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-accent/10 border border-accent/20 px-4 py-2.5 text-xs font-bold text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-md hover:shadow-accent/20"
                  >
                    <span>View Specifications</span>
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
            </div>
          ))}
        </div>

        {/* Carousel Pagination Progress Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {filteredProducts.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to product ${p.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-accent shadow-sm shadow-accent/50"
                  : "w-2 bg-surface-border hover:bg-accent/40"
              }`}
            />
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl border border-surface-border bg-surface flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold shrink-0">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">Custom Sizes &amp; Hardware Compatibility Available</p>
              <p className="text-muted text-xs">Need custom dimensions, magnetic badge fittings, or specific clip attachments? We fabricate to your requirements.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/request-a-quote/"
              className="font-bold text-accent hover:underline inline-flex items-center gap-1"
            >
              <span>Request Hardware Specimen</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
}
