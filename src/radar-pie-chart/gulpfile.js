'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['watch'], function() {
    browserSync.init({
        server: {
            baseDir: ["./"]
        },
        port: 3003,
        files: ["*.html", "assets/styles/app/*.css", "assets/scripts/app/*.js"]
    });
});


gulp.task('sass', function() {
    gulp.src('./assets/styles/app/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles/app'))
        .pipe(notify({
            message: 'sass task complete'
        }));
});

gulp.task('watch', function() {
    gulp.watch('./assets/styles/app/*.scss', ['sass']);
});