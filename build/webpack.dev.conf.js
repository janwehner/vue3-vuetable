const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

/**
 *
 */
module.exports = merge(baseWebpackConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ],
  optimization: {
    emitOnErrors: false,
  },
  devServer: {
    hot: 'only',
    open: true,
    devMiddleware: {
      stats: {
        children: false,
        modules: false,
        chunks: false,
      },
    },
    port: 8088,
  },
});
