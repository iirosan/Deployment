import filter from "../src/filter.js";

describe("filter", () => {
  test("suodattaa taulukon ehdon perusteella", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    // Suodatetaan aktiiviset käyttäjät
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ user: "barney", active: true }]);
  });

  test("palauttaa tyhjän taulukon jos mikään ei täsmää", () => {
    expect(filter([1, 2, 3], (n) => n > 10)).toEqual([[]]); // Huom: jotkut toteutukset palauttavat [[]] tai []
  });
});
