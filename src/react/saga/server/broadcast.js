import { channels } from "../../../shared/constants";
import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../../actions/actionTypes";

export function* s_broadcastWatcher() {
  yield takeLatest(actionTypes.S_BROADCAST, s_broadcastSaga);
}

export function* s_broadcastSaga({ clientId, message }) {
  const { ipcRenderer } = window;
  if (ipcRenderer) {
    // Send to electron main process
    ipcRenderer.send(channels.WEBSOCKET_BROADCAST, {
      clientId,
      message
    });
  }
}
