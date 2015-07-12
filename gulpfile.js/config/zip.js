var config = require('./')

module.exports = {
  source: config.dest+'**/*',
  dest: './',
  name: config.themeName + '.zip'
}