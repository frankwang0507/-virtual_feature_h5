const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9000
    // proxy: {
    //   '/api': {
    //     target: 'http://locahost:8080',
    //     changeOrigin: true
    //   }
    // }
  }
  // css: {
  //   loaderOptions: {
  //     css: {},
  //     postcss: {
  //       plugins: [
  //         px2rem({
  //           rootValue: 75, // 如果设计稿是750px宽，则设置为75
  //           propList: ['px'], // 需要转换的属性，* 表示所有属性都转换
  //           unitPrecision: 5 // rem 的小数点位数
  //         })
  //       ]
  //     }
  //   }
  // }
});
