import { s_serverStarted } from "../../../actions/server/serverStarted";
import { actionTypes } from "../../../actions/actionTypes";

describe("s_serverStarted action", () => {
  it("should create an action to serverStarted a message", () => {
    const data = {};
    expect(s_serverStarted(data)).toEqual({
      type: actionTypes.S_SERVER_STARTED,
      data
    });
  });
});
