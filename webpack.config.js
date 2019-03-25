const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 
        {
          loader: 'babel-loader'
        }
      },
      {
        test:/\.scss$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    htmlWebpackPlugin
  ]
}