const { existsSync } = require("node:fs");
const tsConfigExists = existsSync("tsconfig.json");

/** @type {import('eslint').Linter.Config} */
module.exports = !tsConfigExists
  ? {}
  : {
      overrides: [
        {
          files: ["*.{ts,tsx,mts,cts}"],
          env: {
            es2021: true,
            node: true,
          },
          extends: ["plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
          parser: "@typescript-eslint/parser",
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            project: "./tsconfig.json",
          },
          plugins: ["@typescript-eslint"],
          settings: {
            "import/parsers": {
              [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
            },
          },
          rules: {
            "@typescript-eslint/explicit-function-return-type": [
              "error",
              {
                allowExpressions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
              },
            ],
            "@typescript-eslint/adjacent-overload-signatures": "error",
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/restrict-template-expressions": "error",
            "@typescript-eslint/restrict-plus-operands": "error",
            "@typescript-eslint/consistent-type-assertions": "error",
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
            "@typescript-eslint/consistent-generic-constructors": "error",
            "@typescript-eslint/consistent-indexed-object-style": "error",
            "@typescript-eslint/prefer-return-this-type": "error",
            "@typescript-eslint/prefer-reduce-type-parameter": "error",
            "@typescript-eslint/prefer-optional-chain": "error",
            "@typescript-eslint/no-confusing-void-expression": "error",
            "@typescript-eslint/no-confusing-non-null-assertion": "error",
            "@typescript-eslint/no-duplicate-type-constituents": "error",
            "@typescript-eslint/no-unsafe-assignment": "error",
            "@typescript-eslint/no-unsafe-argument": "error",
            "@typescript-eslint/no-unnecessary-type-arguments": "error",
            "@typescript-eslint/no-unnecessary-condition": "error",
            "@typescript-eslint/no-redundant-type-constituents": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
            "@typescript-eslint/no-mixed-enums": "error",
            "@typescript-eslint/member-ordering": "error",

            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
              "error",
              {
                args: "none",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
                destructuredArrayIgnorePattern: "^_",
              },
            ],
          },
        },
      ],
    };
