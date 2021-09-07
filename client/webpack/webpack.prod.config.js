const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageMinimizerPlugin = require('./plugins/image-minimizer')
module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new ImageMinimizerPlugin()
  ]
});
