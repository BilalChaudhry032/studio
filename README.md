# Studio Site

One-page agency site with a scroll-synced product canvas (idea → shipped) and a Sanity Free blog.

## Stack

Next.js App Router, TypeScript, Tailwind, GSAP ScrollTrigger, Sanity.

## Setup

```bash
cd studio-site
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Sanity (optional for first run)

The homepage, canvas, and four fallback articles work without credentials.

1. Create a Free project at [sanity.io](https://www.sanity.io).
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`.
3. Open `/studio`, publish posts, and they replace the fallback articles.

### Contact

Set `RESEND_API_KEY` or `FORMSPREE_URL`. Without either, the form still accepts submissions in demo mode.

Set `NEXT_PUBLIC_CALENDLY_URL` to your booking link (embed appears when it is not the placeholder).

## Scripts

- `npm run dev` — local server
- `npm run build` — production build
- `npm run start` — serve the build
