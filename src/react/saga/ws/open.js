// A connection is made and the server has stored an id for the client

import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put, select } from "redux-saga/effects";
import { wsCreateUser } from "../../actions/ws/createUser";
import { selectUser } from "../../reducers/root";

// Every time
export function* wsOpenWatcher() {
  yield takeLatest(actionTypes.WS_OPEN, wsOpenSaga);
}

export function* wsOpenSaga() {
  // Retrieve default user.
  const { myUserId } = yield select(state => state.base);
  const user = yield select(state => selectUser(state, myUserId));
  // Send it to the server.
  yield put(wsCreateUser(user));
}
