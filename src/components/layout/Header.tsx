"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Sparkles, 
  Layers, 
  GraduationCap, 
  Building2, 
  CalendarDays, 
  Radio, 
  Tag, 
  Box, 
  Flame,
  MessageSquare,
  Award,
  CreditCard,
  Shield,
  FileSpreadsheet,
  FileText,
  HelpCircle,
  Briefcase
} from "lucide-react";
import { NAV } from "@/data/site";
import { IdgenLogo } from "@/components/ui/IdgenLogo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const SERVICE_ICONS: Record<string, typeof Layers> = {
  "/id-card-printing/": Layers,
  "/student-id-card-printing/": GraduationCap,
  "/employee-id-card-printing/": Building2,
  "/custom-printed-lanyard-printing/": Tag,
  "/event-card-printing/": CalendarDays,
  "/rfid-card-printing/": Radio,
  "/ultrasonic-sealing/": Flame,
  "/membership-card-printing/": Sparkles,
  "/id-card-holders/": Box,
  "/id-card-hooks/": Tag,
  "/acrylic-badges/": Shield,
  "/zinc-medals/": Award,
  "/pvc-cards/": CreditCard,
  "/resources/guides/": FileText,
  "/faq/": HelpCircle,
  "/case-studies/": Briefcase,
  "/templates/": FileSpreadsheet,
};

import type { NavItem } from "@/data/site";

