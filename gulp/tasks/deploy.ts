import gulp from "gulp";
import ghPages from "gulp-gh-pages";
import { clean, prod } from ".";
import config from "../config";

gulp.task("gh-pages-deploy", function () {
  return gulp
    .src("./dist/**/*")
    .pipe(
      ghPages({ remoteUrl: config.deploy.remoteUrl, origin: config.deploy.origin, branch: config.deploy.deployBranch }),
    );
});

export const ghPagesDeploy = gulp.series("gh-pages-deploy");

export const deploy = gulp.series(clean, prod, ghPagesDeploy);
