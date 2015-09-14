'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

// --- postcss
require('es6-promise').polyfill();
var postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    writesvg = require('postcss-write-svg');

gulp.task('default', ['sass:watch'], function() {
    browserSync.init({
        server: {
            baseDir: ["./"]
        },
        files: ["*.html", "assets/styles/app/*.css"]
    });
});

gulp.task('sass', function() {
    var processors = [
        autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
        }),
        writesvg({ /* options */ })
    ];

    gulp.src('./assets/styles/app/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./assets/styles/app'))
        .pipe(notify({
            message: 'postcss task complete'
        }));
});

gulp.task('sass:watch', function() {
    gulp.watch('./assets/styles/app/*.scss', ['sass']);
});


// gulp.task('postcss', function() {
//     var processors = [
//         autoprefixer({
//             browsers: ['last 1 version']
//         }),
//         writesvg({  options  })
//     ];
//     return gulp.src('./assets/styles/app/*.css')
//         .pipe(postcss(processors))
//         .pipe(gulp.dest('./assets/styles/postcss'));
// });
