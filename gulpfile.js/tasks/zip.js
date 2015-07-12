var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/zip');

gulp.task('zip', function () {
  return gulp.src(config.source)
    .pipe(plugins.zip(config.name))
    .pipe(gulp.dest(config.dest));
});