import { actionTypes } from "../../../actions/actionTypes";
import {
  c_loginRequest,
  c_loginRequestTimeout
} from "../../../actions/client/loginRequest";

describe("c_loginRequest action", () => {
  it("should create an action to submit a login request", () => {
    const userData = {};
    expect(c_loginRequest(userData)).toEqual({
      type: actionTypes.C_LOGIN_REQUEST,
      userData
    });
  });
});

describe("c_loginRequestTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_loginRequestTimeout(message)).toEqual({
      type: actionTypes.C_LOGIN_REQUEST_TIMEOUT,
      message
    });
  });
});
