import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal, RevealLines } from "@/components/Reveal";
import { caseStudies, getProject } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export const generateStaticParams = () => caseStudies.map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = project.context ? `${project.title} · ${project.context}` : project.title;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title, description: project.summary, url: `/work/${project.slug}` },
  };
};

const Block = ({ n, label, children }: { n: string; label: string; children: React.ReactNode }) => (
  <Reveal as="section" className="grid gap-4 border-t border-line py-12 lg:grid-cols-12 lg:gap-6 lg:py-16">
    <h2 className="text-meta flex gap-3 text-dim lg:col-span-3">
      <span className="text-accent">{n}</span> {label}
    </h2>
    <div className="lg:col-span-8 lg:col-start-5">{children}</div>
  </Reveal>
);

const CaseStudyPage = async ({ params }: Params) => {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();
  const cs = project.caseStudy;

  const index = caseStudies.findIndex((p) => p.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <main id="main" className="container-x pt-[calc(var(--nav-h)+3rem)]">
        <Link
          href="/#work"
          className="text-meta group inline-flex items-center gap-2 text-mute hover:text-paper"
        >
          <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden />
          All work
        </Link>

        <header className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-9">
            <p className="text-meta enter flex flex-wrap gap-x-4 gap-y-1 text-dim">
              <span className="text-accent">{project.number}</span>
              <span>{project.category}</span>
              {project.context && <span className="text-paper">{project.context}</span>}
            </p>
            <RevealLines as="h1" lines={[project.title]} className="text-section mt-6" />
            <Reveal delay={0.1} className="text-lede mt-8 max-w-[52ch] text-mute">
              <p>{project.summary}</p>
            </Reveal>
          </div>
        </header>

        <Reveal delay={0.15}>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm md:grid-cols-4">
            <div>
              <dt className="text-meta text-dim">Role</dt>
              <dd className="mt-2">{project.role}</dd>
            </div>
            <div>
              <dt className="text-meta text-dim">Period</dt>
              <dd className="mt-2">{project.period}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-meta text-dim">Technology</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span key={s} className="text-meta rounded-full border border-line px-2.5 py-1 text-[0.6875rem] text-mute">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <ProjectVisual visual={project.visual} priority sizes="(min-width: 1440px) 1340px, 100vw" className="aspect-[16/10] md:aspect-[21/9]" />
        </Reveal>

        <div className="mt-[clamp(3rem,8vw,6rem)]">
          <Block n="01" label="Overview">
            <p className="text-lede">{cs.overview}</p>
          </Block>
          <Block n="02" label="The problem">
            <p className="text-lede text-mute">{cs.problem}</p>
          </Block>
          <Block n="03" label="What I built">
            <ul className="space-y-4">
              {cs.built.map((b) => (
                <li key={b} className="flex gap-4 text-lg">
                  <span className="mt-3 h-px w-4 shrink-0 bg-accent" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </Block>
          <Block n="04" label="Engineering challenge">
            <p className="text-lede text-mute">{cs.challenge}</p>
          </Block>
          <Block n="05" label="Outcome">
            <ul className="grid gap-4 sm:grid-cols-2">
              {cs.outcome.map((o) => (
                <li key={o} className="rounded-[14px] border border-line bg-surface p-5 text-paper/90">
                  {o}
                </li>
              ))}
            </ul>
          </Block>
          {project.links.length > 0 && (
            <Block n="06" label="Links">
              <ul className="flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-sm transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {l.label}
                      <ArrowUpRight size={14} className="arrow-nudge arrow-nudge-diag" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>

        {project.gallery && (
          <section aria-label="Gallery" className="grid gap-4 border-t border-line py-12 md:grid-cols-2">
            {project.gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 0.05} className={i === 0 ? "group md:col-span-2" : "group"}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-[14px] border border-line">
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="media object-cover" />
                </div>
              </Reveal>
            ))}
          </section>
        )}

        <nav aria-label="Next case study" className="border-t border-line py-16">
          <Link href={`/work/${next.slug}`} className="group block" data-cursor="Next">
            <p className="text-meta text-dim">Next case study</p>
            <p className="text-section mt-4 transition-colors duration-300 group-hover:text-accent">
              {next.title}
              <span className="arrow-nudge ml-4 inline-block" aria-hidden>
                →
              </span>
            </p>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudyPage;
