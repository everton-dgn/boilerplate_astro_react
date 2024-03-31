import type { Config } from 'tailwindcss'
import eleganceUIUtilities from 'eleganceui-tailwind-utilities'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,astro}',
    './src/pages/**/*.{js,ts,jsx,tsx,astro}',
    './src/layouts/**/*.{js,ts,jsx,tsx,astro}'
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-poppins)'
    },
    extend: {}
  },
  plugins: [...eleganceUIUtilities]
}

export default config
