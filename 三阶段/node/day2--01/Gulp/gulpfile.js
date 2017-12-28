/**
 * Created by uid on 2017/11/2.
 */
const gulp=require("gulp");
const del =require("del");//删除del插件
const bs=require("browser-sync");//实时刷新插件

gulp.task("copyhtml",function () {
    return gulp.src("./src/index1.html").pipe(gulp.dest("dist"))
});


gulp.task("browsersync",["rebuild"],function () {

});