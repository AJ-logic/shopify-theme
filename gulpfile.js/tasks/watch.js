var
  gulp                    = require('gulp'),
  config                  = require('../config/index'),
  templates               = require('../config/templates'),
  styles                  = require('../config/styles'),
  scripts                 = require('../config/scripts'),
  copy                    = require('../config/copy'),
  iconfont                = require('../config/iconfont'),
  images                  = require('../config/images'),
  plugins                 = require('gulp-load-plugins')();

// Watch
gulp.task('watch', ['setWatch', 'templates'], function() {

  plugins.watch(templates.source, function() { gulp.start('templates'); });
  plugins.watch(styles.base, function() { gulp.start('styles'); });
  plugins.watch(scripts.source, function() { gulp.start('scripts'); });
  plugins.watch(scripts.standalone, function() { gulp.start('scripts:standalone'); });
  plugins.watch(images.source, function() { gulp.start('images'); });
  plugins.watch(iconfont.source, function() { gulp.start('iconfont'); });
  plugins.watch(copy.configSource, function() { gulp.start('copy'); });

  gulp.start('shopify:watch');

});