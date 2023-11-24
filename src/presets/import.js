/** @type {import('eslint').Linter.Config} */
module.exports = {
  // extends: ["plugin:import/typescript"],
  plugins: ["import"],
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  rules: {
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc"
        },
        "newlines-between": "always",
        warnOnUnassignedImports: true,
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "object"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "mjs": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.ts",
          "**/*.test.tsx"
        ]
      }
    ]
  }
};
