import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Journey } from "@/components/sections/Journey";
import { MoreWork } from "@/components/sections/MoreWork";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Toolkit } from "@/components/sections/Toolkit";
import { site } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [site.socials.linkedin, site.socials.github, site.socials.x],
  knowsAbout: [
    "Software engineering",
    "Fintech",
    "Payments",
    "React",
    "React Native",
    "TypeScript",
    "Java",
    "Spring Boot",
    "NestJS",
    "Kotlin",
  ],
};

const HomePage = () => (
  <>
    <main id="main">
      <Hero />
      <SelectedWork />
      <MoreWork />
      <Journey />
      <HowIWork />
      <Toolkit />
      <About />
      <Contact />
    </main>
    <Footer />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
    />
  </>
);

export default HomePage;
