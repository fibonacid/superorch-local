import { s_messageWatcher } from "./message";

export function* serverSagas() {
  yield all([s_messageWatcher()]);
}
