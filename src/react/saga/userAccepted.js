import { put, select, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/actionTypes";
import { selectUserByLocalId, selectUsers } from "../reducers/root";

export function* userAcceptedWatcher(action) {
  yield takeLatest(actionTypes.USER_ACCEPTED, userAcceptedSaga);
}

export function* userAcceptedSaga() {
  // Get username.
  const users = yield select(state => selectUsers(state));
  const user = yield select(state => selectUserByLocalId(state, 0));

  // Send it as a message
  yield put(
    send({
      type: "UPDATE_USER",
      data: user
    })
  );
}
