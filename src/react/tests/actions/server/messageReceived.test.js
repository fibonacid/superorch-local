import { actionTypes } from "../../../actions/actionTypes";
import { s_messageReceived } from "../../../actions/server/messageReceived";

describe("s_messageReceived action", () => {
  it("should create an action to receive a message", () => {
    const clientId = 0;
    const message = "test";
    expect(s_messageReceived(clientId, message)).toEqual({
      type: actionTypes.S_MESSAGE_RECEIVED,
      clientId,
      message
    });
  });
});
