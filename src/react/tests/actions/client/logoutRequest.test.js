import { actionTypes } from "../../../actions/actionTypes";
import { c_logoutRequest } from "../../../actions/client/logoutRequest";

describe("c_logoutRequest action", () => {
  it("should create an action to submit a logout request", () => {
    const userId = 0;
    expect(c_logoutRequest(userId)).toEqual({
      type: actionTypes.C_LOGOUT_REQUEST,
      userId
    });
  });
});
