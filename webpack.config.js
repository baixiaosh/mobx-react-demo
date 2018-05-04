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
