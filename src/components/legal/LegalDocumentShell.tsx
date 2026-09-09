"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FileText, 
  ShieldCheck, 
  Printer, 
  Search, 
  Scale, 
  Mail, 
  Globe, 
  MapPin, 
  Calendar, 
  X,
  Layers,
  ArrowRight,
  CreditCard,
  Repeat,
  CheckSquare,
  Trash2,
  UserCheck,
  Clock,
  FileSpreadsheet
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export interface LegalSectionItem {
  id: string;
  num: string;
  title: string;
  content: React.ReactNode;
  tags?: string[];
}

export type LegalIconKey = 
  | "credit-card"
  | "repeat"
  | "check"
  | "trash"
  | "shield"
  | "user"
  | "clock"
  | "spreadsheet";

export interface LegalHighlight {
  label: string;
  value: string;
  desc: string;
  iconKey: LegalIconKey;
}

interface LegalDocumentShellProps {
  documentType: "terms" | "privacy";
  title: string;
  subtitle: string;
  lastUpdated: string;
  highlights: LegalHighlight[];
  sections: LegalSectionItem[];
  breadcrumbs: { name: string; path: string }[];
}

export function LegalDocumentShell({
  title,
  subtitle,
  lastUpdated,
  highlights,
  sections,
  breadcrumbs,
}: LegalDocumentShellProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState<string>("");

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase().trim();
    return sections.filter((sec) => {
      const matchTitle = sec.title.toLowerCase().includes(q);
      const matchNum = sec.num.includes(q);
      const matchTags = sec.tags?.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchNum || matchTags;
    });
  }, [sections, searchQuery]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const navTabs = [
    { name: "Terms & Conditions", href: "/terms-conditions/", icon: Scale, current: pathname.startsWith("/terms-conditions") },
    { name: "Privacy Policy", href: "/privacy-policy/", icon: ShieldCheck, current: pathname.startsWith("/privacy-policy") },
    { name: "Shipping & Returns", href: "/shipping-returns/", icon: FileText, current: pathname.startsWith("/shipping-returns") },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-[#070D18] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10 bg-gradient-to-b from-white via-slate-50 to-slate-100/80 dark:from-[#0B1320] dark:via-[#070D18] dark:to-[#070D18] pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="hero-grid-pattern absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              Official Document
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-cyan-500" />
              Last Updated: {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-cyan-500" />
              Guwahati, Assam, India
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {subtitle}
          </p>

          {/* Quick Legal Switcher Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5" /> Legal Center:
            </span>
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    tab.current
                      ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold"
                      : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {tab.name}
                </Link>
              );
            })}
          </div>

          {/* Top Key Clauses / Highlight Cards */}
          {highlights.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((h, idx) => {
                return (
                  <div
                    key={idx}
                    className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.03] p-4.5 backdrop-blur-sm shadow-xs transition-all hover:border-cyan-500/40 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center gap-2.5 text-cyan-500 dark:text-cyan-400">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        {h.iconKey === "credit-card" && <CreditCard className="h-4 w-4" />}
                        {h.iconKey === "repeat" && <Repeat className="h-4 w-4" />}
                        {h.iconKey === "check" && <CheckSquare className="h-4 w-4" />}
                        {h.iconKey === "trash" && <Trash2 className="h-4 w-4" />}
                        {h.iconKey === "shield" && <ShieldCheck className="h-4 w-4" />}
                        {h.iconKey === "user" && <UserCheck className="h-4 w-4" />}
                        {h.iconKey === "clock" && <Clock className="h-4 w-4" />}
                        {h.iconKey === "spreadsheet" && <FileSpreadsheet className="h-4 w-4" />}
                      </div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                        {h.label}
                      </span>
                    </div>
                    <div className="mt-2 text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      {h.value}
                    </div>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* Main Content Area with Sticky TOC Sidebar */}
      <Container className="py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 xl:gap-12 items-start">
          {/* Left Column: Interactive Table of Contents & Tools */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            {/* Search / Filter box */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 shadow-xs">
              <label htmlFor="clause-search" className="text-xs font-bold tracking-wide uppercase text-slate-500 dark:text-slate-400 mb-2 block">
                Search Clauses
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  id="clause-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword (e.g. reprint, advance)..."
                  className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/30 pl-9 pr-8 py-2 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-hidden focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-2 text-[11px] text-cyan-600 dark:text-cyan-400 font-medium">
                  Showing {filteredSections.length} of {sections.length} clauses
                </p>
              )}
            </div>

            {/* Quick Actions Card */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-xs cursor-pointer"
              >
                <Printer className="h-3.5 w-3.5" />
                Print / Save PDF
              </button>
              <Link
                href="/contact-us/"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-2.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-xs"
              >
                <Mail className="h-3.5 w-3.5" />
                Support
              </Link>
            </div>

            {/* Table of Contents List */}
            <nav
              aria-label="Table of Contents"
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-4 shadow-xs max-h-[60vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clauses Index ({filteredSections.length})
                </span>
                <span className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400">
                  v2.4
                </span>
              </div>
              <ul className="space-y-1 text-xs">
                {filteredSections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={() => setActiveId(sec.id)}
                      className={`group flex items-start gap-2 rounded-lg px-2.5 py-1.5 transition-all leading-snug ${
                        activeId === sec.id
                          ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200"
                      }`}
                    >
                      <span className="shrink-0 font-mono text-[10px] font-bold text-slate-400 group-hover:text-cyan-500 mt-0.5">
                        {sec.num.padStart(2, "0")}.
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Quick Contact Card */}
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-4.5 text-xs">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-cyan-500" /> Legal Enquiries
              </h3>
              <p className="mt-1 text-slate-500 dark:text-slate-400 leading-relaxed">
                Have questions or require specific institutional compliance paperwork?
              </p>
              <a
                href="mailto:info@idgen.in"
                className="mt-3 inline-flex items-center gap-1 font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                info@idgen.in <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </aside>

          {/* Right Column: Full Clause Cards */}
          <main className="space-y-6">
            {filteredSections.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/10 p-12 text-center">
                <Search className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                <h2 className="text-base font-bold text-slate-800 dark:text-white">No clauses found</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  No sections match your search &ldquo;{searchQuery}&rdquo;. Try another term.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950"
                >
                  Clear Search Filter
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-28 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-white/[0.025] p-6 sm:p-8 shadow-xs transition-all hover:border-slate-300 dark:hover:border-white/20"
                >
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-white/5">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                      {sec.num.padStart(2, "0")}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {sec.title}
                    </h2>
                  </div>
                  <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-3">
                    {sec.content}
                  </div>
                </section>
              ))
            )}

            {/* Official Contact Box as Last Section */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-white to-slate-50 dark:from-[#0B1320] dark:to-[#070D18] p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                    Official Entity & Notice Address
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                    iDGen — Identity Solutions, Simplified
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Commercial Credential Manufacturing & iDGen Studio Platform
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 text-xs font-bold shadow-md shadow-cyan-500/20 transition-all"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                  <Mail className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-slate-700 dark:text-slate-300">Email Address</span>
                    <a href="mailto:info@idgen.in" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      info@idgen.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                  <Globe className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-slate-700 dark:text-slate-300">Official Website</span>
                    <a href="https://www.idgen.in" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      www.idgen.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                  <MapPin className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-slate-700 dark:text-slate-300">Jurisdiction & Location</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      Guwahati, Assam, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
