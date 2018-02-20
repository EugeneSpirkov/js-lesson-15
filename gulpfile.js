var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


//Задача для сборки
gulp.task('sass', function () {
  return gulp.src('src/style/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


//Задача, после запуска которой, gulp будет следить за изменениями файлов
gulp.task('watch', ['sass', 'scripts'], function () {
  gulp.watch('src/style/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['scripts']);
});