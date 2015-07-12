var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config/copy');

// Copy files
gulp.task('copy', function() {
  return gulp.src(config.configSource)

  .pipe(plugins.changed(config.configDest))

  .pipe(gulp.dest(config.configDest));

});