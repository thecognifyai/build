import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  plugins: [
    remix({
      ssr: true,
      basename: "/"
    }),
    tsconfigPaths()
  ]
});
