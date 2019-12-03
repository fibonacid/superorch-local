import { all } from "redux-saga/effects";
import { sendUsernameWatcher } from "./sendUsername";
import { receiveMessageWatcher } from "./receiveMessage";
import { sendDocumentWatcher } from "./sendDocument";
import { sendSCLangQueryWatcher } from "./sendSCLangQuery";

export function* rootSaga() {
  yield all([
    sendUsernameWatcher(),
    sendDocumentWatcher(),
    sendSCLangQueryWatcher(),
    receiveMessageWatcher()
  ]);
}
