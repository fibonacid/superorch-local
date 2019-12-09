import reducer, { selectDocument } from "../../../reducers/chat/documents";
import { actionTypes } from "../../../actions/actionTypes";

describe("documents reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle C_CREATE_DOCUMENT", () => {
    expect(
      reducer([], {
        type: actionTypes.C_CREATE_DOCUMENT,
        documentId: 0,
        documentData: { foo: "bar" }
      })
    ).toEqual([{ id: 0, foo: "bar" }]);
  });

  it("should handle S_CREATE_DOCUMENT", () => {
    expect(
      reducer([], {
        type: actionTypes.S_CREATE_DOCUMENT,
        documentId: 0,
        documentData: { foo: "bar" }
      })
    ).toEqual([{ id: 0, foo: "bar" }]);
  });

  it("should handle C_UPDATE_DOCUMENT", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.C_UPDATE_DOCUMENT,
          documentId: 0,
          documentData: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle S_UPDATE_DOCUMENT", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.S_UPDATE_DOCUMENT,
          documentId: 0,
          documentData: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle C_DELETE_DOCUMENT", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.C_DELETE_DOCUMENT,
        documentId: 1
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle S_DELETE_DOCUMENT", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.S_DELETE_DOCUMENT,
        documentId: 1
      })
    ).toEqual([{ id: 0 }]);
  });
});

describe("selectDocument", () => {
  it("should select a document by id", () => {
    expect(selectDocument([{ id: 0 }, { id: 1 }], 1)).toEqual({ id: 1 });
  });
});
