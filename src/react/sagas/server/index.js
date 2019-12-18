import { all } from "redux-saga/effects";
import { s_messageWatcher } from "./message";
import { s_transmitWatcher } from "./transmit";
import { s_broadcastWatcher } from "./broadcast";
import { clientDisconnectedWatcher } from "./clientDisconnected";

export function* serverSagas() {
  yield all([
    s_messageWatcher(),
    s_transmitWatcher(),
    s_broadcastWatcher(),
    clientDisconnectedWatcher()
  ]);
}
