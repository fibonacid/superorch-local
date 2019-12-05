import { all } from "redux-saga/effects";
import { wsOpenWatcher } from "./wsOpen";

export function* root() {
  yield all([wsOpenWatcher()]);
}
