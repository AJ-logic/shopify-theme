var config = require('./');

module.exports = {
  source: config.sourceAssets+'img/**/*.svg',
  dest: config.dest+'snippets',
  svg: {
    mode                    : {
        inline              : true,
        symbol              : true
    }
  },
  rename: {
    suffic: ".svg",
    extname: ".liquid"
  }
}