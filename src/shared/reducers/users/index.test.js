import reducer, { selectUser } from "./index";
import { actionTypes } from "../../actions/actionTypes";

describe("users reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle CREATE_USER", () => {
    expect(
      reducer([], {
        type: actionTypes.CREATE_USER,
        userId: 0,
        userData: { name: "foo" }
      })
    ).toEqual([{ id: 0, name: "foo" }]);
  });

  it("should handle UPDATE_USER", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.UPDATE_USER,
          userId: 0,
          userData: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle DELETE_USER", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.DELETE_USER,
        userId: 1
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle DESTROY_USER", () => {
    const userId = 0;
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.DESTROY_USER,
        userId
      })
    ).toEqual([{ id: 1 }]);
  });

  it("should handle REPLACE_USER_LIST", () => {
    const userList = [{ id: 10 }, { id: 11 }];
    expect(
      reducer([{ id: 1 }, { id: 2 }], {
        type: actionTypes.REPLACE_USER_LIST,
        userList
      })
    ).toEqual(userList);
  });

  it("should let you select a user by id", () => {
    expect(selectUser([{ id: 0 }, { id: 1 }], 1)).toEqual({ id: 1 });
  });
});
