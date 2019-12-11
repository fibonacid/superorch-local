import { actionTypes } from "../../../actions/actionTypes";
import {
  c_updateUserError,
  c_updateUserRequest,
  c_updateUserSuccess,
  c_updateUserTimeout
} from "../../../actions/client/updateUserRequest";

describe("c_updateUserRequest action", () => {
  it("should create an action to submit a updateUser request", () => {
    const userData = { foo: "bar" };
    expect(c_updateUserRequest(userData)).toEqual({
      type: actionTypes.C_UPDATE_USER_REQUEST,
      userData
    });
  });
});

describe("c_updateUserSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const message = "";
    expect(c_updateUserSuccess(message)).toEqual({
      type: actionTypes.C_UPDATE_USER_SUCCESS,
      message
    });
  });
});

describe("c_updateUserError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_updateUserError(error)).toEqual({
      type: actionTypes.C_UPDATE_USER_ERROR,
      error
    });
  });
});

describe("c_updateUserTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_updateUserTimeout(message)).toEqual({
      type: actionTypes.C_UPDATE_USER_TIMEOUT,
      message
    });
  });
});
