# `@anton.bobrov/eslint-config`

An ESLint configuration package that integrates Prettier and provides tailored setups for TypeScript, React, and Next.js.

### Links
- [Changelog](https://github.com/antonbobrov/react-kit/blob/develop/apps/eslint-config/CHANGELOG.md)

## Installation

To get started, install ESLint, Prettier, and the configuration package. Ensure the versions match those below:

```bash
npm i eslint@8.56.0 prettier@3.3.3 --save-dev
npm i "@anton.bobrov/eslint-config" --save-dev
```

## Usage

### Create a `.eslintrc.js` file:

```js
/** @type {import("eslint").Linter.Config} */
module.exports = {
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  // only for base config
  extends: ['@anton.bobrov/eslint-config'],
  // only for React
  extends: ['@anton.bobrov/eslint-config/react'],
  // only for Next.js
  extends: ['@anton.bobrov/eslint-config/next'],
};

```

### Create `tsconfig.eslint.json`:

```json
{
  "extends": "./tsconfig.json",
  "include": ["**/*.ts", "**/*.js", "**/*.tsx", "**/*.jsx", "./.eslintrc.js"]
}

```

### Create `prettier.config.js`:

```js
module.exports = require('@anton.bobrov/eslint-config/prettier');

```

### Create `.gitattributes`:

```
* text=auto eol=lf
```

### Create `.editorconfig`:

```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false
```

## License

This project is licensed under the terms of the
[MIT license](https://github.com/antonbobrov/react-kit/blob/develop/LICENSE).
