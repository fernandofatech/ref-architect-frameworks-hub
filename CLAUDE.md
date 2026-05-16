# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

`architect-frameworks-hub` is a fast reference site that summarizes the
frameworks a practicing solution architect uses: AWS Well-Architected, TOGAF
ADM, C4, ArchiMate, DDD, 12-Factor and Cynefin. The Next.js frontend at
`frameworks.moretes.com` renders the catalog.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS 4
- GitHub Actions: CI, Frontend, Vercel, Security

## Development commands

```bash
cd frontend
npm install
npm run dev
npm run build
npm run lint
```

## Repository layout

- `frontend/app/` — landing and per-framework pages
- `docs/` — extended notes, ADRs and references
- `.github/workflows/` — pipelines

## Conventions

- Each framework gets one page under `frontend/app/(frameworks)/<slug>/page.tsx`
  as the catalog grows.
- Summaries stay concise and link to canonical sources for depth.
- Avoid prescriptive language; describe trade-offs and applicability.
