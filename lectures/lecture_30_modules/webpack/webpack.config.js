const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry   : './src/main.js',
  output  : {
    path     : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js',
  },
  watch   : true,
  module  : {
    rules : [
      {
        test : /\.css$/i,
        use  : ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins : [new HtmlWebpackPlugin({
    template : './src/index.html',
  })],
}
