import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  test("muuttaa sanan alkukirjaimen isoksi ja loput pieniksi", () => {
    expect(capitalize("FRED")).toBe("Fred");
  });
  test("toimii tyhjällä merkkijonolla", () => {
    expect(capitalize("")).toBe("");
  });
});
