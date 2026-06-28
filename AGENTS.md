# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## What this is

Personal website of Mario Gomez, built on the [Astro Nano](https://github.com/markhorn-dev/astro-nano) theme (Astro 5 + Tailwind). Migrated from an academicpages (Jekyll) fork.

## Build / dev

- `npm install` then `npm run dev` (serves at `http://localhost:4321/personal`).
- `npm run build` runs `astro check && astro build`; output goes to `dist/`.

## Deployment

- Hosted on **GitHub Pages as a project site**: https://mgomezandreu.github.io/personal/
- Deployed by `.github/workflows/deploy.yml` (push to `master` / manual dispatch) using `withastro/action` + `actions/deploy-pages`. GitHub Pages source must be set to **GitHub Actions** (Settings > Pages).

## Base-path gotcha (important)

Because this is a project page, `astro.config.mjs` sets `base: "/personal"`. Astro does **not** rewrite hard-coded absolute string links like `href="/blog"`. To keep every internal link/asset under `/personal/`:

- Use the `withBase()` helper in `src/lib/utils.ts` for any site-absolute path built in `.astro`/`.ts` (links, favicons, RSS, sitemap, public assets).
- `src/components/Link.astro` already applies `withBase()` to non-external hrefs, so most nav/links route through it.
- In **markdown** content, `withBase` is not available - reference public assets with the literal base prefix, e.g. `![alt](/personal/images/foo.png)`.
- After changing base handling, verify the built HTML, do not assume.

## Content model

- `src/content/blog` and `src/content/projects` - content collections (schemas in `src/content/config.ts`).
- `src/pages/publications.astro` and `src/pages/cv.astro` - hand-built pages (Astro Nano has no publications/CV system). CV also links the real PDF in `public/files/`.
- Real PDFs, images and video live under `public/files`, `public/images`, `public/videos`.
