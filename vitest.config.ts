import { getViteConfig } from 'astro/config'

export default getViteConfig({
  test: {
    deps: {
      optimizer: {
        web: {
          include: ['react']
        }
      }
    },
    coverage: {
      provider: 'v8'
    },
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
    testTransformMode: { web: ["/\.tsx?$/"] },
    include: ['src/**/__tests__/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/playwright/**'],
  },
  resolve: {
    conditions: ['development', 'browser'],
  }
})
