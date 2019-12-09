import { actionTypes } from "../../../actions/actionTypes";
import { b_userJoined } from "../../../actions/broadcast/userJoined";

describe("b_userJoined action", () => {
  it("should create an action to create a new user", () => {
    const userId = 0;
    const userData = {};
    const expectedAction = {
      type: actionTypes.B_USER_JOINED,
      userId,
      userData
    };
    expect(b_userJoined(userId, userData)).toEqual(expectedAction);
  });
});
