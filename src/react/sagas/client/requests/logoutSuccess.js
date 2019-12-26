import { put, select, takeLatest, all } from "redux-saga/effects";
import { actionTypes } from "../../../actions/actionTypes";
import actions from "../../../actions";
import { selectUsers } from "../../../reducers/root";

const { destroyUser } = actions;

export function* c_logoutSuccessWatcher() {
  yield takeLatest(actionTypes.C_LOGOUT_SUCCESS, c_logoutSuccessSaga);
}

export function* c_logoutSuccessSaga() {
  console.log("logged out");
  // Get default user id
  const users = yield select(state => selectUsers(state));
  const { myUserId } = yield select(state => state.client.status);

  // Delete all the user except the default one
  yield all(
    users
      .filter(user => user.id !== myUserId)
      .map(user => put(destroyUser(user.id)))
  );
}
