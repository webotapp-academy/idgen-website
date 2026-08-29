"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Link as LinkIcon,
  Check,
  ChevronDown,
  Navigation,
  Compass,
  Layers,
} from "lucide-react";

export interface SectionNav {
  id: string;
  label: string;
  shortLabel?: string;
}

export const ID_CARD_SECTIONS: SectionNav[] = [
  { id: "overview", label: "Overview", shortLabel: "Hero" },
  { id: "custom-pvc-cards", label: "Custom PVC Cards", shortLabel: "Custom PVC" },
  { id: "applications", label: "Org Applications", shortLabel: "Applications" },
  { id: "bulk-printing", label: "Bulk Printing", shortLabel: "Bulk Orders" },
  { id: "production-workflow", label: "9-Stage Workflow", shortLabel: "Workflow" },
  { id: "card-information", label: "Card Personalization", shortLabel: "Card Fields" },
  { id: "design-branding", label: "Design & Branding", shortLabel: "Design" },
  { id: "bulk-data", label: "Bulk Data Integrity", shortLabel: "Data Management" },
  { id: "idgen-studio", label: "IDGen Studio", shortLabel: "Digital Studio" },
  { id: "complete-setup", label: "Complete Setup", shortLabel: "Wearable Sets" },
  { id: "configurations", label: "Configuration Guide", shortLabel: "Setup Guide" },
  { id: "institutions", label: "Institutional Types", shortLabel: "Institutions" },
  { id: "structured-process", label: "Structured Process", shortLabel: "Process" },
  { id: "quality-checks", label: "Quality Checks", shortLabel: "Quality Assurance" },
  { id: "new-and-renewals", label: "New & Renewals", shortLabel: "Project Types" },
  { id: "flexible-options", label: "Flexible Options", shortLabel: "Components" },
  { id: "service-coverage", label: "Assam & NE Coverage", shortLabel: "Service Areas" },
  { id: "why-idgen", label: "Why IDGen", shortLabel: "Why Us" },
  { id: "how-to-order", label: "How to Order", shortLabel: "Order Guide" },
  { id: "faq", label: "FAQ", shortLabel: "FAQ" },
];

/**
 * Client-side Scroll Spy & Dynamic URL Hash Generator
 * Listens to scrolling and dynamically updates the browser address bar
 * with history.replaceState so that `#section-id` is generated as you scroll down.
 */
export function IdCardScrollSpyNav() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Offset for header + nav bar
      setIsVisible(window.scrollY > 300);

      // Find the current section
      let current = ID_CARD_SECTIONS[0].id;
      for (const section of ID_CARD_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = section.id;
          }
        }
      }

      if (current !== lastActiveRef.current) {
        lastActiveRef.current = current;
        setActiveSection(current);

        // Update URL hash dynamically in browser without jumping
        if (window.history && window.history.replaceState) {
          if (current === "overview" && window.scrollY < 250) {
            window.history.replaceState(
              null,
              "",
              window.location.pathname + window.location.search
            );
          } else {
            window.history.replaceState(
              null,
              "",
              `${window.location.pathname}${window.location.search}#${current}`
            );
          }
        }
      }
    };

    // Run on mount in case page was loaded with a hash
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const targetEl = document.getElementById(hashId);
      if (targetEl) {
        setActiveSection(hashId);
        lastActiveRef.current = hashId;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Center active pill in sticky sub-bar
  useEffect(() => {
    if (navRef.current) {
      const activeEl = navRef.current.querySelector(
        `[data-nav-id="${activeSection}"]`
      ) as HTMLElement | null;
      if (activeEl) {
        const container = navRef.current;
        const scrollLeft =
          activeEl.offsetLeft -
          container.clientWidth / 2 +
          activeEl.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeSection]);

  const copyLink = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      lastActiveRef.current = id;
      if (window.history && window.history.replaceState) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}#${id}`
        );
      }
    }
  };

  return (
    <>
      {/* Sticky Table-of-Contents / Quick Anchor Navigation Bar */}
      <div
        className={`sticky top-[58px] sm:top-[65px] z-40 w-full transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <div className="rounded-2xl border border-slate-200/90 dark:border-cyan-500/30 bg-white/95 dark:bg-[#09111e]/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-cyan-950/20 py-2 px-3 flex items-center justify-between gap-3">
            {/* Left Tag / Icon */}
            <div className="hidden md:flex items-center gap-2 pr-3 border-r border-slate-200 dark:border-slate-800 shrink-0">
              <Compass className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 animate-spin-slow" />
              <span className="text-xs font-black tracking-tight text-slate-900 dark:text-white uppercase">
                Section Nav
              </span>
            </div>

            {/* Scrollable Pills List */}
            <div
              ref={navRef}
              className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 scroll-smooth flex-1"
            >
              {ID_CARD_SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    data-nav-id={section.id}
                    onClick={(e) => scrollToSection(section.id, e)}
                    className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30 scale-[1.02]"
                        : "bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span>{section.shortLabel || section.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: Quick Copy Current Section Link */}
            <div className="shrink-0 flex items-center gap-1.5 pl-2 border-l border-slate-200 dark:border-slate-800">
              <button
                onClick={(e) => copyLink(activeSection, e)}
                title="Copy Direct Anchor Link to Current Section"
                aria-label="Copy Direct Anchor Link"
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 transition-colors shadow-2xs"
              >
                {copiedId === activeSection ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-extrabold hidden sm:inline">
                      Link Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400" />
                    <span className="hidden sm:inline font-semibold">
                      #{activeSection}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Clickable Anchor Link Icon for Section Headers
 * Gives instant feedback and copies the anchor URL to clipboard
 */
export function SectionAnchorButton({
  id,
  title,
}: {
  id: string;
  title?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      if (window.history && window.history.replaceState) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}#${id}`
        );
      }
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleCopy}
      title={copied ? "Link Copied!" : `Copy link to "${title || id}"`}
      aria-label={`Copy link to ${title || id}`}
      className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-slate-400 hover:text-[#009fe3] dark:hover:text-cyan-400 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#009fe3]/40"
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-500 shrink-0" />
      ) : (
        <LinkIcon className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
      )}
      <span className="sr-only">Copy link to this section</span>
    </a>
  );
}
