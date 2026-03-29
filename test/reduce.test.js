import reduce from "../src/reduce.js";

describe("reduce", () => {
  test("summaa taulukon luvut", () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
  });
  test("toimii objektin kanssa", () => {
    const result = reduce(
      { a: 1, b: 2 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {},
    );
    expect(result).toEqual({ 1: ["a"], 2: ["b"] });
  });
});
