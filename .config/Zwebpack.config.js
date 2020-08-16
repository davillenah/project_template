const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackDevServer = require("webpack-dev-server");

const mode = "development";
const devServer = {
  contentBase: __dirname + "dist",
  compress: true,
  port: 5000,
};
const entry = {
  master: "./src/js/master.js",
  //  vendor: "./src/vendor/jquery.js",
};
const output = {
  path: __dirname + "/build",
  filename: "[name].build.js",
};
/*
const module = {
  rules: [
    {
      test: /\.scss$/,
      use: [],
    },
  ],
};
*/
module.exports = {
  mode: mode,
  entry: entry,
  output: output,
  //  module: module,
  //  plugins: plugins,
  devServer: devServer,
};
