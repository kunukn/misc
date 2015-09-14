'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
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
            browsers: ['last 1 version']
        }),
        writesvg({ /* options */ })
    ];

    gulp.src('./assets/styles/app/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./assets/styles/app'));
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
