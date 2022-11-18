/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  entry: './server/index.ts',
  output: {
    filename: 'server.js',
    path: __dirname + '/dist',
  },
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({ path: './.env.production' }),
    new CopyPlugin({
      patterns: [
        { from: 'server/common/assets/imgs/sets', to: 'assets/imgs/sets' },
      ],
    }),
  ],
});
