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
}: {
  eyebrow: string;
  icon?: LucideIcon;
  title: string;
  lede?: string;
  stats?: PageHeroStat[];
  /** Optional side visual (e.g. IllustratedCard) — switches to a two-column layout on lg+ */
  visual?: React.ReactNode;
}) {
  const copy = (
    <div>
      <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-md shadow-lg shadow-black/10">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {eyebrow}
      </div>
      <h1 className="mt-5 max-w-3xl text-3xl font-extrabold text-balance text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] tracking-tight">
        {title}
      </h1>
      {lede && <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">{lede}</p>}

      {stats && stats.length > 0 && (
        <dl className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <dt className="text-[10px] font-bold tracking-widest text-accent uppercase">{s.label}</dt>
              <dd className="mt-1 text-lg font-extrabold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0B1320] via-[#0e1a2e] to-[#071525] text-white">
      <div className="hero-grid-pattern absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="animate-pulse-glow pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[#009FE3]/15 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-[150px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-16 sm:py-20">
        {visual ? (
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            {copy}
            <div className="hidden lg:block overflow-hidden rounded-3xl">{visual}</div>
          </div>
        ) : (
          copy
        )}
      </Container>
    </div>
  );
}
