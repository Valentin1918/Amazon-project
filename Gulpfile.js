var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./project/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./project/assets/css/'));
});

gulp.task('watch',function() {
    gulp.watch('./project/assets/sass/**/*.scss',['sass']);
});
// Default Task
gulp.task('default', ['watch']);