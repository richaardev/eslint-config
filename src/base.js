/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: [".next", "build", "dist", "out"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
  extends: [
    "standard",
    require.resolve("./presets/import.js"),
    require.resolve("./presets/prettier.js"),
    require.resolve("./typescript.js"),
  ],
  plugins: ["only-warn"],
  rules: {
    quotes: ["error", "double"],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
    "sort-vars": ["error", { ignoreCase: true }],
    "no-await-in-loop": ["error"],
    "no-constructor-return": ["error"],
    "no-template-curly-in-string": ["error"],
  },
};
