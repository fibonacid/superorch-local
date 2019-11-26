import {all} from "redux-saga/effects";
import {sendUsernameWatcher} from "./sendUsername";

export function* rootSaga() {
  console.log('rootSaga');
  yield all([
    sendUsernameWatcher
  ])
}
