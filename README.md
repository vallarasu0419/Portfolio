# Vikkaraman — Portfolio

A modern, animated portfolio website built with **React.js**, **Framer Motion**, and a custom **Midnight Ember** theme.

## Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Features

- Dark / Light theme toggle with CSS variables
- Smooth scroll navigation with active section highlighting
- Typing animation in hero section
- Animated skill progress bars with category filtering
- Interactive timeline for work experience
- Project cards with tech stack tags and live links
- Contact form (mailto-based)
- Downloadable resume button
- Particle background animation
- Fully responsive (mobile, tablet, desktop)
- SEO-friendly meta tags

## Tech Stack

- React 18
- Framer Motion (animations)
- React Type Animation (typed text)
- React Scroll (smooth scrolling)
- React Icons (Feather icons)
- React Intersection Observer (scroll reveals)

## Customization

All colors and spacing are controlled via CSS variables in `src/index.css`. Edit the `:root` block to change the theme.

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   - `"homepage": "https://vallarasu0419.github.io/Portfolio/"`
   - Scripts: `"predeploy": "npm run build"`, `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## License

Personal portfolio — all rights reserved.
