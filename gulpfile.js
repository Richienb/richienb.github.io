var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
var connect = require('gulp-connect');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
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

gulp.task('ci', ['html', 'css', 'js']);
gulp.task('live', ['connect']);