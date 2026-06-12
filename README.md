# Gabriel Mondaini — Portfolio

Modern, multilingual portfolio for a Full Stack Web Developer. Dark-mode by
default, built for performance, SEO and conversion.

**Stack:** Astro 5 · static output · scoped CSS with design tokens · Cloudflare Pages.

## Features

- **Trilingual** — Portuguese (default, `/`), English (`/en`), Spanish (`/es`)
  from a single source of truth ([`src/i18n/ui.ts`](src/i18n/ui.ts)).
- **Dark / light theme** with no flash-of-unstyled-content, persisted to
  `localStorage`, respects `prefers-color-scheme`.
- **Sections** — Hero, Skills, Projects (with tag filtering), featured SaaS
  (Synapse Performance Analyzer), About, Contact.
- **Real project screenshots** captured into [`src/assets/projects/`](src/assets/projects)
  and auto-optimized to WebP by Astro (≈ 2–60 kB each).
- **SEO** — per-locale `<title>`/meta, Open Graph + Twitter cards, `hreflang`
  alternates, JSON-LD (`Person` + `WebSite`), sitemap, `robots.txt`.
- **Animations on scroll** via `IntersectionObserver`, fully gated behind
  `prefers-reduced-motion`.
- **Contact form** posts to a Cloudflare Pages Function
  ([`functions/api/contact.ts`](functions/api/contact.ts)) with honeypot +
  validation, ready to forward to a webhook or Resend email.
- **Blog-ready** — content is data-driven; add an Astro content collection under
  `src/content/` and a `/blog` route when needed.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build → dist/
npm run preview    # serve the built site
```

> Note: the contact endpoint `/api/contact` only runs on Cloudflare Pages (or
> `wrangler pages dev`). In plain `astro preview` it will 404 — that's expected.

## Project screenshots

Thumbnails were captured with system Chrome via
[`scripts/shots.mjs`](scripts/shots.mjs). To refresh them:

```bash
node scripts/shots.mjs   # re-captures every project into src/assets/projects/
npm run build            # re-optimizes to WebP
```

## Deploy — Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. (Optional) add environment variables for the contact form under
   **Settings → Environment variables**:
   - `CONTACT_WEBHOOK` — webhook URL to receive submissions, or
   - `RESEND_API_KEY` + `CONTACT_TO` — send submissions as email via Resend.
5. Update the production domain in [`astro.config.mjs`](astro.config.mjs)
   (`SITE`) and [`public/robots.txt`](public/robots.txt) once the final domain
   is set, so canonical URLs, `hreflang` and the sitemap are correct.

## Customizing content

- **Copy / translations:** [`src/i18n/ui.ts`](src/i18n/ui.ts)
- **Skills, projects, profile, social:** [`src/data/content.ts`](src/data/content.ts)
- **Colors / spacing / motion tokens:** [`src/styles/global.css`](src/styles/global.css)
