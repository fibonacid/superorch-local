import { all } from "redux-saga/effects";
import { b_userLeftWatcher } from "./userLeft";
import { b_scQueryCreatedWatcher } from "./scQueryCreated";

export function* broadcastSagas() {
  yield all([b_userLeftWatcher(), b_scQueryCreatedWatcher()]);
}
