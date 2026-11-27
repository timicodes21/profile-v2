import { ArrowDown, ArrowRight } from "lucide-react";

import { site } from "@/data/site";
import { strataPaths } from "@/lib/strata";

import { HeroAtmosphere } from "../HeroAtmosphere";
import { LocalTime } from "../LocalTime";

const strata = strataPaths();

/** Résumé-sourced facts only. */
const proof = [
  { value: "80%+", label: "Test coverage on production payment apps" },
  {
    value: "Backend",
    label: "Building secure APIs, services and data-driven systems",
  },
  {
    value: "Leadership",
    label: "Leading engineering teams to build and deliver products",
  },
  {
    value: "6+ apps",
    label: "I worked on, live on the App Store & Google Play",
  },
];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const Meta = ({
  label,
  children,
  d,
}: {
  label: string;
  children: React.ReactNode;
  d: number;
}) => (
  <div className="enter" style={delay(d)}>
    <dt className="text-meta text-dim">{label}</dt>
    <dd className="mt-1.5 text-sm text-paper">{children}</dd>
  </div>
);

export const Hero = () => (
  <section
    id="top"
    aria-labelledby="hero-title"
    className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[calc(var(--nav-h)+2rem)]"
  >
    <HeroAtmosphere>
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        fill="none"
      >
        {strata.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={
              i === 13 ? "rgb(255 107 53 / 0.22)" : "rgb(245 245 240 / 0.06)"
            }
            strokeWidth={i === 13 ? 1 : 0.75}
          />
        ))}
      </svg>
    </HeroAtmosphere>

    <div className="container-x relative flex flex-1 flex-col">
      {/* Status line */}
      <div
        className="enter flex flex-wrap items-center gap-x-6 gap-y-2"
        style={delay(0)}
      >
        <span className="text-meta flex items-center gap-2.5 text-paper">
          <span className="status-dot" aria-hidden />
          Currently at Stanbic IBTC · Zest Payments
        </span>
        <span className="text-meta hidden text-dim sm:inline">
          {site.coordinates}
        </span>
      </div>

      {/* Name */}
      <h1 id="hero-title" className="text-hero mt-[clamp(2.5rem,9vh,6rem)]">
        <span className="line-mask">
          <span style={delay(120)}>Timileyin</span>
        </span>
        <span className="line-mask">
          <span style={delay(200)}>
            Babalola<span className="text-accent">.</span>
          </span>
        </span>
      </h1>

      <div className="mt-[clamp(2rem,6vh,4rem)] grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <p className="enter text-title max-w-[22ch]" style={delay(380)}>
            Engineering products. Leading teams.{" "}
            <span className="text-mute">Building systems that scale.</span>
          </p>
          <p className="enter mt-6 max-w-[52ch] text-mute" style={delay(480)}>
            Software Engineer and Team Lead at Stanbic IBTC (Zest Payments). I
            lead a team building products where reliability, security and trust
            matter, including payment, wallet, settlement and reconciliation
            systems, owning their engineering and delivery through to
            production.
          </p>

          <div
            className="enter mt-9 flex flex-wrap items-center gap-3"
            style={delay(580)}
          >
            <a
              href="#work"
              data-cursor="Work"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-paper pr-5 pl-6 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent"
            >
              View my work
              <ArrowRight size={16} className="arrow-nudge" aria-hidden />
            </a>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-line-strong pr-5 pl-6 text-sm text-paper transition-colors duration-300 hover:border-accent/60"
            >
              Let&apos;s talk
              <ArrowRight size={16} className="arrow-nudge" aria-hidden />
            </a>
            <div className="text-meta ml-1 flex items-center gap-5 text-mute">
              <a
                className="link-u hover:text-paper"
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
              </a>
              <a
                className="link-u hover:text-paper"
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="link-u hover:text-paper"
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 content-end gap-x-6 gap-y-6 border-t border-line pt-6 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <Meta label="Based in" d={640}>
            {site.location}
          </Meta>
          <Meta label="Local time" d={680}>
            <LocalTime /> <span className="text-dim">{site.timezoneLabel}</span>
          </Meta>
          <Meta label="Open to" d={720}>
            Remote & global roles
          </Meta>
          <Meta label="Focus" d={760}>
            Fintech · Web · Mobile <span className="text-accent">→</span>{" "}
            <span className="text-mute">Backend</span>
          </Meta>
        </dl>
      </div>

      <div className="mt-auto pt-14 pb-8">
        <ul
          aria-label="Selected evidence"
          className="enter grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-4"
          style={delay(860)}
        >
          {proof.map((p) => (
            <li key={p.label} className="bg-ink/90 p-4 backdrop-blur md:p-5">
              <p className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
                {p.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-mute">{p.label}</p>
            </li>
          ))}
        </ul>
        <a
          href="#work"
          className="text-meta group enter mt-6 hidden items-center gap-3 text-dim hover:text-paper md:inline-flex"
          style={delay(950)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent/60">
            <ArrowDown size={13} aria-hidden />
          </span>
          See the work behind these
        </a>
      </div>
    </div>
  </section>
);
