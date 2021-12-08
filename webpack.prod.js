const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common(), {
  mode: 'production',
  externals: {
    // use @require in header to import vue
    vue: 'Vue',
    // 'ant-design-vue': 'ant-design-vue'
  }
})