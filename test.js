const add = require(".");
const subtract = require(".");

describe("tests", () => {
  test("add", () => {
    expect(add(1, 2)).toEqual(3);
  });

  test("subtract", () => {
    expect(subtract(2, 1)).toEqual(1);
  });
});
