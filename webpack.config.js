const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function dirPath(dest){
  return path.resolve(__dirname, dest);
};

function webPath(dest){
  return dirPath('app/' + dest);
};

const config = {
  entry: {
    app: webPath('client.js'),
    vendors: ['react', 'react-dom', 'redux']
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? dirPath('dist') : dirPath('build'),
    filename: 'js/[name]-[hash:4].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0', 'stage-1']
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: webPath('index.html'),
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors-[hash:4].js', Infinity)
  ],
  devServer: {
    quite: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }
};

if(process.env.NODE_ENV === 'production'){
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new CleanWebpackPlugin(dirPath('dist'))
  );
}else{
  config.entry.dev = ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080'];
}

module.exports = config;