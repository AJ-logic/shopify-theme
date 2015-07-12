var
    gulp                = require('gulp'),
    del                 = require('del'),
    config              = require('../config/index');

// Clean out build
gulp.task('clean', function(cb) {
  del(config.dest, cb);
});