import { all } from "redux-saga/effects";
import { wsOpenWatcher } from "./ws/open";
import { wsMessageWatcher } from "./ws/message";

export function* root() {
  yield all([wsOpenWatcher(), wsMessageWatcher()]);
}
