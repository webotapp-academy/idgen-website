import type { LucideIcon } from "lucide-react";
import { Container } from "./Container";

export type PageHeroStat = { label: string; value: string };

export function PageHero({
  eyebrow,
  icon: Icon,
  title,
  lede,
  stats,
  visual,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  icon?: LucideIcon;
  title: React.ReactNode;
  lede?: string;
  stats?: PageHeroStat[];
  /** Optional side visual — switches to a two-column layout on lg+ */
  visual?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const copy = (
    <div>
      {breadcrumbs && <div className="mb-4">{breadcrumbs}</div>}
      <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-white/90 dark:border-white/15 dark:bg-white/5 px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-md shadow-xs dark:shadow-lg dark:shadow-black/10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        {Icon && <Icon className="h-3.5 w-3.5 text-accent" />}
        <span>{eyebrow}</span>
      </div>
      <h1 className="mt-5 max-w-3xl text-3xl font-extrabold text-balance text-slate-900 dark:text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18] tracking-tight">
        {title}
      </h1>
      {lede && <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">{lede}</p>}

      {stats && stats.length > 0 && (
        <dl className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative rounded-2xl border border-slate-200/90 bg-white/90 dark:border-white/10 dark:bg-white/[0.04] px-4 py-3 backdrop-blur-md shadow-xs transition-all duration-300 hover:border-accent/50 dark:hover:border-accent/40 hover:bg-white dark:hover:bg-white/[0.08] hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/5"
            >
              <dt className="text-[10px] font-extrabold tracking-widest text-accent uppercase">{s.label}</dt>
              <dd className="mt-1 text-base font-extrabold text-slate-900 dark:text-white group-hover:text-accent transition-colors">{s.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {children}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-b border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-50 via-sky-50/40 to-slate-100 dark:from-[#0B1320] dark:via-[#0e1a2e] dark:to-[#071525] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="hero-grid-pattern absolute inset-0 opacity-40 dark:opacity-25" aria-hidden="true" />
      <div
        className="animate-pulse-glow pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-[#009FE3]/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-[150px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        {visual ? (
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
            {copy}
            <div className="hidden lg:flex flex-col h-full overflow-hidden rounded-3xl">{visual}</div>
          </div>
        ) : (
          copy
        )}
      </Container>
    </div>
  );
}
