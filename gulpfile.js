const gulp = require("gulp");
const less = require("gulp-less");

gulp.task("default", cb => {
	gulp.src("./src/*.less")
		.pipe(less())
		.pipe(gulp.dest("./dist"));

	cb();
});
