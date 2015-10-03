'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['sass:watch'], function() {
    browserSync.init({
        server: {
            baseDir: ["./"]
        },
        files: ["*.html", "assets/styles/app/*.css", "assets/scripts/app/*.js"]
    });
});


gulp.task('sass', function() {
    gulp.src('./assets/styles/app/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles/app'))
        .pipe(notify({
            message: 'task complete'
        }));
});

gulp.task('sass:watch', function() {
    gulp.watch('./assets/styles/app/*.scss', ['sass']);
});
