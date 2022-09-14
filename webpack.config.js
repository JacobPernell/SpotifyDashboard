const path = require('path');

module.exports = {
  entry: './browser/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './browser/dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
  },
  devServer: {
    static: './browser/dist',
    port: 3030,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: { limit: false },
      },
    ],
  },
};
