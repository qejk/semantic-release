const {add, subtract, multiply} = require(".");

describe("tests", () => {
  test("add", () => {
    expect(add(1, 2)).toEqual(3);
  });

  test("subtract", () => {
    expect(subtract(2, 1)).toEqual(1);
  });
  test("subtract", () => {
    expect(multiply(2, 2)).toEqual(4);
  });
});
