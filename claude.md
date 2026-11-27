# Timileyin Babalola Portfolio — Claude Code Guidelines

> This file is the persistent design, engineering, content, and product-thinking contract for this portfolio.
>
> Every future Claude Code session must read and respect this file before modifying the project.
>
> The goal is not merely to make the portfolio functional. The goal is to maintain a premium, intentional, technically credible personal website that represents Timileyin as a senior software engineer and continues to evolve with his career.

---

# 1. Core Principle

This portfolio is both a **personal brand experience** and an **engineering product**.

Every implementation decision should satisfy two standards:

1. **Engineering quality**
   - Maintainable
   - Performant
   - Accessible
   - Responsive
   - Secure
   - SEO-friendly
   - Well-structured
   - Easy to extend

2. **Design quality**
   - Intentional
   - Premium
   - Minimal
   - Distinctive
   - Editorial
   - Human
   - Technically sophisticated
   - Visually cohesive

Do not optimize one at the expense of the other.

The portfolio should feel like the work of an excellent engineer who also has strong product and visual judgment.

---

# 2. Before Making Changes

Before modifying existing code:

1. Inspect the relevant files.
2. Understand the existing architecture.
3. Understand the existing component structure.
4. Understand the current styling system.
5. Understand existing naming conventions.
6. Understand existing data structures.
7. Understand existing animation patterns.
8. Reuse existing components where appropriate.
9. Preserve established patterns unless there is a strong reason to change them.

Do not rewrite existing architecture simply because a different approach is personally preferred.

Do not introduce a new pattern when an existing pattern already solves the problem well.

Do not redesign unrelated sections when implementing a localized feature.

---

# 3. Preserve Existing Architecture

The portfolio should evolve incrementally.

Future changes must preserve:

- Existing folder structure
- Existing component architecture
- Existing naming conventions
- Existing styling conventions
- Existing routing structure
- Existing animation patterns
- Existing content/data organization
- Existing reusable primitives
- Existing responsive behavior

If the existing architecture is good enough, extend it.

Refactor only when there is a clear engineering or maintainability reason.

Avoid unnecessary rewrites.

---

# 4. Technology Direction

Preferred stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Next/Image
- Lucide React or an existing icon system

Use the project's existing versions and conventions.

Do not introduce additional libraries merely because they can create an effect.

Avoid unnecessary dependencies such as:

- GSAP
- Three.js
- Lenis
- Multiple animation libraries
- Multiple UI libraries
- Multiple icon libraries

Only introduce a new dependency when the requirement genuinely justifies it and the existing stack cannot reasonably solve the problem.

---

# 5. Sintim Studio as Visual Inspiration

The primary visual reference is:

https://www.sintim.studio/

Use it as **inspiration**, not as something to clone.

Study and preserve the qualities that make the reference effective:

- Editorial composition
- Large typography
- Strong visual hierarchy
- Minimal interface
- Dark visual environment
- Restrained color usage
- Atmospheric gradients
- Subtle motion
- Smooth transitions
- Interactive details
- Strong whitespace
- Premium presentation
- Clear storytelling
- High attention to typography
- Confident visual pacing

Do NOT:

- Copy the exact layout
- Copy proprietary graphics
- Copy exact wording
- Copy distinctive components one-for-one
- Reproduce the site as a clone

The portfolio must develop its own identity.

---

# 6. Overall Brand Personality

The visual personality should communicate:

- Seniority
- Confidence
- Technical depth
- Precision
- Creativity
- Reliability
- Calmness
- Curiosity
- Ownership
- Human personality

Avoid making the portfolio feel:

- Corporate
- Generic
- Template-driven
- Overly colorful
- Excessively futuristic
- AI-generated
- Over-animated
- Like a collection of random UI experiments

The experience should feel **quietly impressive**.

---

# 7. Personal Brand Positioning

The portfolio must not position Timileyin solely as a React Native developer.

The broader story is:

> Frontend → Web/Mobile Engineering → Production Engineering → Fintech → Backend & Systems Engineering

The portfolio should communicate an engineer who has progressively expanded his technical depth.

Current positioning should support:

- Software Engineering
- Full-stack capability
- Backend engineering
- Java
- Spring Boot
- Distributed systems
- API design
- Financial systems
- Mobile engineering
- Web engineering
- Architecture
- Performance
- Security
- Reliability
- Product thinking

React Native remains an important part of the story, but it should not define the entire identity.

---

# 8. Core Brand Message

A central positioning idea is:

> I build software that moves products forward.

This does not necessarily have to appear verbatim everywhere.

Use it as the underlying philosophy for:

- Hero
- About
- Project storytelling
- Engineering journey
- How I Work
- Contact

The portfolio should consistently communicate that Timileyin does more than write code.

He takes responsibility for moving software and products forward.

---

# 9. Ownership as a Core Theme

Ownership is an important part of the personal engineering philosophy.

Ownership means:

- Taking responsibility for what is placed in your hands.
- Understanding the problem, not just the assigned ticket.
- Driving work forward.
- Identifying blockers.
- Communicating early.
- Following through.
- Caring about quality.
- Thinking beyond implementation.
- Making sure work actually reaches completion.
- Taking responsibility for outcomes, not merely code.

The portfolio should communicate this naturally through storytelling.

Do not turn it into corporate buzzwords.

---

# 10. Content Philosophy

Every piece of portfolio content must be:

- Accurate
- Specific
- Human
- Concise
- Credible
- Useful

Never invent:

- Metrics
- Users
- Revenue
- Performance numbers
- Architecture decisions
- Team sizes
- Responsibilities
- Technologies
- Achievements
- Business impact

If a metric is not known, do not fabricate one.

Prefer:

> Built and maintained...

over:

> Architected a revolutionary enterprise-grade platform serving millions...

unless that claim is actually supported.

---

# 11. Copywriting Style

Portfolio copy should sound like an experienced engineer speaking clearly.

Prefer:

- Direct language
- Short sentences
- Specific observations
- Technical confidence
- Human language

Avoid:

- "Passionate developer"
- "Results-driven professional"
- "Cutting-edge solutions"
- "Leveraging innovative technologies"
- "Digital transformation"
- "Synergy"
- "Next-generation solutions"

Avoid generic AI-generated portfolio language.

Every sentence should earn its place.

---

# 12. Visual Design System

The visual system should remain consistent.

## Primary Background

Use a near-black foundation.

Preferred baseline:

```txt
#0A0A0A
```
