import { all } from "redux-saga/effects";
import { clientSagas } from "./client";
import { serverSagas } from "./server";
import { broadcastSagas } from "./broadcast";

export function* root() {
  yield all([clientSagas(), serverSagas(), broadcastSagas()]);
}
