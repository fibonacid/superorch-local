import { actionTypes } from "../actionTypes";
import {
  createUser,
  deleteUser,
  destroyUser,
  replaceUserList,
  updateUser
} from "./index";

describe("createUser action", () => {
  it("should create an action to create a new user", () => {
    const userId = 0;
    const userData = {};
    expect(createUser(userId, userData)).toEqual({
      type: actionTypes.CREATE_USER,
      userId,
      userData
    });
  });
});

describe("updateUser action", () => {
  it("should create an action to update the user", () => {
    const userId = 0;
    const userData = {};
    expect(updateUser(userId, userData)).toEqual({
      type: actionTypes.UPDATE_USER,
      userId,
      userData
    });
  });
});

describe("deleteUser action", () => {
  it("should create an action to delete a user", () => {
    const userId = 0;
    expect(deleteUser(userId)).toEqual({
      type: actionTypes.DELETE_USER,
      userId
    });
  });
});

describe("destroyUser action", () => {
  it("should create an action to destroy a user", () => {
    const userId = 0;
    const expectedAction = {
      type: actionTypes.DESTROY_USER,
      userId
    };
    expect(destroyUser(userId)).toEqual(expectedAction);
  });
});

describe("replaceUserList action", () => {
  it("should create an action to replace a list of users", () => {
    const userList = {};
    const expectedAction = {
      type: actionTypes.REPLACE_USER_LIST,
      userList
    };
    expect(replaceUserList(userList)).toEqual(expectedAction);
  });
});
