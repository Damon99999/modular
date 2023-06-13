
define(function (require, exports, module) {
  // 异步
  require.async('./module3', function (module3) {
    console.log('异步模块3:', module3)
  })
  var module4 = 'module4'
  function show() {
    console.log('module4:', module4)
  }
  exports.show = show
})
  