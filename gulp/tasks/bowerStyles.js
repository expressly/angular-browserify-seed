'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');

var sassOptions = {
    style: 'compressed', 
    'sourcemap=none': true 
}

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = gulp.task('bowerStyles', function () {
  return gulp.src(config.paths.src.bowerStyles)
    .pipe(concat('vendor.css'))
    .pipe(gulpif(release, rename(config.filenames.release.bowerStyles), rename(config.filenames.build.bowerStyles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
