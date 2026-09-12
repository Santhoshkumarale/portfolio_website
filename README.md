# Portfolio Website

Personal portfolio for a Software Engineer specialising in .NET and enterprise application development — ASP.NET Core Web APIs, Angular front ends, PostgreSQL / SQL Server, and application security (authentication, authorization, AES-256-GCM field-level encryption, masking, hashing, audit logging).

Built with **Angular 21** (standalone components, signals, zoneless), **SCSS** design tokens and **static prerendering** — the production output is plain HTML/CSS/JS that can be hosted anywhere.

## Getting started

Requirements: Node.js 22.12+ (see `.nvmrc`) and npm.

```bash
npm install
npm start          # dev server on http://localhost:4200
```

| Script              | Purpose                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `npm start`         | Development server with live reload                                                                                           |
| `npm run build`     | Production build + prerender → `dist/portfolio-website/browser`, then `postbuild` writes `sitemap.xml` when `SITE_URL` is set |
| `npm test`          | Unit tests (Vitest)                                                                                                           |
| `npm run lint`      | ESLint (TypeScript + Angular templates + a11y rules)                                                                          |
| `npm run typecheck` | `tsc --noEmit` for the app and the specs                                                                                      |
| `npm run format`    | Prettier (`format:check` to verify only)                                                                                      |

## Customising the content

All content lives in **`src/app/data/portfolioData.ts`**. Nothing is hard-coded in components.

Values in `[square brackets]` and `UPPER_SNAKE_CASE` identifiers are placeholders:

| Placeholder                                                                 | Where                                                                            |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `[Your Name]`, `[City, Country]`, `[your.email@example.com]`                | `personal`                                                                       |
| `[https://your-domain.example]`                                             | `personal.websiteUrl` — enables the canonical link, `og:url` and structured data |
| `GITHUB_USERNAME`, `LINKEDIN_USERNAME`                                      | `personal` and `social`                                                          |
| `[Company Name]`, `[Job Title]`, `[Start Date]`, `[End Date]`, `[Location]` | `experience`                                                                     |
| `public/resume.pdf`                                                         | Replace the placeholder PDF with your resume                                     |

Once `githubUsername` is a real account, the GitHub section loads that account's most recently updated public repositories live from the GitHub API. While it is a placeholder, the section shows an explanatory note instead of fabricated repositories.

The contact form has no backend: on submit it opens the visitor's email client via a `mailto:` link addressed to `personal.email` — so it only works once that placeholder is a real address.

Document metadata is derived from the same file at build time (`src/app/seo.ts`): the title, description and Open Graph tags always match the content, and anything that depends on a placeholder (your name in the title, canonical URL, JSON-LD `Person`, `sameAs` profile links) is left out until the value is real.

## Project structure

```
public/                    static assets (favicon, robots.txt, resume.pdf)
scripts/
  generate-sitemap.mjs     postbuild: sitemap.xml + robots Sitemap line (needs SITE_URL)
src/
  index.html               fallback title/description/Open Graph metadata, fonts
  styles/                  global design system
    _tokens.scss           colours, typography, spacing, radii, motion
    _reset.scss            reset + reduced-motion handling
    _base.scss             layout primitives, reveal styles, utilities
    _mixins.scss           breakpoints, glass surface, focus ring, panel labels
  app/
    app.html               page shell; below-the-fold sections use @defer with
                           incremental hydration (prerendered HTML, lazy JS)
    app.config.ts          hydration + SEO providers
    seo.ts                 title / meta / canonical / JSON-LD from portfolioData
    data/
      portfolio.models.ts  TypeScript interfaces for all content
      portfolioData.ts     central content (edit this)
    utils/
      highlight.ts         dependency-free code tokenizer for snippets
      placeholders.ts      placeholder detection
    components/            reusable UI (button, chip, icon + SVG sprite, feature
                           card, flow diagram, code block, security visuals,
                           section heading, site header/footer, reveal directive)
    sections/              one folder per page section (hero, about,
                           experience, projects, architecture, security,
                           backend, database, journey, github, resume, contact)
```

## Deployment

```bash
SITE_URL=https://your-domain.example npm run build
```

produces a fully prerendered static site in `dist/portfolio-website/browser` (plus `sitemap.xml` and a `Sitemap:` entry in `robots.txt` when `SITE_URL` is set). Upload that folder to any static host — GitHub Pages, Cloudflare Pages, Netlify, Vercel, Azure Static Web Apps.

Recommended host configuration:

- Serve `index.html` for `/` (no server-side routing is needed; there is a single prerendered route).
- Long cache lifetimes for the hashed `*.js` / `*.css` files (`Cache-Control: public, max-age=31536000, immutable`); short or no cache for `index.html`, `robots.txt`, `sitemap.xml` and `resume.pdf`.
- Security headers: `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` and a `Content-Security-Policy`. The site needs `script-src 'self'`, `style-src 'self' 'unsafe-inline'` (Angular inlines critical CSS and component styles), `font-src https://fonts.gstatic.com`, `connect-src 'self' https://api.github.com` (GitHub section) and `img-src 'self' data:`. Set these at the host/CDN level rather than in a `<meta>` tag.
- Set `personal.websiteUrl` before building so the canonical link, `og:url` and JSON-LD carry the real domain. Optionally add a 1200×630 `og:image` in `src/index.html`.

The GitHub section calls `https://api.github.com` unauthenticated from the visitor's browser (60 requests/hour per IP); no token is required or embedded.

## Accessibility & performance

- Semantic landmarks and heading order, skip link, visible focus states
- Keyboard-operable navigation, mobile menu with `Escape` to close and focus return
- `prefers-reduced-motion` disables all animations and scroll reveals
- Prerendered HTML so content is visible without JavaScript
- Incremental hydration: sections below the fold ship as separate chunks that load when scrolled into view
- No UI framework or icon library — one inline SVG sprite and hand-written SCSS
- No images to optimise; fonts are self-described `@font-face` rules inlined at build time with `font-display: swap`
