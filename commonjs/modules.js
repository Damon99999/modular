
var aaa = 10
function fff() {
  aaa = aaa + 5
}
module.exports = {
  aaa,
  a:1,
  b:2,
  c(){
    return this.a + this.b + 3
  },
  d: {
    e:1
  },
  fff,
  f() {
    this.aaa = this.aaa + 10
  }
}
   