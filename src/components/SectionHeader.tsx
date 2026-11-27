import { cn } from "@/lib/utils";

import { Reveal, RevealLines } from "./Reveal";

type SectionHeaderProps = {
  number: string;
  label: string;
  lines: React.ReactNode[];
  intro?: React.ReactNode;
  className?: string;
};

export const SectionHeader = ({ number, label, lines, intro, className }: SectionHeaderProps) => (
  <header className={cn("grid gap-8 lg:grid-cols-12 lg:gap-6", className)}>
    <Reveal className="lg:col-span-3" y={12}>
      <p className="text-meta flex items-center gap-3 text-dim">
        <span className="text-accent">{number}</span>
        <span className="h-px w-8 bg-line-strong" aria-hidden />
        {label}
      </p>
    </Reveal>
    <div className="lg:col-span-9">
      <RevealLines as="h2" lines={lines} className="text-section" />
      {intro && (
        <Reveal delay={0.15} className="mt-8 max-w-[56ch] text-lede text-mute">
          {intro}
        </Reveal>
      )}
    </div>
  </header>
);
