import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  test("tunnistaa tyhjän objektin", () => {
    expect(isEmpty({})).toBe(true);
  });
  test("tunnistaa että täysi taulukko ei ole tyhjä", () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });
  test("tunnistaa nullin tyhjäksi", () => {
    expect(isEmpty(null)).toBe(true);
  });
});
