import { c_messageWatcher } from "./message";
import { c_loginRequestWatcher } from "./loginRequest";

export function* clientSagas() {
  yield all([c_messageWatcher(), c_loginRequestWatcher()]);
}
