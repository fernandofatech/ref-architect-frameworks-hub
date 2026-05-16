# Architecture

`architect-frameworks-hub` is a static reference site. The Next.js frontend
renders short, opinionated summaries of architecture frameworks; longer notes
live under `docs/`.

## Components

- **Frontend (Next.js 16):** landing + per-framework pages.
- **Docs (`docs/`):** extended notes, ADRs and source links.
- **CI/CD (GitHub Actions):** validate, build, scan, deploy.
- **Hosting:** Vercel; DNS via Cloudflare for `frameworks.moretes.com`.

## Roadmap

1. Add per-framework deep-dive pages with side-by-side comparisons.
2. Add a "pick a framework" decision flow.
3. Embed C4 and ArchiMate example diagrams (Mermaid).
