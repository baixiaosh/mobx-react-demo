const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/index'],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: { removeAttributeQuotes: true, removeComments: true, collapseWhitespace: true }
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.less'],
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'models': path.resolve(__dirname, './src/models'),
      'routes': path.resolve(__dirname, './src/routes')
    }
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, './src')
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]__[hash:base64:5]',
          'postcss-loader',
          'less-loader'
        ]
      }),
      include: path.join(__dirname, './src')
    }]
  },
};