import {actionTypes} from "../actions/actionTypes";
import {takeEvery, select, put} from "redux-saga/effects";
import {selectUsername} from "../reducers/root";
import {send} from '@giantmachines/redux-websocket';

/**
 * Send a message to
 */
export function* pushDocumentWatcher() {
  yield takeEvery(actionTypes.PUSH_DOCUMENT, pushDocumentSaga);
}

export function* pushDocumentSaga(action) {
  // Send it as a message
  yield put(send({
    type: "PUSH_DOCUMENT",
    data: action.data
  }))
}
