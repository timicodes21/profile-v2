"use client";

import { useEffect, useRef } from "react";

/**
 * Pointer-reactive light + faint parallax for the hero background.
 * Writes CSS custom properties directly (no React re-renders).
 */
export const HeroAtmosphere = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return undefined;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return undefined;

    let frame = 0;
    let tx = 0.7;
    let ty = 0.3;
    let cx = tx;
    let cy = ty;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.setProperty("--mx", `${(cx * 100).toFixed(2)}%`);
      el.style.setProperty("--my", `${(cy * 100).toFixed(2)}%`);
      el.style.setProperty("--px", (cx - 0.5).toFixed(3));
      el.style.setProperty("--py", (cy - 0.5).toFixed(3));
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width;
      ty = (e.clientY - r.top) / r.height;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    host.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      host.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="enter-fade pointer-events-none absolute inset-0 overflow-hidden [--d:500ms] [--mx:70%] [--my:30%] [--px:0] [--py:0]"
    >
      <div
        className="grid-lines absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-[-4%] transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--px) * -14px), calc(var(--py) * -10px), 0)",
        }}
      >
        {children}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(32rem circle at var(--mx) var(--my), rgb(255 107 53 / 0.10), rgb(255 180 80 / 0.03) 40%, transparent 70%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
};
