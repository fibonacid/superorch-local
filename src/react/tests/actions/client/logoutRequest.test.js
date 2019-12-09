import { actionTypes } from "../../../actions/actionTypes";
import {
  c_logoutRequest,
  c_logoutRequestTimeout
} from "../../../actions/client/logoutRequest";

describe("c_logoutRequest action", () => {
  it("should create an action to submit a logout request", () => {
    const userId = 0;
    expect(c_logoutRequest(userId)).toEqual({
      type: actionTypes.C_LOGOUT_REQUEST,
      userId
    });
  });
});

describe("c_logoutRequestTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_logoutRequestTimeout(message)).toEqual({
      type: actionTypes.C_LOGOUT_REQUEST_TIMEOUT,
      message
    });
  });
});
