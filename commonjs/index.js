let fs = require('fs')
let path = require('path')
// v8虚拟机
let vm = require('vm')
function Module(p){
 // 当前模块的标识（绝对路径作为模块的key）
 this.id = p
 // 模块将挂载到exports属性上
 this.exports = {}
}
// js文件自加载的包装类，类似eval或者是settimeout
Module._wrapper = ['(function(exports,require,module){', '})']
//所有的加载策略
Module._extensions = {
 '.js': function(module){
  // 将模块用字符串拼接的形式包入一个函数中
  let fn = Module._wrapper[0] + fs.readFileSync(module.id,'utf8') + Module._wrapper[1]
  // 将fn挂载在module.exports上，同时传入参数
  vm.runInThisContext(fn).call(module.exports, module.exports, req, module)
  // 返回
  return module.exports
 },
 '.json': function(module){
  // 如果匹配到的扩展是json，直接返回该模块
  return JSON.parse(fs.readFileSync(module.id,'utf8'))
 },
 '.node': 'xxx',
}
// 缓存对象
Module._catcheModule = {}
// 输入相对路径或模块名称，返回一个绝对路径
Module._resolveFileName = function(moduleId){
 let p = path.resolve(moduleId)
 // 通过路径直接去找该文件
 try{
  // 验证权限，有就返回
  fs.accessSync(p)
  // 找到直接返回  
  return p
 }catch(e){
  console.log(e)
 }
 //对象中所有的key做成一个数组[]
 let arr = Object.keys(Module._extensions)
 // 以上找不到的时候，加后缀再找
 for(let i=0; i<arr.length; i++){
  // 拼接完整路径
  let file = p+arr[i]
  try{
   fs.accessSync(file)   
   return file
  }catch(e){
   console.log(e)
  }
 }
}

Module.prototype.load = function (abPath) {
 // 获取扩展名
 let ext = path.extname(abPath);
 // 找对应的扩展方法，并注入该模块对象
 let content = Module._extensions[ext](this);
 return content;
}

// require方法
function req(moduleId){
 // 得到绝对路径
 let p = Module._resolveFileName(moduleId)
 // 查缓存
 if(Module._catcheModule[p]){
  // 存在返回
  return Module._catcheModule[p].exports
 }
 // 没有缓存创建一个
 let module = new Module(p)
 Module._catcheModule[p] = module
 //加载模块
 module.exports = module.load(p)
 return module.exports
}

let part = require('./modules.js')
console.log('a:', part.aaa)
console.log('f:', part.fff())
console.log('a:', part.aaa)
console.log('a:', part.a)
console.log('f:', part.f())
console.log('aaa:', part.aaa)
console.log('f:', part.fff())
console.log('aaa:', part.aaa)

// var counter = require('./lib').counter;
// var incCounter = require('./lib').incCounter;

// console.log(counter);  // 3
// incCounter();
// console.log(counter); // 3
