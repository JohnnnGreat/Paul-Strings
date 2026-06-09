import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
  separator?: string;
};

export function Marquee({
  items,
  direction = "left",
  className,
  itemClassName,
  separator = "·",
}: MarqueeProps) {
  /* Duplicate to fill the loop seamlessly */
  const doubled = [...items, ...items];

  return (
    <div className={cn("overflow-hidden select-none", className)}>
      <div
        className={cn(
          "flex items-center gap-0 whitespace-nowrap",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className={cn("px-5 py-1 text-xs font-jakarta font-500 uppercase tracking-widest", itemClassName)}>
              {item}
            </span>
            <span className="text-subtle text-xs">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
