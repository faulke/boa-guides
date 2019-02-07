const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js'
  },
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
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/styles/global.scss'),
        use: [
          { loader: MiniCssExtractPlugin.loader },
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
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
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
