import { all } from "redux-saga/effects";
import { receiveMessageWatcher } from "./receiveMessage";
import { sendDocumentWatcher } from "./sendDocument";
import { sendSCLangQueryWatcher } from "./sendSCLangQuery";
import { executeSCLangQueryWatcher } from "./executeSCLangQuery";
import { sendUserWatcher } from "./sendUser";
import { sendUserUpdateWatcher } from "./sendUserUpdate";

export function* rootSaga() {
  yield all([
    executeSCLangQueryWatcher(),
    sendUserWatcher(),
    sendUserUpdateWatcher(),
    sendDocumentWatcher(),
    sendSCLangQueryWatcher(),
    receiveMessageWatcher()
  ]);
}
