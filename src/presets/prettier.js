/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        quoteProps: "as-needed",
        bracketSpacing: true,
        endOfLine: "auto",
        semi: true,
      },
    ],
  },
};
