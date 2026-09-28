# Vikkaraman — Portfolio

A modern, animated portfolio website built with **React.js**, **Framer Motion**, and a custom **Midnight Ember** theme.

## Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Features

- All content lives in `src/data/portfolio.js` (single source of truth; keep in sync with resume/LinkedIn)
- Dark / Light theme toggle with CSS variables
- Smooth scroll navigation with active section highlighting
- Experience timeline and case-study project cards with live links
- Grouped skill chips
- Contact form via EmailJS (see `.env.example`)
- Resume download from hero, navbar and contact
- Particle background (disabled for `prefers-reduced-motion`)
- Fully responsive, keyboard accessible, WCAG 2.2 AA colour contrast
- SEO: meta description, canonical, Open Graph / Twitter image, JSON-LD, sitemap

## Environment variables

Copy `.env.example` to `.env.local` and fill in the EmailJS IDs. Add the same
variables in Vercel → Project → Settings → Environment Variables.

## Tech Stack

- React 18
- Framer Motion (animations)
- React Scroll (smooth scrolling)
- React Icons (Feather icons)
- React Intersection Observer (scroll reveals)

## Customization

All colors and spacing are controlled via CSS variables in `src/index.css`. Edit the `:root` block to change the theme.

## Build for Production

```bash
npm run build
```

## Deploy

Deployed on Vercel at https://vikkaraman.vercel.app/.

## License

Personal portfolio — all rights reserved.
