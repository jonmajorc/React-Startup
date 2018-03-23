const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  plugins: [
    new HtmlWebPackPlugin({
      template: __dirname + '/src/index.html',
      favicon: 'src/favicon.ico', // need to add
      minify: {
        emoveComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false
    }),
  ],
})