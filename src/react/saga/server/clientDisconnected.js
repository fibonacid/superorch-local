import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, select, put } from "redux-saga/effects";
import { s_deleteClient } from "../../actions/server/crudClients";
import { selectUser, selectClient } from "../../reducers/root";
import { s_broadcast } from "../../actions/server/broadcast";
import { b_userLeft } from "../../actions/broadcast/userLeft";

export function* clientDisconnectedWatcher() {
  yield takeLatest(actionTypes.S_CLIENT_DISCONNECTED, clientDisconnectedSaga);
}

export function* clientDisconnectedSaga(action) {
  // Get associated user
  const client = yield select(state => selectClient(state, action.clientId));
  const user = yield select(state => selectUser(state, client.userId));

  // If user exists:
  if (user) {
    // Broadcast a user left action
    yield put(s_broadcast(action.clientId, b_userLeft(user.id)));
  }

  // Delete client record in the store
  yield put(s_deleteClient(action.clientId));
}
