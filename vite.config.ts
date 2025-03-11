import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build/client',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
})
