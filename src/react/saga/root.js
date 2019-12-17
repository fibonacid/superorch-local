import { all } from "redux-saga/effects";
import { clientSagas } from "./client";
import { serverSagas } from "./server";
import { broadcastSagas } from "./broadcast";
import { openExternalLinkWatcher } from "./openExternalLink";

export function* root() {
  yield all([
    openExternalLinkWatcher(),
    clientSagas(),
    serverSagas(),
    broadcastSagas()
  ]);
}
