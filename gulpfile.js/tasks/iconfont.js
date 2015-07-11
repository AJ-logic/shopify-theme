var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').iconfont;

// Copy files
gulp.task('iconfont', function() {

  // fonts and font icons
  gulp.src(config.font_src)

  // Only if changed
  .pipe(plugins.changed(config.font_build))

  // Flatten
  .pipe(plugins.flatten())

  // Distribute
  .pipe(gulp.dest(config.font_build));

  gulp.src(config.font_style)
  .pipe(plugins.replace('fonts/', ''))
  .pipe(gulp.dest(config.font_build));

});