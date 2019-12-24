import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_loginSuccess,
  s_loginError,
  s_loginAuthRequired,
  s_loginAuthError,
  s_loginAuthSuccess
} from "../../../../actions/server/responses/loginResponse";
import { statusCodes } from "../../../../utils/constants";

describe("s_loginSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    const userId = 0;
    expect(s_loginSuccess(userId)).toEqual({
      type: actionTypes.S_LOGIN_SUCCESS,
      userId
    });
  });
});

describe("s_loginError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const status = 500;
    const message = statusCodes[500];
    expect(s_loginError(status, message)).toEqual({
      type: actionTypes.S_LOGIN_ERROR,
      error: { status, message }
    });
  });
});

describe("s_loginAuthRequired action", () => {
  it("should create an action to communicate that authentication is required", () => {
    expect(s_loginAuthRequired()).toEqual({
      type: actionTypes.S_LOGIN_AUTH_REQUIRED
    });
  });
});

describe("s_loginAuthRequired action", () => {
  it("should create an action to communicate that authentication succeeded", () => {
    expect(s_loginAuthSuccess()).toEqual({
      type: actionTypes.S_LOGIN_AUTH_SUCCESS
    });
  });
});

describe("s_loginAuthError action", () => {
  it("should create an action to communicate that authentication failed", () => {
    const status = 500;
    const message = statusCodes[500];
    expect(s_loginAuthError(status, message)).toEqual({
      type: actionTypes.S_LOGIN_AUTH_ERROR,
      error: { status, message }
    });
  });
});
