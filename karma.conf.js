module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {
        pattern: 'server/**/*.spec.js',
        watched: false
      },
      {
        pattern: 'tests/index.js',
        watched: false
      }
    ],
    exclude: [],
    preprocessors: {
      'server/**/*.spec.js': ['webpack', 'sourcemap'],
      'tests/index.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015'] }
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
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
          }
        ]
      },
      watch: true
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'
    }
  })
}
