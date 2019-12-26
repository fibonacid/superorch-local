import { actionTypes } from "../actionTypes";
import { updateMyUserId } from "./index";

describe("updateMyUserId action", () => {
  it("should create an action to update my user id", () => {
    const userId = 99;
    expect(updateMyUserId(userId)).toEqual({
      type: actionTypes.UPDATE_MY_USER_ID,
      userId
    });
  });
});
