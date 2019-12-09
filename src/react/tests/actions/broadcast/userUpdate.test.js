import { actionTypes } from "../../../actions/actionTypes";
import { b_userUpdate } from "../../../actions/broadcast/userUpdate";

describe("b_userUpdate action", () => {
  it("should create an action to update a user", () => {
    const userId = 0;
    const userData = {};
    const expectedAction = {
      type: actionTypes.B_USER_UPDATE,
      userId,
      userData
    };
    expect(b_userUpdate(userId, userData)).toEqual(expectedAction);
  });
});
