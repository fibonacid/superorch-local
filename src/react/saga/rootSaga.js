import { all } from "redux-saga/effects";
import { receiveMessageWatcher } from "./receiveMessage";
import { sendDocumentWatcher } from "./sendDocument";
import { sendSCLangQueryWatcher } from "./sendSCLangQuery";
import { executeSCLangQueryWatcher } from "./executeSCLangQuery";
import { sendUserUpdateWatcher } from "./sendUserUpdate";
import { userAcceptedWatcher } from "./userAccepted";

export function* rootSaga() {
  yield all([
    userAcceptedWatcher(),
    executeSCLangQueryWatcher(),
    sendUserUpdateWatcher(),
    sendDocumentWatcher(),
    sendSCLangQueryWatcher(),
    receiveMessageWatcher()
  ]);
}
