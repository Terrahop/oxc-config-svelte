// oxlint-disable import/no-named-as-default-member
import pluginE18e from '@e18e/eslint-plugin'
import pluginCompat from 'eslint-plugin-compat'
import { defineConfig } from 'oxlint'
// import pluginPerfectionist from 'eslint-plugin-perfectionist'
import pluginRegexp from 'eslint-plugin-regexp'
import pluginSecurity from 'eslint-plugin-security'
import pluginSonarJs from 'eslint-plugin-sonarjs'
// import pluginStylistic from '@stylistic/eslint-plugin'

// oxlint-disable-next-line sort-keys, import/no-default-export
export default defineConfig({
  options: {
    denyWarnings: false,
    maxWarnings: 100,
    reportUnusedDisableDirectives: 'error',
    typeAware: true,
    typeCheck: true
  },
  categories: {
    correctness: 'error',
    pedantic: 'off',
    perf: 'error',
    restriction: 'error',
    style: 'error',
    suspicious: 'error',
  },
  env: {
    browser: true,
    builtin: true,
    es2024: true,
    node: true,
  },
  globals: {
    document: 'readonly',
    window: 'readonly',
  },
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'jsdoc', 'node', 'promise'],
  jsPlugins: [
    'eslint-plugin-perfectionist',
    '@e18e/eslint-plugin',
    'eslint-plugin-regexp',
    'eslint-plugin-sonarjs',
    '@stylistic/eslint-plugin',
    'eslint-plugin-security',
    'eslint-plugin-compat',
  ],
  extends: [],
  rules: {
    ...pluginCompat.configs['flat/recommended'].rules,
    // ...pluginPerfectionist.configs['recommended-natural'].rules,
    ...pluginSecurity.configs.recommended.rules,
    ...pluginSonarJs.configs.recommended.rules,
    ...pluginE18e.configs.recommended.rules,
    ...pluginRegexp.configs.recommended.rules,

    'capitalized-comments': 'off',
    eqeqeq: ['error', 'always'],
    'eslint/id-length': ['error', { checkGeneric: false, exceptions: ['x', 'y', 'z', 'v', '_'] }],
    'id-length': 'off',
    'import/consistent-type-specifier-style': 'off',
    'import/exports-last': 'off',
    'import/group-exports': 'off',
    'import/no-cycle': 'warn',
    'import/no-named-export': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/prefer-default-export': 'off',
    'init-declarations': 'off',
    'max-statements': 'off',
    'new-cap': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-continue': 'off',
    'no-lonely-if': 'error',
    'no-magic-numbers': 'off',
    'no-ternary': 'off',
    'no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'no-undefined': 'off',
    'no-void': 'off',
    'oxc/no-async-await': 'off',
    'oxc/no-optional-chaining': 'off',
    'oxc/no-rest-spread-properties': 'off',
    'sonarjs/no-redundant-jump': 'off',
    'sonarjs/redundant-type-aliases': 'off',
    'sonarjs/todo-tag': 'warn',
    'sonarjs/void-use': 'off',
    'sort-imports': 'off',
    'sort-keys': 'warn',
    'typescript/array-type': ['error', { default: 'array-simple' }],
    'typescript/consistent-return': 'off', // Favor typescripts noImplicitReturns flag instead
    'typescript/explicit-function-return-type': 'off',
    'typescript/explicit-module-boundary-types': 'off',
    'typescript/no-empty-interface': 'off',
    'typescript/no-empty-object-type': 'off',
    'typescript/no-unsafe-type-assertion': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
  },
  overrides: [
    {
      files: ['**/*.config.{js,ts,cjs,mjs}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.{test.ts,test.js,test.tsx,stories.tsx}', '**/types.ts', '**/test/*'],
      plugins: ['vitest'],
    },
    {
      files: ['**/*.svelte'],
      rules: {
        'import/no-named-export': 'off',
        'import/unambiguous': 'off',

        'no-unassigned-vars': 'off', // Won't work with svelte for now...
        'prefer-const': 'off', // Won't work with svelte for now...

        'sonarjs/unused-import': 'off',

        // Enforce pascal case for svelte files, ignore sveltekit's special files,
        'unicorn/filename-case': ['error', { case: 'pascalCase', ignore: [/^\+.*\.svelte$/] }],
      },
    },
  ],
})
