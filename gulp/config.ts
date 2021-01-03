import path from "path";

const dest = "./dist";
const src = "./src";
const assetsSrc = "./public";

export default {
  assets: {
    src: path.join(assetsSrc, "**/*"),
    dest: path.join(dest, assetsSrc),
    watchFiles: [path.join(assetsSrc, "**/*.{png,jpg,gif,jpeg,JPG,PNG,GIF,JPEG}")],
  },
  html: {
    src: path.join(src, "**/*.html"),
    dest,
    watchFiles: [path.join(src, "**/*.html")],
  },
  css: {
    src: path.join(src, "**/*.{css,scss}"),
    dest,
    watchFiles: [path.join(src, "**/*.{css,scss}")],
  },
  browserify: {
    entry: {
      entries: path.join(src, "index.ts"),
      debug: true,
      cache: {},
      packageCache: {},
    },
    dest: dest,
    output: {
      filename: "bundle.js",
    },
    watchFiles: [path.join(src, "**/*.{js,jsx,ts,tsx}"), `!${path.join(src, "**/*test.{js,jsx,ts,tsx}")}`],
  },
  deploy: {
    remoteUrl: "https://github.com/eunchurn/vanillajs-typescript-gulp-project-boilerplate.git",
    origin: "origin",
    deployBranch: "gh-pages"
  }
};
