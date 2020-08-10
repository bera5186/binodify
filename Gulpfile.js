const gulp = require('gulp')
const uglify = require('gulp-uglify')
const browserify = require("browserify")
const babelify = require("babelify")
const source = require("vinyl-source-stream")
const buffer = require("vinyl-buffer")

function build() {

    return(
        browserify({
            entries:['./src/index.js'],
            transform: [babelify.configure({ presets: ["@babel/preset-env"] })]
        })
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest('./dist'))
    )

}

exports.default = exports.build = gulp.series(build);
