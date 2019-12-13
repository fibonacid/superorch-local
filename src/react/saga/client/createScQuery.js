import { actionTypes } from "../../actions/actionTypes";
import { takeEvery, select, put } from "redux-saga/effects";
import { c_createScQueryRequest } from "../../actions/client/requests/createScQueryRequest";

export function* c_createScQueryWatcher() {
  yield takeEvery(actionTypes.C_CREATE_SC_QUERY, c_createScQuerySaga);
}

export function* c_createScQuerySaga(action) {
  console.log("c_createScQuerySaga", action);
}
