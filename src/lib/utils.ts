import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/** Teach tailwind-merge about our custom type-scale utilities so they aren't dropped next to text colours. */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-hero", "text-section", "text-title", "text-lede", "text-meta"],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
