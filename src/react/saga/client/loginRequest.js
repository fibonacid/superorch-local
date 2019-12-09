import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";

export function* c_loginRequestWatcher() {
  yield takeLatest(actionTypes.C_LOGIN_REQUEST, c_loginRequestSaga);
}

export function* c_loginRequestSaga(action) {
  yield put(send(action));
}
