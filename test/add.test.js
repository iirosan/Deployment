import add from "../src/add.js";

describe("add", () => {
  test("laskee 6 + 4 = 10", () => {
    expect(add(6, 4)).toBe(10);
  });
  test("toimii negatiivisilla luvuilla", () => {
    expect(add(-1, 5)).toBe(4);
  });
});
