module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'], // Enforce single quotes
    semi: ['error', 'always'], // Ensure semicolons
  },
  env: {
    browser: true,
    es6: true,
  },
};
