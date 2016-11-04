<img src="http://coderslab.pl/wp-content/uploads/2016/03/logo-v2.png" align="right" style="width:150px; margin-top:45px"/>

# Sass/RWD - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.

#### 1. Jak powinien wygladać gulpfile ?

```JavaScript

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
});
```

#### 2. Jak powinna wyglądać struktura plików projektu ?

```
[folder] css
[folder] images
[folder] js
[folder] sass
         .gitignore
         gulpfile.js
         index.html
```
Strukura folderu Sass
```
[folder] sass
    [folder] modules
                _all.scss
                _colors.scss
                _mixins.scss
    [folder] partials
                _footer.scss
                _header.scss
                _base.scss
    main.scss
```


#### 2. Ajax
