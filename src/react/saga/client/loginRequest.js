import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_loginRequestWatcher() {
  yield takeLatest(actionTypes.C_LOGIN_REQUEST, c_loginRequestSaga);
}

export function* c_loginRequestSaga(action) {
  console.log("c_loginRequestSaga");
}
