const {src, dest, watch, series} = require ("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const minify = require("gulp-clean-css");
const prefix = require('gulp-autoprefixer');
const map = require("gulp-sourcemaps");

function buildStyles () {
    return src("library/**/*.scss")
    .pipe(map.init())
    .pipe(sass())
    .pipe(purgecss({content:['*.html']}))
    .pipe(prefix())
    .pipe(minify())
    .pipe(map.write('./'))
    .pipe(dest("css"))
}

function watchSass () {
    watch (["library/**/*.scss", "*.html"], buildStyles)
}

exports.default = series (buildStyles, watchSass);