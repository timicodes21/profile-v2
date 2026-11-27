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
              src="/images/profile.jpg"
              alt="Portrait of Timileyin Babalola"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="media object-cover object-[50%_45%]"
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
            I&apos;m a software engineer and team lead in Lagos with 5+ years of building
            secure, scalable software across web, mobile and backend systems, with most of my
            experience in fintech.{" "}
            <span className="text-mute">
              Payments, wallets, settlement, lending and savings: products where reliability,
              security and trust matter.
            </span>
          </p>
          <p className="text-mute">
            I enjoy working where product, engineering and people meet. I lead teams, solve
            complex engineering problems, and design systems with the next engineer in mind,
            from the client applications people use to the backend services that power them. I
            care about building it right, shipping it confidently, and staying close enough to
            the product to know whether it actually works.
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
