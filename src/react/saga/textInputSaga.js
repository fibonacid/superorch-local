import {actionTypes} from "../actions/actionTypes";
import {takeEvery, select} from "redux-saga/effects";

export function* textInputWatcher() {
  yield takeEvery(actionTypes.TEXT_INPUT, textInputSaga);
}

export function* textInputSaga(action) {
  const { username } = yield select(state => state.websocket);
}
