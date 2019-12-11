import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_loginSuccess,
  s_loginError
} from "../../../../actions/server/responses/loginResponse";

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
    const error = new Error();
    expect(s_loginError(error)).toEqual({
      type: actionTypes.S_LOGIN_ERROR,
      error
    });
  });
});
