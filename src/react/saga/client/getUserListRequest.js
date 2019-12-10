import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_getUserListRequestWatcher() {
  yield takeLatest(
    actionTypes.C_GET_USER_LIST_REQUEST,
    c_getUserListRequestSaga
  );
}

export function* c_getUserListRequestSaga(action) {}
