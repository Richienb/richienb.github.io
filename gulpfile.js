var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
var connect = require('gulp-connect');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');

gulp.task('svg', function () {
    return gulp.src('*')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/images'));
});
 
gulp.task('image', () =>
    gulp.src('resources/*.{jpg,png,gif}"')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/resources'))
);
 
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
 
gulp.task('css', function () {
    gulp.src('*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
  gulp.src('*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('dist'))
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('ci', ['html', 'css', 'js', 'image', 'svg']);
gulp.task('live', ['connect']);
