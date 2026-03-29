import map from "../src/map.js";

describe("map", () => {
  test("muuntaa taulukon arvot funktion avulla", () => {
    const square = (n) => n * n;
    expect(map([4, 8], square)).toEqual([16, 64]);
  });

  test("toimii tyhjällä taulukolla", () => {
    expect(map([], (n) => n)).toEqual([]);
  });
});
