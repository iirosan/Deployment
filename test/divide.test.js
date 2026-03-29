import divide from "../src/divide.js";

describe("divide", () => {
  test("jakaa kaksi lukua oikein", () => {
    expect(divide(6, 4)).toBe(1.5);
  });
  test("palauttaa oletusarvon jos jaetaan nollalla (jos toteutus sallii)", () => {
    // Huom: Jotkut kirjastot palauttavat NaN tai Infinity, testaa mikä pätee
    expect(divide(6, 0)).toBe(Infinity);
  });
});
