import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [react(), tailwind()],
  output: "hybrid",
  adapter: vercel({
    react: true
  })
});
