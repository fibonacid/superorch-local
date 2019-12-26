import reducer from "./index";

describe("errors reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toBeDefined();
  });
});
