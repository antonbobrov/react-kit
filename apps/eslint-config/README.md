# Eslint config for React projects

## Installation

```bash
npm i "@anton.bobrov/eslint-config" --save-dev
```

## Usage

### .eslintrc.js

```js
/** @type {import("eslint").Linter.Config} */
module.exports = {
  // base config
  extends: ['@anton.bobrov/eslint-config'],
  // or for React
  extends: ['@anton.bobrov/eslint-config/react'],
  // or for Next.js
  extends: ['@anton.bobrov/eslint-config/next'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};

```

### tsconfig.eslint.json

```json
{
  "extends": "./tsconfig.json",
  "include": ["**/*.ts", "**/*.js", "**/*.tsx", "**/*.jsx", "./.eslintrc.js"]
}

```

### prettier.config.js

```js
module.exports = require('@anton.bobrov/eslint-config/prettier');

```