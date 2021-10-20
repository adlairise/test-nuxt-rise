module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: `@babel/eslint-parser`,
    requireConfigFile: false
  },
  extends: [
    `@nuxtjs`,
    `plugin:nuxt/recommended`
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': 0,
    quotes: [1, `backtick`],
    'comma-dangle': 0,
    'vue/no-v-html': 0,
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0
  }
}
