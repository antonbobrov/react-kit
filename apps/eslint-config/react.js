require('@rushstack/eslint-patch/modern-module-resolution');

const baseConfig = require('./index');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:promise/recommended',
    'prettier',
  ],
  rules: {
    ...baseConfig.rules,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/require-default-props': 0,
    'react/display-name': 2,
    "react/prop-types": 0,
    'react/jsx-newline': 'error',
    "react-hooks/exhaustive-deps": ["error", {
      "additionalHooks": "(useDebouncedEffect|useOnPageLoad|useOnResize)"
    }]
  },
};
