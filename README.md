# Portfolio Website

Personal portfolio for a Software Engineer specialising in .NET and enterprise application development — ASP.NET Core Web APIs, Angular front ends, PostgreSQL / SQL Server, and application security (authentication, authorization, AES-256-GCM field-level encryption, masking, hashing, audit logging).

Built with **Angular 21** (standalone components, signals, zoneless), **SCSS** design tokens and **static prerendering** — the production output is plain HTML/CSS/JS that can be hosted anywhere.

## Getting started

Requirements: Node.js 22.12+ (see `.nvmrc`) and npm.

```bash
npm install
npm start          # dev server on http://localhost:4200
```

| Script                | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| `npm start`           | Development server with live reload                  |
| `npm run build`       | Production build + prerender → `dist/portfolio-website/browser` |
| `npm test`            | Unit tests (Vitest)                                  |
| `npm run lint`        | ESLint (TypeScript + Angular templates + a11y rules) |
| `npm run format`      | Prettier                                             |

## Customising the content

All content lives in **`src/app/data/portfolioData.ts`**. Nothing is hard-coded in components.

Values in `[square brackets]` and `UPPER_SNAKE_CASE` identifiers are placeholders:

| Placeholder                          | Where                                     |
| ------------------------------------ | ----------------------------------------- |
| `[Your Name]`, `[City, Country]`, `[your.email@example.com]` | `personal`                  |
| `GITHUB_USERNAME`, `LINKEDIN_USERNAME` | `personal` and `social`                 |
| `[Company Name]`, `[Job Title]`, `[Start Date]`, `[End Date]`, `[Location]` | `experience` |
| `public/resume.pdf`                  | Replace the placeholder PDF with your resume |

Once `githubUsername` is a real account, the GitHub section loads that account's most recently updated public repositories live from the GitHub API. While it is a placeholder, the section shows an explanatory note instead of fabricated repositories.

The contact form has no backend: on submit it opens the visitor's email client via a `mailto:` link addressed to `personal.email`.

## Project structure

```
public/                    static assets (favicon, robots.txt, resume.pdf)
src/
  index.html               title, description, Open Graph metadata, fonts
  styles/                  global design system
    _tokens.scss           colours, typography, spacing, radii, motion
    _reset.scss            reset + reduced-motion handling
    _base.scss             layout primitives, reveal styles, utilities
    _mixins.scss           breakpoints, glass surface, focus ring
  app/
    data/
      portfolio.models.ts  TypeScript interfaces for all content
      portfolioData.ts     central content (edit this)
    utils/
      highlight.ts         dependency-free code tokenizer for snippets
      placeholders.ts      placeholder detection
    components/            reusable UI (button, chip, icon, feature card,
                           flow diagram, code block, section heading,
                           site header/footer, reveal directive)
    sections/              one folder per page section (hero, about,
                           experience, projects, architecture, security,
                           backend, database, journey, github, resume, contact)
```

## Deployment

`npm run build` produces a fully prerendered static site in `dist/portfolio-website/browser`. Upload that folder to any static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel, Azure Static Web Apps).

For SEO, after deploying:

- add the `Sitemap:` line in `public/robots.txt` with your real domain (a sitemap is optional for a single-page site);
- optionally add `og:url` / `og:image` tags in `src/index.html` pointing at your domain and a 1200×630 social image.

## Accessibility & performance

- Semantic landmarks and heading order, skip link, visible focus states
- Keyboard-operable navigation, mobile menu with `Escape` to close and focus return
- `prefers-reduced-motion` disables all animations and scroll reveals
- Prerendered HTML so content is visible without JavaScript
- No UI framework or icon library — inline SVG icons and hand-written SCSS
