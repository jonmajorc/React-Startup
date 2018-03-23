const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


module.exports = {
  entry: path.resolve(__dirname,'src/index.js'),
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-2'],
              plugins: ['react-hot-loader/babel'],
            }
          },
          {
            loader: 'ts-loader'
          },
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-2'],
              plugins: ['react-hot-loader/babel'],
            }
          },
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test:/\.(css|scss|sass)$/,
        use: [
          'style-loader',
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')(),
              ],
              sourceMap: true,
            },
          },
          { 
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                path.resolve(__dirname, 'src', 'scss'),
                path.resolve(__dirname, 'src', 'sass'),
              ],
            },
          },
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve:{
    extensions:['*', '.ts', '.tsx', '.js', '.jsx', '.json']
  },
  target: 'web',
}