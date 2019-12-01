import {all} from "redux-saga/effects";
import {sendUsernameWatcher} from "./sendUsername";
import {receiveMessageWatcher} from "./receiveMessage";
import {sendDocumentWatcher} from "./sendDocument";

export function* rootSaga() {
  yield all([
    sendUsernameWatcher(),
    sendDocumentWatcher(),
    receiveMessageWatcher()
  ])
}
