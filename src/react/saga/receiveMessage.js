import {actionTypes} from "../actions/actionTypes";
import {takeEvery, put} from "redux-saga/effects";
import {populateUserList} from "../actions/usersActions";
import {updateDocument} from "../actions/updateDocument";

/**
 * Every time a connection is opened send your username to the server
 */
export function* receiveMessageWatcher() {
  yield takeEvery(actionTypes.WEBSOCKET_MESSAGE, receiveMessageSaga);
}

export function* receiveMessageSaga(action) {
  const { message } = action.payload;
  let data = JSON.parse(message);

  switch(data.type) {
    case 'USER_LIST':
      yield put(populateUserList(data.users));
      break;
    case 'PULL_DOCUMENT':
      yield put(updateDocument(data.data));
      break;
  }
}
