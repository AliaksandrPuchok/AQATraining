import globals from "globals"
import pluginJs from "@eslint/js"
import 'core-js/actual/structured-clone.js'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "constructor-super": "off",
      'no-undef': 'warn',
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-console': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
      'prefer-template': 'error',
      'space-before-function-paren': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'no-lonely-if': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'expression', next: 'expression' },
        { blankLine: 'always', prev: 'expression', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: 'expression' },
      ],
    }
  }
]
