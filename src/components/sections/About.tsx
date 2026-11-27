import Image from "next/image";

import { education } from "@/data/content";

import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export const About = () => (
  <section id="about" aria-label="About" className="container-x pt-[clamp(5rem,11vw,9rem)]">
    <SectionHeader
      number="06"
      label="About"
      lines={["Engineer by profession.", <span key="2" className="text-mute">Builder by nature.</span>]}
      className="pb-[clamp(2.5rem,6vw,5rem)]"
    />

    <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
      <Reveal className="group lg:col-span-4">
        <figure>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-line bg-ink-2">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Timileyin Babalola"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="media object-cover object-[50%_30%]"
            />
          </div>
          <figcaption className="text-meta mt-3 flex justify-between text-dim">
            <span>Timileyin Babalola</span>
            <span>Lagos</span>
          </figcaption>
        </figure>
      </Reveal>

      <div className="lg:col-span-7 lg:col-start-6">
        <Reveal className="space-y-6 text-lede">
          <p>
            I&apos;m a software engineer in Lagos with 5+ years of building secure, scalable web
            and mobile applications, most of them in fintech.{" "}
            <span className="text-mute">
              Payments, digital banking, lending, savings: products where the person on the
              other side of the screen trusts you with something that matters.
            </span>
          </p>
          <p className="text-mute">
            The work I enjoy most sits where product and engineering meet. I like to understand
            why something is being built, design it so the next person can change it safely,
            test it so releases are boring, and stay with it after launch to see whether it did
            its job.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 rounded-[14px] border border-line bg-surface p-6 md:p-8">
          <p className="text-meta text-accent">Before software</p>
          <p className="mt-4 text-paper/90">
            I trained as a geologist. Mineral exploration is mostly reading incomplete evidence
            and deciding where to dig, which turned out to be good training for debugging. I
            still think about systems in layers.
          </p>
          <ul className="mt-6 grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="text-sm">{e.degree}</p>
                <p className="text-meta mt-1 text-dim">
                  {e.school} · {e.year}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 text-mute">
          <p className="font-display text-xl tracking-[-0.02em] text-paper">
            Currently somewhere between shipping features and asking whether the architecture
            will survive them.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
