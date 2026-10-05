import Image from "next/image";
import { ShieldCheck, Sparkles, Award, CheckCircle2, Layers } from "lucide-react";

export function HeroShowcaseVisual({
  cityName = "Guwahati",
  stateName = "Assam",
  imagePath = "/images/idgen-hero-cards-mockup.png",
  alt = "IDGen Identity Cards & Lanyards Showcase",
  topBadgeText,
  chip1Text,
  chip2Text,
}: {
  cityName?: string;
  stateName?: string;
  imagePath?: string;
  alt?: string;
  topBadgeText?: string;
  chip1Text?: string;
  chip2Text?: string;
}) {
  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] max-w-lg mx-auto lg:max-w-none group flex flex-col">
      {/* Background ambient glow effect */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/30 via-cyan-400/20 to-sky-500/30 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Main Container Card */}
      <div className="relative flex-1 flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-[#0e1726]/80 p-3 sm:p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-accent/40 overflow-hidden">
        
        {/* Main Image Frame (Full Height) */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[350px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#111c2d] dark:to-[#070d18] shadow-inner">
          <Image
                  unoptimized
            src={imagePath}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-contain object-center p-3 sm:p-5 img-zoom transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Bottom Feature Badges Grid */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-center shrink-0">
          <div className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] p-2 transition hover:bg-accent-soft/30">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-accent">Capacity</span>
            <span className="text-xs font-extrabold text-slate-900 dark:text-white">10K+ IDs/Day</span>
          </div>
          <div className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] p-2 transition hover:bg-accent-soft/30">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-accent">Dispatch</span>
            <span className="text-xs font-extrabold text-slate-900 dark:text-white">24–48 Hours</span>
          </div>
          <div className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] p-2 transition hover:bg-accent-soft/30">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-accent">Quality</span>
            <span className="text-xs font-extrabold text-slate-900 dark:text-white">100% Inspected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
