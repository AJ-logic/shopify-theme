var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').shopifywatch,
    credentials         = require('../shopify-config').shopifyCredentials,
    options             = { "basePath": config.build };

// Shopifywatch
gulp.task('shopifywatch', function() {
  return plugins.watch(config.build_watch)

  .pipe(plugins.changed(config.build_watch))

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