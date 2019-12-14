import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../../../actions/actionTypes";

export function* c_getScQueryRequestWatcher() {
  yield takeLatest(actionTypes.C_GET_SC_QUERY_REQUEST, c_getScQueryRequestSaga);
}

export function* c_getScQueryRequestSaga(action) {
  console.log("getScQueryRequestWatcher", action);
}
