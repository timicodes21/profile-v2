export type Link = {
  label: string;
  href: string;
};

export type ProjectVisual =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      /**
       * Abstract illustration used where the product is private or no
       * authentic screenshots exist. Always labelled as an illustration.
       */
      kind: "abstract";
      variant: "ledger" | "monitor" | "savings" | "bot" | "estate";
    };

export type CaseStudy = {
  overview: string;
  problem: string;
  built: string[];
  challenge: string;
  outcome: string[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  /** Employer or client the work was done for, where relevant. */
  context?: string;
  category: string;
  /** One-line description used in lists and cards. */
  summary: string;
  role?: string;
  period?: string;
  stack: string[];
  featured: boolean;
  links: Link[];
  visual: ProjectVisual;
  gallery?: Extract<ProjectVisual, { kind: "image" }>[];
  caseStudy?: CaseStudy;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  /** Decimal year used to position the entry on the timeline rail. */
  start: number;
  location: string;
  chapter: string;
  story: string;
  stack: string[];
  current?: boolean;
};

export type Principle = {
  title: string;
  body: string;
};

export type ToolGroup = {
  title: string;
  items: string[];
};
