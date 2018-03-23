const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    /**
     * if you are curious about this plugin... head over to: https://github.com/FormidableLabs/webpack-dashboard
     * The gist is that it provides a cleaner interface to visualize sizes of assets 
     */
    new DashboardPlugin(),
    new HtmlWebPackPlugin({
      template: __dirname + '/src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
    new webpack.NamedModulesPlugin(),
    /**
     * Fix HotModuleReplacementPlugin to work with tsx file.
     * Right now if the entry is a TSX file the HMR is broken
     */
    new webpack.HotModuleReplacementPlugin(),
    // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
  ],
})