import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_createScQueryWatcher() {
  yield takeLatest(actionTypes.C_CREATE_SC_QUERY, c_createScQuerySaga);
}

export function* c_createScQuerySaga(action) {
  console.log("c_createScQuerySaga", action);
}
