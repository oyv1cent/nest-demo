const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ]
});
