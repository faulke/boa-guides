const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
require('dotenv').config()

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /global.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/styles/global.scss'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'API_URL': `"${process.env.API_URL}"`,
        'COGNITO_REGION': `"${process.env.COGNITO_REGION}"`,
        'COGNITO_POOL_ID': `"${process.env.COGNITO_POOL_ID}"`,
        'COGNITO_CLIENT_ID': `"${process.env.COGNITO_CLIENT_ID}"`,
        'COGNITO_IDENTITY_POOL_ID': `"${process.env.COGNITO_IDENTITY_POOL_ID}"`,
        'COGNITO_DOMAIN': `"${process.env.COGNITO_DOMAIN}"`,
        'AUTH_CALLBACK_URL': `"${process.env.AUTH_CALLBACK_URL}"`,
        'LOGOUT_URL': `"${process.env.LOGOUT_URL}"`
      }
    })
  ]
}
