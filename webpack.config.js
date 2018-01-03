var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.js'],
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'models': path.resolve(__dirname, './src/models'),
      'routes': path.resolve(__dirname, './src/routes')
    }
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
};
