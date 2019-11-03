import {actionTypes} from "../actions/actionTypes";
import {takeEvery} from "redux-saga/effects";

export function* sendMessageWatcher(params) {

  console.log(`sendMessageWatcher`, params);

  yield takeEvery(actionTypes.SEND_MESSAGE, sendMessageSaga, params);
}

export function* sendMessageSaga(params, action) {
  yield console.log(`sendMessageSaga`,params);
  action.author = params.username;
  params.socket.send(JSON.stringify(action))
}
