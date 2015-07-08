var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').copy;

// Copy files
gulp.task('copy', function() {

  // fonts and font icons
  gulp.src(config.font_src)
  .pipe(plugins.changed(config.font_build))
  .pipe(plugins.flatten())
  .pipe(gulp.dest(config.font_build));

  // Shopify config files
  gulp.src(config.config_src)
  .pipe(plugins.changed(config.config_build))
  .pipe(gulp.dest(config.config_build));

  // Untouched header scripts
  gulp.src(config.script_src)
  .pipe(plugins.changed(config.script_build))
  .pipe(gulp.dest(config.script_build));
});