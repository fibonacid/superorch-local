import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_getUserListSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_GET_USER_LIST_SUCCESS,
    c_getUserListSuccessSaga
  );
}

export function* c_getUserListSuccessSaga(action) {}
