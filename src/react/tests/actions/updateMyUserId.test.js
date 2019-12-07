import { actionTypes } from "../../actions/actionTypes";
import { updateMyUserId } from "../../actions/updateMyUserId";

describe("updateMyUserId action", () => {
  it("should create an action to update my user id", () => {
    const newId = 99;
    expect(updateMyUserId(newId)).toEqual({
      type: actionTypes.UPDATE_MY_USER_ID,
      newId
    });
  });
});
