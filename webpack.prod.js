const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')


const NODE_ENV = JSON.stringify('production')


module.exports = merge(common(NODE_ENV), {
  devtool: 'source-map',
  plugins: [

    // generate and external css file with a hash in the file name
    // new ExtractTextPlugin('[name].[contenthash].css'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    
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
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': NODE_ENV,
      __DEV__: false
    }),
  ],
})