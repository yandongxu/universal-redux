module.exports = {
  context: __dirname,

  entry: {
    client: './client/app.js'
  },
  
  output: {
    path: './public/scripts',
    filename: '[name].js'
  },
  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};