# Simple VanillaJS Typescript Gulp Project Boilerplate

[![Unit Test](https://github.com/eunchurn/vanillajs-typescript-gulp-project-boilerplate/actions/workflows/unit-test.yml/badge.svg)](https://github.com/eunchurn/vanillajs-typescript-gulp-project-boilerplate/actions/workflows/unit-test.yml) [![Deploy](https://github.com/eunchurn/vanillajs-typescript-gulp-project-boilerplate/actions/workflows/deployment.yml/badge.svg)](https://github.com/eunchurn/vanillajs-typescript-gulp-project-boilerplate/actions/workflows/deployment.yml) [![pages-build-deployment](https://github.com/eunchurn/vanillajs-typescript-gulp-project-boilerplate/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/eunchurn/vanillajs-typescript-gulp-project-boilerplate/actions/workflows/pages/pages-build-deployment)

Minimum setting for VanillaJS, HTML webpage 
**required NodeJS version over 12.x**

- VanillaJS
- Typescript
- Browserify bundler
- Pure CSS
- Autoprefixer
- Assets(`public`)
- Browser Sync (dev web server)
- Gulp
- Minimization(Image, HTML, CSS, JS) on production
- `gh-pages` Deployment 

## Github page deployment

- Change `gulp/config.ts` to yours
```js
{
  deploy: {
    remoteUrl: "https://github.com/eunchurn/vanillajs-typescript-gulp-project-boilerplate.git",
    origin: "origin",
    deployBranch: "gh-pages"
  }
}
```
[Link](https://eunchurn.github.io/vanillajs-typescript-gulp-project-boilerplate/)