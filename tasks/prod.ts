import gulp from "gulp";
import browserify from "browserify";
import tsify from "tsify";
import source from "vinyl-source-stream";
import jsmin from "gulp-minify";
import imagemin from "gulp-imagemin";
import changed from "gulp-changed";
import htmlmin from "gulp-htmlmin";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import buffer from "vinyl-buffer";
import config from "./config";
import { clean } from "./clean";

gulp.task("build-prod", function () {
  return browserify(config.browserify.entry)
    .plugin(tsify)
    .bundle()
    .pipe(source(config.browserify.output.filename))
    .pipe(buffer())
    .pipe(
      jsmin({
        ext: {
          min: ".js",
        },
        noSource: true,
      }),
    )
    .pipe(gulp.dest(config.browserify.dest));
});

gulp.task("imagemin", function () {
  return gulp
    .src(config.assets.src)
    .pipe(changed(config.assets.dest))
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ],
        { verbose: true },
      ),
    )
    .pipe(gulp.dest(config.assets.dest));
});

gulp.task("html-prod", function () {
  return gulp
    .src(config.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(config.html.dest));
});

gulp.task("css-prod", function () {
  return gulp.src(config.css.src).pipe(autoprefixer()).pipe(csso()).pipe(gulp.dest(config.css.dest));
});

export const prod = gulp.series(clean, "build-prod", "imagemin", "html-prod", "css-prod");
