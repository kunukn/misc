;'use strict';

var paths = {
    babel: {
        from: 'src/assets/scripts/es6/**/*.js',
        to: 'assets/scripts'
    },
    typescript: {
        from: 'src/assets/scripts/typescript/**/*.ts',
        to: 'assets/scripts'
    }
}

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    babel = require("gulp-babel"),
    notify = require('gulp-notify'),             
    typescript = require('gulp-typescript'),
    browserSync = require('browser-sync').create() 	
    ;

gulp.task('default', [], function() {    
    return gutil.log('gulp serve to start server, gulp typescript or gulp babel to compile');
});
 
gulp.task('serve', ['watch'], function() {
    return browserSync.init({
        server: {
            baseDir: ["./"]
        },
        port: 3339,
        ui: {
            port: 3310
        },
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: false
        },
        files: ['*.html', 'pages/**/*.html', 'assets/styles/**/*.css', 'assets/scripts/**/*.js', 'assets/images/**/*.*']
    });
});


gulp.task('watch', function() {
    gulp.watch(paths.typescript.from, ['typescript']);
    gulp.watch(paths.babel.from, ['babel']);
});


gulp.task("babel", function() {
    return gulp.src(paths.babel.from)
        .pipe(babel({
            presets: ['es2015']
        }))        
        .pipe(gulp.dest(paths.babel.to))
        .pipe(notify({
            message: 'babel task complete'
        }));
});

gulp.task('typescript', function () {
	return gulp.src([paths.typescript.from])
		.pipe(typescript({
			noImplicitAny: true,
			out: 'typescript-output.js'
		}))
		.pipe(gulp.dest(paths.typescript.to))
		.pipe(notify({
            message: 'typescript task complete'
        }));
});
