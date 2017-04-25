'use strict';

var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var inlineSvg = require('postcss-inline-svg');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InterpolateHtmlPlugin = require('interpolate-html-plugin');
var paths = require('./paths');

var publicUrl = '';

module.exports = {
  devtool: 'eval',
  entry: {
    widget: paths.widgetIndexJs,
    client: paths.clientIndexJs
  },
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/[name].js',
    publicPath: paths.publicPath
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
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
          loader: 'svg-inline-loader'
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
    new InterpolateHtmlPlugin({'PUBLIC_URL': publicUrl}),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      filename: 'widget.html',
      template: paths.widgetHtml,
      chunks: ['widget']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      filename: 'index.html',
      template: paths.appHtml,
      excludeChunks: ['widget', 'client']
    }),
    new webpack.DefinePlugin({'PUBLIC_URL': JSON.stringify(publicUrl)})
  ],
};