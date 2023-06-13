let part = require('./modules.js')
part.a = 10
part.b = 20
part.d.e = 100
console.log(part.a, part.b, part.c(), part.d.e)
