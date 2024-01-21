/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    require.resolve("./base"),
    require.resolve("./react"),
    "next/core-web-vitals",
  ],
  rules: {},
};
