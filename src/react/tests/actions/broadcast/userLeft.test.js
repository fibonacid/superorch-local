import { actionTypes } from "../../../actions/actionTypes";
import { b_userLeft } from "../../../actions/broadcast/userLeft";

describe("b_userLeft action", () => {
  it("should create an action to delete a user", () => {
    const userId = 0;
    const expectedAction = {
      type: actionTypes.B_USER_LEFT,
      userId
    };
    expect(b_userLeft(userId)).toEqual(expectedAction);
  });
});
