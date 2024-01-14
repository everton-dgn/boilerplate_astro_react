import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    coverage: {
      provider: 'v8'
    },
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
    testTransformMode: { web: ["/\.tsx?$/"] },
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/playwright/**'],
    deps: {
      optimizer: {
        web: {
          include: ['react']
        }
      }
    },
  },
  resolve: {
    conditions: ['development', 'browser'],
  }
})
