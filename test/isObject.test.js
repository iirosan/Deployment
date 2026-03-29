import isObject from "../src/isObject.js";

test("isObject tunnistaa objektit", () => {
  expect(isObject({})).toBe(true);
  expect(isObject([1, 2, 3])).toBe(true);
  expect(isObject(null)).toBe(false);
  expect(isObject(10)).toBe(false);
});
