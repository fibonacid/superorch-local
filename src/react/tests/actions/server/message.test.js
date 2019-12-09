import { actionTypes } from "../../../actions/actionTypes";
import { s_message } from "../../../actions/server/message";

describe("s_message action", () => {
  it("should create an action to receive a message", () => {
    const clientId = 0;
    const message = "test";
    expect(s_message(clientId, message)).toEqual({
      type: actionTypes.S_MESSAGE,
      clientId,
      message
    });
  });
});
