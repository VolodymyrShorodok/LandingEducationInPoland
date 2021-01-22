'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/scss/*.scss', gulp.series('sass'));
});