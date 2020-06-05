const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/client.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              // {
              //     targets: {
              //         browsers: ["last 2 versions"]
              //     }
              // }
          ]
        }
      }
    ]
  },
  resolve: { extensions: [ '.js', '.jsx', '.ts', '.tsx' ] },
  devServer: {
    contentBase: './',
    port: 6000
  }
};