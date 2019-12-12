import { put, select, takeLatest, all } from "redux-saga/effects";
import { actionTypes } from "../../../actions/actionTypes";
import { c_destroyUser } from "../../../actions/client/crudUsers";
import { selectUsers } from "../../../reducers/root";

export function* c_logoutSuccessWatcher() {
  yield takeLatest(actionTypes.C_LOGOUT_SUCCESS, c_logoutSuccessSaga);
}

export function* c_logoutSuccessSaga() {
  console.log("logged out");
  // Get default user id
  const users = yield select(state => selectUsers(state));
  const { myUserId } = yield select(state => state.client);

  // Delete all the user except the default one
  yield all(
    users
      .filter(user => user.id !== myUserId)
      .map(user => put(c_destroyUser(user.id)))
  );
}
