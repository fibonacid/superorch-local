import { actionTypes } from "../../../actions/actionTypes";
import { s_authWithPassword } from "../../../actions/server/authWith";

describe("s_authWithPassword action", () => {
  it("should create an action to require a password for user authentication", () => {
    const flag = true;
    expect(s_authWithPassword(flag)).toEqual({
      type: actionTypes.S_AUTH_WITH_PASSWORD,
      flag
    });
  });
});
