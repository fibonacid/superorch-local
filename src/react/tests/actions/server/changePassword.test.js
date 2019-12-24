import { actionTypes } from "../../../actions/actionTypes";
import { s_changePassword } from "../../../actions/server/changePassword";

describe("s_changePassword action", () => {
  it("should create an action to require a password for user authentication", () => {
    const password = "test";
    expect(s_changePassword(password)).toEqual({
      type: actionTypes.S_CHANGE_PASSWORD,
      password
    });
  });
});
