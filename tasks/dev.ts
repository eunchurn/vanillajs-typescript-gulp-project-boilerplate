import gulp from "gulp";
import browserify from "browserify";
import tsify from "tsify";
import source from "vinyl-source-stream";
import autoprefixer from "gulp-autoprefixer";
import bs from "browser-sync";
import config from "./config";
import { clean } from "./clean";

const browserSync = bs.create();
const reload = browserSync.reload;

gulp.task("build-dev", function () {
  return browserify(config.browserify.entry)
    .plugin(tsify)
    .bundle()
    .pipe(source(config.browserify.output.filename))
    .pipe(gulp.dest(config.browserify.dest))
    .pipe(reload({ stream: true }));
});

function watch(task: string, watchFiles: string[]) {
  const watcher = gulp.watch(watchFiles, { ignoreInitial: true }, gulp.parallel(task));
  watcher.on("change", function (path, stats) {
    console.log(`File ${path} was changed`);
  });

  watcher.on("add", function (path, stats) {
    console.log(`File ${path} was added`);
  });

  watcher.on("unlink", function (path, stats) {
    console.log(`File ${path} was removed`);
  });
}

gulp.task("watch-tsc", () => watch("tsc", config.browserify.watchFiles));

export const brows = gulp.task("browserify", function () {
  return browserify(config.browserify.entry)
    .bundle()
    .pipe(source(config.browserify.output.filename))
    .pipe(gulp.dest(config.browserify.dest));
});

gulp.task("copyPublic", function () {
  return gulp.src(config.assets.src).pipe(gulp.dest(config.assets.dest));
});

gulp.task("html-dev", function () {
  return gulp
    .src(config.html.src)
    .pipe(gulp.dest(config.html.dest))
    .pipe(reload({ stream: true }));
});

gulp.task("css-dev", function () {
  return gulp
    .src(config.css.src)
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.css.dest))
    .pipe(reload({ stream: true }));
});

gulp.task("devServer", function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  watch("build-dev", config.browserify.watchFiles);
  watch("html-dev", config.html.watchFiles);
  watch("css-dev", config.css.watchFiles);
  watch("copyPublic", config.assets.watchFiles);
});

export const dev = gulp.series(clean, "build-dev", "copyPublic", "html-dev", "css-dev", "devServer");
