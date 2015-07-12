var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/shopify'),
  credentials         = require('../config/shopifyCredentials');

// Shopifywatch
gulp.task('shopify:upload', function() {
  return gulp.src(config.watchFiles)

  // Add secret key, etc to gulp shopify upload
  .pipe(plugins.shopifyUpload(
    credentials.api_key,
    credentials.password,
    credentials.url,
    credentials.theme_id,
    config.options
  ));
});