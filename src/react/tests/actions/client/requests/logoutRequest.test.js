import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_logoutError,
  c_logoutRequest,
  c_logoutSuccess,
  c_logoutTimeout
} from "../../../../actions/client/requests/logoutRequest";

describe("c_logoutRequest action", () => {
  it("should create an action to submit a logout request", () => {
    expect(c_logoutRequest()).toEqual({
      type: actionTypes.C_LOGOUT_REQUEST
    });
  });
});

describe("c_logoutSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    expect(c_logoutSuccess()).toEqual({
      type: actionTypes.C_LOGOUT_SUCCESS
    });
  });
});

describe("c_logoutError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_logoutError(error)).toEqual({
      type: actionTypes.C_LOGOUT_ERROR,
      error
    });
  });
});

describe("c_logoutTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_logoutTimeout(message)).toEqual({
      type: actionTypes.C_LOGOUT_TIMEOUT,
      message
    });
  });
});
