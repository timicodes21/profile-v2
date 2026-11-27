import { archiveProjects, moreProjects } from "@/data/projects";

import { MoreWorkList } from "../MoreWorkList";
import { SectionHeader } from "../SectionHeader";

export const MoreWork = () => (
  <section id="more" aria-label="More work" className="container-x pt-[clamp(4.5rem,10vw,8rem)]">
    <SectionHeader
      number="02"
      label="More work"
      lines={["Other things", <span key="2" className="text-mute">I&apos;ve shipped.</span>]}
      intro="A marketplace, support tooling and property management. Some are live in the stores, some were internal."
      className="pb-[clamp(2.5rem,5vw,4.5rem)]"
    />
    <MoreWorkList projects={moreProjects} />
    {archiveProjects.length > 0 && (
      <p className="text-meta mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-dim">
        <span>Also built</span>
        {archiveProjects.map((p) => (
          <a
            key={p.slug}
            href={p.links[0]?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-u text-mute hover:text-paper"
          >
            {p.title} ↗
          </a>
        ))}
      </p>
    )}
  </section>
);
