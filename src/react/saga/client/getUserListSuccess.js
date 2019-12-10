import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { c_replaceUserList } from "../../actions/client/crudUsers";

export function* c_getUserListSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_GET_USER_LIST_SUCCESS,
    c_getUserListSuccessSaga
  );
}

export function* c_getUserListSuccessSaga(action) {
  yield put(c_replaceUserList(action.userList));
}
