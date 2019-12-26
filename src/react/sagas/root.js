import { all } from "redux-saga/effects";
import { openExternalLinkWatcher } from "./openExternalLink";

export function* root() {
  yield all([openExternalLinkWatcher()]);
}
