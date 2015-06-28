var
    gulp                = require('gulp'),
    config              = require('../config').copy;

// Copy files
gulp.task('copy', function() {

  // fonts and font icons
  gulp.src(config.font_src)
  .pipe(gulp.dest(config.font_build));

  // Shopify config files
  gulp.src(config.config_src)
  .pipe(gulp.dest(config.config_build));

  // Untouched header scripts
  gulp.src(config.script_src)
  .pipe(gulp.dest(config.script_build));
});