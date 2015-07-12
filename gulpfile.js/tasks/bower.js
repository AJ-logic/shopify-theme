var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/index')

gulp.task('bower', function() {
  return plugins.bower()
    .pipe(gulp.dest(config.bowerComponents));
});
