export type HolderVariant = "v1" | "v2" | "v3" | "h1" | "h2" | "metal" | "crystal" | "hook";

const CORNER_CLIPS = (
  <>
    <span className="absolute top-1 left-1 h-2 w-2 rounded-sm border-2 border-accent" aria-hidden="true" />
    <span className="absolute top-1 right-1 h-2 w-2 rounded-sm border-2 border-accent" aria-hidden="true" />
    <span className="absolute bottom-1 left-1 h-2 w-2 rounded-sm border-2 border-accent" aria-hidden="true" />
    <span className="absolute bottom-1 right-1 h-2 w-2 rounded-sm border-2 border-accent" aria-hidden="true" />
  </>
);

export function HolderShape({ variant }: { variant: HolderVariant }) {
  if (variant === "hook") {
    return (
      <div className="flex h-24 items-center justify-center">
        <svg width="40" height="72" viewBox="0 0 40 72" fill="none" aria-hidden="true">
          <path
            d="M20 4a10 10 0 100 20 6 6 0 110 12H14"
            stroke="#1b9fde"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M14 36v20a6 6 0 006 6h0a6 6 0 006-6" stroke="#0b3550" strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="20" cy="66" r="4" fill="#0b3550" />
        </svg>
      </div>
    );
  }

  const isHorizontal = variant === "h1" || variant === "h2";
  const isLocked = variant === "v2" || variant === "h2";
  const isPremium = variant === "metal" || variant === "crystal";

  const outerClass = isHorizontal ? "h-16 w-24" : "h-24 w-16";
  const bg = isPremium
    ? variant === "metal"
      ? "bg-gradient-to-br from-slate-300 via-slate-100 to-slate-400"
      : "bg-gradient-to-br from-sky-100 via-white to-cyan-100"
    : "bg-white";

  return (
    <div className="flex h-24 items-center justify-center">
      <div className="relative">
        {/* Lanyard hole tab */}
        <div className={`mx-auto h-2 w-4 rounded-t-sm bg-slate-300 ${isHorizontal ? "" : ""}`} aria-hidden="true" />
        <div
          className={`relative rounded-lg border-2 ${isPremium ? "border-slate-300" : "border-accent/50"} ${bg} shadow-sm ${outerClass}`}
        >
          <div className="absolute top-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-slate-300" aria-hidden="true" />
          <div
            className={`absolute inset-2.5 rounded border border-dashed ${isPremium ? "border-slate-400" : "border-accent/40"}`}
            aria-hidden="true"
          />
          {isLocked && CORNER_CLIPS}
          {variant === "crystal" && (
            <span
              className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/0 via-white/60 to-white/0"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </div>
  );
}
