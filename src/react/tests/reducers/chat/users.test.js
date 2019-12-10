import reducer, { selectUser } from "../../../reducers/chat/users";
import { actionTypes } from "../../../actions/actionTypes";
import name from "../../../utils/name";

describe("users reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([
      {
        id: 0,
        name
      }
    ]);
  });

  it("should handle C_CREATE_USER", () => {
    expect(
      reducer([], {
        type: actionTypes.C_CREATE_USER,
        userId: 0,
        userData: { name: "foo" }
      })
    ).toEqual([{ id: 0, name: "foo" }]);
  });

  it("should handle B_USER_JOINED", () => {
    expect(
      reducer([], {
        type: actionTypes.B_USER_JOINED,
        userId: 0,
        userData: { name: "foo" }
      })
    ).toEqual([{ id: 0, name: "foo" }]);
  });

  it("should handle C_UPDATE_USER", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.C_UPDATE_USER,
          userId: 0,
          userData: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle B_USER_UPDATE", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.B_USER_UPDATE,
          userId: 0,
          userData: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle C_DELETE_USER", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.C_DELETE_USER,
        userId: 1
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle C_DESTROY_USER", () => {
    const userId = 0;
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.C_DESTROY_USER,
        userId
      })
    ).toEqual([{ id: 1 }]);
  });

  it("should handle B_USER_LEFT", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.B_USER_LEFT,
        userId: 1
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should let you select a user by id", () => {
    expect(selectUser([{ id: 0 }, { id: 1 }], 1)).toEqual({ id: 1 });
  });
});
