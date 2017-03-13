const gulp = require('gulp');
const webpack = require('gulp-webpack');
const exec = require('gulp-exec');
const del = require('del');

gulp.task('webpack', ['clean'], function () {
  return webpack(require('./webpack.config'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['webpack'], function() {
  return gulp.src('./src/assets/**')
    .pipe(gulp.dest('./dist'))
    .pipe(exec('fixpack'));
});

gulp.task('clean', function() {
  return del('dist');
})