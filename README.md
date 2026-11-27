# timileyin.dev — portfolio

Personal site of Timileyin Babalola, Software Engineer (Web · Mobile · Backend).

```bash
yarn install
yarn dev            # http://localhost:3000
yarn build          # production build (all routes are static)
yarn lint && yarn typecheck
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`) in production for canonical URLs,
the sitemap and Open Graph. On Vercel it falls back to `VERCEL_PROJECT_PRODUCTION_URL`.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Framer Motion · Lucide.
No other animation or scroll libraries. Scrolling is native.

## Structure

```
src/
  app/                  layout, home, /work/[slug] case studies, sitemap, robots, OG image, icon
  components/
    sections/           Hero, SelectedWork, MoreWork, Journey, HowIWork, Toolkit, About, Contact (server)
    Nav, CustomCursor, Reveal, Timeline, MoreWorkList, HeroAtmosphere, LocalTime   (client islands)
    ProjectVisual, SectionHeader, Monogram, Footer                                 (server)
  data/                 all content, typed: site, projects, content (experience, principles, toolkit)
  lib/                  cn(), strata line generator
```

**To update content, edit `src/data/*` only.** A project gets a `/work/<slug>` page automatically
when it has a `caseStudy`. Projects without one link straight to their first external link.

## Design system

| Token | Value |
| --- | --- |
| Background | `#0A0A0A` (`ink`) |
| Text | `#F5F5F0` (`paper`), secondary `#A1A1A1` (`mute`), meta `#8A8A86` (`dim`) |
| Border / surface | `rgba(255,255,255,.10)` / `rgba(255,255,255,.04)` |
| Accent | `#FF6B35`, used only for markers, active states, CTAs and hovers |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` everywhere |

### Typography

The reference site's fonts were identified from its compiled CSS: display `Space Grotesk`, body
`Outfit`, mono `Martian Mono`, plus `Archivo` (wide) and `MuseoModerno` (logo). All are OFL-licensed.

This site uses:

| Role | Font | Weights | Usage |
| --- | --- | --- | --- |
| Display | **Space Grotesk** (variable 300–700) | 500 | Hero `clamp(3.4rem, 11.5vw, 10.5rem)` / lh .86 / ls −0.055em · sections `clamp(2.4rem, 6vw, 5.75rem)` / lh .95 / ls −0.045em · titles `clamp(1.75rem, 3.4vw, 3.25rem)` / ls −0.035em |
| Body | **Outfit** (variable 100–900) | 400–500 | `clamp(1rem, …, 1.125rem)` / lh 1.6; lede `clamp(1.15rem, …, 1.6rem)` / lh 1.4 |
| Mono | **JetBrains Mono** | 400, 500 | 11px, uppercase, ls 0.08em: dates, section numbers, labels, metadata |

JetBrains Mono replaces Martian Mono on purpose, so the site keeps its own identity.
Fonts are self-hosted via `next/font` (no layout shift, no third-party requests).

### Identity

- **Strata.** The hero background is a set of deformed horizontal layers (`lib/strata.ts`), like a
  geological cross-section. It nods to Timileyin's geology degrees and reads as "layers of a
  stack". The TB monogram repeats the motif.
- Fine grid, barely-there grain, one warm light that follows the pointer in the hero.

## Interaction language

| Element | Behaviour |
| --- | --- |
| Headings | Line-by-line mask reveal (Framer Motion, once) |
| Hero | CSS-only entrance (~1s total), so it runs before hydration |
| Links | Underline draws left → right |
| Buttons | Arrow nudges |
| Projects | Media scales 1.035 and resaturates, border brightens, title shifts, number turns accent, cursor shows "View" |
| More work | Floating preview follows the pointer (desktop) |
| Timeline | Sticky horizontal year rail (desktop) / vertical line (mobile) fills with scroll; active chapter highlights |
| Nav | Transparent → blurred + hairline after scroll; active section dot |
| Cursor | Desktop + fine pointer only; off with `prefers-reduced-motion` |

`prefers-reduced-motion: reduce` disables the cursor, parallax, pointer light and reveal motion.

## Content sources and honesty rules

All facts come from the résumé (`public/Timileyin-Babalola-Resume.pdf`) and the previous portfolio.
No metrics, users, volumes or team sizes were invented. Private products (Zest, Ardova, Zarttech,
IngleSwitch, Newage) use abstract illustrations that are **labelled as illustrations**, never
presented as screenshots.

Two date typos in the résumé were corrected on the site:

- BlackCopper `04/2023 – 10/2033` → **10/2023** (Zarttech starts 11/2023)
- IngleSwitch `12/2033 – 04/2023` → **12/2022**
