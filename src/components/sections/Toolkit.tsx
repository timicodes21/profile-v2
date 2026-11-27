import { backendDirection, toolGroups } from "@/data/content";

import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export const Toolkit = () => (
  <section id="toolkit" aria-label="Technical toolkit" className="container-x pt-[clamp(6rem,14vw,12rem)]">
    <SectionHeader
      number="05"
      label="Toolkit"
      lines={["What I build with,", <span key="2" className="text-mute">and what&apos;s next.</span>]}
      className="pb-[clamp(2.5rem,6vw,5rem)]"
    />

    <div className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
      {toolGroups.map((g, i) => (
        <Reveal
          key={g.title}
          delay={(i % 3) * 0.06}
          className="group border-r border-b border-line p-6 transition-colors duration-300 hover:bg-surface md:p-8"
        >
          <h3 className="text-meta flex items-center justify-between text-dim">
            {g.title}
            <span className="text-dim transition-colors group-hover:text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
          </h3>
          <ul className="mt-6 space-y-2">
            {g.items.map((item) => (
              <li key={item} className="font-display text-xl tracking-[-0.02em] md:text-2xl">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>

    {/* Backend evolution */}
    <Reveal className="relative mt-6 overflow-hidden rounded-[18px] border border-line">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgb(255 107 53 / 0.16), rgb(255 180 80 / 0.04) 45%, transparent 75%)",
        }}
      />
      <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-12 lg:gap-6 lg:p-14">
        <div className="lg:col-span-7">
          <p className="text-meta flex items-center gap-2 text-accent">
            <span className="status-dot" aria-hidden /> In progress · Backend direction
          </p>
          <p className="text-title mt-6 max-w-[24ch]">
            I know the client deeply. Now I&apos;m learning the systems behind it.
          </p>
          <p className="mt-6 max-w-[54ch] text-mute">
            After years of building client applications and production fintech products,
            I&apos;m deliberately moving deeper into what sits underneath them: APIs, databases,
            security, backend architecture and, eventually, distributed systems. I&apos;m not
            claiming seniority there yet. I&apos;m building it the same way I built everything
            else, by shipping.
          </p>
        </div>
        <dl className="grid content-end gap-8 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
          <div>
            <dt className="text-meta text-dim">Already in my toolkit</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {backendDirection.current.map((t) => (
                <span key={t} className="rounded-full border border-line-strong px-3 py-1.5 text-sm">
                  {t}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-meta text-dim">Currently learning</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {backendDirection.exploring.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-dashed border-accent/50 px-3 py-1.5 text-sm text-paper/90"
                >
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </Reveal>
  </section>
);
