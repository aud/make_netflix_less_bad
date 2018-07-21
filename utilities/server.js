const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('../webpack.config')
const path = require('path')

const port = 1051

for (const entryName in config.entry) {
  config.entry[entryName] = [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/dev-server'
  ].concat(config.entry[entryName]);
}

config.plugins = [
  new webpack.HotModuleReplacementPlugin()
].concat(config.plugins || [])

const server = new WebpackDevServer(webpack(config), {
  hot: true,
  contentBase: path.join(__dirname, '../build')
})

server.listen(port)
