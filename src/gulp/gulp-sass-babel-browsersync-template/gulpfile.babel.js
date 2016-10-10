;'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import notify from 'gulp-notify';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browserSyncLib from 'browser-sync';

let browserSync = browserSyncLib.create();

const paths = {
    babel: {
        from: './src/assets/scripts/**/*.js',
        to: './dist/assets/scripts'
    },
    sass: {
        from: './src/assets/styles/**/*.scss',
        to: './dist/assets/styles'
    },
    postcss: {
        from: './src/assets/styles/app.css',
        to: './dist/assets/styles'
    },
    browserify: {
        from: './src/assets/scripts/app.js',
        to: './dist/app-bundle.js',
    }
}

gulp.task('default', ['watch'], function() {
    return browserSync.init({
        server: {
            baseDir: ['./'],
            middleware: function(req, res, next) {
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
        files: ['*.html', 'dist/**/*.html', 'dist/**/*.css', 'dist/**/*.js']
    });
});


gulp.task('sass', () => {
    return gulp.src(paths.sass.from)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.to))
        .pipe(notify({
            message: 'sass task complete'
        }));
});


gulp.task("babel", () => {
    return gulp.src(paths.babel.from)
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', function(err) {
            console.log(err.message);
            // end this stream
            this.emit('end');
        })
        .pipe(gulp.dest(paths.babel.to))
        .pipe(notify({
            message: 'babel task complete'
        }));
});

gulp.task('postcss', () => {
    var processors = [
        autoprefixer({ browsers: ['last 2 version'] })
    ];
    return gulp.src(paths.postcss.from)
        .pipe(postcss(processors))
        .pipe(gulp.dest(paths.postcss.to));
});

gulp.task('build-scripts', () => {
    return browserify({
            entries: [paths.browserify.from]
        })
        .transform(babelify)
        .bundle()
        .pipe(source('app-bundle.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(notify({
            message: 'build-scripts complete'
        }));
});


gulp.task('watch', () => {
    gulp.watch(paths.sass.from, ['sass']);
    gulp.watch(paths.babel.from, ['build-scripts']);
});