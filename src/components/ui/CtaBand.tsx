import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export type CtaLink = { label: string; href: string; primary?: boolean };

export function CtaBand({ title, body, links }: { title: string; body?: string; links: CtaLink[] }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1320] via-[#0e1a2e] to-[#071525] px-6 py-12 text-white sm:px-12 sm:py-14">
      {/* Animated grid background */}
      <div className="hero-grid-pattern absolute inset-0 opacity-20" aria-hidden="true" />
      
      {/* Ambient glow orbs */}
      <div
        className="animate-pulse-glow pointer-events-none absolute -top-28 right-0 h-80 w-80 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-cyan-400/10 blur-[100px]"
        aria-hidden="true"
      />
      
      {/* Decorative floating element */}
      <div className="pointer-events-none absolute top-6 right-8 hidden sm:block animate-float-slow" aria-hidden="true">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
          <Sparkles className="h-5 w-5 text-accent/60" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold text-balance sm:text-3xl leading-tight">{title}</h2>
          {body && <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300">{body}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) =>
            link.primary ? (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(2,132,199,0.4)] transition-all duration-300 hover:bg-accent-hover hover:text-white hover:shadow-[0_0_45px_rgba(2,132,199,0.6)] btn-glow"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-accent hover:text-accent hover:bg-white/10"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
