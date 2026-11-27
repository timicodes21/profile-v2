import type { Project } from "./types";

const shot = (src: string, alt: string) => ({
  kind: "image" as const,
  src,
  alt,
  width: 2560,
  height: 1440,
});

export const projects: Project[] = [
  {
    slug: "zest-payments",
    number: "01",
    title: "Zest Payments",
    context: "Stanbic IBTC",
    category: "Fintech · Payments",
    summary:
      "Led and worked with the team that built the merchant mobile app and the development of settlement and reconciliation systems.",
    role: "Software Engineer",
    period: "2025 — Now",
    stack: ["Payments", "SETTLEMENTS", "Merchant & consumer", "Unit testing"],
    featured: true,
    impact:
      "Fewer critical production issues, with unit-test coverage held at 80%+.",
    links: [],
    visual: { kind: "abstract", variant: "ledger" },
    caseStudy: {
      overview:
        "At Stanbic IBTC, through Zest Payments, I lead a team building and maintaining merchant mobile applications while contributing to the development of backend systems that power multi-channel payments and financial operations.",
      problem:
        "Payment software has no quiet failure mode. A merchant who can't confirm a payment, or a customer who can't see where their money went, stops trusting the whole product. Every release has to land without breaking what already works.",
      built: [
        "Led the engineering team responsible for building and delivering the merchant mobile application.",
        "Contributed to building and maintaining settlement, instant settlement and reconciliation systems.",
        "Maintained and improved backend services through code refactoring, performance optimisation and continuous engineering improvements.",
      ],
      challenge:
        "Shipping changes quickly into software people use to move money, without regressions. The answer wasn't heroics. It was a test suite broad enough that releases became uneventful, and review habits that caught problems before customers did.",
      outcome: [
        "Fewer critical production issues, with regressions caught before release.",
        "Better release stability from tighter review, debugging and test-coverage loops.",
      ],
    },
  },
  {
    slug: "settlement-reconciliation",
    number: "02",
    title: "Settlement & reconciliation system",
    context: "Zest Payments · Stanbic IBTC",
    category: "Fintech · Backend",
    summary:
      "The backend that settles successful transactions into merchants' dedicated wallets, runs automated payouts and keeps every financial record reconciled.",
    role: "Software Engineer",
    period: "2025 — Now",
    stack: [
      "Settlement engine",
      "Idempotency",
      "Circuit breakers",
      "Fault tolerance",
      "Reconciliation",
    ],
    featured: true,
    impact:
      "Instant settlement into merchants' wallets and automated payouts, designed so retries and failures never duplicate a financial operation.",
    links: [],
    visual: { kind: "abstract", variant: "settlement" },
    caseStudy: {
      overview:
        "At Stanbic IBTC (Zest Payments), I designed and built core parts of the transaction settlement and reconciliation system: instant settlement into merchants' dedicated wallets, the settlement engine, automated payouts and reconciliation.",
      problem:
        "In payments, a transaction isn't finished when it succeeds. It's finished when the money lands in the right wallet, exactly once. Settlement sits between transactions, wallet balances and payouts, and all of those records have to agree, even when a dependent service is down or a job is interrupted halfway through.",
      built: [
        "The flow for instant settlement of successful transactions into merchants' dedicated wallets.",
        "The settlement engine that processes transactions and ensures each one settles accurately.",
        "Automated payouts driven by configurable settlement frequencies.",
        "Reconciliation support that keeps transaction records, settlement entries and payout records consistent.",
      ],
      challenge:
        "Moving money correctly under failure. Retries are necessary, but a retried settlement must never become a second settlement. Dependencies go down and jobs get interrupted, so every failure had to be recoverable without leaving balances, settlements and payouts out of step.",
      considerations: [
        {
          title: "Idempotency",
          body: "Settlement operations are safe to retry. A repeated request can't process the same settlement twice or produce a duplicate financial operation.",
        },
        {
          title: "Circuit breakers",
          body: "When a dependent service becomes unavailable, calls to it are cut off instead of piling up, preventing one failure from cascading through the system.",
        },
        {
          title: "Resilience & fault tolerance",
          body: "Temporary failures, service interruptions and recoverable errors are handled as expected conditions, not edge cases.",
        },
        {
          title: "Transaction integrity",
          body: "Transaction processing, wallet balances, settlements and payouts stay consistent with each other at every step.",
        },
        {
          title: "Safe recovery",
          body: "Retry strategies and failure handling are designed so that interrupted settlement operations can be resumed safely.",
        },
      ],
      outcome: [
        "Successful transactions settle instantly into merchants' dedicated wallets.",
        "Payouts run automatically on configurable settlement frequencies.",
        "Transaction, settlement and payout records stay reconciled.",
        "A settlement process built for retries and dependency failures, without duplicate or inconsistent financial operations.",
      ],
    },
  },
  {
    slug: "zarttech",
    number: "03",
    title: "Transfers, bills & group savings",
    context: "Zarttech",
    category: "Fintech · Mobile",
    summary:
      "Mobile money transfers, bill payments and savings, made faster, lighter and more secure. Includes a collaborative group savings feature.",
    role: "Software Engineer (React / React Native)",
    period: "2023 — 2025",
    stack: [
      "React Native",
      "React",
      "Native secure storage",
      "Custom libraries",
    ],
    featured: true,
    impact:
      "About 25% faster load times and a smaller bundle, plus a new group savings feature.",
    links: [],
    visual: { kind: "abstract", variant: "savings" },
    caseStudy: {
      overview:
        "At Zarttech I worked on the frontend of financial applications for money transfers, bill payments and savings, focusing on speed, clarity and security on mobile devices.",
      problem:
        "Financial apps on mobile carry two kinds of weight: the literal weight of the bundle on mid-range devices, and the weight of trust users place in where their data lives. Both had to come down.",
      built: [
        "Performance work across the apps for faster interactions, clearer prompts and less friction on mobile.",
        "A collaborative group savings feature with automated contributions.",
        "Moved sensitive data into native storage, alongside security audits of the app.",
        "Custom in-house libraries that replaced heavy third-party dependencies.",
      ],
      challenge:
        "Replacing dependencies is easy to propose and hard to finish. Each one had to be understood, re-implemented to the subset we actually used and verified against the critical issues it touched, without slowing feature work.",
      outcome: [
        "Smaller bundle and load times improved by about 25%.",
        "Higher participation in savings through the group savings feature.",
        "A stronger security posture through native storage and audits.",
      ],
    },
  },
  {
    slug: "blackcopper",
    number: "04",
    title: "Loans, identity & engagement",
    context: "BlackCopper",
    category: "Fintech · Mobile",
    summary:
      "Loans and identity verification flows, push notifications and A/B testing for a fintech mobile app.",
    role: "Mobile Engineer",
    period: "2023",
    stack: [
      "React Native",
      "TypeScript",
      "Context API",
      "Firebase Cloud Messaging",
      "Firebase Remote Config",
      "AppsFlyer",
      "Azure DevOps",
    ],
    featured: true,
    impact:
      "Faster loan and verification processing, with engagement driven by push and A/B tests.",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.blackcopper",
      },
    ],
    visual: shot(
      "/images/blackcopper.png",
      "BlackCopper mobile app screens: onboarding and sign-in",
    ),
    caseStudy: {
      overview:
        "At BlackCopper I worked on a fintech mobile app, building loans and identity verification features and the engagement layer around them.",
      problem:
        "Lending products live or die on two things: how quickly a user can get through verification, and whether they come back. Both needed engineering, not just design.",
      built: [
        "Loans and identity verification features that sped up processing for users.",
        "Push notifications with Firebase Cloud Messaging.",
        "A/B testing with Firebase Remote Config to compare feature variants.",
        "Analytics and attribution with AppsFlyer, plus unit tests and delivery through Azure DevOps.",
      ],
      challenge:
        "Building experiments into a product rather than around it. Remote Config meant shipping variants safely and letting real usage decide, instead of debating preferences in a meeting.",
      outcome: [
        "Faster processing through the loans and verification flows.",
        "More user interactions driven by push notifications.",
        "UX refined from A/B test results, with higher engagement.",
      ],
    },
  },
  {
    slug: "aiden",
    number: "05",
    title: "Aiden",
    category: "Multi-tenant platform",
    summary:
      "One operational platform for reservations, orders, events and payments, with separate apps for businesses and customers.",
    role: "Mobile Developer (React Native)",
    period: "2024",
    stack: ["React Native", "iOS", "Android", "Multi-tenant"],
    featured: true,
    impact:
      "Four production apps live: Customer and Business, on iOS and Android.",
    links: [
      {
        label: "Customer · iOS",
        href: "https://apps.apple.com/ng/app/aiden-menu-and-reservations/id6593680527",
      },
      {
        label: "Customer · Android",
        href: "https://play.google.com/store/apps/details?id=com.aiden.aidencustomer",
      },
      {
        label: "Business · iOS",
        href: "https://apps.apple.com/ng/app/aiden-business/id6670170161",
      },
      {
        label: "Business · Android",
        href: "https://play.google.com/store/apps/details?id=com.aiden_business",
      },
    ],
    visual: shot(
      "/images/aiden-customer-ios.png",
      "Aiden customer iOS app: orders, venue details and profile screens",
    ),
    gallery: [
      shot("/images/aiden-business-ios.png", "Aiden business iOS app screens"),
      shot(
        "/images/aiden-customer-android.png",
        "Aiden customer Android app screens",
      ),
      shot(
        "/images/aiden-business-android.png",
        "Aiden business Android app screens",
      ),
    ],
    caseStudy: {
      overview:
        "Aiden is a multi-tenant operational platform for hospitality businesses. It covers reservations, orders, events and payments through a business app and a customer app, each on iOS and Android.",
      problem:
        "Venues juggle reservations, orders, events and payments across separate tools, and their customers feel the seams. A single platform has to serve many businesses at once while each one feels like its own.",
      built: [
        "Business-facing and consumer-facing React Native apps, shipped to both the App Store and Google Play.",
        "Flows for reservations, orders, events and payments.",
        "Multi-tenant behaviour, so many businesses run on one platform.",
      ],
      challenge:
        "Two apps, two platforms, one domain. Keeping business and customer experiences consistent with each other, so an order placed in one shows up correctly in the other, mattered more than any single screen.",
      outcome: [
        "Four production apps live: Customer and Business, on iOS and Android.",
      ],
    },
  },
  {
    slug: "bossof",
    number: "06",
    title: "Bossof",
    category: "Marketplace · Location",
    summary:
      "Connects customers with professional cleaners: real-time location, nearby discovery, verification with liveness checks and in-app chat.",
    role: "Mobile Developer (React Native)",
    period: "2024",
    stack: ["React Native", "Google Maps", "Liveness checks", "In-app chat"],
    featured: false,
    links: [
      {
        label: "Customer · iOS",
        href: "https://apps.apple.com/ng/app/bossof/id6503322168",
      },
      {
        label: "Customer · Android",
        href: "https://play.google.com/store/apps/details?id=com.reinigungsservices.bossofcustomerapp",
      },
      {
        label: "Partner · iOS",
        href: "https://apps.apple.com/ng/app/bossof-partner/id6503321919",
      },
      {
        label: "Partner · Android",
        href: "https://play.google.com/store/apps/details?id=com.reinigungsservices.bossofpartnerapp",
      },
    ],
    visual: shot(
      "/images/bossof-customer-ios.png",
      "Bossof customer iOS app screens",
    ),
    gallery: [
      shot("/images/bossof-cleaner-ios.png", "Bossof Partner iOS app screens"),
      shot(
        "/images/bossof-customer-android.png",
        "Bossof customer Android app screens",
      ),
      shot(
        "/images/bossof-cleaner-android.png",
        "Bossof Partner Android app screens",
      ),
    ],
    caseStudy: {
      overview:
        "Bossof connects customers with professional cleaners through a customer app and a partner app for cleaners, on iOS and Android.",
      problem:
        "Letting a stranger into your home needs trust, and booking one needs to be fast. The product had to make cleaners easy to find and easy to trust.",
      built: [
        "Google Maps integration for real-time location tracking and finding nearby cleaners.",
        "Verification and liveness checks to establish trust.",
        "An in-app chat system between customers and cleaners.",
      ],
      challenge:
        "Location, identity and messaging are three different real-time problems, each with its own failure modes on a phone with patchy signal. They had to work together as one calm experience.",
      outcome: [
        "Customer and Partner apps live on the App Store and Google Play.",
        "Smoother communication and more efficient service through in-app chat.",
      ],
    },
  },
  {
    slug: "ingleswitch",
    number: "07",
    title: "In-app support bot",
    context: "IngleSwitch",
    category: "Fintech · Mobile",
    summary:
      "UI components and API integrations for an in-app bot inside a fintech app, improving support responsiveness.",
    role: "Mobile Developer",
    period: "2022 — 2023",
    stack: ["React Native", "TypeScript", "Redux", "React Query"],
    featured: false,
    links: [],
    visual: { kind: "abstract", variant: "bot" },
  },
  {
    slug: "estate-platform",
    number: "08",
    title: "Estate management platform",
    context: "Newage Solutions",
    category: "Web · Real estate",
    summary:
      "Connects tenants with landlords and manages estate residents. QR-code visitor check-ins replaced a manual gate log.",
    role: "Frontend Developer",
    period: "2022 — 2023",
    stack: ["React", "Next.js", "TypeScript", "Redux", "Material UI"],
    featured: false,
    links: [],
    visual: { kind: "abstract", variant: "estate" },
  },
  {
    slug: "veranos",
    archive: true,
    number: "09",
    title: "Veranos",
    category: "Web application",
    summary: "Web application.",
    stack: ["Web"],
    featured: false,
    links: [{ label: "Visit site", href: "https://veranos.io/" }],
    visual: {
      kind: "image",
      src: "/images/veranos.png",
      alt: "Veranos web application",
      width: 2845,
      height: 1540,
    },
  },
  {
    slug: "afrelib-ai-academy",
    archive: true,
    number: "10",
    title: "Afrelib AI Academy",
    category: "Web application",
    summary: "Learning platform web application.",
    stack: ["Web"],
    featured: false,
    links: [{ label: "Visit site", href: "https://app.afrelibai.academy/" }],
    visual: {
      kind: "image",
      src: "/images/afrelib.png",
      alt: "Afrelib AI Academy web application",
      width: 2840,
      height: 1523,
    },
  },
  {
    slug: "cengpcs",
    archive: true,
    number: "11",
    title: "CENGPCS",
    category: "Website",
    summary: "Organisation website.",
    stack: ["Web"],
    featured: false,
    links: [{ label: "Visit site", href: "https://www.cengpcs.com/" }],
    visual: {
      kind: "image",
      src: "/images/cengpcs.png",
      alt: "CENGPCS website",
      width: 2843,
      height: 1529,
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured && !p.archive);
export const archiveProjects = projects.filter((p) => p.archive);
export const caseStudies = projects.filter((p) => p.caseStudy);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

/** Where a project row/card should lead: its case study, else its first external link. */
export const projectHref = (p: Project) =>
  p.caseStudy ? `/work/${p.slug}` : p.links[0]?.href;
