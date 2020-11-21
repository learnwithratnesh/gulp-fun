var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass())
      .pipe(concat('output.css'))
      .pipe(gulp.dest('dist/app/css'),{append:true})
  })

  gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', ['sass']); 
    // Other watchers
  })