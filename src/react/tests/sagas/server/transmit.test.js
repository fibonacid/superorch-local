import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../actions/actionTypes";
import { s_transmitWatcher } from "../../../sagas/server/transmit";
import { ipcRenderer } from "../../mocks/electron";
import { channels } from "../../../../shared/constants";

beforeEach(() => {
  window.ipcRenderer = ipcRenderer;
});

describe("s_transmit", () => {
  it("should transmit the message to a specific client", () => {
    const clientId = 0;
    const message = "test";
    return (
      expectSaga(s_transmitWatcher)
        .withState({
          server: {
            clients: [{ id: 0 }, { id: 1 }, { id: 2 }]
          }
        })
        .call(ipcRenderer.send, channels.WEBSOCKET_TRANSMIT, {
          clientId: 0,
          message
        })
        .not.call(ipcRenderer.send, channels.WEBSOCKET_TRANSMIT, {
          clientId: 1,
          message
        })
        .not.call(ipcRenderer.send, channels.WEBSOCKET_TRANSMIT, {
          clientId: 2,
          message
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.S_TRANSMIT,
          clientId,
          message
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
});
