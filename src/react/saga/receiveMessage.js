import {actionTypes} from "../actions/actionTypes";
import {takeEvery, put} from "redux-saga/effects";
import {populateUserList} from "../actions/usersActions";

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
      yield put(populateUserList(data.users))
    case 'PULL_DOCUMENT':
      console.log('PULL_DOCUMENT');
  }
}
