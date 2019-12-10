import { all } from "redux-saga/effects";
import { c_messageWatcher } from "./message";
import { c_loginRequestWatcher } from "./loginRequest";
import { c_loginSuccessWatcher } from "./loginSuccess";

export function* clientSagas() {
  yield all([
    c_messageWatcher(),
    c_loginRequestWatcher(),
    c_loginSuccessWatcher()
  ]);
}
