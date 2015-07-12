var config = require('./')

module.exports = {
  source: config.sourceAssets+'img/**/*',
  dest: config.destAssets,
  imagemin: {
    optimizationLevel: 3,
    progressive: true,
    interlaced: true
  }
}