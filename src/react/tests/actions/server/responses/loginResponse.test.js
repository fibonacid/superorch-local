import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_loginSuccess,
  s_loginError
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
