var gulp = require('gulp')
	//, gutil = require('gulp-util')
	//,sass = require('gulp-sass')
    ;
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: ["./"]
        },
        files: ["*.html", "templates/wizard/*.html", "assets/styles/app/*.css", "assets/scripts/app/*.js"]
    });
});
