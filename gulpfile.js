const gulp = require('gulp');
const webpack = require('gulp-webpack');
const tslint = require('gulp-tslint');
const exec = require('gulp-exec');
const del = require('del');

gulp.task('tslint', () => {
    let format = {
        formatter: "prose",
    };

    return gulp.src(['./src/**/*.tsx'])
        .pipe(tslint(format))
        .pipe(tslint.report());
});

gulp.task('webpack', ['clean', 'tslint'], function () {
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

gulp.task('watch', () => {
    return gulp.watch(['./src/**/*.tsx', 'src/assets/**'], ['build']);
});
