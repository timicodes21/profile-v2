import { moreProjects } from "@/data/projects";

import { MoreWorkList } from "../MoreWorkList";
import { SectionHeader } from "../SectionHeader";

export const MoreWork = () => (
  <section id="more" aria-label="More work" className="container-x pt-[clamp(5rem,12vw,10rem)]">
    <SectionHeader
      number="02"
      label="More work"
      lines={["Other things", <span key="2" className="text-mute">I&apos;ve shipped.</span>]}
      intro="Marketplaces, support tooling, property management and web products. Some are live in the stores, some were internal."
      className="pb-[clamp(2.5rem,5vw,4.5rem)]"
    />
    <MoreWorkList projects={moreProjects} />
  </section>
);
