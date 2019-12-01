import {put, takeEvery} from "redux-saga/effects";
import {actionTypes} from "../actions/actionTypes";
import {send} from '@giantmachines/redux-websocket';

export function* sendDocumentWatcher() {
  yield takeEvery(actionTypes.SEND_DOCUMENT, sendDocumentSaga);
}

export function* sendDocumentSaga(action) {
  // Send it as a message
  yield put(send({
    type: "PUSH_DOCUMENT",
    data: {
      state: action.data
    }
  }))
}
