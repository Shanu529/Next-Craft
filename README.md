# NextCraft Portfolio Website

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide · Space Grotesk + Inter via `next/font/google`.
Fully static, no backend, ready for Vercel.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (also runs lint + type checks)
```

## Before you launch (2 settings)

Copy `.env.example` to `.env.local` (and add the same variables in Vercel > Project Settings > Environment Variables):

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your production domain, e.g. `https://nextcraft.com`. Used for canonical URLs, sitemap, robots and Open Graph. |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Your real Instagram profile URL. **Instagram buttons and links stay hidden until this is set** (no username was invented). |

## Where things live

```
src/app/                    Routes: /, /services, /work/websites, /work/websites/[slug], /work/graphic-design, /about, /contact, sitemap, robots
src/components/             layout/ sections/ cards/ portfolio/ (gallery + lightbox) contact/ ui/ seo/
src/data/services.ts        Service content
src/data/websites.ts        Website concepts (add `demoUrl` to a project to show "View Live Demo")
src/data/designs.ts         Graphic design gallery (16 pieces, categories, descriptions, alt text)
src/lib/                    Site config, metadata helper, JSON-LD builders
public/images/websites/     Website concept mockups (1600x1000 .webp)
public/images/graphics/     Graphic design concepts (.webp)
public/images/og.png        Open Graph image (built from your logo)
public/brand/               Original logo file
scripts/generate-images.mjs Generates the sample artwork (npm run generate:images)
```

## Replacing the sample artwork

All portfolio images are original **sample concepts**, clearly labelled as such on the site. To swap in real work, drop a new image into `public/images/...` with the same filename, or edit the entry in `src/data/websites.ts` / `src/data/designs.ts` (update `width`/`height` if the ratio changes). Do not present sample concepts as client work.

## Notes

- The contact form is a `mailto:` composer: it opens the visitor's email app pre-filled to nextin766@gmail.com and shows no fake success message.
- The logo in the navbar/footer is a text wordmark with the blue stepped-square accent. Swap in an SVG export of your logo in `src/components/layout/Logo.tsx` if you have one.
- Motion respects `prefers-reduced-motion` (via `MotionConfig reducedMotion="user"` plus a CSS fallback).
