import { actionTypes } from "../../../actions/actionTypes";
import { c_submitLogin } from "../../../actions/client/submitLogin";

describe("c_submitLogin action", () => {
  it("should create an action to submit a login request", () => {
    const userData = {};
    expect(c_submitLogin(userData)).toEqual({
      type: actionTypes.C_SUBMIT_LOGIN,
      userData
    });
  });
});
