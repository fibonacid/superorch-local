import { actionTypes } from "../../../actions/actionTypes";
import { s_transmit } from "../../../actions/server/transmit";

describe("s_transmit action", () => {
  it("should create an action to transmit a message", () => {
    const clientId = 0;
    const message = "test";
    expect(s_transmit(clientId, message)).toEqual({
      type: actionTypes.S_TRANSMIT,
      clientId,
      message
    });
  });
});
