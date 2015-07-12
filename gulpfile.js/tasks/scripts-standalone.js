var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/scripts');

gulp.task('scripts:standalone', function() {
  return gulp.src(config.standalone)

  // Only changed files
  .pipe(plugins.changed(config.dest))

  // Distribute
  .pipe(gulp.dest(config.dest));

});