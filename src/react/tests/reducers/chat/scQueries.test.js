import reducer from "../../../reducers/chat/scQueries";
import { actionTypes } from "../../../actions/actionTypes";

describe("scQueries reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_SC_QUERY", () => {
    const id = 1;
    const data = { name: "bar" };
    expect(
      reducer([{ id: 0, name: "foo" }], {
        type: actionTypes.ADD_SC_QUERY,
        id,
        data
      })
    );
  });

  it("should handle UPDATE_SC_QUERY", () => {
    const id = 0;
    const data = { name: "foo" };
    expect(
      reducer(
        [
          { id: 0, name: "" },
          { id: 1, name: "" }
        ],
        {
          type: actionTypes.UPDATE_SC_QUERY,
          id,
          data
        }
      )
    ).toEqual([
      { id: 0, name: "foo" },
      { id: 1, name: "" }
    ]);
  });

  it("should handle DELETE_SC_QUERY", () => {
    const id = 0;
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.DELETE_SC_QUERY,
        id
      })
    ).toEqual([{ id: 1 }]);
  });
});
