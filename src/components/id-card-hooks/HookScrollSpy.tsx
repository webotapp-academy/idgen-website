"use client";

import React, { useEffect, useState, useRef } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

export interface SectionNav {
  id: string;
  label: string;
  shortLabel?: string;
}

export const HOOK_SECTIONS: SectionNav[] = [
  { id: "overview", label: "Overview", shortLabel: "Hero" },
  { id: "quick-hook-selection-system", label: "Quick Hook Selection System", shortLabel: "Selection Matrix" },
  { id: "hook-assembly-ecosystem", label: "Assembly Ecosystem", shortLabel: "Assembly" },
  { id: "hook-range-master-showcase", label: "Hook Catalog", shortLabel: "Catalog" },
  { id: "hook-engineering-guide", label: "Engineering Guide", shortLabel: "Engineering" },
  { id: "hook-applications", label: "Applications", shortLabel: "Applications" },
  { id: "hook-workflow-dispatch", label: "Workflow & Dispatch", shortLabel: "Workflow" },
  { id: "faq", label: "FAQ", shortLabel: "FAQ" },
];

/**
 * Client-side Scroll Spy & Dynamic URL Hash Generator for ID Card Hooks
 * Listens to scrolling and dynamically updates the browser address bar
 * with history.replaceState so that `#quick-hook-selection-system` is generated as you scroll down.
 */
export function HookScrollSpyNav() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Offset for header + sticky sub-nav
      setIsVisible(window.scrollY > 300);

      let current = HOOK_SECTIONS[0].id;
      for (const section of HOOK_SECTIONS) {
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

    // Handle mount with hash in URL
    if (window.location.hash) {
      const hashId = decodeURIComponent(window.location.hash.replace("#", ""));
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

  if (!isVisible) return null;

  return (
    <div className="sticky top-16 z-30 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/90 shadow-xs transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={navRef}
          className="flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none scroll-smooth"
        >
          {HOOK_SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                data-nav-id={section.id}
                onClick={(e) => scrollToSection(section.id, e)}
                className={`group flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-105"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-[#009fe3] dark:hover:text-cyan-400"
                }`}
              >
                <span>{section.shortLabel || section.label}</span>
                {isActive && (
                  <button
                    onClick={(e) => copyLink(section.id, e)}
                    title="Copy direct section anchor link"
                    className="ml-1 rounded-full p-0.5 hover:bg-white/20 transition-colors"
                  >
                    {copiedId === section.id ? (
                      <Check className="h-3 w-3 text-white" />
                    ) : (
                      <LinkIcon className="h-3 w-3 text-white/90" />
                    )}
                  </button>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function SectionAnchorButton({
  id,
  title,
}: {
  id: string;
  title?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copySectionUrl = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <a
      href={`#${id}`}
      onClick={copySectionUrl}
      title={`Direct link to ${title || id}`}
      className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-[#009fe3] dark:hover:text-cyan-400 transition-colors opacity-70 hover:opacity-100 ml-2 group shrink-0"
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-500" />
      ) : (
        <LinkIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
      )}
      {copied && (
        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
          Copied!
        </span>
      )}
    </a>
  );
}
