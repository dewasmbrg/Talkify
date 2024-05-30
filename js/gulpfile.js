const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src('css/slider.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('css/*.less', gulp.series('less'));
});

gulp.task('default', gulp.series('less', 'watch'));
