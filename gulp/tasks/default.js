'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function () {
  if (release) {
    runSequence(
      'clean',
      ['index', 'bowerStyles', 'styles', 'images', 'assets', 'templates', 'lint', 'env'],
      'browserify'
      ['minify']
    );
  } else {
    runSequence(
      'clean',
      ['index', 'bowerStyles', 'styles', 'images', 'assets', 'templates', 'lint', 'env'],
      ['watchify', 'watch', 'serve']
    );
  }
});
