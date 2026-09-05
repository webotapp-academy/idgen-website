"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Share2, Check, Copy, ArrowUp, BookOpen, MessageSquare, ShieldCheck, ChevronRight } from "lucide-react";

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface BlogArticleInteractiveProps {
  tableOfContents: TableOfContentsItem[];
  title: string;
}

export function BlogArticleInteractive({ tableOfContents, title }: BlogArticleInteractiveProps) {
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>(
    tableOfContents[0]?.id || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate reading progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // 2. Calculate active section
      const sectionElements = tableOfContents
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 180;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tableOfContents]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <>
      {/* ── Fixed Reading Progress Bar ── */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-200/50 dark:bg-slate-800/50">
        <div
          className="h-full bg-gradient-to-r from-[#009fe3] via-cyan-400 to-sky-500 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* ── Sticky Table of Contents & Quick Action Card ── */}
      <div className="sticky top-24 space-y-6">
        {/* Table of Contents */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0c1424] p-5 shadow-lg shadow-slate-100 dark:shadow-none">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
              <BookOpen className="h-3.5 w-3.5 text-[#009fe3]" />
              <span>Table of Contents</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400">
              {tableOfContents.length} Sections
            </span>
          </div>

          <nav className="mt-4 space-y-1">
            {tableOfContents.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group flex items-start gap-2 py-1.5 px-2.5 rounded-lg text-xs transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-50 dark:bg-cyan-950/60 text-[#009fe3] dark:text-cyan-300 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-850"
                  }`}
                >
                  <ChevronRight
                    className={`h-3.5 w-3.5 mt-0.5 shrink-0 transition-transform ${
                      isActive
                        ? "text-[#009fe3] dark:text-cyan-400 translate-x-0.5"
                        : "text-slate-400 opacity-60 group-hover:opacity-100"
                    }`}
                  />
                  <span className="leading-snug">{item.title}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Share & Quick Link Box */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-slate-900/60 p-4 space-y-3">
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Share this teardown
          </div>
          <button
            onClick={handleCopyLink}
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-[#009fe3] transition shadow-sm"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-slate-500" />
                <span>Copy Article Link</span>
              </>
            )}
          </button>
        </div>

        {/* Factory Quick Help Box */}
        <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-950/60 via-slate-900 to-[#071324] p-5 text-white shadow-xl">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-black uppercase tracking-wider mb-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Guwahati Cleanroom</span>
          </div>
          <h4 className="text-sm font-bold text-white">Need Specimen Badges?</h4>
          <p className="mt-1 text-xs text-slate-300 leading-relaxed">
            Get physical card and lanyard samples dispatched to your institution for evaluation.
          </p>
          <div className="mt-4 space-y-2">
            <Link
              href="/request-a-quote/"
              className="w-full inline-flex items-center justify-center py-2 px-3 rounded-xl bg-[#009fe3] hover:bg-[#008bc7] text-white text-xs font-bold transition shadow-md shadow-cyan-500/20"
            >
              Request Free Sample Kit
            </Link>
            <a
              href="https://wa.me/919207012084?text=Hi%20IDGen%2C%20I%20am%20reading%20your%20blog%20and%20need%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
