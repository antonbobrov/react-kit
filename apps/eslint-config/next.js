require('@rushstack/eslint-patch/modern-module-resolution');

const baseConfig = require('./react');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: [
    'airbnb',
    'next',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:promise/recommended',
    'prettier',
  ],
};
