import reducer, { selectScQuery } from "../../../reducers/chat/scQueries";
import { actionTypes } from "../../../actions/actionTypes";

describe("scQueries reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle C_CREATE_SC_QUERY", () => {
    expect(
      reducer([], {
        type: actionTypes.C_CREATE_SC_QUERY,
        scQueryId: 0,
        scQueryData: { foo: "bar" }
      })
    ).toEqual([{ id: 0, foo: "bar" }]);
  });

  it("should handle C_UPDATE_SC_QUERY", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.C_UPDATE_SC_QUERY,
          scQueryId: 0,
          scQueryData: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle C_DELETE_SC_QUERY", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.C_DELETE_SC_QUERY,
        scQueryId: 1
      })
    ).toEqual([{ id: 0 }]);
  });
});

describe("selectScQuery", () => {
  it("should select a supercollider query by id", () => {
    expect(selectScQuery([{ id: 0 }, { id: 1 }], 1)).toEqual({ id: 1 });
  });
});
