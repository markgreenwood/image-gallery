const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssExtract = new ExtractTextPlugin('main.css');

module.exports = {
  entry: './src/main.js',
  output: {
    path: '../server/public',
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    cssExtract
  ],
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.scss/,
      loader: cssExtract.extract(
        'style-loader',
        'css-loader?sourceMap!sass-loader?sourceMap'
      )
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  sassLoader: {
    includePaths: ['./src/scss/partials']
  }
};
