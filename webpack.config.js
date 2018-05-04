const webpack = require('webpack');
<<<<<<< 10f81f39d49b5b6a4bed713f883797d0086c42c0
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  devServer: {
    contentBase: "./dist",
    hot: true,
    noInfo: true,
    proxy: {
      '/api': {
        target: 'http://hs.axiao2.com',
        changeOrigin: true
      }
    }
  },
  entry: {
    index: './src/index',
    vendor: ['react', 'react-dom', 'react-router-dom', 'mobx', 'mobx-react'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[hash:8].js',
    chunkFilename: '[id].[hash:8].js',
    publicPath: ''
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('index.[hash:8].css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[id].[hash:8].js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity,
      filename: '[id].[hash:8].js'
    }),
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
      'services': path.resolve(__dirname, './src/services'),
      'routes': path.resolve(__dirname, './src/routes'),
      'utils': path.resolve(__dirname, './src/utils'),
      'imgs': path.resolve(__dirname, './public/assets/imgs')
    }
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
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
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?sourceMap&importLoaders=1&localIdentName=[local]__[hash:base64:5]'
        ]
      }),
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 2000,
          name: '[name].[hash:8].[ext]',
          outputPath: 'imgs/'
        }
      }]
    }]
  }
};
=======
const merge = require('webpack-merge');

const PRODUCTION = process.env.NODE_ENV === "production";
const DEVELOPMENT = process.env.NODE_ENV === "development";
const base = require("./config/").base;
const config = PRODUCTION
  ? require("./config/").build
  : require("./config/").dev;


module.exports = merge({
  entry: base.entry,
  output: base.output,
  plugins: base.plugins,
  resolve: base.resolve,
  module: base.module,
}, config);
>>>>>>> 添加UI库,ant-design
