'use strict';

var paths = {
    babel: {
        from: './assets/scripts/**/*-es6.js',
        to: './assets/scripts'
    },
    sass: {
        from: './assets/styles/**/*.scss',
        to: './assets/styles'
    },
    postcss: {
        from: './assets/styles/app.css',
        to: './assets/styles/app-theme'
    }
}

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    babel = require("gulp-babel"),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['watch'], function () {
    return browserSync.init({
        server: {
            baseDir: ["./"],
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        },
        port: 3333,
        ui: {
            port: 3334
        },
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: false
        },
        files: ['*.html', 'pages/**/*.html', 'assets/styles/**/*.css', 'assets/scripts/**/*.js']
    });
});


gulp.task('sass', function () {
    return gulp.src(paths.sass.from)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.to))
        .pipe(notify({
            message: 'sass task complete'
        }));
});


gulp.task("babel", function () {
    return gulp.src(paths.babel.from)
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', function (err) {
            console.log(err.message);
            // end this stream
            this.emit('end');
        })
        .pipe(rename(function (path) {
            path.basename = path.basename.replace(/-es6$/, '');
        }))
        .pipe(gulp.dest(paths.babel.to))
        .pipe(notify({
            message: 'babel task complete'
        }));
});

gulp.task('postcss', function () {
    var processors = [
        autoprefixer({ browsers: ['last 1 version'] })
    ];
    return gulp.src(paths.postcss.from)
        .pipe(postcss(processors))
        .pipe(gulp.dest(paths.postcss.to));
});

gulp.task('watch', function () {
    gulp.watch(paths.sass.from, ['sass']);
    gulp.watch(paths.babel.from, ['babel']);
});
