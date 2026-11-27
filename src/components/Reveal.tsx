"use client";

import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section" | "article" | "p";
};

/** Fade + rise when the element enters the viewport. Runs once. */
export const Reveal = ({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
};

const lineVariants: Variants = {
  hidden: { y: "105%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: i * 0.08, ease: EASE },
  }),
};

type RevealLinesProps = {
  lines: React.ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

/** Large heading revealed line by line through a clipping mask. */
export const RevealLines = ({ lines, className, as = "h2" }: RevealLinesProps) => {
  const Tag = motion[as];
  return (
    <Tag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <motion.span className="block" custom={i} variants={lineVariants}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
