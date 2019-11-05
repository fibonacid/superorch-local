import {actionTypes} from "../actions/actionTypes";
import {takeEvery} from "redux-saga/effects";

export function* addMessageWatcher(params) {
  yield takeEvery(actionTypes.ADD_MESSAGE, addMessageSaga, params);
}

export function* addMessageSaga(params, action) {
  yield action.author = params.username;
  params.socket.send(JSON.stringify(action))
}
