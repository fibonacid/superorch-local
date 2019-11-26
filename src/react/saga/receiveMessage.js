import {actionTypes} from "../actions/actionTypes";
import {takeEvery, select, put} from "redux-saga/effects";

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
      console.log('USER_LIST message');
  }
}
