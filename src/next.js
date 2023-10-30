/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    require.resolve("./base"),
    require.resolve("./react"),
  ],
  rules: {},
};

