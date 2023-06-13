define(function (require, exports, module) {
    var msg = 'module1'
    function show() {
      console.log('module1:', msg)
    }
    // 单一暴露
    exports.show = show
  })
  