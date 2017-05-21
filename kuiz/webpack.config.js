'use strict';

module.exports = {
  entry: './index.js',      // The entrypoint of your bundle, webpack will fetch all its dependencies
  output: {
    filename: './dist/index.js', // The name of the file you want to generate
    library: 'kuiz-md',
    libraryTarget: 'commonjs2'
  },
  devtool: 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,             // Transform all .js files from our project
        loader: 'babel-loader',   // Use the loader “babel-loader” to transform those files
        exclude: /node_modules/,  // Do not fetch the packages installed by NPM
        query: {
          presets: ['es2015', 'react'] // Transform ES6 (using babel-preset-es2015) into ES5 that browsers understand, and JSX (using babel-preset-react)
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
}

