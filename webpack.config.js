module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js",
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
};
