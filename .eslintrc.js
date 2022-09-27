module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 2020,
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'jest',
    'testing-library',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
  },
}
