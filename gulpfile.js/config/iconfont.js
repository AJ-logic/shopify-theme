var config = require('./')

module.exports = {
  source: [
    config.sourceAssets+'iconfont/**/*{eot,.svg,.ttf,.woff}',
  ],
  style: config.sourceAssets+'iconfont/style.css',
  ignore: config.sourceAssets+'iconfont/demo-files/demo.css',
  dest: config.destAssets
}