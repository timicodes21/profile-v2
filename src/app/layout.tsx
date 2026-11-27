import "./globals.css";

import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Outfit, Space_Grotesk } from "next/font/google";

import { CustomCursor } from "@/components/CustomCursor";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    className={cn(display.variable, body.variable, mono.variable)}
    suppressHydrationWarning
  >
    <body className="grain min-h-dvh overflow-x-clip">
      {/* Without JS, scroll reveals never fire: show everything instead of a blank page. */}
      <noscript>
        <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}.line-mask>span{transform:none!important}`}</style>
      </noscript>
      <a
        href="#main"
        className="text-meta fixed top-3 left-3 z-[100] -translate-y-20 rounded-full bg-paper px-4 py-2 text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="atmosphere" aria-hidden />
      <MotionProvider>
        <Nav />
        {children}
        <CustomCursor />
      </MotionProvider>
    </body>
  </html>
);

export default RootLayout;
