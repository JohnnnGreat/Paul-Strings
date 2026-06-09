import { cn } from "@/lib/utils";

type Variant = "amber" | "teal" | "coral" | "muted" | "outline";

type BadgeProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const styles: Record<Variant, string> = {
  amber:   "bg-amber/15 text-amber border border-amber/30",
  teal:    "bg-teal/15 text-teal border border-teal/30",
  coral:   "bg-coral/15 text-coral border border-coral/30",
  muted:   "bg-surface-2 text-muted border border-border",
  outline: "bg-transparent text-text border border-border",
};

export function Badge({ children, variant = "muted", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-jakarta font-500 leading-none tracking-wide",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

/* Tool badge — used in data project cards */
const toolColorMap: Record<string, Variant> = {
  Python:     "teal",
  SQL:        "teal",
  Tableau:    "amber",
  "Power BI": "amber",
  "D3.js":    "coral",
  "Next.js":  "muted",
  NLP:        "teal",
  Pandas:     "teal",
  Scikit:     "teal",
  "Spotify API": "amber",
};

export function ToolBadge({ tool }: { tool: string }) {
  const firstKey = Object.keys(toolColorMap).find((k) => tool.startsWith(k));
  const variant = firstKey ? toolColorMap[firstKey] : "muted";
  return <Badge variant={variant}>{tool}</Badge>;
}
