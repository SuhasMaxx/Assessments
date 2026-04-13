module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {}
}