// A connection is made and the server has stored an id for the client

import { actionTypes } from "../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

// Every time
export function* wsOpenWatcher() {
  yield takeLatest(actionTypes.WS_OPEN, wsOpenSaga);
}

export function* wsOpenSaga() {
  console.log("wsOpenSaga");
}
