const webpack = require('webpack');
const path = require('path');
const helpers = require('./webpack/helpers');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    request: './frontend/app/js/containers/RequestForm.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js',
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: [ '.js', '.vue' ],
    alias: {
      'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
      '@': helpers.root('public/js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /app/, /controller/, /models/, /routes/, /dist/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    port: 8000,
    stats: {
      normal: true,
    },
  },
};
