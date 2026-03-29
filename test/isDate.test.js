import isDate from "../src/isDate.js";

describe("isDate", () => {
  test("tunnistaa oikean päivämäärän", () => {
    expect(isDate(new Date())).toBe(true);
  });

  test("tunnistaa, että merkkijono ei ole Date", () => {
    expect(isDate("Mon April 23 2012")).toBe(false);
  });
});
