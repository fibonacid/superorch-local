import reducer from "../../../reducers/chat/users";
import { actionTypes } from "../../../actions/actionTypes";

describe("users reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_USER", () => {
    const id = 1;
    const data = { name: "bar" };
    expect(
      reducer([{ id: 0, name: "foo" }], {
        type: actionTypes.ADD_USER,
        id,
        data
      })
    );
  });

  it("should handle UPDATE_USER", () => {
    const id = 0;
    const data = { name: "foo" };
    expect(
      reducer(
        [
          { id: 0, name: "" },
          { id: 1, name: "" }
        ],
        {
          type: actionTypes.UPDATE_USER,
          id,
          data
        }
      )
    ).toEqual([
      { id: 0, name: "foo" },
      { id: 1, name: "" }
    ]);
  });

  it("should handle DELETE_USER", () => {
    const id = 0;
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.DELETE_USER,
        id
      })
    ).toEqual([{ id: 1 }]);
  });

  it("should handle WS_GET_USER_LIST_SUCCESS", () => {
    const userList = [{ id: 100 }, { id: 101 }, { id: 103 }];
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.WS_GET_USER_LIST_SUCCESS,
        userList
      })
    ).toEqual(userList);
  });
});
