"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

/**
 * - LazyMotion + `m` components: ships only the animation features the site uses
 *   (animate, variants, exit, whileInView, hover) instead of the full motion bundle.
 * - MotionConfig: honour prefers-reduced-motion for every animation.
 */
export const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </MotionConfig>
  </LazyMotion>
);
