const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "Timileyin Babalola",
  shortName: "Timileyin",
  role: "Software Engineer",
  disciplines: ["Web", "Mobile", "Backend"],
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  title: "Timileyin Babalola — Software Engineer | Web, Mobile & Backend",
  description:
    "Timileyin Babalola is a software engineer building production-grade web, mobile and backend systems, with experience across fintech, payments and digital products.",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  timezoneLabel: "WAT (UTC+1)",
  coordinates: "6.52° N, 3.38° E",
  availability: "Remote / global opportunities",
  email: "timileyinbabalola42@gmail.com",
  resume: "/Timileyin-Babalola-Resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/timileyin-babalola-283b4b149/",
    github: "https://github.com/timicodes21",
    x: "https://x.com/dev_timi",
  },
} as const;

export const navItems = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "Journey", href: "/#journey", id: "journey" },
  { label: "How I work", href: "/#how", id: "how" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;
