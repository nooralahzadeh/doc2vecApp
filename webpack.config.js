var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main:'app/components/main.jsx',
      Nav:'app/components/nav.jsx',
      Word2Vec:'app/components/Word2Vec.jsx',
      About:'app/components/About.jsx',
      Examples:'app/components/Examples.jsx',
      Word2VecForm:'app/components/Word2VecForm.jsx',
      Word2VecMessage:'app/components/Word2VecMessage.jsx',
      OpenApiCall:'app/api/OpenApiCall.jsx',
      ErrorModel: 'app/components/ErrorModel.jsx',
      Text:'app/components/Text.jsx',
      Word:'app/components/Word.jsx',
      WordList:'app/components/WordList.jsx',
      applicationStyles:'app/styles/app.scss'
    },
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
