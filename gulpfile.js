const { series, src, dest } = require("gulp");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

function buildArray() {
  return src("Array/index.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/Array/index.js"));
}

function buildFn() {
  return src("Fn/index.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/Fn/index.js"));
}

function buildIs() {
  return src("Is/index.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/Is/index.js"));
}

function buildNumber() {
  return src("Number/index.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/Number/index.js"));
}

function buildString() {
  return src("String/index.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/String/index.js"));
}

function buildTransform() {
  return src("Transform/index.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/Transform/index.js"));
}

function buildUrl() {
  return src("Url/index.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/Url/index.js"));
}

function buildIndex() {
  return src("index.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
}

exports.default = series(
  buildArray,
  buildFn,
  buildIs,
  buildNumber,
  buildString,
  buildTransform,
  buildUrl,
  buildIndex
);
