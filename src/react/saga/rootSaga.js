import {all, call} from "redux-saga/effects";
import {sendUsernameSaga, sendUsernameWatcher} from "./sendUsername";

export function* rootSaga() {
  yield all([
    sendUsernameWatcher()
  ])
}
