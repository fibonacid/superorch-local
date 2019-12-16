import { channels } from "../../../shared/constants";
import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* s_transmitWatcher() {
  yield takeLatest(actionTypes.S_TRANSMIT, s_transmitSaga);
}

export function* s_transmitSaga({ clientId, message }) {
  const { ipcRenderer } = window;

  if (ipcRenderer) {
    // Send to electron main process
    yield ipcRenderer.send(channels.WEBSOCKET_TRANSMIT, {
      clientId,
      message
    });
  }
}
