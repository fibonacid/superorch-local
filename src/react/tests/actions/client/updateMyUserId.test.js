import { actionTypes } from "../../../actions/actionTypes";
import { c_updateMyUserId } from "../../../actions/client/updateMyUserId";

describe("updateMyUserId action", () => {
  it("should create an action to update my user id", () => {
    const newId = 99;
    expect(c_updateMyUserId(newId)).toEqual({
      type: actionTypes.C_UPDATE_MY_USER_ID,
      newId
    });
  });
});
