"use strict";

const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("default", () => {
    gulp.src("index.js")
        .pipe(babel({
            plugins: ["transform-runtime"]
        }))
        .pipe(gulp.dest("dist/"));
    gulp.src("./lib/*.js")
        .pipe(babel({
            plugins: ["transform-runtime"]
        }))
    .pipe(gulp.dest("dist/lib/"));
});
