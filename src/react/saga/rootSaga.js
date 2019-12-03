import { all } from "redux-saga/effects";
import { sendUsernameWatcher } from "./sendUsername";
import { receiveMessageWatcher } from "./receiveMessage";
import { sendDocumentWatcher } from "./sendDocument";
import { sendSCLangQueryWatcher } from "./sendSCLangQuery";
import { executeSCLangQueryWatcher } from "./executeSCLangQuery";

export function* rootSaga() {
  yield all([
    executeSCLangQueryWatcher(),
    sendUsernameWatcher(),
    sendDocumentWatcher(),
    sendSCLangQueryWatcher(),
    receiveMessageWatcher()
  ]);
}
