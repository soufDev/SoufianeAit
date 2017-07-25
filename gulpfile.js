var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');

gulp.task('sass', function() {

	gulp.src('./sass/**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}) .on('error', sass.logError))
	.pipe(gulp.dest('./css'))
	.pipe(connect.reload());

});

gulp.task('sass:watch', function () {

	gulp.watch('./sass/**/*.scss', ['sass']);

});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('default',['sass:watch' ,'connect'] );