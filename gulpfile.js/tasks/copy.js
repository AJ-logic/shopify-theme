var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').copy;

// Copy files
gulp.task('copy', function() {

  // Shopify config files
  gulp.src(config.config_src)
  .pipe(plugins.changed(config.config_build))
  .pipe(gulp.dest(config.config_build));

  // Untouched header scripts
  gulp.src(config.script_src)
  .pipe(plugins.changed(config.script_build))
  .pipe(gulp.dest(config.script_build));
});