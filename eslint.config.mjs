// @ts-check

import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// even though default export works, ts doesn't like it (see https://github.com/import-js/eslint-plugin-import/issues/3133)
import * as importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { languageOptions: { globals: globals.node } },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin, // Add this line
    },
    rules: {
      'simple-import-sort/exports': 'off',
      'simple-import-sort/imports': 'error',
      'no-case-declarations': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'import/extensions': [
        'error',
        {
          js: 'never',
          jsx: 'never',
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  prettier,
);
