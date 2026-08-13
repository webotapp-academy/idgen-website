import { ChevronRight } from "lucide-react";

export function FlowChain({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span
            className={`rounded-full border px-3.5 py-1.5 text-xs font-bold sm:text-sm ${
              dark
                ? "border-white/15 bg-white/5 text-white"
                : "border-surface-border bg-surface text-foreground"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <ChevronRight className={`h-4 w-4 shrink-0 ${dark ? "text-accent" : "text-accent"}`} />
          )}
        </div>
      ))}
    </div>
  );
}
