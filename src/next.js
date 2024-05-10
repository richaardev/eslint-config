/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", require.resolve("./react")],
};
