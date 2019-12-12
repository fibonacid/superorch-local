import reducer, { selectDocument } from "../../../reducers/chat/documents";
import { actionTypes } from "../../../actions/actionTypes";

describe("documents reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([{ id: 0, value: "", userId: 0 }]);
  });

  it("should handle C_CREATE_DOCUMENT", () => {
    expect(
      reducer([], {
        type: actionTypes.C_CREATE_DOCUMENT,
        docId: 0,
        docData: { foo: "bar" }
      })
    ).toMatchObject([{ id: 0, foo: "bar" }]);
  });

  it("should handle B_DOCUMENT_OPENED", () => {
    expect(
      reducer([], {
        type: actionTypes.B_DOCUMENT_OPENED,
        docId: 0,
        docData: { foo: "bar" }
      })
    ).toMatchObject([{ id: 0, foo: "bar" }]);
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
          docId: 0,
          docData: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle B_DOCUMENT_UPDATE", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.B_DOCUMENT_UPDATE,
          docId: 0,
          docData: { modified: true }
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
        docId: 1
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle B_DOCUMENT_CLOSED", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.B_DOCUMENT_CLOSED,
        docId: 1
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle C_DESTROY_USER", () => {
    const userId = 10;
    expect(
      reducer(
        [
          { id: 0, userId: 10 },
          { id: 1, userId: 11 }
        ],
        {
          type: actionTypes.C_DESTROY_USER,
          userId
        }
      )
    ).toEqual([{ id: 1, userId: 11 }]);
  });
});

describe("selectDocument", () => {
  it("should select a document by id", () => {
    expect(selectDocument([{ id: 0 }, { id: 1 }], 1)).toEqual({ id: 1 });
  });
});
