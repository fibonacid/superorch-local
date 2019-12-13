import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_appendScQueryWatcher() {
  yield takeLatest(actionTypes.C_APPEND_SC_QUERY, c_appendScQuerySaga);
}

export function* c_appendScQuerySaga(action) {
  console.log("c_appendScQuerySaga", action);
}
