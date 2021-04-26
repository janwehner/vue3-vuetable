const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const utils = require('./utils');
const config = require('../config')

/**
 *
 */
module.exports = merge(baseWebpackConfig, {
  // module: {
  //   rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  // },
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
    hot: true,
    hotOnly: true,
    open: true,
    inline: true,
    stats: {
      children: false,
      modules: false,
      chunks: false,
    },
    port: 8080,
  },
});
// var utils = require('./utils')
// var webpack = require('webpack')
// var config = require('../config')
// var version = require("./../package.json").version;
// const { merge } = require('webpack-merge')
// var baseWebpackConfig = require('./webpack.base.conf')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
//
// // add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//   baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })
//
// module.exports = merge(baseWebpackConfig, {
//   module: {
//     rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
//   },
//   // cheap-module-eval-source-map is faster for development
//   devtool: '#cheap-module-eval-source-map',
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': config.dev.env,
//       VERSION: JSON.stringify(version)
//     }),
//     // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//     // https://github.com/ampedandwired/html-webpack-plugin
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: 'index.html',
//       inject: true
//     }),
//     new FriendlyErrorsPlugin()
//   ]
// })
