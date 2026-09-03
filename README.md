# Irina Safronova — Frontend & AI Portfolio

A production portfolio built with React, TypeScript, Vite, and Three.js.

The site presents my frontend and AI-focused work, including the Glowi Club Manager Agent concept, case studies, accessibility work, and a custom interactive GLSL shader hero.

## Live Site

https://irina-ai-portfolio-nine.vercel.app/

## Overview

This portfolio was designed as a production-ready personal site rather than a static template.

The current version includes:

- Responsive React + TypeScript interface
- Custom navy/violet visual system
- Interactive GLSL fragment shader hero
- Mouse-responsive shader animation
- Reduced-motion fallback
- Accessible keyboard navigation and focus states
- Open Graph and Twitter social preview metadata
- Custom favicon and page metadata
- Vercel Analytics
- Mobile-first responsive layouts
- Production deployment on Vercel

## Screenshots

### Hero

The hero introduces my frontend and AI focus and includes a custom WebGL shader rendered behind real portfolio content.

### Selected Work

The project section highlights my AI and frontend work, including the Glowi Club Manager Agent and Competition Planner.

Screenshots and audit evidence are available in the repository documentation and on the production site.

## Tech Stack

- React
- TypeScript
- Vite
- Three.js
- GLSL
- CSS
- Vercel
- Vercel Analytics

## Running Locally

### Prerequisites

- Node.js 18+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/rabbitrunout/irina-ai-portfolio.git
cd irina-ai-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL shown in the terminal.

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Environment Variables

This portfolio does not currently require private environment variables to run.

| Variable | Required | Purpose |
| --- | --- | --- |
| None | No | The current portfolio does not require secrets or private API keys. |

If AI-backed server routes are added in the future, API keys will be stored in environment variables and will not be committed to the repository.

## Architecture

The portfolio is a client-side React application built with Vite.

Main structure:

```text
src/
├── components/
│   └── ShaderBackground.tsx
├── App.tsx
├── App.css
└── main.tsx
```

### App.tsx

Contains the main portfolio layout, hero content, project sections, about section, current work, and contact experience.

### App.css

Contains the visual system, responsive layouts, accessibility states, mobile styling, and shader hero integration.

### ShaderBackground.tsx

Creates the WebGL renderer and custom GLSL shader used in the portfolio hero.

The shader uses three core uniforms:

- `u_time` — drives slow animated movement
- `u_resolution` — keeps the effect proportional across screen sizes
- `u_mouse` — adds subtle cursor interaction

The fragment shader combines animated sine and cosine waves to create the flow field, then mixes the portfolio's navy, blue, violet, and pink palette across that field.

A subtle grain pass adds texture, while the main text area is intentionally kept darker for readability.

## Performance

The shader renderer caps the device pixel ratio:

```ts
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
```

This prevents high-density displays from rendering more WebGL pixels than necessary.

The animation also pauses when the browser tab becomes hidden.

### Reduced Motion

The shader checks the user's `prefers-reduced-motion` preference.

When reduced motion is enabled, the animated WebGL background is replaced with a static CSS gradient using the same navy/violet visual identity.

This keeps the design consistent without requiring animation.

## Accessibility

The portfolio includes:

- Keyboard-accessible navigation
- Visible focus states
- Semantic landmarks and labels
- Reduced-motion support
- Responsive text and layouts
- Mobile-friendly interaction targets
- Contrast-conscious hero content

The accessibility and performance review is documented in:

```text
AUDIT.md
```

Additional production hardening notes are documented in:

```text
HARDENING.md
```

## Production Hygiene

The current portfolio does not expose a public server-side AI or streaming API route.

Because visitors cannot send prompts to a paid AI endpoint from this repository, there is currently no public AI route that can be used to drain API credits. For that reason, API rate limiting and streaming `maxDuration` settings are not applicable to the current deployment.

If a public AI endpoint is added in the future, it should include:

- Input length caps
- Request validation
- Per-IP or per-session rate limiting
- Server-side API keys
- A sensible streaming/request duration limit
- Error handling for provider failures

## Key Decisions

### Keep the portfolio focused

The site is intentionally kept focused rather than being turned into a large application.

The goal is for a recruiter or reviewer to understand my frontend focus, AI work, selected projects, and technical direction quickly.

### Build a signature hero instead of using a template animation

The hero uses a custom GLSL fragment shader rather than a stock video or template background.

Its navy, blue, violet, and pink palette matches the rest of the portfolio so the effect feels like part of the product.

### Treat WebGL as progressive enhancement

The portfolio content does not depend on the shader.

The headline, project information, navigation, and calls to action remain usable without animation, and reduced-motion users receive a static alternative.

## How AI Tools Helped Build This

AI tools were part of my development workflow, but the implementation was tested and integrated in the actual project rather than copied without review.

I used AI assistance for:

- Reviewing component structure
- Exploring UI layout options
- Debugging TypeScript and CSS issues
- Accessibility and performance auditing
- Improving responsive behavior
- Reviewing production hardening
- Understanding and modifying GLSL shader logic
- Improving technical documentation

For the shader specifically, AI helped me work through GLSL concepts including normalized coordinates, time-based animation, mouse uniforms, aspect-ratio correction, color mixing, and grain.

I then integrated the shader into the existing React hero, adjusted its visual intensity to match the portfolio, preserved text readability, implemented mouse interaction, capped device pixel ratio, added tab-visibility pausing, and provided a reduced-motion fallback.

The result is not a standalone shader demo: it is part of the production portfolio and follows the same accessibility and performance constraints as the rest of the site.

## Deployment

The portfolio is deployed on Vercel.

Production URL:

https://irina-ai-portfolio-nine.vercel.app/

Changes pushed to the `main` branch are deployed through the project's Vercel deployment workflow.

## Browser Testing

The production experience should be verified on:

- Chrome
- Firefox
- Safari
- Mobile Safari

The responsive layout should also be checked at mobile, tablet, and desktop widths.

## Repository Documentation

Additional documentation:

- `AUDIT.md` — accessibility and performance audit
- `HARDENING.md` — production hardening review

## Author

**Irina Safronova**

Frontend & AI Developer