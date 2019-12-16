import { actionTypes } from "../../actions/actionTypes";
import { displayUser } from "../../actions/displayUser";

describe("displayUser action", () => {
  it("should create an action to digest app credits", () => {
    const userId = 0;
    expect(displayUser(userId)).toEqual({
      type: actionTypes.DISPLAY_USER,
      userId
    });
  });
});
