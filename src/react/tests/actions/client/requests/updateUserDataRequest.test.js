import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_updateUserDataError,
  c_updateUserDataRequest,
  c_updateUserDataSuccess,
  c_updateUserDataTimeout
} from "../../../../actions/client/requests/updateUserDataRequest";

describe("c_updateUserDataRequest action", () => {
  it("should create an action to submit a updateUser request", () => {
    const userData = { foo: "bar" };
    expect(c_updateUserDataRequest(userData)).toEqual({
      type: actionTypes.C_UPDATE_USER_DATA_REQUEST,
      userData
    });
  });
});

describe("c_updateUserDataSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const message = "";
    expect(c_updateUserDataSuccess(message)).toEqual({
      type: actionTypes.C_UPDATE_USER_DATA_SUCCESS,
      message
    });
  });
});

describe("c_updateUserDataError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_updateUserDataError(error)).toEqual({
      type: actionTypes.C_UPDATE_USER_DATA_ERROR,
      error
    });
  });
});

describe("c_updateUserDataTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_updateUserDataTimeout(message)).toEqual({
      type: actionTypes.C_UPDATE_USER_DATA_TIMEOUT,
      message
    });
  });
});
