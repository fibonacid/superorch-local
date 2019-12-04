import documents, { initialState } from "../../reducers/chat/documents";
import { actionTypes } from "../../actions/actionTypes";

describe("documents (Reducer)", () => {
  it("Should return the initial state", () => {
    const result = documents(undefined, { type: "foo" });
    expect(result).toEqual(initialState);
  });

  describe("When state is empty", () => {
    it("Handles ADD_DOCUMENT action", () => {
      const result = documents(undefined, {
        type: actionTypes.ADD_DOCUMENT,
        id: 1
      });
      const expectedResult = [{ id: 1, state: "" }];
      expect(result).toEqual(expectedResult);
    });
  });

  describe("When state is already populated", () => {
    it("Handles ADD_DOCUMENT_ACTION", () => {
      const result = documents([{ id: 1, state: "" }], {
        type: actionTypes.ADD_DOCUMENT,
        id: 2
      });
      expect(result).toEqual([
        { id: 1, state: "" },
        { id: 2, state: "" }
      ]);
    });
  });
});
