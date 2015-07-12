var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/styles'),
  errorHandler        = require('../lib/errorHandler');

// Styles
gulp.task('styles', function() {
  return gulp.src(config.source)

  // Specify output style
  .pipe(plugins.sass(config.settings))

  // Catch errors
  .on('error', errorHandler)

  // Autoprefixer
  .pipe(plugins.autoprefixer(config.autoprefixer))

  // Rename to .css.liquid to use shopify liquid templates in css
  .pipe(plugins.rename(config.rename))

  // Distribute to build path
  .pipe(gulp.dest(config.dest))

  // Show notification
  .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'Styles task complete' })));
});