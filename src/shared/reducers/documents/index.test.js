import reducer, { selectDocument } from "./index";
import { actionTypes } from "../../actions/actionTypes";

describe("documents reducer", () => {
  it.skip("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle CREATE_DOCUMENT", () => {
    expect(
      reducer([], {
        type: actionTypes.CREATE_DOCUMENT,
        docId: 0,
        docData: { foo: "bar" }
      })
    ).toMatchObject([{ id: 0, foo: "bar" }]);
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
          docId: 0,
          docData: { modified: true }
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
        docId: 1
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle REPLACE_DOCUMENT_LIST", () => {
    const docList = [{ id: 10 }, { id: 11 }];
    expect(
      reducer([{ id: 1 }, { id: 2 }], {
        type: actionTypes.REPLACE_DOCUMENT_LIST,
        docList
      })
    ).toEqual(docList);
  });

  it("should handle DESTROY_USER", () => {
    const userId = 10;
    expect(
      reducer(
        [
          { id: 0, userId: 10 },
          { id: 1, userId: 11 }
        ],
        {
          type: actionTypes.DESTROY_USER,
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
