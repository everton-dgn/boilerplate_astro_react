import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [react()],
  output: "server",
  adapter: vercel({ react: true })
});
