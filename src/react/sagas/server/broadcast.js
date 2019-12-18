import { channels } from "../../../shared/constants";
import { takeLatest, select, all, call } from "redux-saga/effects";
import { actionTypes } from "../../actions/actionTypes";
import { selectClients } from "../../reducers/root";

export function* s_broadcastWatcher() {
  yield takeLatest(actionTypes.S_BROADCAST, s_broadcastSaga);
}

export function* s_broadcastSaga({ clientId, message }) {
  const { ipcRenderer } = window;
  // Send to electron main process
  if (ipcRenderer) {
    // Get all clients
    const clients = yield select(state => selectClients(state));

    // Transmit to all logged in excepts the sender.
    yield all(
      clients
        .filter(client => client.isLoggedIn && client.id !== clientId)
        .map(client =>
          call(ipcRenderer.send, channels.WEBSOCKET_TRANSMIT, {
            clientId: client.id,
            message
          })
        )
    );
  }
}
