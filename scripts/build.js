'use strict';

process.env.NODE_ENV = 'production';

var fs = require('fs-extra');
var webpack = require('webpack');
var config = require('../config/webpack.config.prod');
var paths = require('../config/paths');

fs.emptyDirSync(paths.appBuild);

console.log('Creating an optimized production build...');

webpack(config).run((err, stats) => {
  console.log('Compiled successfully.');
});