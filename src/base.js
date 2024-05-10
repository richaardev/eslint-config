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
  rules: {
    quotes: ["error", "double"],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
  },
};
