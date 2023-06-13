// main.js文件
(function() {
  // 配置
  require.config({
    // baseUrl: 'modules/', // 基础地址，如果配置该参数路径指向就会从根目录开始
    paths: {
      // 映射: 模块标识名: 路径
      module1: './module1',
      module2: './module2',
      jquery: './libs/jquery'
    }
  })
  require(['module2'], function(module2) {
    module2.showModule2()
  })
})()

