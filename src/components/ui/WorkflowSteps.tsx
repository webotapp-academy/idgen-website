export type WorkflowStep = { title: string; body: string };

export function WorkflowSteps({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="relative flex gap-4 overflow-hidden rounded-2xl border border-surface-border bg-surface py-5 pr-5 pl-6"
        >
          <span
            className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-accent to-accent/10"
            aria-hidden="true"
          />
          <span className="relative flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-accent to-[#0b3550] font-mono text-sm font-bold text-white shadow-[0_4px_12px_-4px_rgba(27,159,222,0.6)]">
            {i + 1}
            {i < steps.length - 1 && (
              <span
                className="absolute top-full left-1/2 hidden h-3 w-px -translate-x-1/2 bg-accent/30 sm:block"
                aria-hidden="true"
              />
            )}
          </span>
          <div>
            <h3 className="font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
