import { defineConfig } from 'vite'
import { copyFileSync } from 'node:fs'

const spaFallback = () => ({
  name: 'spa-fallback',
  closeBundle() {
    // GitHub Pages serves this shell for direct links such as /kontakt.
    copyFileSync('dist/index.html', 'dist/404.html')
  },
})

export default defineConfig({
  // Relative production URLs prevent a white screen when the site is hosted
  // below a repository path, for example /seresas/ on GitHub Pages.
  base: './',
  plugins: [spaFallback()],
})
