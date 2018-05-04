const path = require('path');
const apiMocker = require('webpack-api-mocker');
module.exports = {
  devtool: 'eval',
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8027,
    noInfo: true,
    before(app) {
      apiMocker(app, path.resolve('./mock'))
    },
    proxy: {
      // '/api': {
      //   target: 'http://test.baixiaosheng.top',
      //   changeOrigin: true
      // }
    }
  }
};