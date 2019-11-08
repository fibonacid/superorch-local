import {all} from "redux-saga/effects";
import {addMessageWatcher} from "./addMessageSaga";
import {execTextWatcher} from "./execTextSaga";
import {textInputWatcher} from "./textInputSaga";

export function* rootSaga(params) {
  yield all([
    addMessageWatcher(params),
    textInputWatcher(params),
    execTextWatcher(params)
  ])
}
