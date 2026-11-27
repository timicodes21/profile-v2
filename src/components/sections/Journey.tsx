import { experience, nextChapter } from "@/data/content";

import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { Timeline } from "../Timeline";

export const Journey = () => (
  <section id="journey" aria-label="Career journey" className="container-x pt-[clamp(6rem,14vw,12rem)]">
    <SectionHeader
      number="03"
      label="Journey"
      lines={["From interfaces", <span key="2" className="text-mute">to the systems underneath.</span>]}
      className="pb-[clamp(2rem,5vw,4rem)]"
    />
    <div className="grid gap-6 pb-[clamp(2.5rem,6vw,5rem)] lg:grid-cols-12">
      <Reveal className="space-y-5 text-lede text-mute lg:col-span-8 lg:col-start-4">
        <p>
          I started by building interfaces. Then I kept getting pulled underneath them: where
          the data came from, why a request was slow, what happened when it failed.
        </p>
        <p>
          Working on financial and consumer products turned that curiosity into a discipline.{" "}
          <span className="text-paper">
            Reliability, security and performance stopped being abstract when real money moved
            through the code.
          </span>{" "}
          Now I&apos;m going deeper on purpose.
        </p>
      </Reveal>
    </div>
    <Timeline entries={experience} next={nextChapter} />
  </section>
);
