const {
  add,
  subtract,
  multiply,
  divide,
  increment,
  decrement,
  pow,
  pi,
} = require(".");

describe("tests", () => {
  test("add", () => {
    expect(add(1, 2)).toEqual(3);
  });

  test("subtract", () => {
    expect(subtract(2, 1)).toEqual(1);
  });
  test("multiply", () => {
    expect(multiply(2, 2)).toEqual(4);
  });
  test("divide", () => {
    expect(divide(4, 2)).toEqual(2);
  });
  test("increment", () => {
    expect(increment(4)).toEqual(5);
  });
  test("decrement", () => {
    expect(decrement(4)).toEqual(3);
  });
  test("pow", () => {
    expect(pow(2, 2)).toEqual(4);
  });
  test("pi", () => {
    expect(pi()).toEqual(Math.PI);
  });
});
