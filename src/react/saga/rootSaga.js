import {all} from "redux-saga/effects";
import {sendUsernameWatcher} from "./sendUsername";
import {receiveMessageWatcher} from "./receiveMessage";

export function* rootSaga() {
  yield all([
    sendUsernameWatcher(),
    receiveMessageWatcher(),
  ])
}
