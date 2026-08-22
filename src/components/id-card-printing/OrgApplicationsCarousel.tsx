"use client";

import React, { useState, useEffect, useCallback } from "react";
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
} from "lucide-react";

export const orgApplicationsData = [
  {
    icon: GraduationCap,
    title: "Student ID Cards",
    body: "For student identification in educational institutions.",
    href: "/student-id-card-printing/",
    badge: "Schools & Colleges",
  },
  {
    icon: Building2,
    title: "Employee & Staff ID Cards",
    body: "For companies, offices, institutions and organizations.",
    href: "/employee-id-card-printing/",
    badge: "Corporate & Govt",
  },
  {
    icon: Ticket,
    title: "Event Cards",
    body: "For conferences, exhibitions, seminars, workshops and other events.",
    href: "/event-card-printing/",
    badge: "Conferences & Summits",
  },
  {
    icon: Wifi,
    title: "RFID Cards",
    body: "For applications requiring compatible RFID technology.",
    href: "/rfid-card-printing/",
    badge: "Access Control",
  },
  {
    icon: Users,
    title: "Visitor & Institutional Identification",
    body: "For organizations requiring visitor, contractor, member or other identification cards.",
    badge: "Visitors & Members",
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
      className="relative space-y-6"
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
                className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-[#009fe3] dark:hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-slate-700 transition-colors group-hover:bg-[#009fe3] group-hover:text-white group-hover:border-[#009fe3]">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200/60 dark:border-slate-700/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[40px]">
                    {item.body}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-4">
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
            className={`h-2 rounded-full transition-all duration-300 ${
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
