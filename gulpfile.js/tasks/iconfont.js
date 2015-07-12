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

  // Flatten folder structure
  .pipe(plugins.flatten())

  // Distribute
  .pipe(gulp.dest(config.font_build));

  // Start iconfont style.css replace task
  gulp.src(config.font_style)

  // Replace reference to 'fonts/' with nothing
  .pipe(plugins.replace('fonts/', ''))

  // Distribute
  .pipe(gulp.dest(config.font_build));

});