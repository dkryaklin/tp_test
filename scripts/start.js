'use strict';

process.env.NODE_ENV = 'development';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var detect = require('detect-port');
var opn = require('opn');
var config = require('../config/webpack.config.dev');
var paths = require('../config/paths');

var DEFAULT_PORT = 3000;

detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    var protocol = 'http';
    var host = 'localhost';

    var compiler = setupCompiler(host, port, protocol);
    runDevServer(compiler, host, port, protocol);

    return;
  }

  console.log('Something is already running on port ' + DEFAULT_PORT + '.');
});

function setupCompiler(host, port, protocol) {
  var compiler = webpack(config);

  compiler.plugin('invalid', function() {
    console.log('Compiling...');
  });

  var isFirstCompile = true;

  compiler.plugin('done', function(stats) {
    if (isFirstCompile) {
      console.log('The app is running at:'  + protocol + '://' + host + ':' + port + '/');
    } else {
      console.log('Done!');
    }
    
    isFirstCompile = false;
  });

  return compiler;
};

function runDevServer(compiler, host, port, protocol) {
  var devServer = new WebpackDevServer(compiler, {
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    publicPath: paths.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    }
  });

  devServer.listen(port, err => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Starting the development server...');
    console.log();

    opn(protocol + '://' + host + ':' + port + '/');
  });
};