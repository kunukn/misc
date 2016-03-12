'use strict';

var paths = {
    babel: {
        from: './assets/scripts/app-es6/*-es6.js',
        to: './assets/scripts/app'
    },
    sass: {
        from: './assets/styles/app/*.scss',
        to: './assets/styles/app'
    }
}

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    babel = require("gulp-babel"),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['watch'], function() {
    return browserSync.init({
        server: {
            baseDir: ["./"],
            index: "index.html"
        },        
        port: 3003,
        files: ["*.html", "templates/*.html", "assets/styles/app/*.css", "assets/scripts/app/*.js"]
    });
});


gulp.task('sass', function() {
    return gulp.src(paths.sass.from)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.to))
        .pipe(notify({
            message: 'sass task complete'
        }));
});


gulp.task("babel", function() {
    return gulp.src(paths.babel.from)
        .pipe(babel())
        .pipe(rename(function(path) {
            path.basename = path.basename.replace(/-es6$/, '');
        }))
        .pipe(gulp.dest(paths.babel.to))
        .pipe(notify({
            message: 'babel task complete'
        }));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass.from, ['sass']);
    gulp.watch(paths.babel.from, ['babel']);
});
