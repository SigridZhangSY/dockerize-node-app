var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var serve = require('gulp-serve');

const reload = browserSync.reload;

const tasks = {
    development: 'development',
    production: 'production'
};

gulp.task(tasks.development, ['sass'], function() {
    browserSync.init({
        server: "./",
        open: false
    });
    gulp.watch("src/*.scss", ['sass']);
    gulp.watch("index.html").on('change', reload);
});

gulp.task(tasks.production, ['sasspro'], serve({
        root: './',
        port: 3000
    }));

gulp.task('sasspro', function() {
    return gulp.src("src/*.scss")
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist"));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/*.scss")
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

gulp.task('default', [tasks[process.env.NODE_ENV] || 'development']);
// gulp.task('default', ['serve']);