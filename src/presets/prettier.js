/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        usePrettierrc: true,
        printWidth: 90,
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
