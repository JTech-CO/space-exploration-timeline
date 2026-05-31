# Space Exploration Timeline

> **A bottom-to-top scrolling timeline that lets you rise from the ground to deep space while travelling through the history of space exploration.**

🌍 **Live site**: https://jtech-co.github.io/space-exploration-timeline/
📖 **한국어 README**: [README-KR.md](README-KR.md)

## 1. Introduction

This project is a web application built to turn the history of space exploration
into something you physically *climb*. The page opens at the very bottom — humanity
at ground level, the earliest rockets and astronomers — and as you scroll **up**
(mouse wheel or the ↑ arrow key) you rise through the atmosphere into deep space,
following roughly seven centuries of reaching upward, all the way to Artemis II in 2026.

By mapping **time to altitude**, the site lets readers feel how high humanity had
reached at each moment in history, delivering an educational experience that is
read by scrolling rather than clicking.

**Key features**
- **Time-as-altitude ascent**: A scroll-driven background gradient, starfield, and
  Earth's limb rise from a warm dawn horizon, through the atmosphere, to deep space,
  with a fixed read-out naming the layer (Troposphere → Kármán line → orbit → Moon →
  deep space) and the year currently in view.
- **Trilingual, fact-checked content**: 96 events in English, Korean, and Japanese,
  switchable from the top bar while keeping your place; each entry verified and
  corrected against multiple sources.

## 2. Tech Stack

- **Frontend**: Vanilla JavaScript (ES modules), HTML, CSS — no UI framework
- **Build Tool**: Vite
- **Rendering**: DOM generation + Canvas 2D starfield, driven by `requestAnimationFrame`
- **Backend**: None (fully static, serverless)
- **Deployment**: GitHub Pages (GitHub Actions workflow)

## 3. Quick Start

**Requirements**: Node.js 18 or higher

1. **Install**
   ```bash
   git clone https://github.com/JTech-CO/space-exploration-timeline.git
   cd space-exploration-timeline
   npm install
   ```

2. **Environment**
   No environment variables are required. The site is fully static and has no API keys or backend.

3. **Run**
   ```bash
   npm run dev      # local dev server (http://localhost:5173)
   npm run build    # output static site to ./dist
   npm run preview  # preview the production build
   ```

## 4. Structure

```text
.
├── index.html              # App shell
├── vite.config.js          # Vite config (relative base for project pages)
├── public/
│   └── favicon.svg
├── src/
│   ├── main.js             # Rendering, scroll-driven scene, language switching
│   ├── style.css           # Editorial, near-monochrome styling
│   ├── data/
│   │   └── timeline.js     # Timeline content (en / ko / ja) — edit here
│   └── i18n/
│       └── ui.js           # UI strings + altitude-layer definitions
├── scripts/
│   ├── validate.mjs        # Dependency-free content integrity check
│   └── e2e.mjs             # Optional headless e2e check (needs Playwright)
└── .github/workflows/
    └── deploy.yml          # Build + deploy to GitHub Pages on push to main
```

**Editing the content** — All timeline entries live in
[`src/data/timeline.js`](src/data/timeline.js): each is a year plus a short
description in `en` / `ko` / `ja`. Only years that carry an event are listed; the
empty years in between are drawn automatically as the ruler. Interface strings and
the altitude layers are in [`src/i18n/ui.js`](src/i18n/ui.js).

**A note on accuracy** — The original list was used as the base, then checked and
corrected against multiple sources. For example, the V-2 first touched the *edge*
of space in October 1942 (~85 km) but only crossed the 100 km Kármán line with
flight **MW 18014** on 20 June 1944, so the two are shown as separate events;
"Starship begins operational flights" was removed from 2025, which was still a
flight-test year.

## 5. Info

- **License**: MIT
- **Deployment**: Automatic on push to `main` via GitHub Actions; GitHub Pages
  source is set to **GitHub Actions**. The relative base path (`base: './'`) lets
  it work from a project page without extra configuration.
- **Contact**: [JTech-CO on GitHub](https://github.com/JTech-CO)
