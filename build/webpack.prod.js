const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.[hash].js',
    chunkFilename: '[id].[hash].js',
    publicPath: '/static/'
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, './dist')]),
    new ExtractTextPlugin('index.[hash].css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
});