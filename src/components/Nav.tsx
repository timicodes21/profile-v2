"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

import { Monogram } from "./Monogram";

const useActiveSection = (ids: readonly string[], enabled: boolean) => {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, enabled]);
  return active;
};

const sectionIds = navItems.map((n) => n.id);

export const Nav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    // Close the mobile menu on navigation (render-time reset, no effect needed).
    setLastPath(pathname);
    setOpen(false);
  }
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(sectionIds, pathname === "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);


  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-line bg-ink/70 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-x flex h-[var(--nav-h)] items-center justify-between"
      >
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
          <Monogram />
          <span className="text-meta hidden text-paper sm:inline">
            Timileyin<span className="text-dim"> Babalola</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-meta relative flex items-center gap-2 py-2 transition-colors duration-300",
                    isActive ? "text-paper" : "text-mute hover:text-paper",
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "h-1 w-1 rounded-full bg-accent transition-all duration-300",
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                    )}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-meta hidden items-center gap-2 rounded-full border border-line px-4 py-2.5 text-paper transition-colors duration-300 hover:border-accent/60 hover:text-accent sm:inline-flex"
          >
            Résumé
            <span className="arrow-nudge arrow-nudge-diag" aria-hidden>
              ↗
            </span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="text-meta flex h-11 items-center gap-2 rounded-full border border-line px-4 text-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden className="relative block h-2 w-3">
              <span
                className={cn(
                  "absolute left-0 h-px w-3 bg-paper transition-transform duration-300",
                  open ? "top-1 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-3 bg-paper transition-transform duration-300",
                  open ? "top-1 -rotate-45" : "top-2",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            className="container-x flex h-[calc(100dvh-var(--nav-h))] flex-col justify-between pb-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mt-8 border-t border-line">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  className="border-b border-line"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="font-display text-4xl tracking-tight">{item.label}</span>
                    <span className="text-meta text-dim">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-meta text-mute">
              <a href={site.resume} target="_blank" rel="noopener noreferrer">
                Résumé ↗
              </a>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={`mailto:${site.email}`}>Email</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
