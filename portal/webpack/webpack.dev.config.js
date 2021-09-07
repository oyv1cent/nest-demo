const { merge } = require('webpack-merge');
const path = require('path')
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config.js');

const PORT = 3002
module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devServer: {
    port: PORT,
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
    contentBase: './dist',
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
