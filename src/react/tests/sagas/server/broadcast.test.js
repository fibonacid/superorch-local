import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../actions/actionTypes";
import { s_broadcastWatcher } from "../../../sagas/server/broadcast";
import { ipcRenderer } from "../../mocks/electron";
import { channels } from "../../../../shared/constants";

beforeEach(() => {
  window.ipcRenderer = ipcRenderer;
});

describe("s_broadcastWatcher", () => {
  it("should transmit the message to all logged in clients excepts the sender", () => {
    const clientId = 0;
    const message = "test";
    return (
      expectSaga(s_broadcastWatcher)
        .withState({
          server: {
            clients: [
              { id: 0, isLoggedIn: true },
              { id: 1, isLoggedIn: true },
              { id: 2, isLoggedIn: true },
              { id: 3, isLoggedIn: false }
            ]
          }
        })
        .not.call(ipcRenderer.send, channels.WEBSOCKET_TRANSMIT, {
          clientId: 0,
          message
        })
        .call(ipcRenderer.send, channels.WEBSOCKET_TRANSMIT, {
          clientId: 1,
          message
        })
        .call(ipcRenderer.send, channels.WEBSOCKET_TRANSMIT, {
          clientId: 2,
          message
        })
        .not.call(ipcRenderer.send, channels.WEBSOCKET_TRANSMIT, {
          clientId: 3,
          message
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.S_BROADCAST,
          clientId,
          message
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
});
