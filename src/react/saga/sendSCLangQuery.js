import { actionTypes } from "../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* sendSCLangQueryWatcher() {
  yield takeLatest(actionTypes.SEND_SCLANG_QUERY, sendSCLangQuerySaga);
}

export function* sendSCLangQuerySaga(action) {}
