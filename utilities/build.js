var webpack = require('webpack')
var config = require('../webpack.config')

webpack(
  config,
  (err) => { if (err) throw err }
)
