import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_logoutSuccess,
  s_logoutError
} from "../../../../actions/server/responses/logoutReponse";
import { statusCodes } from "../../../../utils/constants";

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
    const status = 500;
    const message = statusCodes[500];
    expect(s_logoutError(status, message)).toEqual({
      type: actionTypes.S_LOGOUT_ERROR,
      error: { status, message }
    });
  });
});
