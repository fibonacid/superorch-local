import {all} from "redux-saga/effects";
import {messageReceivedWatcher} from "./messageReceivedSaga";
import {sendMessageWatcher} from "./sendMessageSaga";

export function* rootSaga(params) {
  yield all([
    sendMessageWatcher(params),
    messageReceivedWatcher()
  ])
}
