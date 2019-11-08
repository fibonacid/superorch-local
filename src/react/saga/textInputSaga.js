import {actionTypes} from "../actions/actionTypes";
import {takeEvery} from "redux-saga/effects";

export function* textInputWatcher(params) {
  yield takeEvery(actionTypes.TEXT_INPUT, textInputSaga, params);
}

export function* textInputSaga(params, action) {
  yield action.author = params.username;
  params.socket.send(JSON.stringify(action))
}
