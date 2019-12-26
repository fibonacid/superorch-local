import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import actions from "../../../actions";

const { replaceUserList } = actions;

export function* c_getUserListSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_GET_USER_LIST_SUCCESS,
    c_getUserListSuccessSaga
  );
}

export function* c_getUserListSuccessSaga(action) {
  yield put(replaceUserList(action.userList));
}
