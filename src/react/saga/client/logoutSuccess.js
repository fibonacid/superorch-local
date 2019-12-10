import { put, select, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../../actions/actionTypes";
import { c_destroyUser, c_updateUser } from "../../actions/client/crudUsers";
import { selectUsers } from "../../reducers/root";

export function* c_logoutSuccessWatcher() {
  yield takeLatest(actionTypes.C_LOGOUT_SUCCESS, c_logoutSuccessSaga);
}

export function* c_logoutSuccessSaga(action) {
  console.log("logged out");
  // Get default user id
  const users = yield select(state => selectUsers(state));
  const { myUserId } = yield select(state => state.wsclient);
  // Update default user
  users.forEach(function*(user) {
    if (user.id !== myUserId) {
      yield put(c_destroyUser(user.id));
    }
  });
}
