'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename')

gulp.task('sass', function(){
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(concat('screen.css'))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', ['sass'] , function() {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});