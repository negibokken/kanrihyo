const gulp = require('gulp');
const webpack = require('gulp-webpack');
const tslint = require('gulp-tslint');
const exec = require('gulp-exec');
const del = require('del');
const ps = require('child_process').exec

gulp.task('tslint', () => {
    let format = {
        formatter: "prose",
    };

    return gulp.src(['./src/**/*.tsx'])
        .pipe(tslint(format))
        .pipe(tslint.report());
});

gulp.task('webpack', ['clean', 'tslint'], function () {
  const command = 'webpack'
  return ps(command, (err, stdout, stderr) => {
      console.log(stdout + stderr)
  });
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
