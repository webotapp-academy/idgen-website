export function CompareTable({
  columns,
  rows,
  highlightColumn,
}: {
  columns: string[];
  rows: string[][];
  /** index of the column to visually emphasize (e.g. "IDGen Studio") */
  highlightColumn?: number;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-surface-border">
      <table className="w-full min-w-[480px] border-collapse text-sm">
        <thead>
          <tr className="bg-background">
            {columns.map((c, i) => (
              <th
                key={c}
                className={`border-b border-surface-border px-4 py-3 text-left text-xs font-bold tracking-wide uppercase ${
                  i === highlightColumn ? "text-accent" : "text-muted"
                }`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 1 ? "bg-background/60" : ""}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`border-b border-surface-border px-4 py-3 align-top last:border-0 ${
                    ci === highlightColumn ? "font-semibold text-foreground" : "text-muted"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
