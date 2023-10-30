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
    "no-console": ["error"],
    "no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "caughtErrorsIgnorePattern": "^_",
      "destructuredArrayIgnorePattern": "^_",
    }]
  }
};
