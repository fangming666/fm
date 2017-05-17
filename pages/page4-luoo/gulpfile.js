/**
 * Created by Administrator on 2017/3/3.
 */
var gulp = require("gulp"),
    less = require("gulp-less");

gulp.task("testLess",function () {
    gulp.src("less/*.less")
        .pipe(less())
        .pipe(gulp.dest("css"));
});
gulp.task("testWatch",function () {
    gulp.watch("less/*.less",["testLess"])
});
gulp.task("default",["testLess","testWatch"]);
