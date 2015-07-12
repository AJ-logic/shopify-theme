var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/iconfont');

// Copy files
gulp.task('iconfont', function() {

  // fonts and font icons
  gulp.src(config.source)

  // Only if changed
  .pipe(plugins.changed(config.dest))

  // Flatten folder structure
  .pipe(plugins.flatten())

  // Distribute
  .pipe(gulp.dest(config.dest));

  // Start iconfont style.css replace task
  gulp.src(config.style)

  // Replace reference to 'fonts/' with nothing
  .pipe(plugins.replace('fonts/', ''))

  // Distribute
  .pipe(gulp.dest(config.dest));

});