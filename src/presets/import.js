/** @type {import('eslint').Linter.Config} */
module.exports = {
  // extends: ["plugin:import/typescript"],
  plugins: ["import"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    "import/no-duplicates": "error",
    "import/no-self-import": "error",
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "desc",
          orderImportKind: "asc",
        },
        "newlines-between": "always",
        warnOnUnassignedImports: true,
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        groups: [
          "type",
          "builtin",
          "external",
          ["parent", "sibling", "index", "internal"],
          "object",
        ],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.ts", "**/*.test.tsx"],
      },
    ],
  },
};
