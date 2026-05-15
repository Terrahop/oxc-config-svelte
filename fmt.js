import { defineConfig } from 'oxfmt'

// oxlint-disable-next-line sort-keys, import/no-default-export
export default defineConfig({
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  ignorePatterns: ['node_modules', 'package-lock.json', 'pnpm-lock.yaml'],
  jsdoc: true,
  printWidth: 120,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  sortImports: {
    groups: [
      'side_effect',
      'side_effect_style',
      'style',
      ['builtin', 'external', 'unknown'],
      ['internal', 'parent', 'sibling', 'index'],
    ],
    internalPattern: `["~/", "@/", "$lib"]`,
    newlinesBetween: false,
    order: 'asc',
    partitionByComment: true,
  },
  sortPackageJson: true,
  sortTailwindcss: true,
  svelte: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
})
