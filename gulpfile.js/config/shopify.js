var config = require('./')

module.exports = {
  watchFiles: config.dest+'+(assets|layout|config|snippets|templates|locales)/**',
  watchFolder: config.dest,
  options: {
    "basePath": config.dest
  },
  notify: {
    message: 'upload task complete'
  }
}