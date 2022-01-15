module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': ['error', { singleQuote: true }]
  }
};
