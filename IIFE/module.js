(function(w, $) {
     var msg1= 'msg1'
     var msg2= 'msg2'
     function foo() {
      console.log('foo:', msg1)
     }
     function bar() {
      foo()
      console.log('bar:', msg2)
      $('body').css('background', 'lightgreen')
     }
     // 对外只暴露bar这个方法
     w.akubelaModule = { bar }
})(window, jQuery)