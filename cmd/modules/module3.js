define(function (require, exports, module) {
  var module2 = require('./module2')
  console.log('module2:', module2.msg)
  var msg = 'module3'
  module.exports = msg
})
  