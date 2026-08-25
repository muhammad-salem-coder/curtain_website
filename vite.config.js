import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /curtain_website/, so the production
// build - and `vite preview`, which serves that build - need that prefix.
// `vite dev` keeps '/' so local URLs stay clean.
// If a custom domain is added later, change PROD_BASE to '/'.
const PROD_BASE = '/curtain_website/'

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? PROD_BASE : '/',
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
}))
