import { cn } from "@/lib/utils";

/**
 * TB monogram. Three strata lines under the letters are a quiet nod to
 * the geology background, read as layers of a stack.
 */
export const Monogram = ({ className }: { className?: string }) => (
  <span
    aria-hidden
    className={cn(
      "relative flex h-9 w-9 flex-col items-center justify-center rounded-[10px] border border-line bg-surface transition-colors duration-300 group-hover:border-accent/50",
      className,
    )}
  >
    <span className="font-display text-[13px] leading-none font-semibold tracking-[-0.04em]">
      TB
    </span>
    <span className="mt-1 flex w-4 flex-col gap-[2px]">
      <span className="h-px w-full bg-accent" />
      <span className="h-px w-3/4 bg-paper/40" />
    </span>
  </span>
);
