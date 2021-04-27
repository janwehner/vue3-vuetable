const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

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
