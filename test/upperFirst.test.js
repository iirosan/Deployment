import upperFirst from "../src/upperFirst.js";

describe("upperFirst", () => {
  test("muuttaa ensimmäisen kirjaimen isoksi", () => {
    expect(upperFirst("fred")).toBe("Fred");
  });
  test("säilyttää jo ison kirjaimen", () => {
    expect(upperFirst("FRED")).toBe("FRED");
  });
});
