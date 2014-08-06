var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');

gulp.task('hoge', function() {
  console.log('Hoge World!');
});

gulp.task('clean', function() {
  gulp.src('build')
    .pipe(clean());
});

gulp.task('watch', function() {
  gulp.watch('css/*', ['deploy']);
});

gulp.task('deploy', function() {
  gulp.src('css/*.css')
    .pipe(plumber())
    .pipe(cssmin())
    .pipe(gulp.dest('build/css'));
});

gulp.task('default', function() {
  gulp.run(['clean', 'watch']);
});
