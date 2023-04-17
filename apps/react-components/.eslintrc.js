/** @type{import("eslint").Linter.Config} */
module.exports = {
  extends: ['@anton.bobrov/eslint-config/react'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: ['node_modules/**', 'lib/**', 'storybook-static/**'],
};
