const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');



module.exports = {
  entry: {
        bundle: './src/index.tsx'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    minimize: {
                        safe: true
                    }
                }
            },
            {
                loader: "sass-loader",
                options: {}
            }
        ]
      },
      { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
      { test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/, use: 'file-loader' }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js','.sass','.json' ]
  },
  optimization: {
    runtimeChunk: true ,
    splitChunks: {
        cacheGroups: {
            commons: {
                chunks: 'initial',
                minChunks: 2
                },
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                chunks: 'all',
                priority: -10
            }
          }
    },
    minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: true
        })
      ]
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new MiniCssExtractPlugin({
        filename: "style/[name].css"
      })
    ,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    })
  ],
};