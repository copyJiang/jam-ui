const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    port: 9824,
    open: true,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // }
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')// 定义一个名叫 js 的规则
      .include// 设置当前规则的作用目录，只在当前目录下才执行当前规则
      .add('/packages')
      .end()
      .use('babel') // 指定一个名叫 babel 的 loader 配置
      .loader('babel-loader')// 该配置使用 babel-loader 作为处理 loader
  }
}