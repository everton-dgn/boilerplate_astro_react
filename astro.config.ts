import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  security: {
    checkOrigin: true
  },
  publicDir: 'public',
  // site: 'https://example.com',
  prefetch: {
    prefetchAll: false
  },
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [react()],
  output: "hybrid",
  adapter: vercel({
    imageService: true,
    isr: true,
    edgeMiddleware: true
  })
})
