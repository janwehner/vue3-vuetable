const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const utils = require("./utils");

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'vuetable-3.js',
    library: 'Vuetable',
    libraryTarget: 'umd',
    //globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  externals: {
    vue: 'vue'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          sourceMap: false,
          format: {
            comments: false,
          },
        }
      }),
    ],
  }
});

// var path = require('path')
// var version = require("./../package.json").version;
// var utils = require('./utils')
// var webpack = require('webpack')
// var config = require('../config')
// const { merge } = require('webpack-merge')
// var baseWebpackConfig = require('./webpack.base.conf')
// var CopyWebpackPlugin = require('copy-webpack-plugin')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var yar = require('optimize-css-assets-webpack-plugin')
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//
// var env = process.env.NODE_ENV === 'testing'
//   ? require('../config/test.env')
//   : config.build.env
//
// var webpackConfig = merge(baseWebpackConfig, {
//   module: {
//     rules: utils.styleLoaders({
//       sourceMap: config.build.productionSourceMap,
//       extract: true
//     })
//   },
//   devtool: config.build.productionSourceMap ? '#source-map' : false,
//   output: {
//     path: config.build.assetsRoot,
//     filename: utils.assetsPath('js/[name].[chunkhash].js'),
//     chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
//   },
//   plugins: [
//     // http://vuejs.github.io/vue-loader/en/workflow/production.html
//     new webpack.DefinePlugin({
//       'process.env': env,
//       VERSION: JSON.stringify(version)
//     }),
//     // extract css into its own file
//     new ExtractTextPlugin({
//       filename: utils.assetsPath('css/[name].[contenthash].css')
//     }),
//     // Compress extracted CSS. We are using this plugin so that possible
//     // duplicated CSS from different components can be deduped.
//     new OptimizeCSSPlugin({
//       cssProcessorOptions: {
//         safe: true
//       }
//     }),
//     // generate dist index.html with correct asset hash for caching.
//     // you can customize output by editing /index.html
//     // see https://github.com/ampedandwired/html-webpack-plugin
//     new HtmlWebpackPlugin({
//       filename: process.env.NODE_ENV === 'testing'
//         ? 'index.html'
//         : config.build.index,
//       template: 'index.html',
//       inject: true,
//       minify: {
//         removeComments: true,
//         collapseWhitespace: true,
//         removeAttributeQuotes: true
//         // more options:
//         // https://github.com/kangax/html-minifier#options-quick-reference
//       },
//       // necessary to consistently work with multiple chunks via CommonsChunkPlugin
//       chunksSortMode: 'dependency'
//     }),
//
//     // copy custom static assets
//     new CopyWebpackPlugin({
//         patterns: [
//           {
//             from: path.resolve(__dirname, '../static'),
//             to: config.build.assetsSubDirectory,
//           }
//         ]
//     })
//   ],
//   optimization: {
//     minimizer: [
//       new UglifyJsPlugin({
//
//         uglifyOptions: {
//           compress: {
//             warnings: false
//           },
//         },
//         sourceMap: true
//       })
//     ],
//     runtimeChunk: "single", // enable "runtime" chunk
//     splitChunks: {
//       cacheGroups: {
//         vendor: {
//           test: /[\\/]node_modules[\\/]/,
//           name: "vendor",
//           chunks: "all"
//         }
//       }
//     }
//   }
// })
//
// if (config.build.productionGzip) {
//   var CompressionWebpackPlugin = require('compression-webpack-plugin')
//
//   webpackConfig.plugins.push(
//     new CompressionWebpackPlugin({
//       asset: '[path].gz[query]',
//       algorithm: 'gzip',
//       test: new RegExp(
//         '\\.(' +
//         config.build.productionGzipExtensions.join('|') +
//         ')$'
//       ),
//       threshold: 10240,
//       minRatio: 0.8
//     })
//   )
// }
//
// if (config.build.bundleAnalyzerReport) {
//   var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//   webpackConfig.plugins.push(new BundleAnalyzerPlugin())
// }
//
// module.exports = webpackConfig
