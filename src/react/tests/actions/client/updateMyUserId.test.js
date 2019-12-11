import { actionTypes } from "../../../actions/actionTypes";
import { c_updateMyUserId } from "../../../actions/client/updateMyUserId";

describe("c_updateMyUserId action", () => {
  it("should create an action to update my user id", () => {
    const userId = 99;
    expect(c_updateMyUserId(userId)).toEqual({
      type: actionTypes.C_UPDATE_MY_USER_ID,
      userId
    });
  });
});
