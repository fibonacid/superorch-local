import {actionTypes} from "../actions/actionTypes";
import {takeEvery} from "redux-saga/effects";

export function* execTextWatcher(params) {
  yield takeEvery(actionTypes.EXEC_TEXT, execTextSaga, params);
}

export function* execTextSaga(params, action) {
  yield action.author = params.username;
  params.socket.send(JSON.stringify(action))
}
