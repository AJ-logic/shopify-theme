var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  credentials         = require('../config/shopifyCredentials').sc,
  config              = require('../config/shopify'),
  options             = { "basePath": config.dest };

// Shopifywatch
gulp.task('shopify:watch', function() {
  return plugins.watch(config.watchFiles)

  .pipe(plugins.changed(config.watchFiles))

  // Add secret key, etc to gulp shopify upload
  .pipe(plugins.shopifyUpload(
    credentials.api_key,
    credentials.password,
    credentials.url,
    credentials.theme_id,
    options
  ))

  // Notify when uploaded
  .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'upload task complete' })));

});