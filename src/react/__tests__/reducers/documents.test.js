import documents, {
  initialState,
  selectDocument
} from "../../reducers/chat/documents";
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
    const state = [
      { id: 1, state: "" },
      { id: 2, state: "" }
    ];

    it("Handles ADD_DOCUMENT action", () => {
      const result = documents(state, {
        type: actionTypes.ADD_DOCUMENT,
        id: 3
      });
      expect(result).toEqual([
        { id: 1, state: "" },
        { id: 2, state: "" },
        { id: 3, state: "" }
      ]);
    });

    it("Handles UPDATE_DOCUMENT action", () => {
      const result = documents(state, {
        type: actionTypes.UPDATE_DOCUMENT,
        id: 2,
        data: { state: "foo" }
      });
      expect(result).toEqual([
        { id: 1, state: "" },
        { id: 2, state: "foo" }
      ]);
    });

    it("Handles DELETE_DOCUMENT action", () => {
      const result = documents(state, {
        type: actionTypes.DELETE_DOCUMENT,
        id: 2
      });
      expect(result).toEqual([{ id: 1, state: "" }]);
    });

    it("Selects a specific document", () => {
      const document = selectDocument(state, 2);
      expect(document).toEqual({ id: 2, state: "" });
    });
  });
});
