import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { select } from "redux-saga/effects";
import { c_updateUserDataRequest } from "../../actions/client/requests/updateUserDataRequest";

export function* c_updateUserWatcher() {
  yield takeLatest(actionTypes.C_UPDATE_USER, c_updateUserSaga);
}

export function* c_updateUserSaga(action) {
  const { myUserId, isLoggedIn } = yield select(state => state.wsclient);
  // if client is logged in and the user update involves the default user:
  if (isLoggedIn && action.userId === myUserId) {
    yield put(c_updateUserDataRequest(action.userData));
  }
}
