import { actionTypes } from "../actions/actionTypes";
import { channels } from "../../shared/constants";
import { takeLatest, call } from "redux-saga/effects";

export function* openExternalLinkWatcher() {
  yield takeLatest(actionTypes.OPEN_EXTERNAL_LINK, openExternalLinkSaga);
}

export function* openExternalLinkSaga(action) {
  const { ipcRenderer } = window;
  // If app runs on electron
  if (ipcRenderer) {
    yield call(ipcRenderer.send, channels.OPEN_EXT_LINK, action.url);
  }
}