export function Header({ navItems }: { navItems?: NavItem[] }) {
  const currentNav = navItems || NAV;
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="relative z-50 overflow-hidden bg-gradient-to-r from-[#030712] via-[#091528] to-[#030712] text-[11px] font-medium text-slate-300 border-b border-white/[0.08] py-1.5 px-4 hidden sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold">Direct ID Card &amp; Lanyard Factory</span>
            <span className="text-white/20">•</span>
            <span className="text-cyan-300 font-medium">Guwahati Hub</span>
            <span className="text-white/20">•</span>
            <span className="text-slate-300">24–48h Dispatch Across All 8 NE States</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <Link href="/pricing/" className="hover:text-cyan-300 transition-colors">
              Wholesale Rates
            </Link>
            <span className="text-white/20">|</span>
            <a 
              href="https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20to%20inquire%20about%20ID%20card%20and%20lanyard%20printing." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>Direct Hotline: +91 92070 12084</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Translucent Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full border-b ${
          scrolled
            ? "border-surface-border bg-background/95 backdrop-blur-2xl shadow-md text-foreground"
            : "border-surface-border bg-background/90 backdrop-blur-xl text-foreground"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 xl:gap-3 px-3 sm:px-6 py-2.5 sm:py-3">
          {/* Left Side: Brand Logo + Desktop Navigation Links */}
          <div className="flex items-center gap-2 xl:gap-4 min-w-0 shrink-0">
            <Link href="/" className="flex items-center shrink-0 group transition-transform duration-200 hover:scale-[1.02]" onClick={() => setOpen(false)}>
              <IdgenLogo size="md" variant="auto" withTagline={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav key="desktop-navigation-bar" className="hidden items-center gap-0.5 xl:gap-1 text-[11px] xl:text-xs font-semibold lg:flex flex-nowrap shrink-0">
              {currentNav.map((item) =>
                item.children ? (
                  <div
                    key={`nav-group-${item.label}`}
                    className="relative shrink-0"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.href === "#") e.preventDefault();
                      }}
                      className="flex items-center gap-1 whitespace-nowrap rounded-full px-2 xl:px-2.5 py-1.5 text-slate-800 dark:text-white font-semibold transition-all duration-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-accent"
                    >
                      {item.label}
                      <ChevronDown className={`h-3 w-3 shrink-0 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180 text-accent" : "opacity-60"}`} />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {openDropdown === item.label && (
                      <div className="absolute left-0 top-full pt-2 animate-fade-in-scale z-50">
                        <div className="w-72 rounded-2xl border border-surface-border bg-background/98 p-2.5 shadow-2xl backdrop-blur-2xl text-foreground">
                          <div className="px-3 py-1.5 mb-1 border-b border-surface-border text-[10px] font-bold uppercase tracking-wider text-accent">
                            {item.label} Directory
                          </div>
                          {item.children.map((child) => {
                            const IconComponent = SERVICE_ICONS[child.href] || Layers;
                            return (
                              <div key={child.href} className="relative group/sub">
                                <Link
                                  href={child.href}
                                  className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-foreground transition-all duration-150 hover:bg-accent-soft hover:text-accent hover:translate-x-1"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-surface-border text-accent group-hover/sub:bg-accent group-hover/sub:text-white transition-colors">
                                      <IconComponent className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="truncate">{child.label}</span>
                                  </div>
                                  {child.children && (
                                    <ChevronDown className="h-3 w-3 -rotate-90 opacity-50 shrink-0" />
                                  )}
                                </Link>

                                {/* 3rd Level Flyout */}
                                {child.children && child.children.length > 0 && (
                                  <div className="absolute left-full top-0 hidden w-48 pl-2 group-hover/sub:block z-50">
                                    <div className="rounded-xl border border-surface-border bg-background/98 p-1.5 shadow-xl backdrop-blur-2xl">
                                      {child.children.map(sub => (
                                        <Link
                                          key={sub.href}
                                          href={sub.href}
                                          className="block rounded-lg px-3 py-2 text-[11px] font-medium text-foreground transition-all duration-150 hover:bg-accent-soft hover:text-accent hover:translate-x-1"
                                        >
                                          {sub.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={`nav-link-${item.label}`}
                    href={item.href}
                    className="whitespace-nowrap shrink-0 rounded-full px-2 xl:px-2.5 py-1.5 text-slate-800 dark:text-white font-semibold transition-all duration-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Right CTA Buttons & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
            {/* Theme Toggle Button (Dark/Light) */}
            <ThemeToggle />

            <a
              href="https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20to%20inquire%20about%20ID%20cards."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden 2xl:inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/40 px-3 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all"
            >
              <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Desktop Request Quote button */}
            <Link
              href="/request-a-quote/"
              className="hidden sm:inline-flex shrink-0 whitespace-nowrap rounded-full bg-accent px-4 xl:px-5 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:bg-accent-hover hover:shadow-cyan-500/40 items-center gap-1.5 btn-glow"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Request a Quote</span>
              <ArrowRight className="h-3.5 w-3.5 ml-0.5" />
            </Link>

            {/* Mobile compact Quote button */}
            <Link
              href="/request-a-quote/"
              className="sm:hidden inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold text-white shadow-md shadow-cyan-500/20"
            >
              <Sparkles className="h-3 w-3" />
              <span>Quote</span>
            </Link>

            <button
              type="button"
              className="flex items-center justify-center rounded-full p-2 text-foreground hover:bg-surface hover:text-accent transition-colors lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <nav className="border-t border-white/10 bg-[#091322]/98 backdrop-blur-2xl px-5 pb-6 lg:hidden animate-fade-in-up text-white">
            <ul className="flex flex-col gap-1 pt-3 text-sm">
              {currentNav.map((item) => (
                <li key={`mobile-${item.label}`}>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 font-semibold text-slate-200 transition-all hover:bg-white/10 hover:text-cyan-300 hover:translate-x-1"
                    onClick={(e) => {
                      if (item.href === "#") {
                        e.preventDefault();
                      } else {
                        setOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-3 flex flex-col gap-0.5 border-l-2 border-cyan-400/30 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href} className="flex flex-col">
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-1.5 text-xs text-slate-400 transition-all hover:bg-white/10 hover:text-cyan-300"
                            onClick={() => {
                              if (!child.children) setOpen(false);
                            }}
                          >
                            {child.label}
                          </Link>
                          {child.children && child.children.length > 0 && (
                            <ul className="ml-4 flex flex-col gap-0.5 border-l border-cyan-400/20 pl-2 mt-0.5">
                              {child.children.map(sub => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    className="block rounded-md px-2 py-1.5 text-[11px] text-slate-500 transition-all hover:text-cyan-300"
                                    onClick={() => setOpen(false)}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-4 flex items-center justify-between gap-3">
                <Link
                  href="/request-a-quote/"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-center font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl btn-glow"
                  onClick={() => setOpen(false)}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Request a Free Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
