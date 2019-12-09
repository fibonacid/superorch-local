import { c_messageWatcher } from "./message";

export function* clientSagas() {
  yield all([c_messageWatcher()]);
}
