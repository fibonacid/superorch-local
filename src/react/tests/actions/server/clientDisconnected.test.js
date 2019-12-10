import { actionTypes } from "../../../actions/actionTypes";
import { s_clientDisconnected } from "../../../actions/server/clientDisconnected";

describe("s_clientDisconnected action", () => {
  it("should create an action to communicate that a client has disconnected", () => {
    const clientId = 0;
    expect(s_clientDisconnected(clientId)).toEqual({
      type: actionTypes.S_CLIENT_DISCONNECTED,
      clientId
    });
  });
});
