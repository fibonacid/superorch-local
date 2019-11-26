import {actionTypes} from "../actions/actionTypes";
import {takeEvery, select, put} from "redux-saga/effects";
import {selectUsername} from "../reducers/root";
import {send} from '@giantmachines/redux-websocket';

/**
 * Every time a connection is opened send your username to the server
 */
export function* sendUsernameWatcher() {
  yield takeEvery(actionTypes.WEBSOCKET_OPEN, sendUsernameSaga);
}

export function* sendUsernameSaga(action) {
  // Get username.
  const username = yield select(selectUsername);
  // Send it as a message
  yield put(send({
    type: "ADD_USER",
    data: { name: username }
  }))
}
