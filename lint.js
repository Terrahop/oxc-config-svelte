import { defineConfig } from 'oxlint'

// oxlint-disable-next-line sort-keys, import/no-default-export
export default defineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
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
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'jsdoc', 'node', 'promise', 'vitest'],
  jsPlugins: [
    'eslint-plugin-perfectionist',
    '@e18e/eslint-plugin',
    'eslint-plugin-regexp',
    'eslint-plugin-sonarjs',
    '@stylistic/eslint-plugin',
    'eslint-plugin-security',
    'eslint-plugin-compat',
    'eslint-plugin-prefer-let',
  ],
  rules: {
    'default-case-last': 'error',
    eqeqeq: ['error', 'always'],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-unassigned-import': 'off',
    'no-array-constructor': 'error',
    'no-case-declarations': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-fallthrough': 'error',
    'no-lonely-if': 'error',
    'no-new-wrappers': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error', /////////////////////////////////////////////////////////////////
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        vars: 'all',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        variables: false,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-return': 'error',
    'no-var': 'warn',
    'node/global-require': 'error',
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-let/prefer-let': [
      'error',
      {
        forceUpperCaseConst: true,
      },
    ],
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'symbol-description': 'error',
    'typescript/consistent-return': 'off',
  },
  overrides: [
    {
      files: ['**/*.config.{js,ts,cjs,mjs}'],
      rules: {
        'import/no-default-export': 'off'
      },
    },
    {
      files: ['**/types.ts'],
      rules: {
        'no-console': 'off',
        'typescript/no-floating-promises': 'off',
      },
    },
  ],
})
