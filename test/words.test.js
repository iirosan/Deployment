import words from "../src/words.js";

describe("words", () => {
  test("jakaa lauseen sanoiksi", () => {
    expect(words("fred, barney, & pebbles")).toEqual([
      "fred",
      "barney",
      "pebbles",
    ]);
  });
  test("toimii custom regexistä", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).toEqual([
      "fred",
      "barney",
      "&",
      "pebbles",
    ]);
  });
});
