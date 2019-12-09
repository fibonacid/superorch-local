import { actionTypes } from "../../../actions/actionTypes";
import { c_loginRequest } from "../../../actions/client/loginRequest";

describe("c_loginRequest action", () => {
  it("should create an action to submit a login request", () => {
    const userData = {};
    expect(c_loginRequest(userData)).toEqual({
      type: actionTypes.C_LOGIN_REQUEST,
      userData
    });
  });
});
