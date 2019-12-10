import { actionTypes } from "../../../actions/actionTypes";
import { s_broadcast } from "../../../actions/server/broadcast";

describe("s_broadcast action", () => {
  it("should create an action to broadcast a message", () => {
    const clientId = 0;
    const message = "test";
    expect(s_broadcast(clientId, message)).toEqual({
      type: actionTypes.S_BROADCAST,
      clientId,
      message
    });
  });
});
