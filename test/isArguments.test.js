import isArguments from "../src/isArguments.js";

describe("isArguments", () => {
  test("tunnistaa arguments-objektin", () => {
    expect(
      isArguments(
        (function () {
          return arguments;
        })(),
      ),
    ).toBe(true);
  });
  test("tunnistaa että taulukko ei ole arguments", () => {
    expect(isArguments([1, 2, 3])).toBe(false);
  });
});
