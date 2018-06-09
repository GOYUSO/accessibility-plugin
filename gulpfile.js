import gulp from 'gulp';
import sass from 'gulp-sass';
import validator from 'gulp-html';


function html() {
    return gulp.src('src/index.html')
        .pipe(validator())
        .pipe(gulp.dest('dist/'));
}

function scss() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
}

function ts() {

}



gulp.task('html', html);
gulp.task('scss', scss);
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
gulp.task('ts'), ts();