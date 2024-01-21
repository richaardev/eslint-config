/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        usePrettierrc: true,
        printWidth: 120,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        quoteProps: "as-needed",
        arrowParens: "always",
        bracketSpacing: true,
        semi: true,
        endOfLine: "auto",
      },
    ],
  },
};
