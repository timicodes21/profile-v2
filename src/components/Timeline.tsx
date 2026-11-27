"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import type { Experience } from "@/data/types";
import { cn } from "@/lib/utils";

type Props = {
  entries: Experience[];
  next: { label: string; chapter: string; story: string };
};

const START = 2022;
const END = 2027;
const YEARS = [2022, 2023, 2024, 2025, 2026];
const pos = (year: number) => `${((year - START) / (END - START)) * 100}%`;
const NEXT_AT = 2026.75;

export const Timeline = ({ entries, next }: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const total = entries.length + 1; // + the "next" chapter

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 65%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (obs) => {
        obs.forEach((o) => {
          if (o.isIntersecting) {
            const idx = Number((o.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const markers = [...entries.map((e) => e.start), NEXT_AT];

  return (
    <div ref={container} className="relative">
      {/* Desktop rail */}
      <div className="sticky top-[var(--nav-h)] z-20 -mx-[var(--gutter)] hidden border-b border-line bg-ink/80 px-[var(--gutter)] pt-6 pb-8 backdrop-blur-xl lg:block">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-3">
            <p className="text-meta text-dim">Chapter</p>
            <p className="font-display mt-1 text-5xl tracking-[-0.04em] tabular-nums">
              <span className="text-accent">{String(active + 1).padStart(2, "0")}</span>
              <span className="text-dim"> / {String(total).padStart(2, "0")}</span>
            </p>
          </div>
          <div className="relative col-span-9 h-14" aria-hidden>
            {YEARS.map((y) => (
              <span key={y} className="text-meta absolute top-0 -translate-x-0 text-dim" style={{ left: pos(y) }}>
                {y}
              </span>
            ))}
            <span className="text-meta absolute top-0 right-0 text-dim">Next →</span>
            {YEARS.map((y) => (
              <span key={`t${y}`} className="absolute bottom-[3px] h-2 w-px bg-line-strong" style={{ left: pos(y) }} />
            ))}
            <span className="absolute inset-x-0 bottom-1 h-px bg-line-strong" />
            <motion.span
              className="absolute inset-x-0 bottom-1 h-px origin-left bg-accent"
              initial={false}
              animate={{ scaleX: (markers[active] - START) / (END - START) }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            {markers.map((m, i) => (
              <span
                key={m}
                className={cn(
                  "absolute bottom-1 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full border transition-all duration-500",
                  i === active
                    ? "scale-125 border-accent bg-accent shadow-[0_0_0_5px_rgb(255_107_53/0.15)]"
                    : i < active
                      ? "border-accent bg-ink"
                      : "border-line-strong bg-ink",
                )}
                style={{ left: pos(m) }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Entries */}
      <ol className="relative mt-4 lg:mt-0">
        {/* Mobile vertical line */}
        <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-line lg:hidden" />
        <motion.span
          aria-hidden
          className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-accent lg:hidden"
          style={{ scaleY: progress }}
        />

        {entries.map((e, i) => (
          <li
            key={e.company}
            ref={(el) => {
              items.current[i] = el;
            }}
            data-index={i}
            className={cn(
              "relative grid gap-4 py-10 pl-8 transition-opacity duration-700 lg:grid-cols-12 lg:gap-6 lg:border-b lg:border-line lg:py-16 lg:pl-0",
              i === active ? "opacity-100" : "opacity-100 lg:opacity-40",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "absolute top-[2.9rem] left-0 h-[11px] w-[11px] rounded-full border transition-colors duration-500 lg:hidden",
                i <= active ? "border-accent bg-accent" : "border-line-strong bg-ink",
              )}
            />
            <div className="lg:col-span-3">
              <p className="text-meta text-dim tabular-nums">{e.period}</p>
              {e.current && (
                <p className="text-meta mt-2 inline-flex items-center gap-2 text-accent">
                  <span className="status-dot" aria-hidden /> Current
                </p>
              )}
            </div>
            <div className="lg:col-span-4">
              <h3 className="font-display text-3xl tracking-[-0.035em] lg:text-4xl">{e.company}</h3>
              <p className="mt-2 text-mute">{e.role}</p>
              <p className="text-meta mt-1 text-dim">{e.location}</p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-meta text-accent">
                {String(i + 1).padStart(2, "0")} — {e.chapter}
              </p>
              <p className="mt-3 text-paper/90">{e.story}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Focus">
                {e.stack.map((s) => (
                  <li key={s} className="text-meta rounded-full border border-line px-2.5 py-1 text-[0.625rem] text-mute">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}

        <li
          ref={(el) => {
            items.current[entries.length] = el;
          }}
          data-index={entries.length}
          className={cn(
            "relative grid gap-4 py-10 pl-8 transition-opacity duration-700 lg:grid-cols-12 lg:gap-6 lg:py-16 lg:pl-0",
            active === entries.length ? "opacity-100" : "opacity-100 lg:opacity-40",
          )}
        >
          <span
            aria-hidden
            className="absolute top-[2.9rem] left-0 h-[11px] w-[11px] rounded-full border border-dashed border-accent bg-ink lg:hidden"
          />
          <p className="text-meta text-dim lg:col-span-3">{next.label} →</p>
          <h3 className="font-display text-3xl tracking-[-0.035em] text-accent lg:col-span-4 lg:text-4xl">
            {next.chapter}
          </h3>
          <p className="text-lede text-paper/90 lg:col-span-5">{next.story}</p>
        </li>
      </ol>
    </div>
  );
};
