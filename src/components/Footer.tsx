import { site } from "@/data/site";

import { LocalTime } from "./LocalTime";

export const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-x grid gap-10 py-12 md:grid-cols-12 md:gap-6">
      <div className="md:col-span-5">
        <p className="font-display text-xl tracking-[-0.02em]">{site.name}</p>
        <p className="mt-1 text-sm text-mute">Software Engineer · Web, Mobile & Backend</p>
        <p className="text-meta mt-4 text-dim">
          {site.location} · <LocalTime /> {site.timezoneLabel}
        </p>
      </div>
      <ul className="text-meta flex flex-wrap gap-x-6 gap-y-3 text-mute md:col-span-4">
        <li>
          <a className="link-u hover:text-paper" href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="link-u hover:text-paper" href={site.socials.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className="link-u hover:text-paper" href={site.socials.x} target="_blank" rel="noopener noreferrer">
            X
          </a>
        </li>
        <li>
          <a className="link-u hover:text-paper" href={`mailto:${site.email}`}>
            Email
          </a>
        </li>
        <li>
          <a className="link-u hover:text-paper" href={site.resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </li>
      </ul>
      <div className="text-meta flex flex-col gap-1 text-dim md:col-span-3 md:items-end">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Built with intention.</span>
        <a href="#main" className="link-u mt-3 text-mute hover:text-paper">
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);
