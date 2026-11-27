import { ArrowUpRight } from "lucide-react";

import { site } from "@/data/site";
import { strataPaths } from "@/lib/strata";

import { Reveal, RevealLines } from "../Reveal";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
  { label: "LinkedIn", value: "timileyin-babalola", href: site.socials.linkedin, external: true },
  { label: "GitHub", value: "timicodes21", href: site.socials.github, external: true },
  { label: "Résumé", value: "PDF · 2 pages", href: site.resume, external: true },
];

// Same strata as the hero, different seed: the page opens and closes on the same motif.
const strata = strataPaths({ seed: 23, count: 18 });

export const Contact = () => (
  <section
    id="contact"
    aria-label="Contact"
    className="relative overflow-hidden"
  >
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 -z-0 h-full w-full"
      fill="none"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 35%, black 70%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 35%, black 70%, transparent)",
      }}
    >
      {strata.map((d, i) => (
        <path
          key={d}
          d={d}
          stroke={i === 11 ? "rgb(255 107 53 / 0.22)" : "rgb(245 245 240 / 0.05)"}
          strokeWidth={0.75}
        />
      ))}
    </svg>
    <div className="container-x relative pt-[clamp(6rem,12vw,10rem)] pb-[clamp(4rem,8vw,7rem)]">
    <Reveal y={12}>
      <p className="text-meta flex items-center gap-3 text-dim">
        <span className="text-accent">07</span>
        <span className="h-px w-8 bg-line-strong" aria-hidden />
        Contact
      </p>
    </Reveal>

    <RevealLines
      as="h2"
      lines={["Have a product", "worth building?", <span key="3" className="text-mute">Let&apos;s talk about it.</span>]}
      className="text-hero mt-10 !text-[clamp(3rem,9vw,8.5rem)]"
    />

    <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-6">
      <Reveal className="lg:col-span-5">
        <p className="max-w-[40ch] text-mute">
          I&apos;m open to remote and global roles where I can own meaningful problems across
          web, mobile and backend, especially in fintech and other products where reliability
          matters.
        </p>
        <a
          href={`mailto:${site.email}?subject=Hello%20Timileyin`}
          data-cursor="Say hi"
          className="group mt-8 inline-flex h-14 items-center gap-4 rounded-full bg-accent pr-6 pl-7 font-medium text-ink transition-colors duration-300 hover:bg-paper"
        >
          Start a conversation
          <span className="arrow-nudge" aria-hidden>
            →
          </span>
        </a>
      </Reveal>

      <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
        <ul className="border-b border-line">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 border-t border-line py-5 transition-colors duration-300 hover:text-accent"
              >
                <span className="text-meta w-24 text-dim">{l.label}</span>
                <span className="flex-1 truncate text-lg">{l.value}</span>
                <ArrowUpRight size={18} className="arrow-nudge arrow-nudge-diag shrink-0" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
    </div>
  </section>
);
