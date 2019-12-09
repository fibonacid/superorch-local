import { actionTypes } from "../../../actions/actionTypes";
import { wsUserUpdate } from "../../../actions/client/userUpdate";

describe("wsUserUpdate action", () => {
  it("should create an action to send a user update to the server", () => {
    const userId = 0;
    const diff = {};
    expect(wsUserUpdate(userId, diff)).toEqual({
      type: actionTypes.WS_USER_UPDATE,
      userId,
      diff
    });
  });
});
