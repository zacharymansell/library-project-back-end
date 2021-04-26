module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  plugins: [
    'jest',
  ],
  extends: [
    'airbnb-base',
    'plugin:jest/style',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
  },
};
