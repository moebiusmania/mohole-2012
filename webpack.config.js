// Main imports | DON'T CHANGE
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const pkg = require('./package.json');

// Project related settings
const ENV = process.env.NODE_ENV || 'development';
const dist = './assets';
const port = 8080;
const notifications = false;

// Webpack configuration | DON'T CHANGE
const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].css",
  }),
  new HtmlWebpackPlugin({
    title: pkg.displayName,
    template: './assets/index.html'
  }),
  new CopyPlugin({
    patterns: [
      { from: "assets", to: ".", globOptions: {
        ignore: ["**/index.html"]
      } },
    ],
  }),
];

notifications ? plugins.push(
  new WebpackNotifierPlugin({
    title: pkg.displayName,
    alwaysNotify: true
  })) : plugins;

module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: ENV,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    chunkFilename: 'bundle.[chunk].js'
  },
  plugins,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, dist),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    compress: true,
    port: port,
    host: 'localhost',
    hot: true,
    inline: true
  }
};