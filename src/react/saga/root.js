import { all } from "redux-saga/effects";
import { clientSagas } from "./client";
import { serverSagas } from "./server";

export function* root() {
  yield all([clientSagas(), serverSagas()]);
}
