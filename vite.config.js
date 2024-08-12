import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/curtain_website/',
  build: {
    outDir: 'dist' // or 'build' if you changed it as discussed earlier
  },
  plugins: [react()],
})
