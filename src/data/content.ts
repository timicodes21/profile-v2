import type { Experience, Principle, ToolGroup } from "./types";

/** Source: résumé. Dates as written there (two year typos corrected — see README). */
export const experience: Experience[] = [
  {
    company: "Newage Solutions",
    role: "Frontend Developer",
    period: "06/2022 — 02/2023",
    start: 2022.42,
    location: "Ibadan, Nigeria",
    chapter: "Interfaces",
    story:
      "Where it started: a real-estate web app connecting tenants, landlords and estate residents. QR-code visitor check-ins replaced a manual gate log, and Redux cleaned up how data moved through the app.",
    stack: ["React", "Next.js", "TypeScript", "Redux"],
  },
  {
    company: "IngleSwitch",
    role: "Mobile Developer",
    period: "12/2022 — 04/2023",
    start: 2022.92,
    location: "Lagos, Nigeria",
    chapter: "Into mobile & fintech",
    story:
      "My first fintech codebase. I built the UI and API integrations for an in-app support bot, and for the first time thought hard about everything that happens between the screen and the server.",
    stack: ["React Native", "Redux", "React Query"],
  },
  {
    company: "BlackCopper",
    role: "Mobile Engineer",
    period: "04/2023 — 10/2023",
    start: 2023.25,
    location: "Lagos, Nigeria",
    chapter: "Product loops",
    story:
      "Loans, identity verification, push notifications and A/B tests with Firebase Remote Config. I learned that shipping a feature is only the start of finding out whether it worked.",
    stack: ["React Native", "Firebase", "AppsFlyer"],
  },
  {
    company: "Zarttech",
    role: "Software Engineer (React / React Native)",
    period: "11/2023 — 02/2025",
    start: 2023.83,
    location: "South Holland, Netherlands",
    chapter: "Performance & security",
    story:
      "Transfers, bill payments and group savings. I replaced heavy dependencies with small in-house libraries (about 25% faster loads), moved sensitive data into native storage and took part in security audits.",
    stack: ["React Native", "React", "Native storage"],
  },
  {
    company: "Stanbic IBTC · Zest Payments",
    role: "Software Engineer",
    period: "02/2025 — Present",
    start: 2025.08,
    location: "Lagos, Nigeria",
    chapter: "Production fintech",
    story:
      "Payments and digital banking for merchants and consumers, and the settlement and reconciliation system behind them: instant settlement into wallets, automated payouts, and idempotent, fault-tolerant processing. Here reliability is the product.",
    stack: ["Payments", "Settlement & reconciliation", "Testing"],
    current: true,
  },
];

export const nextChapter = {
  label: "Next",
  chapter: "The systems underneath",
  story:
    "I'm deliberately going deeper into the layer my apps have always depended on: APIs, data, security and backend architecture. I'm not starting over. I'm following the problems down.",
};

export const principles: Principle[] = [
  {
    title: "Ownership",
    body: "If it's in my hands, it moves. I chase blockers, raise the awkward questions early and follow work through to production and beyond. Closing my ticket isn't the goal. Solving the problem is.",
  },
  {
    title: "Product thinking",
    body: "A requirement is someone's problem, written down second-hand. I go back to the original problem so that what we ship actually fixes it, and I push back when it won't.",
  },
  {
    title: "Code that survives change",
    body: "Code is read far more often than it's written. I aim for architecture that's easy to change, tests that make refactoring safe and fewer dependencies than first seemed necessary.",
  },
  {
    title: "Design for the unhappy path",
    body: "Networks drop. Users double-tap 'Pay'. Third-party APIs time out. Software that handles money has to be honest about failure, so I think about the edge cases before the demo.",
  },
  {
    title: "Keep going deeper",
    body: "I went from interfaces to mobile to production fintech by following the problems wherever they led. Right now they lead to backend systems, so that's where I'm learning.",
  },
];

export const toolGroups: ToolGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Java", "Kotlin"] },
  { title: "Web", items: ["React", "Next.js", "HTML / CSS", "Material UI"] },
  {
    title: "Mobile",
    items: ["React Native", "Jetpack Compose", "Xcode", "Android Studio"],
  },
  { title: "State & data", items: ["React Query", "Redux", "Zustand", "Context API"] },
  {
    title: "Testing",
    items: ["Unit testing", "React Testing Library", "RNTL", "Detox"],
  },
  {
    title: "Ship & measure",
    items: ["Git / GitHub", "Azure DevOps", "Bitbucket", "Firebase", "AppsFlyer"],
  },
];

/**
 * Backend direction. `current` = languages already on the résumé.
 * `exploring` = what I'm actively learning — clearly labelled as such on the page.
 */
export const backendDirection = {
  current: ["Java", "Kotlin"],
  exploring: ["Spring Boot", "PostgreSQL", "REST API design", "Docker"],
};

export const education = [
  {
    degree: "MSc Mineral Exploration (Distinction)",
    school: "University of Ibadan",
    year: "2023",
  },
  {
    degree: "BSc Geology & Mineral Science",
    school: "University of Ilorin",
    year: "2018",
  },
];
