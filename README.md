# Simple VanillaJS Typescript Gulp Project Boilerplate

Minimum setting for VanillaJS, HTML webpage

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