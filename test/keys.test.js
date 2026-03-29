import keys from "../src/keys.js";

describe("keys", () => {
  test("palauttaa objektin avaimet", () => {
    const obj = { a: 1, b: 2 };
    expect(keys(obj)).toEqual(["a", "b"]);
  });
  test("toimii tyhjällä objektilla", () => {
    expect(keys({})).toEqual([]);
  });
});
