"use strict";
var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

const SOURCES = {
  css: [
    './bower_components/foundation/css/normalize.css',
    './bower_components/foundation/css/foundation.css',
    './css/kulor.css'
  ]
}

gulp.task('css', function() {
  gulp.src(SOURCES.css)
    .pipe(concat('kulor.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css']);
