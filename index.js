function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function increment(a) {
  return a + 1;
}
function decrement(a) {
  return a - 1;
}
function pow(a, b) {
  return Math.pow(a, b);
}
function pi() {
  return Math.PI;
}
function equal(a, b) {
  return a === b;
}
function notEqual(a, b) {
  return a !== b;
}
function squareRoot(a) {
  return a * a;
}

const baz = "baz";
const quax = "quax";

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  increment,
  decrement,
  pow,
  pi,
  equal,
  notEqual,
  squareRoot,
  baz,
  quax,
};
