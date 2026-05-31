import { defineConfig } from 'vite'

// Relative base so the built site works from any static host,
// including a GitHub Pages project page (e.g. /Space-exploration-timeline/).
export default defineConfig({
  base: './',
  build: {
    target: 'es2018',
    outDir: 'dist',
  },
})
