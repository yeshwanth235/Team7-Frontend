const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      "^/api/Products": {
        target: "http://10.20.5.19:9090",
        changeOrigin: true,
        pathRewrite: {"^/api": ""},
      },
      "^/api/Merchant" : {
        target: "http://10.20.5.19:9092",
        changeOrigin: true,
        pathRewrite: {"^/api": ""},
      },
      "^/api/cart" : {
        target: "http://10.20.5.52:9999/",
        changeOrigin: true,
        pathRewrite: {"^/api" : ""},
      }
    }
  }
})
