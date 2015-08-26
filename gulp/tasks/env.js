'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ngConfig = require('gulp-ng-config');

module.exports = gulp.task('env', function () {
    return gulp.src(config.paths.src.config)
        .pipe(ngConfig('expressly.config', {
            environment: staging ? 'staging' : (release ? 'production' : 'development'),
            createModule: true
        }))
        .pipe(uglify())
        .pipe(gulpif(release, rename(config.filenames.release.config), rename(config.filenames.build.config)))
        .pipe(gulpif(release, gulp.dest(config.paths.dest.release.server), gulp.dest(config.paths.dest.build.server)));
});
