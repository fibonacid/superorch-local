import { actionTypes } from "../../../actions/actionTypes";
import { takeEvery } from "redux-saga/effects";

export function* c_execScCodeRequestWatcher() {
  yield takeEvery(actionTypes.C_EXEC_SC_CODE_REQUEST, c_execScCodeRequestSaga);
}

export function* c_execScCodeRequestSaga(action) {
  console.log("c_execScCodeRequestSaga", action);
}
