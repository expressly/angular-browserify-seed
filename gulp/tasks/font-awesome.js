'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');

module.exports = gulp.task('font-awesome', function () {
  return gulp.src(config.paths.src.fontAwesome)
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.fonts), gulp.dest(config.paths.dest.build.fonts)));
});
