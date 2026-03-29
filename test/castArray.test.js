import castArray from "../src/castArray.js";

describe("castArray", () => {
  test("käärii arvon taulukkoon", () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
    expect(castArray("abc")).toEqual(["abc"]);
  });
  test("palauttaa taulukon sellaisenaan", () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });
  test("palauttaa tyhjän taulukon jos ei anneta argumentteja", () => {
    expect(castArray()).toEqual([]);
  });
});
