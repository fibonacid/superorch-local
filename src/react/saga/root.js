import { all } from "redux-saga/effects";
import { wsOpenWatcher } from "./ws/open";
import { wsMessageWatcher } from "./ws/message";
import { wsGetUserListWatcher } from "./ws/getUserList";
import { wsCreateUserWatcher } from "./ws/createUser";

export function* root() {
  yield all([
    wsOpenWatcher(),
    wsMessageWatcher(),
    wsGetUserListWatcher(),
    wsCreateUserWatcher()
  ]);
}
