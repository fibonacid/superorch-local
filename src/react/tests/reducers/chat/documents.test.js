import reducer, { selectDocument } from "../../../reducers/chat/documents";
import { actionTypes } from "../../../actions/actionTypes";

describe("documents reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle CREATE_DOCUMENT", () => {
    expect(
      reducer([], {
        type: actionTypes.CREATE_DOCUMENT,
        document: { id: 0 }
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle UPDATE_DOCUMENT", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.UPDATE_DOCUMENT,
          id: 0,
          data: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle DELETE_DOCUMENT", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.DELETE_DOCUMENT,
        id: 1
      })
    ).toEqual([{ id: 0 }]);
  });
});

describe("selectDocument", () => {
  it("should select a document by id", () => {
    expect(selectDocument([{ id: 0 }, { id: 1 }], 1)).toEqual({ id: 1 });
  });
});
