module.exports = {
  extends: [
    'next',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'tailwindcss'],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'no-unused-vars': 'error',
    'jsx-props-no-spreading': 'off',
    'import/no-anonymous-default-export': 'off',
  },
};
