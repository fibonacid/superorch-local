import { all } from "redux-saga/effects";
import { wsOpenWatcher } from "./ws/open";
import { wsMessageWatcher } from "./ws/message";
import { wsGetUserListWatcher } from "./ws/getUserList";
import { wsCreateUserWatcher } from "./ws/createUser";
import { wsUserUpdateWatcher } from "./ws/userUpdate";
import { wsCreateDocumentWatcher } from "./ws/createDocument";
import { wsDocumentUpdateWatcher } from "./ws/documentUpdate";

export function* root() {
  yield all([
    wsOpenWatcher(),
    wsMessageWatcher(),
    wsGetUserListWatcher(),
    wsCreateUserWatcher(),
    wsCreateDocumentWatcher(),
    wsUserUpdateWatcher(),
    wsDocumentUpdateWatcher()
  ]);
}
