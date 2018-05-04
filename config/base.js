const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, './../package.json');
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {};
let theme = {};
if (pkg.theme && typeof(pkg.theme) === 'string') {
  let cfgPath = pkg.theme;
  // relative path
  if (cfgPath.charAt(0) === '.') {
    cfgPath = path.resolve(__dirname, `../${cfgPath}`);
  }
  const getThemeConfig = require(cfgPath);
  theme = getThemeConfig();
} else if (pkg.theme && typeof(pkg.theme) === 'object') {
  theme = pkg.theme;
}

module.exports = {
  entry: {
    index: './src/index',
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-router-dom', 'mobx', 'mobx-react'],
  },
  output: {
    path: path.join(__dirname, './../dist'),
    filename: 'index.[hash:8].js',
    chunkFilename: '[id].[hash:8].js',
    publicPath: ''
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('index.[hash:8].css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin(),
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
      minify: { removeAttributeQuotes: false, removeComments: false, collapseWhitespace: true },
      inject: true,
      title: "baixiaosh测试"
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.less'],
    alias: {
      '@src': path.resolve(__dirname, './../src'),
      'components': path.resolve(__dirname, './../src/components'),
      'routes': path.resolve(__dirname, './../src/routes'),
      'services': path.resolve(__dirname, './../src/services'),
      'utils': path.resolve(__dirname, './../src/utils'),
      'imgs': path.resolve(__dirname, './../public/assets/imgs')
    }
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, './../src'),
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?sourceMap',
          'postcss-loader',
          `less-loader?{"modifyVars": ${JSON.stringify(theme)}}`
        ]
      }),
      include: path.join(__dirname, './../node_modules')
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
      include: path.join(__dirname, './../src')
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