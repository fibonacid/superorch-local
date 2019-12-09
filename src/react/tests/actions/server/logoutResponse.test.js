import { actionTypes } from "../../../actions/actionTypes";
import {
  s_logoutSuccess,
  s_logoutError
} from "../../../actions/server/logoutReponse";

describe("s_logoutSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    const userId = 0;
    expect(s_logoutSuccess(userId)).toEqual({
      type: actionTypes.S_LOGOUT_SUCCESS,
      userId
    });
  });
});

describe("s_logoutError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const error = new Error();
    expect(s_logoutError(error)).toEqual({
      type: actionTypes.S_LOGOUT_ERROR,
      error
    });
  });
});
