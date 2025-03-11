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
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    }
  },
  preview: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: true
  },
  base: '/',
})
