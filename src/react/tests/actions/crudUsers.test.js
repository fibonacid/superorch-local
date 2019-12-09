import { actionTypes } from "../../actions/actionTypes";
import {
  createUser,
  deleteUser,
  destroyUser,
  updateUser
} from "../../actions/crudUsers";

describe("createUser action", () => {
  it("should create an action to create a new user", () => {
    const id = 0;
    const data = {};
    expect(createUser(id, data)).toEqual({
      type: actionTypes.CREATE_USER,
      id,
      data
    });
  });
});

describe("updateUser action", () => {
  it("should create an action to update the user", () => {
    const id = 0;
    const data = {};
    expect(updateUser(id, data)).toEqual({
      type: actionTypes.UPDATE_USER,
      id,
      data
    });
  });
});

describe("deleteUser action", () => {
  it("should create an action to delete a user", () => {
    const id = 0;
    expect(deleteUser(id)).toEqual({
      type: actionTypes.DELETE_USER,
      id
    });
  });
});

describe("destroyUser action", () => {
  it("should create an action to destroy a user", () => {
    const id = 0;
    const expectedAction = {
      type: actionTypes.DESTROY_USER,
      id
    };
    expect(destroyUser(id)).toEqual(expectedAction);
  });
});
