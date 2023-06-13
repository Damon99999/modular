define(function (require, exports, module) {
    var module1 = require('./module1')
    module1.show()
    // 暴露对象
    module.exports = {
      msg: 'module2'
    }
  })
  