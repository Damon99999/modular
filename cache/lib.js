// lib.js
var counter = 3;
function incCounter() {
  counter = counter + 1;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};