import Link from "next/link";

import { featuredProjects } from "@/data/projects";
import type { Project } from "@/data/types";

import { ProjectVisual } from "../ProjectVisual";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const total = String(featuredProjects.length).padStart(2, "0");

const FeaturedProject = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const flip = index % 2 === 1;
  const href = `/work/${project.slug}`;
  return (
    <Reveal
      as="article"
      className="group relative border-t border-line py-[clamp(3rem,6.5vw,5.5rem)]"
    >
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
        <div
          className={
            flip ? "lg:order-2 lg:col-span-5 lg:col-start-8" : "lg:col-span-5"
          }
        >
          <div className="text-meta flex items-center justify-between text-dim">
            <span>
              <span className="text-paper transition-colors duration-300 group-hover:text-accent">
                {project.number}
              </span>{" "}
              / {total}
            </span>
            <span>{project.category}</span>
          </div>

          {/*
            The title link stretches over the whole card via ::after. The hover shift lives on
            an inner span: a transform on the link's ancestor would become the ::after's
            containing block and shrink the clickable area to the title alone.
          */}
          <h3 className="text-title mt-8">
            <Link
              href={href}
              className="after:absolute after:inset-0 after:content-['']"
              data-cursor="View"
            >
              <span className="inline-block transition-transform duration-500 ease-(--ease) group-hover:translate-x-1.5">
                {project.title}
              </span>
            </Link>
          </h3>
          {project.context && (
            <p className="text-meta mt-3 text-accent/90">{project.context}</p>
          )}
          <p className="mt-5 max-w-[46ch] text-mute">{project.summary}</p>
          {project.impact && (
            <p className="mt-6 flex max-w-[46ch] gap-3 border-l border-accent/70 pl-4 text-paper">
              <span className="sr-only">Outcome: </span>
              {project.impact}
            </p>
          )}

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 text-sm">
            <div>
              <dt className="text-meta text-dim">Role</dt>
              <dd className="mt-1">{project.role}</dd>
            </div>
            <div>
              <dt className="text-meta text-dim">Period</dt>
              <dd className="mt-1">{project.period}</dd>
            </div>
            <div className="col-span-2">
              <dt className="sr-only">Technology</dt>
              <dd className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 5).map((s) => (
                  <span
                    key={s}
                    className="text-meta rounded-full border border-line px-2.5 py-1 text-[0.6875rem] text-mute"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <Link
            href={href}
            data-cta
            data-cursor="Read"
            aria-label={`Read the ${project.title} case study`}
            className="text-meta relative z-10 mt-8 inline-flex items-center gap-3 py-2 text-paper hover:text-accent"
          >
            Read the case study
            <span className="arrow-nudge text-accent" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <div
          className={
            flip ? "lg:order-1 lg:col-span-7" : "lg:col-span-7 lg:col-start-6"
          }
        >
          <ProjectVisual
            visual={project.visual}
            sizes="(min-width: 1024px) 56vw, 100vw"
          />
        </div>
      </div>
    </Reveal>
  );
};

export const SelectedWork = () => (
  <section
    id="work"
    aria-label="Selected work"
    className="container-x pt-[clamp(4.5rem,10vw,8rem)]"
  >
    <SectionHeader
      number="01"
      label="Selected work"
      lines={[
        "Building products",
        <span key="2" className="text-mute">
          Owning delivery.
        </span>,
      ]}
      intro="From payments and digital banking to wallets, settlement and reconciliation systems, I work across web, mobile and backend engineering to solve complex problems, lead delivery, and build reliable products that make a real impact."
      className="pb-[clamp(3rem,7vw,6rem)]"
    />
    <div>
      {featuredProjects.map((p, i) => (
        <FeaturedProject key={p.slug} project={p} index={i} />
      ))}
    </div>
  </section>
);
