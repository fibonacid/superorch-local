import { all } from "redux-saga/effects";
import { c_updateUserWatcher } from "./updateUser";
import { c_appendDocumentWatcher } from "./appendDocument";
import { c_messageWatcher } from "./message";
import { c_loginRequestWatcher } from "./requests/loginRequest";
import { c_loginSuccessWatcher } from "./requests/loginSuccess";
import { c_logoutSuccessWatcher } from "./requests/logoutSuccess";
import { c_logoutRequestWatcher } from "./requests/logoutRequest";
import { c_getUserListSuccessWatcher } from "./requests/getUserListSuccess";
import { c_getUserListRequestWatcher } from "./requests/getUserListRequest";
import { c_updateUserDataRequestWatcher } from "./requests/updateUserDataRequest";
import { c_createDocumentRequestWatcher } from "./requests/createDocumentRequest";
import { c_updateDocumentDataRequestWatcher } from "./requests/updateDocumentDataRequest";
import { c_updateDocumentWatcher } from "./updateDocument";
import { c_deleteDocumentRequestWatcher } from "./requests/deleteDocumentRequest";

export function* clientSagas() {
  yield all([
    c_appendDocumentWatcher(),
    c_messageWatcher(),
    c_updateUserWatcher(),
    c_updateDocumentWatcher(),
    // Requests
    c_loginRequestWatcher(),
    c_loginSuccessWatcher(),
    c_logoutRequestWatcher(),
    c_logoutSuccessWatcher(),
    c_getUserListRequestWatcher(),
    c_getUserListSuccessWatcher(),
    c_updateUserDataRequestWatcher(),
    c_createDocumentRequestWatcher(),
    c_updateDocumentDataRequestWatcher(),
    c_updateDocumentDataSuccessWatcher()
  ]);
}
