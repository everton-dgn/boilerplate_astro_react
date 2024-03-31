/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  semi: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  endOfLine: 'lf'
}
