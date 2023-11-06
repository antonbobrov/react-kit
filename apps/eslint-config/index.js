require('@rushstack/eslint-patch/modern-module-resolution');

const fs = require('fs');
const path = require('path');

const tsConigPath = path.resolve(__dirname, 'tsconfig.json');

const tsConfig = fs.existsSync(tsConigPath)
  ? path.resolve(tsConigPath)
  : undefined;

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:promise/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    project: tsConfig,
  },
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'typeAlias', format: ['PascalCase'], prefix: ['T'] },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
        filter: {
          regex: '^(Window)$',
          match: false,
        },
      },
      { selector: 'enum', format: ['PascalCase'], prefix: ['E'] },
      {
        selector: ['variable', 'function', 'parameter'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: ['variable'],
        types: ['boolean'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        prefix: ['is', 'IS', 'Is', 'has', 'HAS', 'Has', 'can', 'CAN', 'Can', 'should', 'SHOULD', 'Should', 'will', 'WILL', 'Will'],
      },
    ],
    "@typescript-eslint/no-empty-function": 0,
    'import/prefer-default-export': 0,
    'newline-before-return': 'error',
    'promise/always-return': 0,
    'no-underscore-dangle': [
      'error',
      { allowAfterThis: true, allowAfterSuper: true },
    ],
  },
};
