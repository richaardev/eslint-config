/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true
  },
  extends: [
    require.resolve("./base"),
  ],
  rules: {},
};
