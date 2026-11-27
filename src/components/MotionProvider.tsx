"use client";

import { MotionConfig } from "framer-motion";

/** Honour prefers-reduced-motion for every Framer Motion animation on the site. */
export const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}>
    {children}
  </MotionConfig>
);
