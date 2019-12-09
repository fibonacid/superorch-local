import { actionTypes } from "../../../actions/actionTypes";
import {
  s_createUser,
  s_deleteUser,
  s_destroyUser,
  s_updateUser
} from "../../../actions/server/crudUsers";

describe("s_createUser action", () => {
  it("should create an action to create a new user", () => {
    const userId = 0;
    const userData = {};
    expect(s_createUser(userId, userData)).toEqual({
      type: actionTypes.S_CREATE_USER,
      userId,
      userData
    });
  });
});

describe("s_updateUser action", () => {
  it("should create an action to update the user", () => {
    const userId = 0;
    const userData = {};
    expect(s_updateUser(userId, userData)).toEqual({
      type: actionTypes.S_UPDATE_USER,
      userId,
      userData
    });
  });
});

describe("s_deleteUser action", () => {
  it("should create an action to delete a user", () => {
    const userId = 0;
    expect(s_deleteUser(userId)).toEqual({
      type: actionTypes.S_DELETE_USER,
      userId
    });
  });
});

describe("s_destroyUser action", () => {
  it("should create an action to destroy a user", () => {
    const userId = 0;
    const expectedAction = {
      type: actionTypes.S_DESTROY_USER,
      userId
    };
    expect(s_destroyUser(userId)).toEqual(expectedAction);
  });
});
