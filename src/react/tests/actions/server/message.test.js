import { actionTypes } from "../../../actions/actionTypes";
import { s_message, s_messageError } from "../../../actions/server/message";
import { statusCodes } from "../../../utils/constants";

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

describe("s_messageError action", () => {
  it("should create an action to create an error response", () => {
    const status = 200;
    const message = statusCodes[200];
    expect(s_messageError(status, message)).toEqual({
      type: actionTypes.S_MESSAGE_ERROR,
      error: {
        status,
        message
      }
    });
  });
});
