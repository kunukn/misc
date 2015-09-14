'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['sass:watch'], function() {
    browserSync.init({
        server: {
            baseDir: ["./"]
        },
        files: ["*.html", "assets/styles/app/*.css"]
    });
});


gulp.task('sass', function() {
    gulp.src('./assets/styles/app/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles/app'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./assets/styles/app/*.scss', ['sass']);
});


// --- postcss
require('es6-promise').polyfill();
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer-core');

gulp.task('css', function() {
    var processors = [
        autoprefixer({
            browsers: ['last 1 version']
        })
    ];
    return gulp.src('./assets/styles/app/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./assets/styles/postcss'));
});
