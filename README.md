# Space Exploration Timeline

An educational, **bottom-to-top** scrolling timeline of space exploration. The
page opens at the very bottom — humanity at ground level, the earliest rockets
and astronomers — and as you scroll **up** (mouse wheel or the ↑ arrow key) you
rise through the atmosphere into deep space, following roughly seven centuries of
reaching upward, all the way to Artemis II.

The default language is **English**, with **한국어** and **日本語** available from
the top bar.

## How it works

- The vertical axis is **time** (a continuous ruler of years, with events
  attached). Newest events are at the top, oldest at the bottom.
- The **background** uses altitude as a metaphor for time: it tracks roughly how
  high humanity had reached at each point, rising from a warm dawn horizon at
  ground level, through the atmosphere, to deep space — with a faint starfield
  and the thin blue limb of Earth fading in once you cross into orbit.
- A small fixed **read-out** (bottom-left) names the layer you are passing
  through — Troposphere, Stratosphere, the Kármán line (the edge of space), low
  Earth orbit, the Moon, deep space — and the year in view.
- Four markers in the timeline note the real altitude frontiers humanity crossed:
  the Kármán line (1944), orbit (1957), the Moon (1969) and interstellar space
  (2012).

## Tech

Plain [Vite](https://vitejs.dev/) + vanilla JavaScript. No framework, no runtime
dependencies — it builds to fully static files, ideal for GitHub Pages or any
static host.

```bash
npm install      # install Vite
npm run dev      # local dev server (http://localhost:5173)
npm run build    # output static site to ./dist
npm run preview  # preview the production build
```

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and publishes `dist/` on every
push to `main`. In your repository, go to **Settings → Pages → Build and
deployment → Source** and choose **GitHub Actions**. The site uses a relative
base path, so it works from a project page (e.g.
`https://<user>.github.io/<repo>/`) without further configuration.

## Editing the content

All timeline content lives in [`src/data/timeline.js`](src/data/timeline.js) —
each entry is a year plus a short description in `en` / `ko` / `ja`. Only years
that carry an event are listed; the empty years in between are drawn
automatically as the ruler. Interface strings and the altitude layers are in
[`src/i18n/ui.js`](src/i18n/ui.js).

## A note on accuracy

The original list was used as the base, then checked and corrected against
multiple sources. Notable corrections: the V-2 first touched the *edge* of space
in October 1942 (~85 km) but only crossed the 100 km Kármán line with flight
**MW 18014** on 20 June 1944; "Starship begins operational flights" was removed
from 2025, which was still a flight-test year. Recent firsts were added (e.g.
Chang'e 6's far-side sample return in 2024, Fram2's first crewed polar orbit in
2025), and 2026 reflects Artemis II's completed crewed lunar flyby.
