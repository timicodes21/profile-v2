"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = { kind: "default" | "hover" | "label" | "external"; label?: string };

/**
 * Desktop-only cursor. Elements opt into a label with `data-cursor="View"`.
 * External links (target=_blank) get an arrow. Disabled on touch devices and
 * when the user prefers reduced motion.
 */
export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<CursorState>({ kind: "default" });

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      if (labelled) {
        setState({ kind: "label", label: labelled.dataset.cursor });
        return;
      }
      const interactive = target?.closest<HTMLElement>("a, button, [role='button']");
      if (interactive) {
        const external = interactive.getAttribute("target") === "_blank";
        setState({ kind: external ? "external" : "hover" });
        return;
      }
      setState({ kind: "default" });
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size =
    state.kind === "label" ? 76 : state.kind === "external" ? 34 : state.kind === "hover" ? 30 : 8;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90]"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={{
          width: size,
          height: size,
          backgroundColor:
            state.kind === "label"
              ? "rgba(255,107,53,1)"
              : state.kind === "default"
                ? "rgba(245,245,240,1)"
                : "rgba(245,245,240,0.08)",
          borderColor: state.kind === "default" || state.kind === "label" ? "rgba(0,0,0,0)" : "rgba(245,245,240,0.6)",
        }}
        style={{ borderWidth: 1, borderStyle: "solid", backdropFilter: "blur(2px)" }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
      >
        <AnimatePresence mode="wait">
          {state.kind === "label" && (
            <motion.span
              key={state.label}
              className="text-meta font-medium text-ink"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18 }}
            >
              {state.label}
            </motion.span>
          )}
          {state.kind === "external" && (
            <motion.span
              key="ext"
              className="text-xs text-paper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ↗
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
