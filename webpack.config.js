const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'none',
  entry: {
    background: path.join(__dirname, 'src', 'background', 'entrypoint.ts'),
    player: path.join(__dirname, 'src', 'scripts', 'player.ts')
  },
  resolve: {
    extensions: ['.ts', 'tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/manifest.json'
    }]),
    new CleanWebpackPlugin(['build']),
    new WriteFilePlugin()
  ]
}
