import type { MetadataRoute } from "next";

import { caseStudies } from "@/data/projects";
import { site } from "@/data/site";

const sitemap = (): MetadataRoute.Sitemap => [
  { url: site.url, changeFrequency: "monthly", priority: 1 },
  ...caseStudies.map((p) => ({
    url: `${site.url}/work/${p.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  })),
];

export default sitemap;
