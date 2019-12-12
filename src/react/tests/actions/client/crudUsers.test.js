import { actionTypes } from "../../../actions/actionTypes";
import {
  c_createUser,
  c_deleteUser,
  c_destroyUser,
  c_replaceUserList,
  c_updateUser
} from "../../../actions/client/crudUsers";

describe("c_createUser action", () => {
  it("should create an action to create a new user", () => {
    const userId = 0;
    const userData = {};
    expect(c_createUser(userId, userData)).toEqual({
      type: actionTypes.C_CREATE_USER,
      userId,
      userData
    });
  });
});

describe("c_updateUser action", () => {
  it("should create an action to update the user", () => {
    const userId = 0;
    const userData = {};
    expect(c_updateUser(userId, userData)).toEqual({
      type: actionTypes.C_UPDATE_USER,
      userId,
      userData
    });
  });
});

describe("c_deleteUser action", () => {
  it("should create an action to delete a user", () => {
    const userId = 0;
    expect(c_deleteUser(userId)).toEqual({
      type: actionTypes.C_DELETE_USER,
      userId
    });
  });
});

describe("c_destroyUser action", () => {
  it("should create an action to destroy a user", () => {
    const userId = 0;
    const expectedAction = {
      type: actionTypes.C_DESTROY_USER,
      userId
    };
    expect(c_destroyUser(userId)).toEqual(expectedAction);
  });
});

describe("c_replaceUserList action", () => {
  it("should create an action to replace a list of users", () => {
    const userList = {};
    const expectedAction = {
      type: actionTypes.C_REPLACE_USER_LIST,
      userList
    };
    expect(c_replaceUserList(userList)).toEqual(expectedAction);
  });
});
