'use strict';

var path = require('path');
var fs = require('fs');

var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

module.exports = {
  publicPath: '/',
  appPublic: resolveApp('public'),
  appIndexJs: resolveApp('src/index.js'),
  appBuild: resolveApp('build'),
  appSrc: resolveApp('src'),
  appHtml: resolveApp('public/index.html')  
};
