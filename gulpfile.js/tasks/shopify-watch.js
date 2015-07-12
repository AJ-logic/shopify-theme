var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/shopify'),
  credentials         = require('../config/shopifyCredentials');

// Shopifywatch
gulp.task('shopify:watch',['setWatch'], function() {
  return plugins.watch(config.watchFiles)

  // Check if files have changed
  .pipe(plugins.changed(config.watchFolder))

  // Add secret key, etc to gulp shopify upload
  .pipe(plugins.shopifyUpload(
    credentials.api_key,
    credentials.password,
    credentials.url,
    credentials.theme_id,
    config.options
  ))

  // Notify when uploaded
  .pipe(plugins.if(global.isWatching, plugins.notify(config.notify)));

});