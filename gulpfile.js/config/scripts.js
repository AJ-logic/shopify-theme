var config = require('./')

module.exports = {
  source: [
    config.sourceAssets+'js/vendor/*.js',
    config.sourceAssets+'js/partials/*.js',
    config.sourceAssets+'js/*.js'
  ],
  dest: config.destAssets,
  standalone: config.sourceAssets+'js/standalone/**/*{.js,.liquid}',
  concat: 'scripts.js',
  rename: {
    suffix: '.min'
  }
}