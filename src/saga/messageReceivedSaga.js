import {actionTypes} from "../actions/actionTypes";
import {takeEvery} from "redux-saga/effects";

export function * messageReceivedWatcher() {
  yield takeEvery(actionTypes.MESSAGE_RECEIVED, messageReceivedSaga);
}

export function* messageReceivedSaga(action) {
  console.log(action);
}
