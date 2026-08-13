const NODES = [
  { label: "Arunachal Pradesh", x: 200, y: 40, active: false },
  { label: "Nagaland", x: 330, y: 130, active: false },
  { label: "Assam", x: 170, y: 150, active: true },
  { label: "Manipur", x: 320, y: 230, active: false },
  { label: "Meghalaya", x: 110, y: 230, active: true },
  { label: "Mizoram", x: 260, y: 300, active: false },
  { label: "Tripura", x: 120, y: 300, active: false },
  { label: "Sikkim", x: 40, y: 120, active: false },
];

const HUB = { x: 170, y: 150 }; // Guwahati, inside Assam

export function NortheastNetworkMap() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white p-5 shadow-[0_20px_45px_-15px_rgba(11,53,80,0.35)]">
      <svg viewBox="0 0 380 340" className="w-full" role="img" aria-label="IDGen service network across Northeast India — Assam and Meghalaya active, other states coming soon">
        {NODES.filter((n) => n.label !== "Assam").map((n) => (
          <line
            key={n.label}
            x1={HUB.x}
            y1={HUB.y}
            x2={n.x}
            y2={n.y}
            stroke={n.active ? "#1b9fde" : "#94a3b8"}
            strokeWidth={n.active ? 2 : 1.25}
            strokeDasharray={n.active ? undefined : "4 4"}
            opacity={n.active ? 0.7 : 0.35}
          />
        ))}

        {NODES.map((n) => (
          <g key={n.label}>
            {n.label === "Assam" ? (
              <>
                <circle cx={n.x} cy={n.y} r="9" fill="#1b9fde" opacity="0.25" />
                <circle cx={n.x} cy={n.y} r="5" fill="#1b9fde" />
              </>
            ) : (
              <circle
                cx={n.x}
                cy={n.y}
                r={n.active ? 5 : 4}
                fill={n.active ? "#1b9fde" : "#fff"}
                stroke={n.active ? "#1b9fde" : "#94a3b8"}
                strokeWidth="1.5"
              />
            )}
            <text
              x={n.x}
              y={n.y - 12}
              textAnchor="middle"
              className="font-sans"
              fontSize="10.5"
              fontWeight={n.active ? 700 : 500}
              fill={n.active ? "#0b3550" : "#64748b"}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-2 flex items-center justify-center gap-5 text-[11px] text-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" /> Active service area
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full border border-slate-400 bg-white" /> Coming soon
        </span>
      </div>
    </div>
  );
}
