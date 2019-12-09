import reducer, { selectClient } from "../../../reducers/chat/clients";
import { actionTypes } from "../../../actions/actionTypes";

describe("clients reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle CREATE_CLIENT", () => {
    expect(
      reducer([], {
        type: actionTypes.CREATE_CLIENT,
        client: { id: 0 }
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle UPDATE_CLIENT", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.UPDATE_CLIENT,
          id: 0,
          data: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle DELETE_CLIENT", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.DELETE_CLIENT,
        id: 1
      })
    ).toEqual([{ id: 0 }]);
  });
});

describe("selectClient", () => {
  it("should select a client by id", () => {
    expect(selectClient([{ id: 0 }, { id: 1 }], 1)).toEqual({ id: 1 });
  });
});
