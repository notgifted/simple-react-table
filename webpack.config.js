var path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [["es2015", {"modules": false}], "react"],
          babelrc: false
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};