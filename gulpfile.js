const jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('default', function() {
	console.log('Pasobpor aqui');
});


gulp.task('lint', function() {
	// console.log('Pasobpor aqui');
	return gulp.src('./index.js')
	.pipe(jshint())
	.pipe(jshint.reporter('YOUR_REPORT_HERE'));
});
