const globby = require('globby');
const rimraf = require('rimraf');

globby(['dist/*', '!dist/fonts', '!dist/svg', '!dist/images'])
  .then(function then(paths) {
    paths.map(function map(item) {
      rimraf.sync(item);
    });
  });
