define(['module1', 'jquery'], function (module1, $) {
    var module1 = require('./module1')
    module1.show()
    var msg = 'module2'
    // 暴露对象
    function showModule2() {
      console.log('module2:', msg)
      $('body').css('background', 'lightgreen')
    }
    return { showModule2 }
  })
  