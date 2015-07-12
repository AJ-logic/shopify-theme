var
  gulp                = require('gulp'),
  config              = require('../config').watch;
  iconfont            = require('../config').iconfont;
// Watch
gulp.task('watch', ['setWatch', 'templates'], function() {

  // Watch .scss files
  gulp.watch(config.source.styles, ['styles']);

  // Watch .jade files
  gulp.watch(config.source.templates, ['templates']);

  // Watch image folder
  gulp.watch(config.source.images, ['images']);

  // Watch .js files
  gulp.watch(config.source.scripts, ['scripts']);

  // Copy
  gulp.watch(config.source.copy, ['copy']);

  gulp.watch(iconfont.font_src, ['iconfont']);

  gulp.start('shopifywatch');

});