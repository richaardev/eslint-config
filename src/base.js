const PRESETS = ["import", "prettier"].map((preset) =>
  require.resolve(`./presets/${preset}`),
);
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "standard",
    ...PRESETS,
  ],
  rules: {
    "no-console": ["error", {
      allow: ["warn", "error"]
    }],
    "no-unused-vars": ["error", {
      "varsIgnorePattern": "^_",
      "caughtErrorsIgnorePattern": "^_",
      "destructuredArrayIgnorePattern": "^_",
    }],
    "sort-imports": ["error", {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      allowSeparatedGroups: true,
    }],
    "sort-vars": ["error", { "ignoreCase": true }],
    "no-await-in-loop": ["error"],
    "no-constructor-return": ["error"],
    "no-template-curly-in-string": ["error"],
  }
};
