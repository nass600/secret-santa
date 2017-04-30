let path = require('path')
let webpack = require('webpack')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let StyleLintPlugin = require('stylelint-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      'angular': path.resolve(path.join(__dirname, 'node_modules', 'angular'))
    }
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=fonts/[name].[ext]'
      },
      {
        test: /img\/.*\.(jpe?g|png|gif)$/i,
        loaders: [
          {
            loader: 'file-loader?name=img/[name].[ext]'
          },
          {
            loader: 'image-webpack-loader',
            query: {
              bypassOnDebug: true,
              gifsicle: {
                interlaced: false
              },
              optipng: {
                interlaced: false,
                optimizationLevel: 7
              }
            }
          }

        ]
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      mangle: true,
      minimize: true
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new StyleLintPlugin({
      files: './assets/**/*.scss',
      syntax: 'scss'
    }),
    new ExtractTextPlugin('bundle.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new FaviconsWebpackPlugin({
      logo: './assets/img/secret-santa.png',
      prefix: 'img/',
      title: 'Secret Santa',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  ]
};
