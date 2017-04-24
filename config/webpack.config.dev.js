'use strict';

var autoprefixer = require('autoprefixer');
var inlineSvg = require('postcss-inline-svg');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var paths = require('./paths');

module.exports = {
  devtool: 'eval',
  entry: [
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: paths.publicPath
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        include: paths.appSrc,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 10',
        ]
      }),
      inlineSvg({path: paths.appSrc}),
    ];
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    })
  ],
};