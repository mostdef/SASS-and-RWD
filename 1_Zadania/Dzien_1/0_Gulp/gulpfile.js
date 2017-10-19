//npm init
var gulp = require('gulp');  //npm install gulp --save
var sass = require('gulp-sass'); //npm install gulp-sass --save

gulp.task('sass', function() {
  return gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});
