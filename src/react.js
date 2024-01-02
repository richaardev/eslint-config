/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    require.resolve("./base"),
    require.resolve("./typescript"),
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    "react/no-did-update-set-state": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unknown-property": "error",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
