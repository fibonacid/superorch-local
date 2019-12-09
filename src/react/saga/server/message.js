import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* s_messageWatcher() {
  yield takeLatest(actionTypes.S_MESSAGE, s_messageSaga);
}

export function* s_messageSaga(action) {
  console.log("s_messageSaga", action);
}
