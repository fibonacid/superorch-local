import reducer, { selectScQuery } from "../../../reducers/chat/scQueries";
import { actionTypes } from "../../../actions/actionTypes";

describe("scQueries reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle CREATE_SC_QUERY", () => {
    expect(
      reducer([], {
        type: actionTypes.CREATE_SC_QUERY,
        scQuery: { id: 0 }
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle UPDATE_SC_QUERY", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.UPDATE_SC_QUERY,
          id: 0,
          data: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle DELETE_SC_QUERY", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.DELETE_SC_QUERY,
        id: 1
      })
    ).toEqual([{ id: 0 }]);
  });
});

describe("selectScQuery", () => {
  it("should select a supercollider query by id", () => {
    expect(selectScQuery([{ id: 0 }, { id: 1 }], 1)).toEqual({ id: 1 });
  });
});
