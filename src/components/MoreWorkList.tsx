"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { projectHref } from "@/data/projects";
import type { Project } from "@/data/types";

import { ProjectVisual } from "./ProjectVisual";

const Row = ({
  project,
  onHover,
}: {
  project: Project;
  onHover: (slug: string | null) => void;
}) => {
  const href = projectHref(project);
  const external = !project.caseStudy && Boolean(href);
  const content = (
    <>
      <span className="text-meta col-start-1 row-start-1 pt-2 text-dim transition-colors duration-300 group-hover:text-accent md:col-span-1 md:col-start-auto md:row-start-auto md:pt-1">
        {project.number}
      </span>
      <span className="col-start-2 row-start-1 md:col-span-4 md:col-start-auto md:row-start-auto">
        <span className="font-display block text-2xl tracking-[-0.03em] transition-transform duration-500 ease-[var(--ease)] group-hover:translate-x-1.5 md:text-[1.75rem]">
          {project.title}
        </span>
        {project.context && <span className="text-meta mt-1 block text-dim">{project.context}</span>}
      </span>
      <span className="col-span-2 col-start-2 row-start-2 text-sm text-mute md:col-span-4 md:col-start-auto md:row-start-auto">
        {project.summary}
      </span>
      <span className="text-meta hidden text-dim md:col-span-2 md:block">{project.category}</span>
      <span className="text-meta col-start-3 row-start-1 flex items-start justify-end gap-2 pt-2 text-dim md:col-span-1 md:col-start-auto md:row-start-auto md:pt-0">
        <span className="hidden lg:inline">{project.period ?? ""}</span>
        {href ? (
          <span className="arrow-nudge text-paper group-hover:text-accent" aria-hidden>
            {external ? "↗" : "→"}
          </span>
        ) : (
          <span className="text-[0.6rem] text-dim">Internal</span>
        )}
      </span>
    </>
  );

  const className =
    "group relative grid grid-cols-[2.5rem_1fr_auto] gap-x-4 gap-y-2 border-t border-line py-6 transition-colors duration-300 hover:bg-surface md:grid-cols-12 md:gap-6 md:px-3 md:py-7 md:-mx-3";

  const handlers = {
    onPointerEnter: () => onHover(project.slug),
    onPointerLeave: () => onHover(null),
    onFocus: () => onHover(null),
  };

  if (!href) {
    return (
      <li className={className} {...handlers}>
        {content}
      </li>
    );
  }

  return (
    <li {...handlers}>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={`${project.title} (opens in a new tab)`}
        >
          {content}
        </a>
      ) : (
        <Link href={href} className={className} data-cursor="Read">
          {content}
        </Link>
      )}
    </li>
  );
};

export const MoreWorkList = ({ projects }: { projects: Project[] }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 28 });
  const sy = useSpring(y, { stiffness: 220, damping: 28 });
  const active = projects.find((p) => p.slug === hovered);

  return (
    <div
      className="relative"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
    >
      <ul className="border-b border-line">
        {projects.map((p) => (
          <Row key={p.slug} project={p} onHover={setHovered} />
        ))}
      </ul>

      {/* Floating preview — desktop pointer only, decorative */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 z-10 hidden w-[340px] lg:block"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-115%" }}
      >
        <AnimatePresence>
          {active && (
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)]"
            >
              <ProjectVisual visual={active.visual} sizes="340px" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
