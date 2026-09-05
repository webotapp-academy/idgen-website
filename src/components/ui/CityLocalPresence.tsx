"use client";

import Link from "next/link";
import {
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  UserCheck,
  ShieldCheck,
  Sparkles,
  Award,
  KeyRound,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Clock,
  Layers,
  Landmark,
  HeartPulse,
  Ticket,
} from "lucide-react";
import type { CityData, StateData } from "@/lib/dynamic-locations";

interface CityLocalPresenceProps {
  city: CityData;
  state: StateData;
  organizations?: string[];
}

interface AudienceItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  badge: string;
}

const AUDIENCES: AudienceItem[] = [
  {
    name: "Students & Scholars",
    category: "Schools, Colleges & Universities",
    icon: GraduationCap,
    colorClass: "from-cyan-500/20 to-blue-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/30",
    badge: "Academic",
  },
  {
    name: "Employees & Executives",
    category: "Corporate, Startups & Tech Offices",
    icon: Briefcase,
    colorClass: "from-blue-500/20 to-indigo-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30",
    badge: "Corporate",
  },
  {
    name: "Faculty & Teaching Staff",
    category: "Professors, Lecturers & Teachers",
    icon: UserCheck,
    colorClass: "from-teal-500/20 to-emerald-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30",
    badge: "Faculty",
  },
  {
    name: "Visitors & Contractors",
    category: "Temporary Badges & Escorted Passes",
    icon: ShieldCheck,
    colorClass: "from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    badge: "Security",
  },
  {
    name: "Club & Association Members",
    category: "Societies, Alumni & Sports Guilds",
    icon: Users,
    colorClass: "from-purple-500/20 to-violet-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
    badge: "Membership",
  },
  {
    name: "Event Participants",
    category: "Summits, Trade Expos & Festivals",
    icon: Sparkles,
    colorClass: "from-pink-500/20 to-rose-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30",
    badge: "Events",
  },
  {
    name: "Conference Delegates",
    category: "Keynote Speakers & VIP Badges",
    icon: Award,
    colorClass: "from-sky-500/20 to-cyan-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30",
    badge: "Conferences",
  },
  {
    name: "Institutional Access Users",
    category: "RFID Turnstile & Door Smartcards",
    icon: KeyRound,
    colorClass: "from-indigo-500/20 to-blue-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
    badge: "Smart RFID",
  },
];

