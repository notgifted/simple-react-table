var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/index', './src/styles/table'],
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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};