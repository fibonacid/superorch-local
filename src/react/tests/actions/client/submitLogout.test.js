import { actionTypes } from "../../../actions/actionTypes";
import { c_submitLogout } from "../../../actions/client/submitLogout";

describe("c_submitLogout action", () => {
  it("should create an action to submit a logout request", () => {
    const userId = 0;
    expect(c_submitLogout(userId)).toEqual({
      type: actionTypes.C_SUBMIT_LOGOUT,
      userId
    });
  });
});
