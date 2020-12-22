module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-nested'),
      require('autoprefixer'),
      // require('cssnano')({
      //   preset: 'default',
      // }),
      require('@fullhuman/postcss-purgecss')({
          content: [
              'index.html',
              '**/*.html'
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
    ]
  }