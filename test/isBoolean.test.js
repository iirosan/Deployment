import isBoolean from "../src/isBoolean.js";

describe("isBoolean", () => {
  test("tunnistaa true ja false", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });
  test("tunnistaa, että numero ei ole boolean", () => {
    expect(isBoolean(1)).toBe(false);
  });
});
