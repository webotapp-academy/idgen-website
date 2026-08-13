import { ShieldCheck, Sparkles } from "lucide-react";

export function IllustratedCard({
  org,
  subOrg,
  holderName,
  holderRole,
  holderId,
  accent = "#1b9fde",
  showChip = false,
}: {
  org: string;
  subOrg: string;
  holderName: string;
  holderRole: string;
  holderId: string;
  accent?: string;
  showChip?: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2rem] blur-2xl"
        style={{ background: `radial-gradient(circle, ${accent}33, transparent 70%)` }}
        aria-hidden="true"
      />

      {/* Lanyard strap */}
      <div className="relative mx-auto mb-[-8px] flex w-20 flex-col items-center">
        <div className="h-4 w-10 rounded-t-sm shadow-md" style={{ background: `linear-gradient(90deg, ${accent}cc, ${accent})` }}>
          <div className="flex h-full items-center justify-center text-[6px] font-black tracking-widest text-white/90 uppercase">
            IDGen
          </div>
        </div>
        <div className="h-2.5 w-3 rounded-b-md bg-gradient-to-b from-slate-300 to-slate-100 shadow-inner" />
        <div className="h-1.5 w-5 rounded-full border border-slate-300 bg-slate-100" />
      </div>

      {/* Card */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/60 bg-white p-5 shadow-[0_20px_45px_-15px_rgba(11,53,80,0.35)]"
        style={{ boxShadow: `0 20px 45px -15px ${accent}40` }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <div className="hero-grid-pattern absolute inset-0" />
        </div>

        <div className="relative z-10 flex items-start justify-between gap-3 border-b border-surface-border pb-3">
          <div>
            <span className="text-[10px] font-black tracking-wider uppercase" style={{ color: accent }}>
              {org}
            </span>
            <p className="text-[11px] font-medium text-muted">{subOrg}</p>
          </div>
          {showChip && (
            <div className="flex items-center gap-1 rounded border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">
              <div className="h-2 w-2 rounded-sm bg-amber-400" />
              RFID
            </div>
          )}
        </div>

        <div className="relative z-10 mt-4 flex gap-4">
          <div className="flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-lg border border-surface-border bg-background">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${accent}, #0b3550)` }}
            >
              {holderName.charAt(0)}
            </div>
            <span className="mt-1 text-[8px] font-semibold tracking-wider text-muted uppercase">Photo ID</span>
            <div className="absolute bottom-0 inset-x-0 h-1" style={{ background: accent }} />
          </div>

          <div className="flex min-w-0 flex-col justify-between">
            <div>
              <h4 className="truncate text-base font-bold text-foreground">{holderName}</h4>
              <p className="text-xs font-semibold" style={{ color: accent }}>{holderRole}</p>
              <p className="mt-1 font-mono text-[11px] text-muted">{holderId}</p>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-muted">
              <ShieldCheck className="h-3 w-3" style={{ color: accent }} />
              Verified Identification
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4 flex items-center justify-between border-t border-surface-border pt-3">
          <div className="h-6 w-24 bg-[repeating-linear-gradient(90deg,#0b3550,#0b3550_2px,transparent_2px,transparent_4px)] opacity-70" />
          <div className="flex items-center gap-1 text-[9px] font-bold" style={{ color: accent }}>
            <Sparkles className="h-3 w-3" />
            IDGEN SECURE
          </div>
        </div>
      </div>
    </div>
  );
}
