import { actionTypes } from "../../../actions/actionTypes";
import {
  c_loginError,
  c_loginRequest,
  c_loginSuccess,
  c_loginTimeout
} from "../../../actions/client/loginRequest";

describe("c_loginRequest action", () => {
  it("should create an action to submit a login request", () => {
    expect(c_loginRequest()).toEqual({
      type: actionTypes.C_LOGIN_REQUEST
    });
  });
});

describe("c_loginSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const userId = 0;
    const message = "";
    expect(c_loginSuccess(userId, message)).toEqual({
      type: actionTypes.C_LOGIN_SUCCESS,
      userId,
      message
    });
  });
});

describe("c_loginError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_loginError(error)).toEqual({
      type: actionTypes.C_LOGIN_ERROR,
      error
    });
  });
});

describe("c_loginTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_loginTimeout(message)).toEqual({
      type: actionTypes.C_LOGIN_TIMEOUT,
      message
    });
  });
});
