# SilTest Semiconductors website

Static site built with Astro. English at launch, structured for German (`/de`) later.

## Run locally
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to ./dist
npm run preview
```

## Structure
- `src/styles/global.css`  design tokens (brand colours, IBM Plex type) and components
- `src/layouts/Base.astro`  page shell, SEO head, hreflang, Organisation structured data
- `src/components/Header.astro`, `Footer.astro`  shared across every page
- `src/pages/index.astro`  the finished homepage (reference page)
- `src/pages/de/`  German placeholder, ready for translated pages
- `public/logos/`  brand and affiliation logos

## Brand
Navy `#010C2B`, blue `#008CFF`, light blue `#20BDFF`, light backgrounds. IBM Plex Sans and IBM Plex Mono. Neuropolitical only in the logo artwork.

## Hosting
GitHub Pages via `.github/workflows/deploy.yml`. Custom domain in `public/CNAME`. In repo settings, set Pages source to GitHub Actions.

## Do not publish
Test Program Generator internal name, any JMP marketplace or outreach, past employer names.
