import {all} from "redux-saga/effects";
import {sendUsernameWatcher} from "./sendUsername";
import {receiveMessageWatcher} from "./receiveMessage";
import {pushDocumentWatcher} from "./pushDocument";

export function* rootSaga() {
  yield all([
    sendUsernameWatcher(),
    receiveMessageWatcher(),
    pushDocumentWatcher()
  ])
}
