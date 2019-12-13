import { actionTypes } from "../../../actions/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { channels } from "../../../../shared/constants";

export function* c_execScCodeRequestWatcher() {
  yield takeEvery(actionTypes.C_EXEC_SC_CODE_REQUEST, c_execScCodeRequestSaga);
}

export function* c_execScCodeRequestSaga(action) {
  const { ipcRenderer } = window;
  if (ipcRenderer) {
    // Send to electron main process
    ipcRenderer.send(channels.SUPERCOLLIDER_MESSAGE, {
      message: action.scCode
    });
  }
}
