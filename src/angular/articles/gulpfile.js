'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['sass:watch'], function() {
    browserSync.init({
        server: {
            baseDir: ["./"]
        },
        files: ["*.html", "templates/*.html", "templates/article-detail/*.html",
            "templates/frontpage/*.html", "assets/styles/app/*.css", "assets/scripts/app/*.js", "api/*.json"
        ]
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
