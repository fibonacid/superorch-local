import { actionTypes } from "../actionTypes";
import { displayUser } from "./index";

describe("displayUser action", () => {
  it("should create an action to digest app credits", () => {
    const userId = 0;
    expect(displayUser(userId)).toEqual({
      type: actionTypes.DISPLAY_USER,
      userId
    });
  });
});
