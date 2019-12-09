import reducer, { selectClient } from "../../../reducers/chat/clients";
import { actionTypes } from "../../../actions/actionTypes";

describe("clients reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle S_CREATE_CLIENT", () => {
    expect(
      reducer([], {
        type: actionTypes.S_CREATE_CLIENT,
        clientId: 0,
        clientData: { foo: "bar" }
      })
    ).toEqual([{ id: 0, foo: "bar" }]);
  });

  it("should handle S_UPDATE_CLIENT", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.S_UPDATE_CLIENT,
          clientId: 0,
          clientData: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle S_DELETE_CLIENT", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.S_DELETE_CLIENT,
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
