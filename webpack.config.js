export const module = {
  rules: [
    // ... other rules omitted
    // this will apply to both plain `.scss` files
    // AND `<style lang="scss">` blocks in `.vue` files
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `$color: red;`,
            indentedSyntax: true,
            // sass-loader version >= 8
            sassOptions: {
              indentedSyntax: true
            }
          }
        }
      ]
    }
  ]
}
