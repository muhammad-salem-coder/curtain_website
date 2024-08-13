import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Change this if you're serving from the root
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
})