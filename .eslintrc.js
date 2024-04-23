module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'off',
    'vue/prop-name-casing': ['error', 'camelCase'], // Проверка стиля именования попсов
    'vue/component-name-in-template-casing': ['error', 'kebab-case'], // Проверка стиля именования компонентов в HTML
    'vue/match-component-import-name': 'error' // Проверка стиля импорта компонентов в HTML
  }
}