export function CityLocalPresence({ city, state, organizations }: CityLocalPresenceProps) {
  const stateName = state?.name || "Assam";
  const cityName = city?.name || "Guwahati";
  const isGuwahati = city?.slug === "guwahati" || city?.isPrimary;

  // Dynamically resolve organization tags from city data
  const rawOrgs =
    organizations && organizations.length > 0
      ? organizations
      : city?.organizationsServed && city.organizationsServed.length > 0
        ? city.organizationsServed
        : [
            "Schools",
            "Colleges",
            "Universities",
            "Companies",
            "Corporate offices",
            "Hospitals",
            "Institutions",
            "Government organizations",
            "NGOs",
            "Events",
            "Clubs",
            "Associations",
          ];

  // Group dynamic organizations into intuitive sector buckets
  const sectorGroups = [
    {
      name: "Education & Academia",
      icon: GraduationCap,
      colorClass: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
      items: rawOrgs.filter((o) => /school|college|universit|academic|institut/i.test(o)),
      fallback: ["Schools", "Colleges", "Universities"],
    },
    {
      name: "Corporate & Enterprise",
      icon: Briefcase,
      colorClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      items: rawOrgs.filter((o) => /company|corporate|office|business|firm|startup/i.test(o)),
      fallback: ["Companies", "Corporate Offices"],
    },
    {
      name: "Healthcare & Government",
      icon: HeartPulse,
      colorClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      items: rawOrgs.filter((o) => /hospital|government|ngo|health|public|department/i.test(o)),
      fallback: ["Hospitals", "Government Orgs", "NGOs"],
    },
    {
      name: "Events & Membership",
      icon: Ticket,
      colorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      items: rawOrgs.filter((o) =>
        /event|club|associat|societ|summit|conferen/i.test(o)
      ),
      fallback: ["Events", "Clubs", "Associations"],
    },
  ];

  return (
    <section aria-labelledby="local-presence-heading" className="relative">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-12 -left-12 -z-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Main Glassmorphic Wrapper */}
      <div className="relative rounded-[2.5rem] border border-slate-200/90 dark:border-white/10 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-900/5 dark:shadow-black/60 overflow-hidden">
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

        {/* Top Header Section */}
        <div className="relative z-10 space-y-4 max-w-4xl">
          {/* Eyebrow badge with live pulse indicator */}
          <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-accent/30 bg-accent-soft/40 dark:bg-accent/10 px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent">
              {city?.localPresenceBadge ||
                (isGuwahati
                  ? "Central Manufacturing Hub • Guwahati Cleanroom"
                  : `Local Identity Solutions • ${cityName}, ${stateName}`)}
            </span>
            <span className="hidden sm:inline-flex items-center rounded-md bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">
              {city?.localPresenceSubBadge || (isGuwahati ? "Direct Factory Access" : "Direct Doorstep Logistics")}
            </span>
          </div>

          {/* Heading */}
          <h2
            id="local-presence-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-[1.2]"
          >
            {city?.localPresenceTitle ? (
              <span>{city.localPresenceTitle}</span>
            ) : (
              <>
                IDGen in {cityName}:{" "}
                <span className="gradient-text">A Local Identity Solutions Partner</span>
              </>
            )}
          </h2>

          {/* Lede Text */}
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-3xl">
            {city?.localColor ||
              (isGuwahati
                ? "IDGen operates its central identity manufacturing cleanroom in Guwahati, Assam, working closely with premier academic institutions, corporate offices, and government organizations across the region."
                : `IDGen provides direct factory ID card printing, RFID encoding, and custom lanyard supply with prompt doorstep delivery for organizations across ${cityName}, ${stateName}.`)}
          </p>

          {/* Quick Advantage Pills */}
          <div className="pt-2 flex flex-wrap gap-2 sm:gap-3 text-xs">
            {city?.localAdvantagePills && city.localAdvantagePills.length > 0 ? (
              city.localAdvantagePills.map((pill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1 text-foreground font-medium backdrop-blur-sm shadow-xs"
                >
                  {idx === 0 ? (
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                  ) : idx === 1 ? (
                    <Clock className="h-3.5 w-3.5 text-accent" />
                  ) : idx === 2 ? (
                    <Layers className="h-3.5 w-3.5 text-accent" />
                  ) : (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  )}
                  <span>{pill}</span>
                </div>
              ))
            ) : (
              <>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1 text-foreground font-medium backdrop-blur-sm shadow-xs">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span>{isGuwahati ? "Guwahati Primary Cleanroom" : `${city.name} Priority Routes`}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1 text-foreground font-medium backdrop-blur-sm shadow-xs">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  <span>{isGuwahati ? "24–48h Priority Batch Dispatch" : "Fast Doorstep Turnaround"}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1 text-foreground font-medium backdrop-blur-sm shadow-xs">
                  <Layers className="h-3.5 w-3.5 text-accent" />
                  <span>Pre-Production Physical Proofing</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1 text-foreground font-medium backdrop-blur-sm shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>100% Optical Quality Check</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Two-Column Grid for Audiences & Organizations */}
        <div className="relative z-10 mt-8 sm:mt-10 grid gap-6 lg:grid-cols-2">
          
          {/* Card 1: Target Audiences */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0e1726]/90 p-5 sm:p-7 backdrop-blur-xl shadow-lg shadow-slate-900/5 transition-all duration-300 hover:border-accent/40 hover:shadow-xl">
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-cyan-500/10 border border-accent/30 text-accent shrink-0 shadow-xs">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {city.audiencesTitle || `Organizations in ${city.name} require identity products for:`}
                    </h3>
                    <p className="text-xs text-muted">
                      {city.audiencesSubtitle || `Tailored credential architectures mapped to specific access requirements in ${city.name}.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Audiences Grid */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {city.targetAudiences && city.targetAudiences.length > 0 ? (
                  city.targetAudiences.map((aud, idx) => {
                    const fallbackAud = AUDIENCES[idx % AUDIENCES.length];
                    const Icon = fallbackAud ? fallbackAud.icon : GraduationCap;
                    const colorClass = fallbackAud
                      ? fallbackAud.colorClass
                      : "from-cyan-500/20 to-blue-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/30";
                    return (
                      <div
                        key={idx}
                        className="group/item relative flex items-center gap-3 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white dark:hover:bg-white/[0.07] hover:shadow-md hover:shadow-accent/5"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br border ${colorClass} shadow-xs transition-transform duration-300 group-hover/item:scale-110`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <p className="text-xs font-bold text-foreground truncate">{aud.name}</p>
                          </div>
                          <p className="text-[10px] text-muted truncate">{aud.category}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  AUDIENCES.map((audience) => {
                    const Icon = audience.icon;
                    return (
                      <div
                        key={audience.name}
                        className="group/item relative flex items-center gap-3 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white dark:hover:bg-white/[0.07] hover:shadow-md hover:shadow-accent/5"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br border ${audience.colorClass} shadow-xs transition-transform duration-300 group-hover/item:scale-110`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <p className="text-xs font-bold text-foreground truncate">{audience.name}</p>
                          </div>
                          <p className="text-[10px] text-muted truncate">{audience.category}</p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-2 text-xs">
              <span className="text-[11px] text-muted flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{city.audiencesNote || "Single & dual-sided thermal, RFID & ultrasonic sealed credentials"}</span>
              </span>
              <Link
                href="/id-card-printing/"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-accent hover:underline shrink-0"
              >
                <span>View Specs</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Card 2: Typical Organizations Served */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0e1726]/90 p-5 sm:p-7 backdrop-blur-xl shadow-lg shadow-slate-900/5 transition-all duration-300 hover:border-accent/40 hover:shadow-xl">
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 border border-sky-500/30 text-sky-500 dark:text-sky-400 shrink-0 shadow-xs">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {city.organizationsTitle || `Typical Organizations We Serve in ${city.name}:`}
                    </h3>
                    <p className="text-xs text-muted">
                      {city.organizationsSubtitle || `Institutions, healthcare bodies, government offices & enterprises across ${city.name}.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Categorized Sectors Layout */}
              <div className="mt-5 space-y-3">
                {sectorGroups.map((sector) => {
                  const SectorIcon = sector.icon;
                  const displayTags = sector.items.length > 0 ? sector.items : sector.fallback;
                  return (
                    <div
                      key={sector.name}
                      className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] p-3 transition-colors hover:border-accent/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <SectorIcon className="h-3.5 w-3.5 text-accent" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/80">
                          {sector.name}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {displayTags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-xl bg-white dark:bg-white/10 border border-slate-200/90 dark:border-white/10 px-2.5 py-1 text-xs font-semibold text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent-soft/30 dark:hover:bg-accent/20 cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Local Hub Advantage Callout */}
            <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/10 space-y-2">
              <div className="rounded-2xl border border-accent/25 bg-gradient-to-r from-accent-soft/50 via-cyan-500/5 to-transparent dark:from-accent/15 dark:via-cyan-900/10 p-3.5 flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-white shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-foreground">
                    {city.localAdvantageTitle || `${city.name} Local Production Advantage`}
                  </p>
                  <p className="text-[11px] text-muted leading-relaxed mt-0.5">
                    {city.localAdvantageDesc ||
                      (isGuwahati
                        ? "Direct cleanroom manufacturing in Guwahati ensures fast physical proofs, immediate design sign-off, and priority local dispatch."
                        : `Direct coordination with our manufacturing cleanroom ensures 100% optical quality inspection, physical sample proofing, and reliable doorstep delivery in ${city.name}.`)}
                  </p>
                </div>
                <Link
                  href="/request-a-quote/"
                  className="shrink-0 self-center rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold text-white hover:bg-accent-hover transition shadow-xs"
                >
                  {city.localAdvantageCta || "Quote →"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
