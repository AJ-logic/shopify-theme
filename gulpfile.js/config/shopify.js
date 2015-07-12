var config = require('./')

module.exports = {
  watchFiles: config.dest + '+(assets|layout|config|snippets|templates|locales)/**',
  watchFolder: config.dest
}