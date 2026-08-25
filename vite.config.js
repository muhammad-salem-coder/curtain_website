import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production is alamasidreamcurtains.com (DigitalOcean App Platform, auto-deployed
// from main), which serves from the domain root - so the base must be '/'.
// Do NOT set this to '/curtain_website/': that is only correct for the secondary
// GitHub Pages copy, and using it here 404s every asset on the live domain.
const PROD_BASE = '/'

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? PROD_BASE : '/',
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
}))
