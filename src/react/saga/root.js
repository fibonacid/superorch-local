import { all } from "redux-saga/effects";
import { s_messageWatcher } from "./server/message";
import { c_messageWatcher } from "./client/message";

export function* root() {
  yield all([
    // Server
    s_messageWatcher(),
    // Client
    c_messageWatcher()
  ]);
}
