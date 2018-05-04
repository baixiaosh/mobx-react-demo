
module.exports = {
  devtool: 'eval',
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8027,
    noInfo: true,
    proxy: {
      // '/api': {
      //   target: 'http://test.baixiaosheng.top',
      //   changeOrigin: true
      // }
    }
  }
};