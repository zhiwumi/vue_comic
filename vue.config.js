const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        // 匹配所有以 '/api'开头的请求路径
        target: 'https://www.kuaikanmanhua.com', // 代理目标的基础路径
        changeOrigin: true,
        // 把路径的 /api 替换为空串
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
