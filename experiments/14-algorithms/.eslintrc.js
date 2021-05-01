module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
