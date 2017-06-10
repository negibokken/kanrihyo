'use strict';
const path = require('path');

module.exports = {
  entry: [
    './src/'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  devtool: 'soruce-map',
  resolve: {
    extensions: ['.config.js ', '.ts ', '.tsx', '.js', '.html', '.css'],
  },
  context: __dirname,
  target: 'web',
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
      { test: /\.css$/, use: 'css-loader' },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8088,
    hot: true,
    inline: true
  }
};
