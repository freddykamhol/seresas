import { defineConfig } from 'vite'

export default defineConfig({
  // Relative production URLs prevent a white screen when the site is hosted
  // below a repository path, for example /seresas/ on GitHub Pages.
  base: './',
})
