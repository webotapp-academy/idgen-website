"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  Ticket,
  Wifi,
  Users,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export interface OrgApplicationItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  href?: string;
  badge: string;
  imageSrc: string;
  spec: string;
}

export const orgApplicationsData: OrgApplicationItem[] = [
  {
    icon: GraduationCap,
    title: "Student ID Cards",
    body: "For student identification in educational institutions, schools, colleges, and universities.",
    href: "/student-id-card-printing/",
    badge: "Schools & Colleges",
    imageSrc: "/images/org-app-student-id-cards.jpg",
    spec: "Photo ID • Roll Number • QR Code",
  },
  {
    icon: Building2,
    title: "Employee & Staff ID Cards",
    body: "For companies, corporate offices, institutions, and government organizations.",
    href: "/employee-id-card-printing/",
    badge: "Corporate & Govt",
    imageSrc: "/images/org-app-employee-id-cards.jpg",
    spec: "Executive Badge • Contactless Chip",
  },
  {
    icon: Ticket,
    title: "Event Cards",
    body: "For conferences, exhibitions, summits, seminars, workshops and VIP delegate passes.",
    href: "/event-card-printing/",
    badge: "Conferences & Summits",
    imageSrc: "/images/org-app-event-cards.jpg",
    spec: "VIP Delegate Pass • Swivel Hooks",
  },
  {
    icon: Wifi,
    title: "RFID Cards",
    body: "For security applications requiring 13.56 MHz Mifare or 125 kHz proximity RFID technology.",
    href: "/rfid-card-printing/",
    badge: "Access Control",
    imageSrc: "/images/org-app-rfid-cards.jpg",
    spec: "13.56 MHz Smart • Turnstile Sync",
  },
  {
    icon: Users,
    title: "Visitor & Institutional Identification",
    body: "For organizations requiring visitor, contractor, temporary member or institutional passes.",
    badge: "Visitors & Members",
    imageSrc: "/images/org-app-visitor-institutional-cards.jpg",
    spec: "Acrylic Holder Clip • Quick Barcode",
  },
];

export function OrgApplicationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

  const maxIndex = Math.max(0, orgApplicationsData.length - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <div
      className="relative space-y-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Controls Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#009fe3] animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            5 Application Categories • Slide {currentIndex + 1} of {maxIndex + 1}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous application slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-md active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next application slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-md active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div className="overflow-hidden py-1">
        <div
          className="flex transition-transform duration-500 ease-out gap-5"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage + (itemsPerPage === 1 ? 0 : 1.2))}%)`,
          }}
        >
          {orgApplicationsData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#009fe3] dark:hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Category Image Header with Top and Bottom Badges */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                  {/* Top Floating Badge with Category Pill & iDGen Tag */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold text-cyan-300 border border-white/15 shadow-sm">
                      <Sparkles className="h-3 w-3 text-cyan-400" />
                      <span>{item.badge}</span>
                    </span>
                    <span className="rounded-full bg-[#009fe3] px-2.5 py-0.5 text-[10px] font-black text-white shadow-md">
                      iDGen
                    </span>
                  </div>

                  {/* Bottom Image Spec Bar */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="rounded-xl border border-white/15 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 shadow-md flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span className="text-[11px] font-bold text-slate-100 truncate">
                        {item.spec}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-slate-700 group-hover:bg-[#009fe3] group-hover:text-white transition-colors shrink-0">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[38px]">
                      {item.body}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Explore {item.title}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                        Custom Application
                      </span>
                    )}

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md">
                      Guwahati
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 pt-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-8 bg-[#009fe3]"
                : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
