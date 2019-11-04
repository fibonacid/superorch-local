import {all} from "redux-saga/effects";
import {addMessageWatcher} from "./addMessageSaga";

export function* rootSaga(params) {
  yield all([
    addMessageWatcher(params)
  ])
}
