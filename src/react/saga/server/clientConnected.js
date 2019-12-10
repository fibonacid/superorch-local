import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";
import { s_createClient } from "../../actions/server/crudClients";

export function* clientConnectedWatcher() {
  yield takeLatest(actionTypes.S_CLIENT_CONNECTED, clientConnectedSaga);
}

export function* clientConnectedSaga(action) {
  yield put(s_createClient(action.clientId));
}
