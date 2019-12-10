import { all } from "redux-saga/effects";
import { c_messageWatcher } from "./message";
import { c_loginRequestWatcher } from "./loginRequest";
import { c_loginSuccessWatcher } from "./loginSuccess";
import { c_logoutSuccessWatcher } from "./logoutSuccess";
import { c_logoutRequestWatcher } from "./logoutRequest";
import { c_getUserListSuccessWatcher } from "./getUserListSuccess";
import { c_getUserListRequestWatcher } from "./getUserListRequest";

export function* clientSagas() {
  yield all([
    c_messageWatcher(),
    c_loginRequestWatcher(),
    c_loginSuccessWatcher(),
    c_logoutRequestWatcher(),
    c_logoutSuccessWatcher(),
    c_getUserListRequestWatcher(),
    c_getUserListSuccessWatcher()
  ]);
}
