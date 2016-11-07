var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');


/**
 * Plugin Definitions
 */

// Dev only plugins.
var devPlugins = [
  new webpack.DefinePlugin({ 
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
    },
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      hot: true,
    }
  }),
  new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    server: {
      baseDir: ['./build']
    },
  })
];


// Prod only plugins.
var prodPlugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    }
  }),
  //Minify the bundle
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      //supresses warnings, usually from module minification
      warnings: false,
      drop_console: true
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
  }),
];

var baseConfig = {
  entry: [ 'babel-polyfill', APP_DIR + '/js/index.js', './src/assets/styles/app.scss' ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules',
    ],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
      'react-dom': path.join(__dirname, 'node_modules', 'react-dom')
    },
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/html' },
    ]),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [nodeModulesPath],
        loader: 'eslint',
      },
      { test: /\.eot$/,  loader: 'file-loader' },
      { test: /\.woff?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?\S*)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/,  loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg$/,  loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.jpg$/,  loader: 'url-loader?limit=10000&mimetype=image/jpeg' },
      { test: /\.png$/,  loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.gif$/,  loader: 'url-loader?limit=10000&mimetype=image/gif' },

      { test: /\.json$/,  loader: 'json-loader' },

      {
        test: /\.(js|jsx)$/, //All .js and .jsx files
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015-loose-native-modules', 'stage-1', 'react'],
            },
          },
        ],
        exclude: [nodeModulesPath],
      },

      {
        test: /\.css$/,
        loader: 'style!css!postcss-loader',
        exclude: [nodeModulesPath],
      },

      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass',
        ],
        exclude: [nodeModulesPath],
      },
    ],
  },
};

// Merge the dev only and base configs.
exports.dev = Object.assign({}, baseConfig, {
  devtool: 'source-map',
  plugins: baseConfig.plugins.concat(devPlugins),
});

// Merge the prod only and base configs.
exports.prod = Object.assign({}, baseConfig, {
  plugins: baseConfig.plugins.concat(prodPlugins),
});
