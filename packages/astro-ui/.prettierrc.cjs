module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  embeddedLanguageFormatting: 'off'
}
