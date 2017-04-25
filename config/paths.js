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
  widgetIndexJs: resolveApp('src/widget.js'),
  clientIndexJs: resolveApp('src/client.js'),
  appIndexJs: resolveApp('src/app.js'),
  appBuild: resolveApp('build'),
  appSrc: resolveApp('src'),
  widgetHtml: resolveApp('public/widget.html'),
  appHtml: resolveApp('public/index.html'),
  servedPath: '/tp_test/'
};
