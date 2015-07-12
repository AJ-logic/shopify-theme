var config = require('./')

module.exports = {
  source: [
    config.source+'layout/*.jade',
    config.source+'templates/**/*.jade',
    config.source+'snippets/**/*.jade'
  ],
  dest: config.dest,
  base: config.source,
  rename: {
    extname: ".liquid"
  }
}