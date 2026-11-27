import { principles } from "@/data/content";

import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export const HowIWork = () => (
  <section id="how" aria-label="How I work" className="container-x pt-[clamp(5rem,11vw,9rem)]">
    <SectionHeader
      number="04"
      label="How I work"
      lines={["I don't just finish", <span key="2" className="text-mute">my part.</span>]}
      intro="I care whether the problem actually gets solved. In practice, that comes down to five habits."
      className="pb-[clamp(2.5rem,6vw,5rem)]"
    />
    <ol className="border-b border-line">
      {principles.map((p, i) => (
        <Reveal
          as="li"
          key={p.title}
          delay={i * 0.04}
          className="group grid gap-3 border-t border-line py-8 transition-colors duration-300 hover:bg-surface md:-mx-3 md:grid-cols-12 md:gap-6 md:px-3 md:py-10"
        >
          <span className="text-meta pt-2 text-dim transition-colors duration-300 group-hover:text-accent md:col-span-1">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-title md:col-span-5 lg:col-span-4 lg:col-start-4">{p.title}</h3>
          <p className="max-w-[52ch] text-mute md:col-span-6 lg:col-span-5">{p.body}</p>
        </Reveal>
      ))}
    </ol>
  </section>
);
