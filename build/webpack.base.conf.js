const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const env = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development';

const devtool = env === 'production' ? 'source-map' : 'eval-source-map';

const extractOrInjectStyles = env !== 'production'
  ? 'vue-style-loader'
  : MiniCssExtractPlugin.loader;

module.exports = {
  mode: env,

  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
      //'src': path.resolve(__dirname, '../src'),
      //'components': path.resolve(__dirname, '../src/components'),
      '@': resolve('src')
    }
  },
  // output: {
  //   path: path.resolve(__dirname, '../dist'),
  //   publicPath: '/',
  //   filename: '[name].js',
  // },
  // devtool,
  // resolve: {
  //   extensions: ['.js', '.vue', '.json'],
  //   alias: {
  //     '@': path.resolve(__dirname, '../src'),
  //     'vue$': 'vue/dist/vue.esm-bundler.js'
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          extractOrInjectStyles,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new MiniCssExtractPlugin({
      filename: 'vuetable-3.css'
    }),
    new VueLoaderPlugin(),
  ],
  stats: {
    children: false,
    modules: false,
  },
};

// var path = require('path')
// var utils = require('./utils')
// var config = require('../config')
// var vueLoaderConfig = require('./vue-loader.conf')
//
// function resolve (dir) {
//   return path.join(__dirname, '..', dir)
// }
//
// module.exports = {
//   entry: {
//     app: './src/main.js'
//   },
//   output: {
//     path: config.build.assetsRoot,
//     filename: '[name].js',
//     publicPath: process.env.NODE_ENV === 'production'
//       ? config.build.assetsPublicPath
//       : config.dev.assetsPublicPath
//   },
//   resolve: {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js',
//       '@': resolve('src')
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: vueLoaderConfig
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         include: [resolve('src'), resolve('test')]
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: utils.assetsPath('img/[name].[hash:7].[ext]')
//         }
//       },
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
//         }
//       }
//     ]
//   }
// }
