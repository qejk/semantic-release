const {add, subtract, multiply, divide} = require(".");

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
});
