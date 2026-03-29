import chunk from "../src/chunk.js";

describe("chunk", () => {
  test("jakaa taulukon osiin", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
  test("jättää loput viimeiseen osaan jos jako ei mene tasan", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });
});
