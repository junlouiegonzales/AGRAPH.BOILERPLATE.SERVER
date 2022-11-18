/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: ['webpack/hot/poll?1000', path.join(__dirname, 'server/index.ts')],
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?1000'],
    }),
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({ path: './.env.development' }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'server/common/assets/imgs/sets', to: 'assets/imgs/sets' },
      ],
    }),
  ],
  watch: true,
});
