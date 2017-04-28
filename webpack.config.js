const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve('dist'),
    filename: "bundle.js",
  },
  eslint: {
    formatter: require("eslint-friendly-formatter"),
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ },
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
    ],
  },
  plugins: [HtmlWebpackPluginConfig]
};
