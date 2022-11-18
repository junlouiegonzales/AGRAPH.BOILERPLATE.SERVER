/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.(png|jpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/imgs/[name].[ext]',
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve('./node_modules'), path.resolve('./server')],
  },
  target: 'node',
};
