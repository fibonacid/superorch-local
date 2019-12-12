import { all } from "redux-saga/effects";
import { b_userLeftWatcher } from "./userLeft";

export function* broadcastSagas() {
  yield all([b_userLeftWatcher()]);
}
