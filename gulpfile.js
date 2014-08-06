var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task('hoge', function() {
  console.log('Hoge World!');
});

gulp.task('clean', function() {
  gulp.src('build')
    .pipe(clean());
});

gulp.task('watch', function() {
  gulp.watch('css/*', ['cssmin']);
  gulp.watch('js/*', ['jsmin']);
});

gulp.task('cssmin', function() {
  gulp.src('css/*.css')
    .pipe(plumber())
    .pipe(cssmin())
    .pipe(gulp.dest('build/css'));
});

gulp.task('jsmin', function() {
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('default', function() {
  gulp.run(['clean', 'watch']);
});
